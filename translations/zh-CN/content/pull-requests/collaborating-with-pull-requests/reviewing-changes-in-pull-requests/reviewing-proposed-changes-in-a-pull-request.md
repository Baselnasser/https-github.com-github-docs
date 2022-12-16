---
title: 审查拉取请求中的建议更改
intro: 在拉取请求中，你可以审查和讨论提交、更改的文件以及基本和比较分支中文件之间的区别（或“差异”）。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: 8ea199ad1dc2f574f8820bde3e0529112645bc23
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158587'
---
## 关于审查拉取请求

您可以在拉取请求中每次审查一个文件的更改。 在拉取请求中审查文件时，可以对特定更改留下单个注释。 在完成审查每个文件后，您可以将该文件标记为已查看。 这会折叠文件，帮助您识别还需要审查的文件。 拉取请求标题中的进度条显示您查看过的文件数。 在按需要审查文件后， 您可以提交包含摘要评论的审查来批准拉取请求或请求额外更改。

{% data reusables.search.requested_reviews_search_tip %}

## 开始审查

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   您可以在此选项卡中更改差异视图的格式，方法是单击 {% octicon "gear" aria-label="The Settings gear" %} 并选择统一视图或拆分视图。 当您查看其他拉取请求的差异时，您所做的选择将适用。

   ![差异视图设置](/assets/images/help/pull_requests/diff-view-settings.png)

   您也可以选择隐藏空白差异。 您所做的选择仅适用于此拉取请求，并在您下次访问此页面时被记住。
{% endif %}
1. （可选）筛选文件以仅显示要查看的文件{% ifversion pr-tree-view %}或使用文件树导航到特定文件{% endif %}。 有关详细信息，请参阅“[筛选拉取请求中的文件](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)”。
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. 完成后，单击“开始审查”。 如果已开始审查，可以单击“添加审查注释”。

   ![开始审查按钮](/assets/images/help/pull_requests/start-a-review-button.png)

提交审查之前，你的行注释为“待处理”状态并且仅对你可见。 您可以在提交审查之前随时编辑待处理的注释。 要取消待处理的审查（包括所有其待处理的注释），请在“对话”选项卡中向下滚动到时间表的末尾，然后单击“取消审查”。

![“取消审查”按钮](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

可使用 [{% data variables.product.prodname_github_codespaces %}](/codespaces/overview) 来测试、运行和查看拉取请求。

1. 在代码空间中打开拉取请求，如“[打开拉取请求](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)”中所述。
1. 在活动栏中，单击“GitHub 拉取请求”视图。 仅当在代码空间中打开拉取请求时，才会显示此视图。

   ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/github-pr-view.png)

1. 若要查看特定文件，请单击侧栏中的“打开文件”图标。

   ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/changes-in-files.png)

1. 若要添审阅注释，请单击行号旁边的 + 图标。 键入审阅注释，然后单击“开始审阅”。

   ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/start-review.png)

1. 添加完审阅注释后，你可以从侧栏中选择提交评论、批准更改或请求更改。

   ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/submit-review.png)

有关在 {% data variables.product.prodname_github_codespaces %} 中查看拉取请求的详细信息，请参阅“[将 {% data variables.product.prodname_github_codespaces %} 用于拉取请求](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)”。

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## 查看依赖项更改

如果拉取请求包含对依赖项的更改，您可以使用清单或锁定文件的依赖项审阅来查看更改的内容，并检查更改是否引入安全漏洞。 有关详细信息，请参阅“[查看拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

{% data reusables.repositories.changed-files %}

1. 在清单或锁定文件标头的右侧，单击 {% octicon "file" aria-label="The rich diff icon" %} 多差异按钮以显示依赖项审查。

   ![多差异按钮](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## 将文件标记为已查看

在完成审查文件后，您可以将文件标记为已查看，该文件将会收起。 如果查看过的文件有更改，将会取消已查看的标记。

{% data reusables.repositories.changed-files %}
2. 在已完成审查的文件的标头右侧，选择“已查看”。

   ![已查看复选框](/assets/images/help/pull_requests/viewed-checkbox.png)

## 提交审查

完成审查拉取请求中需要查看的所有文件后，提交您的审查。

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. 选择您想要留下的审查类型：

   ![具有审查选项的单选按钮](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - 选择“注释”留下一般反馈而不显式批准更改或请求其他更改。
    - 选择“批准”提交反馈并批准合并拉取请求中提议的更改。
    - 选择“请求更改”，提交在拉取请求合并之前必须解决的反馈。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 延伸阅读

- [关于受保护分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
- [按审查状态筛选拉取请求](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)
