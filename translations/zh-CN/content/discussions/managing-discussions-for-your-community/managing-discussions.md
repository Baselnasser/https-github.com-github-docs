---
title: 管理讨论
intro: 可以分类、聚焦、转让或删除讨论。
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: 95e806959eef023fd05e91a43f9269c98b5db052
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147786212'
---
## 关于讨论的管理

{% data reusables.discussions.about-discussions %} 有关讨论的详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。

组织所有者可以选择在组织拥有的存储库中创建讨论所需的权限。 同样，若要选择创建组织讨论所需的权限，组织所有者可以更改源存储库中所需的权限。 有关详细信息，请参阅“[管理组织中存储库的讨论创建](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”。

作为讨论维护者，您可以创建社区资源，以鼓励与总体项目目标一致的讨论，并为协作者维护一个友好、开放的论坛。 为协作者制定{% ifversion fpt or ghec %}行为守则或{% endif %}参与指南将有助于促进协作和富有成效的论坛。 有关如何创建社区资源的详细信息，请参阅{% ifversion fpt or ghec %}“[向项目添加行为准则](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)”和{% endif %}“[设置适用于存储库参与者的指南](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)”。

当讨论产生可以解决的想法或漏洞时，您可以从讨论创建新议题。 有关详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)”。

有关如何促进健康讨论的详细信息，请参阅“[缓和评论和对话](/communities/moderating-comments-and-conversations)”。

{% data reusables.discussions.you-can-label-discussions %}

## 必备知识

要管理仓库中的讨论，必须为仓库启用 {% data variables.product.prodname_discussions %}。 有关详细信息，请参阅“[启用或禁用存储库的 {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)”。

若要管理组织中的讨论，必须为组织启用 {% data variables.product.prodname_discussions %}。 有关详细信息，请参阅“[启用或禁用组织的 {% data variables.product.prodname_discussions %}](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)”。

## 更改讨论类别

您可以对讨论进行分类，以帮助社区成员查找相关的讨论。 有关详细信息，请参阅“[管理讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”。

您也可以将讨论移动到另一个类别。 无法将讨论移动到投票类别或从投票类别移出。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中“Category（类别）”的右侧，单击 {% octicon "gear" aria-label="The gear icon" %}。
  ![带有齿轮图标的“类别”](/assets/images/help/discussions/category-in-sidebar.png)
1. 单击一个类别。
  ![“更改类别”下拉菜单](/assets/images/help/discussions/change-category-drop-down.png)

## 固定讨论

可以在存储库或组织讨论列表上固定多达四个重要的讨论。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 在右侧栏中，单击 {% octicon "pin" aria-label="The pin icon" %}“固定讨论”。
  ![讨论的右侧栏中的“固定讨论”](/assets/images/help/discussions/click-pin-discussion.png)
1. （可选）自定义固定讨论的外观。
  ![固定讨论的自定义选项](/assets/images/help/discussions/customize-pinned-discussion.png)
1. 单击“固定讨论”。
  ![固定讨论的自定义选项下的“固定讨论”按钮](/assets/images/help/discussions/click-pin-discussion-button.png)

## 编辑固定的讨论

编辑固定的讨论不会更改讨论的类别。 有关详细信息，请参阅“[管理讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 在右侧栏中，单击 {% octicon "pencil" aria-label="The pencil icon" %}“编辑固定讨论”。
  ![讨论的右侧栏中的“编辑固定讨论”](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. 自定义固定的讨论的外观。
  ![固定讨论的自定义选项](/assets/images/help/discussions/customize-pinned-discussion.png)
1. 单击“固定讨论”。
  ![固定讨论的自定义选项下的“固定讨论”按钮](/assets/images/help/discussions/click-pin-discussion-button.png)

## 取消固定讨论

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 在右侧栏中，单击 {% octicon "pin" aria-label="The pin icon" %}“取消固定讨论”。
  ![讨论的右侧栏中的“取消固定讨论”](/assets/images/help/discussions/click-unpin-discussion.png)
1. 阅读警告，然后单击“取消固定讨论”。
  ![模态中警告下方的“取消固定讨论”按钮](/assets/images/help/discussions/click-unpin-discussion-button.png)

## 转让讨论

要转让讨论，您必须具有在要转让讨论的仓库中创建讨论的权限。 如果要将讨论转让给组织，必须具有在组织的讨论的源存储库中创建讨论的权限。 您只能在同一用户或组织帐户拥有的仓库之间转让讨论。 不能将讨论从专用{% ifversion ghec or ghes %}或内部{% endif %}存储库转移到公共存储库。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 在右侧栏中，单击 {% octicon "arrow-right" aria-label="The right arrow icon" %}“转让讨论”。
  ![讨论的右侧栏中的“转让讨论”](/assets/images/help/discussions/click-transfer-discussion.png)
1. 选择“选择存储库”下拉列表，并单击要将讨论转让到的存储库。 如果要将讨论转让给组织，请选择组织的讨论的源存储库。
  ![“选择存储库”下拉列表、“查找存储库”搜索字段以及列表中的存储库](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. 单击“转让讨论”。
  ![“转让讨论”按钮](/assets/images/help/discussions/click-transfer-discussion-button.png)

## 删除讨论

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 在右侧栏中，单击 {% octicon "trash" aria-label="The trash arrow icon" %}“删除讨论”。
  ![讨论的右侧栏中的“删除讨论”](/assets/images/help/discussions/click-delete-discussion.png)
1. 阅读警告，然后单击“删除此讨论”。
  ![模态中警告下方的“删除此讨论”按钮](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## 基于标签转换议题

您可以将具有相同标签的所有议题批量转换为讨论。 具有此标签的未来议题也将自动转换为您配置的讨论和类别。

1. 在 {% data variables.product.product_location %} 上，导航到存储库的主页，对于组织讨论，导航到源存储库的主页。
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. 在要转换为问题的标签旁边，单击“转换问题”。
1. 选择“选择类别”下拉菜单，然后单击某个类别进行讨论。
1. 单击“我明白，将此问题转化为讨论”。
