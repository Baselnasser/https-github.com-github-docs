---
title: Organization のメンバー名表示を管理する
intro: Organization のプライベートリポジトリ内において、Organization のメンバーが、コメント作者のプロフィール名を表示できるよう許可することができます。
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
ms.openlocfilehash: 0a394b40689d95ea37906fef2ddc9b203e2041c3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409428'
---
Organization のオーナーは、Organization 内のメンバー名表示を管理できます。

![コメントに表示されたコメント作者の名前](/assets/images/help/issues/commenter-full-name.png)

Organization の各メンバーは、自分のプロフィール名を設定で選択します。 詳細については、「[プロフィールをパーソナライズする](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)」を参照してください。

{% ifversion profile-name-enterprise-setting %}Enterprise 所有者が Enterprise レベルでポリシーを設定している場合、Organization にこの設定を構成できないことがあります。 詳しくは、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)」を参照してください。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [管理者リポジトリのアクセス許可] の下で、 **[プライベートリポジトリでコメント作成者のプロフィール名を表示することをメンバーに許可する]** を選択または選択解除します。
![プライベートリポジトリ内で、コメント作者のフルネームを表示することをメンバーに許可するためのチェックボックス](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. **[保存]** をクリックします。
