---
title: 管理组织中成员名称的显示
intro: 您可以允许组织成员在组织的私有仓库中查看评论作者的个人资料名称。
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409425'
---
组织所有者可管理组织中成员名称的显示。

![评论中显示的评论者个人资料名称](/assets/images/help/issues/commenter-full-name.png)

每个组织成员在自己的设置中选择自己的个人资料名称。 有关详细信息，请参阅“[个性化配置文件](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)”。

{% ifversion profile-name-enterprise-setting %} 如果企业所有者设置了企业级策略，你可能无法为组织配置此设置。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)”。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. 在“管理存储库权限”下，选择或取消选择“允许成员在专用存储库中查看评论作者的个人资料名称”。
![允许成员在专用存储库中查看评论作者全名的复选框](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. 单击“保存” 。
