---
title: 对预生成进行故障排除
shortTitle: Codespaces prebuilds
intro: 可以使用预生成来加快 codespace 的创建速度。 本文提供有关预生成的常见问题的故障排除步骤。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b8c45f9eae6094b78026d055ebea27c3748a8681
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158883'
---
有关 {% data variables.product.prodname_github_codespaces %} 预生成的详细信息，请参阅“[预生成 codespace](/codespaces/prebuilding-your-codespaces)”。

## 检查是否从预生成创建 codespace？

创建 codespace 时，可选择要使用的虚拟机类型。 如果预生成可用于该类型的虚拟机，其旁边会显示“{% octicon "zap" aria-label="The zap icon" %} 预生成就绪”。

![可用计算机类型的列表](/assets/images/help/codespaces/choose-custom-machine-type.png)

如果将 {% data variables.product.prodname_github_codespaces %} 编辑器首选项设置为“{% data variables.product.prodname_vscode %} for Web”，则“设置 codespace”页面将显示“找到预生成 codespace”消息（如果正在使用预生成）。 

![“找到预生成 codespace”消息](/assets/images/help/codespaces/prebuilt-codespace-found.png)

同样，如果编辑器首选项为“{% data variables.product.prodname_vscode_shortname %}”，则在创建新 codespace 时，集成终端将包含“你位于存储库预生成配置定义的预生成 codespace 上”消息。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的默认编辑器](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”。

创建 codespace 后，可以通过在终端中运行以下 {% data variables.product.prodname_cli %} 命令来检查它是否是从预生成创建的：

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

如果 codespace 是使用预生成创建的，则返回 `true`。

或者，如果未安装 {% data variables.product.prodname_cli %} (`gh`)，则可以使用以下命令，该命令返回 `createFromPrebuild`（如果从预生成创建 codespace）： 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## 有时缺少“预生成就绪”标签

你可能会注意到，有时，当从启用预生成的分支创建新 codespace 时，选择计算机类型的对话框中不会显示“{% octicon "zap" aria-label="The zap icon" %} 预生成就绪”标签。 这意味着预生成当前不可用。

默认情况下，每次推送到启用预生成的分支时，预生成都会更新。 如果推送涉及对开发容器配置的更改，则在进行更新时，将从计算机类型列表中删除“{% octicon "zap" aria-label="The zap icon" %} 预生成就绪”标签。 在此期间，仍然可以在没有预生成的情况下创建 codespace。 如果需要，可将预生成设置为仅在对开发容器配置文件进行更改时更新，或仅按自定义计划更新，从而减少预生成不可用于存储库的情况。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。

如果你的分支没有专门为预生成启用，如果它是从启用预生成的分支分出来的，它仍然可以从预生成中受益。 但是，如果分支上的开发容器配置已更改，变得与基础分支上的配置不同，则分支上将不再提供预生成。

检查特定分支是否未显示“{% octicon "zap" aria-label="The zap icon" %} 预生成就绪”标签需要完成以下事项：

* 确认此分支存在预生成配置。 如果你不是存储库管理员，则需要联系其中一个管理员来确认这一点。 
* 确认预生成配置包括你的区域。
* 检查开发容器配置的更改最近是否已推送到启用预生成的分支。 如果是这样，则通常必须等到此推送的预生成工作流运行完成，才能再次使用预生成。
* 如果最近未进行任何配置更改，请转到存储库的“操作”选项卡，单击工作流列表中的“{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} 预生成”，并检查分支的预生成工作流运行是否成功 。 如果工作流的最新运行失败，并且其中一个或多个失败的运行包含对开发容器配置的更改，则关联的分支将没有可用的预生成。 

## 在使用预生成创建的 codespace 中无法访问某些资源

如果预生成配置的 `devcontainer.json` 配置文件指定需要其他存储库的访问权限，则系统会提示存储库管理员在创建或更新预生成配置时授权这些权限。 如果管理员未授予所有请求的权限，则预生成及其创建的 codespace 中可能会出现问题。 即使基于此预生成创建 codespace 的用户在收到提示时授予了所有权限，也是如此。

## 失败的预生成工作流运行故障排除

### 提高 {% data variables.product.prodname_actions %} 支出限制 

预生成是使用 {% data variables.product.prodname_actions %} 创建和更新的。 如果用完了所有 {% data variables.product.prodname_actions %} 分钟数并达到了支出限制，你的预生成工作流将会失败。 如果发生这种情况，可以增加 {% data variables.product.prodname_actions %} 支出限制，以允许工作流运行。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_actions %} 的支出限制](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)”。

### 授予访问权限

如果更新了预生成配置的 `devcontainer.json` 配置文件以指定需要其他存储库的访问权限，并且系统未提示存储库管理员为预生成配置授权这些权限，则预生成工作流可能会失败。 尝试在不进行任何更改的情况下更新预生成配置。 如果单击“更新”显示了授权页面，请检查请求的权限是否合适，如果合适，请授权该请求。 有关详细信息，请参阅“[管理预生成](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)”和“[管理对 codespace 中其他存储库的访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)”。

如果预生成配置的工作流运行失败，则可以在调查时暂时禁用预生成配置。 有关详细信息，请参阅“[管理预生成](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)”。

### 防止使用过时预生成

默认情况下，如果最新的预生成工作流失败，将通过先前使用相同组合的存储库、分支和 `devcontainer.json` 配置文件的预生成来创建新的 codespace。 此行为称为预生成优化。

建议启用预生成优化，因为它有助于确保在最新预生成不可用时仍可快速创建 codespace。 但如果遇到预生成 codespace 落后于分支当前状态的问题，存储库管理员可以禁用预生成优化。 如果禁用预生成优化，则当最新的预生成工作流失败或当前正在运行时，将在没有预生成的情况下创建存储库、分支和 `devcontainer.json` 文件相关组合的 codespace。

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. 在受影响的预生成配置右侧，选择省略号 (…)，然后单击“编辑” 。

   ![预生成列表的屏幕截图，其中突出显示了“编辑”](/assets/images/help/codespaces/edit-prebuild-configuration.png)
1. 滚动到“编辑配置”页底部，然后单击“显示高级选项”。

   ![预生成配置页的屏幕截图，其中突出显示了“显示高级选项”](/assets/images/help/codespaces/show-advanced-options.png)
1. 如果确定要禁用默认设置，请选择“禁用预生成优化”。

   ![高级选项部分和“禁用预生成优化”设置的屏幕截图](/assets/images/help/codespaces/disable-prebuild-optimization.png)
1. 若要保存更改，请单击“更新”。

## 延伸阅读

- [配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [管理预生成](/codespaces/prebuilding-your-codespaces/managing-prebuilds)
