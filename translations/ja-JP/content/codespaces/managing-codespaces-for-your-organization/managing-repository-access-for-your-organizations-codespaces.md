---
title: Organization の codespace に対するリポジトリ アクセスを管理する
shortTitle: Repository access
intro: '{% data variables.product.prodname_github_codespaces %} がアクセスできる Organization 内のリポジトリを管理できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: e7e363268d1c7ff95937457e5bf3973e2abd4f8f
ms.sourcegitcommit: 034fc1834824c2b07adf5127de52429296fdbb52
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/28/2022
ms.locfileid: '147431457'
---
{% warning %}

**非推奨の注意**: 以下で説明するアクセスとセキュリティの設定は現在非推奨であり、ここには参考用に記載されています。 他のリポジトリへの拡張アクセスを有効にするには、要求されたアクセス許可を開発コンテナーの定義に追加します。 詳しくは、「[codespace 内の他のリポジトリへのアクセスの管理](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)」をご覧ください。

{% endwarning %}

デフォルト設定では、Codespace は作成されたリポジトリにのみアクセスできます。 Organization が所有するリポジトリのアクセスとセキュリティを有効にすると、そのリポジトリ用に作成された codespace は、Organization が所有する他のすべてのリポジトリの読み取りアクセス権を持つようになり、codespace の作成者にはアクセスのためのアクセス許可があります。 codespace がアクセスできるリポジトリを制限する場合は、codespace が作成されたリポジトリまたは特定のリポジトリのいずれかに制限できます。 信頼するリポジトリに対してのみ、アクセスとセキュリティを有効にしてください。

Organization 内のどのユーザーが {% data variables.product.prodname_github_codespaces %} を使うことができるかを管理するには、「[Organization の GitHub Codespaces を有効にする](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)」をご覧ください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. [Access and security] で、あなたの Organization の設定を選択します。
  ![信頼するリポジトリを管理するラジオボタン](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、あなたの Organization が所有するその他のリポジトリにアクセスを許可する、リポジトリのコードスペースをクリックします。 その他のリポジトリにコードスペースによるアクセスを許可したい、すべてのリポジトリについて同じ手順を繰り返します。
    ![[選択したリポジトリ] ドロップダウン メニュー](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## <a name="further-reading"></a>参考資料

- [codespace のリポジトリ アクセスを管理する](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)
