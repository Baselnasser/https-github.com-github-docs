---
title: GitHub 应用的速率限制
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
ms.contentlocale: zh-CN
ms.lasthandoff: 07/12/2022
ms.locfileid: '147081126'
---
{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## <a name="about-rate-limits-for-apps"></a>关于应用程序的速率限制

{% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 的速率限制取决于安装应用程序的组织的计划。 有关详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products)”和“[{% data variables.product.company_short %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)”。

{% endif %}

## <a name="server-to-server-requests"></a>服务器到服务器请求

{% ifversion ghec or fpt %}

### <a name="default-server-to-server-rate-limits-for--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %} 的默认服务器到服务器速率限制

{% endif %}

发出服务器-服务器请求的 {% data variables.product.prodname_github_apps %} 使用安装的最低速率限制为每小时 5,000 个请求。 如果应用程序安装在具有 20 个以上用户的组织中，则该应用程序每小时为每个用户再接收 50 个请求。 具有 20 个以上仓库的安装每小时会为每个仓库再接收 50 个请求。 安装的最大速率限制为每小时 12,500 个请求。

{% ifversion fpt or ghec %}

### <a name="server-to-server-rate-limits-for--data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %} 的服务器到服务器速率限制

{% endif %}

{% ifversion fpt or ghec %}

安装在 {% data variables.product.product_location %} 上企业内的组织或存储库上的 {% data variables.product.prodname_github_apps %} 每小时有 15,000 个请求的限制。

{% endif %}

## <a name="user-to-server-requests"></a>用户到服务器请求

{% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 还可以代表用户执行操作，在用户授权应用后发出用户到服务器的请求。 有关详细信息，请参阅“[授权 {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)”和“[授权 {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”。

来自 {% data variables.product.prodname_oauth_apps %} 的用户到服务器请求使用 OAuth 令牌进行身份验证。 来自 {% data variables.product.prodname_github_apps %} 的用户到服务器请求使用 OAuth 令牌或即将过期的用户访问令牌进行身份验证。 有关详细信息，请参阅“[为 {% data variables.product.prodname_github_apps %} 识别和授权用户](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)”和“[授权 {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)”。

{% ifversion fpt or ghec %}

### <a name="default-user-to-server-rate-limits-for--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %} 的默认用户到服务器速率限制

{% endif %}

{% ifversion ghec %}

{% data variables.product.prodname_github_apps %} 发出的用户到服务器请求的速率限制取决于应用程序的安装位置。 如果应用程序安装在 {% data variables.product.product_location %} 上由企业拥有的组织或存储库上，则速率高于企业外部的安装。

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### <a name="user-to-server-rate-limits-for--data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %} 的用户到服务器速率限制

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## <a name="further-reading"></a>延伸阅读

- REST API 文档中的“[速率限制](/rest/overview/resources-in-the-rest-api#rate-limiting)”
- GraphQL API 文档中的“[资源限制](/graphql/overview/resource-limitations)”
