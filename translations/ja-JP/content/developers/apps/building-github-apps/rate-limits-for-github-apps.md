---
title: Rate limits for GitHub Apps (GitHub アプリのレート制限)
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
ms.openlocfilehash: fd2c9a92c6603a6e64ec17b614f46baf2370c98b
ms.sourcegitcommit: d243bbae4ce3c849695b5bc9221e705ee5a4a64f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/12/2022
ms.locfileid: '147081129'
---
{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## <a name="about-rate-limits-for-apps"></a>アプリのレート制限について

{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} のレート制限は、アプリケーションをインストールする組織のプランによって変わります。 詳細については、「[{% data variables.product.company_short %} の製品](/get-started/learning-about-github/githubs-products)」と「[{% data variables.product.company_short %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)」を参照してください。

{% endif %}

## <a name="server-to-server-requests"></a>サーバーからサーバーへのリクエスト

{% ifversion ghec or fpt %}

### <a name="default-server-to-server-rate-limits-for--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %} の既定のサーバー間レート制限

{% endif %}

{% data variables.product.prodname_github_apps %} がサーバー間要求を発行する際には、インストールの最小レート制限である 1 時間あたり 5,000 要求が使われます。 ユーザー数が 20 人を超える組織にアプリケーションがインストールされている場合、アプリケーションはユーザーごとに 1 時間あたり 50 件の要求を追加で受け取ります。 20以上のリポジトリを持つインストールでは、リポジトリごとにⅠ時間あたり50リクエストが追加されます。 インストールに対する最大のレート制限は、Ⅰ時間あたり12,500リクエストです。

{% ifversion fpt or ghec %}

### <a name="server-to-server-rate-limits-for--data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}のサーバー間レート制限

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.product_location %} 上のエンタープライズ内の組織またはリポジトリにインストールされた {% data variables.product.prodname_github_apps %} には、1 時間あたり 15,000 件の要求という制限があります。

{% endif %}

## <a name="user-to-server-requests"></a>ユーザからサーバーへのリクエスト

{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} は、ユーザーがアプリを認可した後にユーザーの代理として動作し、ユーザーからサーバーに対して要求を発行することもできます。 詳細については、「[{% data variables.product.prodname_github_apps %} の認可](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)」と「[{% data variables.product.prodname_oauth_apps %} の認可](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)」を参照してください。

{% data variables.product.prodname_oauth_apps %} からのユーザーからサーバーに対する要求は、OAuth トークンを使って認証されます。 {% data variables.product.prodname_github_apps %} からのユーザーからサーバーに対する要求は、OAuth トークンまたは期限切れになるユーザー アクセス トークンを使って認証されます。 詳細については、「[{% data variables.product.prodname_github_apps %} のユーザーの特定と認可](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)」と「[{% data variables.product.prodname_oauth_apps %} の認可](/developers/apps/building-oauth-apps/authorizing-oauth-apps)」を参照してください。

{% ifversion fpt or ghec %}

### <a name="default-user-to-server-rate-limits-for--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %} の既定のユーザーからサーバー間のレート制限

{% endif %}

{% ifversion ghec %}

{% data variables.product.prodname_github_apps %} によるユーザーからサーバーに対する要求のレート制限は、アプリがインストールされている場所によって変わります。 {% data variables.product.product_location %} 上のエンタープライズが所有する組織またはリポジトリにアプリがインストールされた場合、エンタープライズの外部にインストールした場合よりもレートが高くなります。

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### <a name="user-to-server-rate-limits-for--data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %} のユーザーからサーバー間のレート制限

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## <a name="further-reading"></a>参考資料

- REST API ドキュメントの「[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)」
- GraphQL API ドキュメントの「[リソースの制限事項](/graphql/overview/resource-limitations)」
