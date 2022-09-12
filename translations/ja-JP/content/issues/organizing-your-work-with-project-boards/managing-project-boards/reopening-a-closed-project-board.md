---
title: 'クローズした{% data variables.product.prodname_project_v1 %}を再オープンする'
intro: 'クローズした{% data variables.projects.projects_v1_board %}を再オープンし、{% data variables.projects.projects_v1_board %}用に構成されたすべてのワークフロー自動化を再開できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d865d4b61000857c943276c45a9ec02163e9f59b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423309'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}をクローズすると、{% data variables.projects.projects_v1_board %}用に構成されたすべてのワークフロー自動化は既定で一時停止されます。 詳しくは、「[{% data variables.product.prodname_project_v1 %}の終了](/articles/closing-a-project-board)」を参照してください。

{% data variables.projects.projects_v1_board %}を再オープンすると、自動化を "*同期*" するオプションがあります。これにより、ボード用に構成されている自動化設定に従って、ボード上のカードの位置が更新されます。

1. 再オープンする{% data variables.projects.projects_v1_board %}に移動します。
{% data reusables.project-management.click-menu %}
3. {% data variables.projects.projects_v1_board %}の自動化を同期するか、同期せずに{% data variables.projects.projects_v1_board %}を再オープンするかを選びます。
    - {% data variables.projects.projects_v1_board %}を再オープンし、自動化を同期するには、 **[プロジェクトを再オープンして同期する]** をクリックします。
  !["プロジェクトを再びオープンして再同期する" ボタンの選択](/assets/images/help/projects/reopen-and-sync-project.png)
    - {% data variables.projects.projects_v1_board %}を自動化の同期なしで再び開くには、再オープン ドロップダウン メニューで **[再オープンのみ]** をクリックします。 続いて、 **[再オープンのみ]** をクリックします。
  ![クローズ済みプロジェクト ボード再オープン ドロップダウン メニュー](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## 参考資料

- 「[{% data variables.product.prodname_projects_v1 %} の自動化の構成](/articles/configuring-automation-for-project-boards)」
