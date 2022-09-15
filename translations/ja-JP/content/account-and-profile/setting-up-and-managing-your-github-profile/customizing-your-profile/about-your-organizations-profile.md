---
title: Organization のプロフィールについて
intro: Organization のプロフィールページは、Organization に関する基本的な情報を表示します。
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Organization's profile
ms.openlocfilehash: d5500e34a9996f8d5cae216972ef0289569d53f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066515'
---
必要に応じて、Organization の説明、場所、Web サイト、メールアドレスを追加し、重要なリポジトリをピン留めすることもできます。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} README.md ファイルを追加することで、Organization のパブリック プロファイルをカスタマイズできます。 詳しくは、「[Organization のプロフィールのカスタマイズ](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)」をご覧ください。{% endif %}

{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} を使用する Organization は、{% data variables.product.product_name %} を使用して Organization のドメインを確認することで、Organization の ID を確認し、Organization のプロフィール ページに "検証済み" バッジを表示できます。 詳しくは、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」をご覧ください。
{% elsif ghec or ghes %} 自分の組織の ID を確認し、組織のプロファイル ページに "検証済み" バッジを表示するには、{% data variables.product.prodname_dotcom %} で組織のドメインを検証することができます。 詳細については、[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)に関する記事を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %} ![Organization プロフィール ページの例](/assets/images/help/organizations/org_profile_with_overview.png) {% else %} ![Organization プロフィール ページの例](/assets/images/help/profile/org_profile.png) {% endif %}

## 参考資料

- "[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
