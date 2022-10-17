---
title: Issues を無効化する
intro: コントリビューションやバグレポートを受け付けないレポジトリの場合、Issue をオフにしたほうがよいかもしれません。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
  - /github/administering-a-repository/managing-repository-settings/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a706b1431f4f43c9866fb6ef0f01f6d25d6edc46
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881829'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [機能] で、 **[Issue]** チェックボックスをオフにします。
  ![[Issues] チェックボックスをオフ](/assets/images/help/issues/issues_settings_remove_from_repo.png)

将来、再び Issue を有効化することにした場合、それまでに追加された Issue もすべて使用できるようになります。

{% ifversion fpt or ghec %}

{% tip %}

他者による悪用を防ぐため Issues をオフにしたいということであれば、{% data variables.contact.contact_support %} までご連絡ください。
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
