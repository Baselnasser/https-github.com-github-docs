---
title: 从企业中删除组织
intro: 如果某个组织不应再成为企业的一部分，则可以删除该组织。
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098676'
---
{% warning %}

警告：从企业中删除某个组织时：
- 该组织的计费、身份管理、2FA 要求和其他策略将不再受企业管理。
- 该组织将降级为免费计划。
- 该组织将受我们的标准服务条款的约束。
- 该组织内的任何内部存储库都将转换为私有存储库。

{% endwarning %}

## 从企业中删除组织

{% data reusables.enterprise-accounts.access-enterprise %}
2. 在搜索栏中的“Organizations（组织）”下，开始键入组织的名称，直到该组织显示在搜索结果中。
![组织的搜索字段的屏幕截图](/assets/images/help/enterprises/organization-search.png)
3. 在组织名称的右侧，选择 {% octicon "gear" aria-label="The gear icon" %} 下拉菜单，然后单击“删除组织”。
![搜索结果中组织的屏幕截图](/assets/images/help/enterprises/remove-organization.png)
4. 查看警告，然后单击“删除组织”。
![用于删除组织的警告消息和按钮的屏幕截图](/assets/images/help/enterprises/remove-organization-warning.png)
