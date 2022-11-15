---
title: 令牌过期和吊销
intro: '您的令牌可能会过期，也可以由您、您授权的应用程序以及 {% data variables.product.product_name %} 自行吊销。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106995'
---
当令牌过期或被撤销时，它将不再用于对 Git 和 API 请求进行身份验证。 无法还原过期或已吊销的令牌，您或应用程序将需要创建新令牌。

本文介绍了 {% data variables.product.product_name %} 令牌可能被吊销或过期的可能原因。

{% note %}

注意：当 {% data variables.product.pat_generic %} 或 OAuth 令牌过期或撤销时，你可能会在安全日志中看到 `oauth_authorization.destroy` 操作。 有关详细信息，请参阅“[查看安全日志](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)”。

{% endnote %}

## 令牌在到达其到期日期后被吊销

创建 {% data variables.product.pat_generic %} 时，建议为令牌设置过期时间。 到达令牌的到期日期后，令牌将自动吊销。 有关详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% ifversion fpt or ghec %}
## 令牌在推送到公共存储库或公共 Gist 时被吊销

如果将有效的 OAuth 令牌、{% data variables.product.prodname_github_app %} 令牌或 {% data variables.product.pat_generic %} 推送到公共存储库或公共 gist，则该令牌将自动吊销。 

{% endif %}

{% ifversion fpt or ghec %}
## 令牌因未使用而过期

当 OAuth 令牌或 {% data variables.product.pat_generic %} 一年内未使用时，{% data variables.product.product_name %} 会自动将其吊销。
{% endif %}

## 用户吊销令牌

您可以从帐户设置中撤销对 {% data variables.product.prodname_github_app %} 或 {% data variables.product.prodname_oauth_app %} 的授权，这将吊销与应用程序关联的任何令牌。 有关详细信息，请参阅“[查看授权集成](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)”和“[查看授权的应用程序 (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)”。

撤销授权后，与授权关联的任何令牌也将被吊销。 要重新授权应用程序，请按照第三方应用程序或网站上的说明再次连接在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上的帐户。

## {% data variables.product.prodname_oauth_app %} 吊销令牌

{% data variables.product.prodname_oauth_app %} 的所有者可以撤销帐户对其应用程序的授权，这也会吊销与授权关联的任何令牌。 有关撤销 OAuth 应用的授权的详细信息，请参阅“[删除应用授权](/rest/reference/apps#delete-an-app-authorization)”。

{% data variables.product.prodname_oauth_app %} 所有者还可以撤销与授权关联的单个令牌。 有关撤消 OAuth 应用的单个令牌的详细信息，请参阅“[删除应用令牌](/rest/apps/oauth-applications#delete-an-app-token)”。

## 令牌由于具有相同作用域的 {% data variables.product.prodname_oauth_app %} 的令牌过多而被吊销

{% data reusables.apps.oauth-token-limit %}

## 用户令牌因配置 {% data variables.product.prodname_github_app %} 而被吊销

默认情况下，由 {% data variables.product.prodname_github_app %} 创建的用户到服务器令牌将在八小时后过期。 {% data variables.product.prodname_github_apps %} 的所有者可以配置其应用，以便用户到服务器的令牌不会过期。 有关更改 {% data variables.product.prodname_dotcom %} 应用的用户到服务器令牌的行为方式的详细信息，请参阅“[激活应用的可选功能](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)”。
