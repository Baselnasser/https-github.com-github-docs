---
title: エンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成
shortTitle: Provisioning managed users
intro: 新しいユーザーをプロビジョニングし、エンタープライズとチームのメンバーシップを管理するように ID プロバイダーを構成できます。
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3ce59680c100004496e761d2a93adc9e9cae0a22
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881498'
---
## {% data variables.product.prodname_emus %} のプロビジョニングについて

エンタープライズ メンバーのユーザー アカウントを作成、管理、非アクティブ化するには、{% data variables.product.prodname_emus %} のプロビジョニングを構成する必要があります。 {% data variables.product.prodname_emus %} のプロビジョニングを構成すると、ID プロバイダーの {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てられているユーザーは、SCIM を介して {% data variables.product.prodname_dotcom %} の新しいユーザー アカウントとしてプロビジョニングされ、そのユーザーはエンタープライズに追加されます。 

IdP でユーザーの ID に関連付けられている情報を更新すると、IdP によって GitHub.com のユーザーのアカウントが更新されます。 {% data variables.product.prodname_emu_idp_application %} アプリケーションからユーザーの割り当てを解除するか、IdP でユーザーのアカウントを非アクティブ化すると、IdP は {% data variables.product.prodname_dotcom %} と通信してセッションを無効にし、メンバーのアカウントを無効にします。 無効になったアカウントの情報は維持され、それらのユーザー名は、短いコードが追加された元のユーザー名のハッシュに変更されます。 ユーザーを {% data variables.product.prodname_emu_idp_application %} アプリケーションに再割り当てするか、IdP で自分のアカウントを再アクティブ化すると、{% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_managed_user %} アカウントが再アクティブ化され、ユーザー名が復元されます。

IdP 内のグループを使用して、エンタープライズの組織内のチーム メンバーシップを管理できます。これにより、IdP を使用してリポジトリへのアクセスとアクセス許可を構成できます。 詳細については、「[ID プロバイダー グループを使用したチーム メンバーシップの管理](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)」を参照してください。

## 前提条件

{% data variables.product.prodname_emus %} のプロビジョニングを構成する前に、SAML{% ifversion oidc-for-emu %} または OIDC{% endif %} シングル サインオンを構成する必要があります。 {% ifversion oidc-for-emu %}

- OIDC 構成の詳細については、「[Enterprise マネージド ユーザー用の OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」を参照してください。
- {% endif %}SAML 構成の詳細については、「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。

## 個人用アクセス トークンの作成

{% data variables.product.prodname_emu_enterprise %} のプロビジョニングを構成するには、セットアップ ユーザーに属する **admin:enterprise** スコープを持つ個人用アクセス トークンが必要です。

{% warning %}

**警告:** トークンの有効期限が切れた場合、またはプロビジョニングされたユーザーがトークンを作成すると、SCIM プロビジョニングが予期せず動作しなくなる可能性があります。 セットアップ ユーザーとしてサインインしているときにトークンを作成し、トークンの有効期限が [有効期限なし] に設定されていることを確認します。

{% endwarning %}

1. ユーザー名 **@<em>SHORT-CODE</em>_admin** を使用して、新しいエンタープライズのセットアップ ユーザーとして {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. **[メモ]** で、トークンにわかりやすい名前を付けます。
   ![トークンの名前を示すスクリーンショット](/assets/images/help/enterprises/emu-pat-name.png)
1. **[有効期限]** ドロップダウン メニューを選択し、 **[有効期限なし]** をクリックします。
   ![トークンの有効期限が [有効期限なし] に設定されているスクリーンショット](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. **[admin:enterprise]** スコープを選択します。
   ![[admin:enterprise] スコープを示すスクリーンショット](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. **[トークンの生成]** をクリックします。
   ![[トークンの生成] ボタン](/assets/images/help/settings/generate_token.png)
1. トークンをクリップボードにコピーするには、{% octicon "paste" aria-label="The copy icon" %} をクリックします。
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens.png)
2. 後で使用するためにトークンを保存するには、パスワード マネージャーに新しいトークンを安全に格納します。

## {% data variables.product.prodname_emus %} のプロビジョニングの構成

個人用アクセス トークンを作成して安全に格納した後、ID プロバイダーでプロビジョニングを構成できます。 

{% data reusables.scim.emu-scim-rate-limit %}

プロビジョニングを構成するには、次の表にある該当リンクに従います。

| ID プロバイダー | SSO メソッド | その他の情報 | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | Azure AD ドキュメントの「[チュートリアル: GitHub Enterprise Managed User (OIDC) を構成し、自動ユーザー プロビジョニングに対応させる](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial)」 |{% endif %} | Azure AD | SAML | Azure AD ドキュメントの「[チュートリアル: GitHub Enterprise Managed User を構成し、自動ユーザー プロビジョニングに対応させる](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial)」 | | Okta | SAML | [Enterprise Managed Users と Okta に合わせて SCIM プロビジョニングを構成する](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |
