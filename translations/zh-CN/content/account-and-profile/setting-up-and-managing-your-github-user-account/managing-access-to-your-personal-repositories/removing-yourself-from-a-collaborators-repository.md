---
title: 从协作者的仓库中删除您自己
intro: If you no longer want to be a collaborator on someone else's repository, you can remove yourself.
redirect_from:
- /leave-a-collaborative-repo
- /leave-a-repo
- /articles/removing-yourself-from-a-collaborator-s-repo
- /articles/removing-yourself-from-a-collaborator-s-repository
- /articles/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove yourself
ms.openlocfilehash: dc9739d84d1794e3111f3b61e0dfd9a7c4bec11b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145085075"
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. 在边栏的“代码、规划和自动化”部分，单击“{% octicon "repo" aria-label="The repo icon" %} 存储库”。
{% else %}
2. 在左侧边栏中，单击“存储库”。
  ![“存储库”选项卡](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. 在要离开的存储库旁边，单击“离开”。
  ![“离开”按钮](/assets/images/help/repository/repo-leave.png)
4. 仔细阅读警告，然后单击“I understand, leave this repository（我已了解，离开此仓库）”。
  ![警告你将离开的对话框](/assets/images/help/repository/repo-leave-confirmation.png)
