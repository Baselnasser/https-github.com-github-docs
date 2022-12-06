---
title: 为 GitHub Codespaces 管理存储库和组织的加密机密
shortTitle: Encrypted secrets
intro: '加密机密允许你将敏感信息存储在你的组织、仓库或 {% data variables.product.prodname_github_codespaces %} 中。'
permissions: 'To manage secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
ms.openlocfilehash: 817ed72e76ddd13846dd9db78f992a1c5dcda101
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158619'
---
## 关于机密

密钥是您在组织或仓库中创建的加密环境变量。 你创建的机密可用于 {% data variables.product.prodname_github_codespaces %}。 GitHub 在机密提交到 GitHub 之前使用 [libsodium 密封盒](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)对其加密，并且仅当需要在 codespace 中使用它们时才对其解密。

组织级密钥允许在多个仓库之间共享密钥，从而减少创建重复密钥的需要。 您可以使用访问策略来控制哪些仓库可以使用组织密钥。 

{% data reusables.codespaces.secrets-on-start %}

### 命名密钥

{% data reusables.codespaces.secrets-naming %} 例如，在仓库级别创建的密钥必须在该仓库中具有唯一的名称， 而在组织级创建的密钥必须在该级别有独特的名称。

  {% data reusables.codespaces.secret-precedence %}

### 密码的限制

每个组织最多可存储 100 个密钥，每个仓库最多可存储 100 个密钥。

密码大小限于 64 KB。

## 为仓库添加密钥

要为组织仓库创建密码，您必须具有管理员访问权限。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.codespaces.sidebar-secret %}

2. 在页面顶部，单击“新建存储库机密”。
3. 在“名称”输入框中键入机密名称。
4. 输入密码的值。
5. 单击“添加机密”。

## 为组织添加密钥

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

2. 在页面顶部，单击“新建组织机密”。
3. 在“名称”输入框中键入机密名称。
4. 输入“机密”的值。
5. 从“存储库访问”下拉列表中，选择访问策略。
    ![已选定专用存储库的存储库访问列表](/assets/images/help/codespaces/secret-repository-access.png)
6. 单击“添加机密”。

## 审查对组织级别密码的访问权限

您可以检查哪些访问策略应用于组织中的密钥。

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

1. 密码列表包括任何已配置的权限和策略。 例如：![机密列表](/assets/images/help/settings/actions-org-secrets-list.png)
1. 若要详细了解已为每个机密配置的权限，请单击“更新”。

## 延伸阅读

- [管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
