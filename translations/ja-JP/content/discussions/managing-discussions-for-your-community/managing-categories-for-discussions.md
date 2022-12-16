---
title: ディスカッションのカテゴリを管理する
intro: ディスカッションを分類して、コミュニティ メンバーの会話を整理したり、カテゴリごとに形式を選んだりすることができます。
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: e16d25ad2bb72f4aea9b441529cb8e9a7a0fee48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410468'
---
## ディスカッションのカテゴリについて

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

各カテゴリには一意の名前と絵文字の組み合わせが必要で、その目的を示す詳しい説明を付けることができます。 カテゴリは、保守担当者が会話の保管方法を整理するときに役立ち、Q&A またはより自由度の高い会話のカテゴリを区別しやすいようにカスタマイズできます。 {% data reusables.discussions.repository-category-limit %} 詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)」を参照してください。

## デフォルトのカテゴリ

| カテゴリ | 目的 | Format |
| :- | :- | :- |
| 📣 お知らせ | プロジェクトの保守担当者からの更新とニュース | 告知 |
| #️⃣ 全般 | プロジェクトに関連するすべての事柄 | 自由回答形式のディスカッション |
|💡 アイデア | プロジェクトを変更または改善するためのアイデア | 自由回答形式のディスカッション |
| 🗳 アンケート | コミュニティが投票したり議論したりするための複数のオプションを含むアンケート | アンケート |
| 🙏 Q&A | コミュニティが回答する質問 (質問/回答形式) | 質問と回答 |
| 🙌 表示と通知 | プロジェクトに関連する作成物、実験、またはテスト | 自由回答形式のディスカッション |

## カテゴリを作成する

1. {% data variables.product.product_location %} で、カテゴリを作成するリポジトリまたは Organization のメイン ページに移動します。
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. **[新しいカテゴリ]** をクリックします。
  ![リポジトリのディスカッション カテゴリのリストの上にある [新しいカテゴリ] ボタン](/assets/images/help/discussions/click-new-category-button.png)
1. カテゴリの絵文字、タイトル、説明、ディスカッション形式を編集します。 ディスカッション形式の詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)」を参照してください。
  ![新しいカテゴリの絵文字、タイトル、説明、ディスカッション形式](/assets/images/help/discussions/edit-category-details.png)
1. **Create** をクリックしてください。
  ![新しいカテゴリの [作成] ボタン](/assets/images/help/discussions/new-category-click-create-button.png)

## カテゴリを編集する

カテゴリを編集して、カテゴリの絵文字、タイトル、説明、およびディスカッション形式を変更できます。

1. {% data variables.product.product_location %} で、カテゴリを編集するリポジトリまたは Organization のメイン ページに移動します。
{% data reusables.discussions.discussions-tab %}
1. リストのカテゴリの右側にある {% octicon "pencil" aria-label="The pencil icon" %} をクリックします
  ![リポジトリのカテゴリ リストのカテゴリの右側にある [編集] ボタン](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![既存のカテゴリの絵文字、タイトル、説明、ディスカッション形式の編集](/assets/images/help/discussions/edit-existing-category-details.png)
1. **[変更を保存]** をクリックします。
  ![既存のカテゴリの [変更を保存] ボタン](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## カテゴリを削除する

カテゴリを削除すると、{% data variables.product.product_name %} は、削除されたカテゴリのすべてのディスカッションを、選択した既存のカテゴリに移動します。

1. {% data variables.product.product_location %} で、カテゴリを削除するリポジトリまたは Organization のメイン ページに移動します。
{% data reusables.discussions.discussions-tab %}
1. リストのカテゴリの右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします
  ![リポジトリのカテゴリ リストのカテゴリの右側にあるごみ箱ボタン](/assets/images/help/discussions/click-delete-for-category.png)
1. ドロップダウンメニューを使用して、削除するカテゴリのディスカッションの新しいカテゴリを選択します。
  ![既存のカテゴリを削除するときに新しいカテゴリを選択するためのドロップダウン メニュー](/assets/images/help/discussions/choose-new-category.png)
1. **[削除と移動]** をクリックします。
  ![既存のカテゴリを削除するときに新しいカテゴリを選択するためのドロップダウン メニュー](/assets/images/help/discussions/click-delete-and-move-button.png)
