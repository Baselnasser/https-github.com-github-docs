---
title: 模拟用户
intro: 您可以出于故障排除、取消阻止和其他合法原因而模拟用户并代表用户执行操作。
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '>3.2'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: 8e237c6ace7e7feb4badefcbd863b0974c983732
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098959'
---
## 关于用户模拟

如果需要临时接管用户帐户（例如，在解决用户问题时），或者在用户不可用且需要采取紧急操作时，可以启动模拟会话以代表他们执行操作。

对于每个模拟会话，您需要提供模拟的原因。 会话限制为一小时，您将拥有与被模拟用户相同的访问权限。

在模拟会话期间执行的操作将记录为企业审核日志以及模拟用户的安全日志中的事件。 当模拟会话开始时，被模拟的人员将收到电子邮件通知。 有关详细信息，请参阅“[企业的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”和“[查看安全日志](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)”。

## 模拟用户

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. 在页面左上角，单击“用户信息”。

   ![用户信息](/assets/images/enterprise/stafftools/user-info.png)
5. 在“危险区域”下，单击“以 @username 身份 GitHub”

   ![模拟用户](/assets/images/enterprise/stafftools/impersonate.png)
6. 从下拉列表中选择一个原因。 如果选择“其他”，则需要在“备注”部分提供其他上下文 。 单击“开始模拟”以开始会话。

   ![模拟的原因](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. 当准备好结束模拟会话时，请单击页面顶部的“以用户名的身份返回平凡生活”横幅。

   ![结束模拟](/assets/images/enterprise/stafftools/end-impersonation.png)
