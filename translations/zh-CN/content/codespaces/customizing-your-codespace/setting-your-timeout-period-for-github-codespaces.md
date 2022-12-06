---
title: 设置 GitHub Codespaces 超时期限
shortTitle: Set the timeout
intro: '可以在个人设置页面中设置 {% data variables.product.prodname_github_codespaces %} 的默认超时。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159442'
---
## 关于空闲超时

代码空间将在一段时间不活动后停止运行。 默认情况下，此时间段为 30 分钟，但你可以在 {% data variables.product.prodname_dotcom %} 上的个人设置中指定更长或更短的默认超时期限。 更新后的设置将应用于你创建的任何新 codespaces，或者在下次启动 codespaces 时应用于现有 codespaces。 还可以在使用 {% data variables.product.prodname_cli %} 创建 codespace 时指定超时。

{% warning %}

警告：在 codespace 处于活动状态期间对 codespaces 计算用量计费。 如果未使用 codespace，但它仍在运行，并且尚未超时，则无论是否正在使用 codespace，你都需按 codespace 处于活动状态的总时间付费。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

{% endwarning %}

### 组织拥有的存储库的超时时段

组织可以为从其部分或所有存储库创建的 codespace 设置最大空闲超时策略。 如果组织策略设置的最大超时时间少于你设置的默认超时时间，将使用组织的超时时间而不是你设置的超时时间。 你将在 codespace 创建后收到此通知。 有关详细信息，请参阅“[限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。

{% webui %}

## 设置默认超时期限

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“默认空闲超时”下，输入所需时间，然后单击“保存”。 时间必须在 5 分钟到 240 分钟（4 小时）之间。
   ![选择超时](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## 设置 codespace 的超时期限

{% data reusables.cli.cli-learn-more %}

若要设置创建代码空间时的超时期限，请将 `idle-timeout` 参数与 `codespace create` 子命令一起使用。 指定以分钟为单位的时间，后跟 `m`。 时间必须在 5 分钟到 240 分钟（4 小时）之间。

```shell
gh codespace create --idle-timeout 90m
```

如果在创建代码空间时未指定超时期限，则将使用默认超时期限。 有关设置默认超时期限的信息，请单击此页面上的“Web browser（Web 浏览器）”选项卡。 您当前无法通过 {% data variables.product.prodname_cli %} 指定默认超时期限。

{% endcli %}

{% vscode %}

## 设置超时期限

可以通过 Web 浏览器在 {% data variables.product.prodname_dotcom_the_website %} 上设置默认超时期限。 或者，如果使用 {% data variables.product.prodname_cli %} 创建 codespace，则可以为该特定 codespace 设置超时期限。 有关详细信息，请单击上面相应的选项卡。

{% endvscode %}
