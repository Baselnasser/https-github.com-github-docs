---
title: 创建有多个作者的提交
intro: '通过在提交消息中添加一个或多个 `Co-authored-by` 尾行，可将提交归属于多个作者。 合作提交在 {% data variables.product.product_name %}{% ifversion ghes or ghae %} 上可见，并且可包含在个人资料贡献图和存储库统计信息中{% endif %}。'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: 4aa5b707e75480ead830e680151064db5f278557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129450'
---
## 必需的合作作者信息

向提交添加合作作者之前，您必须知道用于每个合作作者的适当电子邮件地址。 为使合作作者的提交计为贡献，您必须使用与他们在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户相关联的电子邮件。

{% ifversion fpt or ghec %}

如果用户选择将其电子邮件地址保密，则应使用其 {% data variables.product.product_name %} 提供的 `no-reply` 电子邮件地址来保护其隐私。 否则，合作作者的电子邮件地址将在提交消息中公开。 如果要保持电子邮件地址的私密性，可选择使用 {% data variables.product.product_name %} 为 Git 操作提供的 `no-reply` 电子邮件地址，并要求其他共同作者在提交尾行中列出你的 `no-reply` 电子邮件地址。

有关详细信息，请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”。

  {% tip %}

  提示：通过分享此信息可帮助共同作者找到其首选电子邮件地址：
  - 若要查找 {% data variables.product.product_name %} 提供的 `no-reply` 电子邮件地址，请导航至“将我的电子邮件地址保密”下的电子邮件设置页面。
  - 若要在计算机上查找用于配置 Git 的电子邮件地址，请在命令行上运行 `git config user.email`。

  {% endtip %}

{% endif %}

## 使用 {% data variables.product.prodname_desktop %} 创建合作提交

可以使用 {% data variables.product.prodname_desktop %} 创建合作提交。 有关详细信息，请参阅“[编写提交消息并推送更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)”和 [{% data variables.product.prodname_desktop %}](https://desktop.github.com)。

![添加合作作者到提交消息](/assets/images/help/desktop/co-authors-demo-hq.gif)

## 在命令行上创建合作提交

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. 输入提交消息以及简短、有意义的更改描述。 在提交描述后，不要加上右引号，而是添加两个空行。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **提示：** 如果在命令行上使用文本编辑器来键入提交消息，请确保在提交描述的末尾和 `Co-authored-by:` 提交尾部之间有两个换行符。

  {% endtip %}

3. 在提交消息的下一行，根据每个共同作者的特定信息键入 `Co-authored-by: name <name@example.com>`。 在合作作者的信息后面，添加一个右引号。

  如果要添加多个共同作者，请为每个共同作者键入一个 `Co-authored-by:` 提交尾行。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

在下次推送时，新的提交和消息将显示在 {% data variables.product.product_location %} 上。 有关详细信息，请参阅“[将更改推送到远程存储库](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)”。

## 在 {% data variables.product.product_name %} 上创建合作提交

在 {% data variables.product.product_name %} 上使用 Web 编辑器对文件进行更改后，可通过在提交消息中添加 `Co-authored-by:` 尾行来创建共同创作的提交。

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. 合作进行更改后，在页面底部键入简短、有意义的提交消息，以描述你们所做的更改。
  ![有关更改的提交消息](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. 在提交消息下方的文本框中，根据每个共同作者的特定信息添加 `Co-authored-by: name <name@example.com>`。 如果要添加多个共同作者，请为每个共同作者键入一个 `Co-authored-by:` 提交尾行。

  ![第二个提交消息文本框中的提交消息合作作者尾行示例](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. 单击“提交更改”或“建议更改” 。

新的提交和消息将显示在 {% data variables.product.product_location %} 上。

## 延伸阅读
{% ifversion ghes or ghae %}
- [在个人资料中查看贡献](/articles/viewing-contributions-on-your-profile)
- [为什么我的贡献未显示在我的个人资料上？](/articles/why-are-my-contributions-not-showing-up-on-my-profile){% endif %}
- [查看项目的参与者](/articles/viewing-a-projects-contributors)
- [更改提交消息](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
- {% data variables.product.prodname_desktop %} 文档中的“[提交并审查对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)”
