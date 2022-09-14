---
title: 在 GitHub Advisory Database 中编辑安全公告
intro: '你可以对 {% data variables.product.prodname_advisory_database %} 中发布的任何公告提交改进建议。'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 062779bfb9a39a651b10501c523047f3ae2805b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409409'
---
## 关于在 {% data variables.product.prodname_advisory_database %} 中编辑公告
位于 [github.com/advisories](https://github.com/advisories) 的 {% data variables.product.prodname_advisory_database %} 中的安全公告被视为全局公告。 任何人都可以对 {% data variables.product.prodname_advisory_database %} 中的任何全局安全公告提出改进建议。 可以编辑或添加任何详细信息，包括其他受影响的生态系统、严重性级别或受影响方的说明。 {% data variables.product.prodname_security %} 策展团队将评审提交的改进，并在接受后将其发布到 {% data variables.product.prodname_advisory_database %} 上。
{% ifversion fpt or ghec %}只有存储库所有者和管理员才能编辑存储库级别的安全公告。 有关详细信息，请参阅“[编辑存储库安全性公告](/code-security/security-advisories/editing-a-security-advisory)”。{% endif %}

## 在 GitHub Advisory Database 中编辑公告

1. 导航到 https://github.com/advisories。
2. 选择要编辑的安全公告。
3. 在页面右侧，单击“此漏洞的建议改进”链接。
   ![建议改进链接](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. 在贡献形式中，进行所需的改进。 可以编辑或添加任何详细信息。
5. 编辑完公告后，单击“提交改进”。
6. 提交改进后，系统将创建包含你的更改的拉取请求，供 {% data variables.product.prodname_security %} 策展团队在 [github/advisory-database](https://github.com/github/advisory-database) 中查看。 如果公告源自 {% data variables.product.prodname_dotcom %} 存储库，我们还会标记原始发布者以便提供可选评论。 可以在拉取请求更新或关闭时查看拉取请求并获取通知。

还可以直接在 [github/advisory-database](https://github.com/github/advisory-database) 存储库中的公告文件上打开拉取请求。 有关详细信息，请参阅[贡献指南](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md)。 

{% ifversion security-advisories-ghes-ghae %}
## 编辑来自 {% data variables.product.product_location %} 的公告

如果已为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_github_connect %}，你将能够通过将 `/advisories` 添加到实例 URL 来查看公告。 

1. 导航到 `https://HOSTNAME/advisories`。
2. 选择要编辑的安全公告。
3. 在页面右侧，单击“在 Github.com 上针对此漏洞提出改进建议”。 链接。 此时会在 {% data variables.product.prodname_dotcom_the_website %} 上打开一个新选项卡，该选项卡具有相同的安全公告。
![建议改进链接](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. 按照上述“[在 GitHub 公告数据库中编辑公告](#editing-advisories-in-the-github-advisory-database)”中的步骤 4 到 6 编辑公告。
{% endif %}
