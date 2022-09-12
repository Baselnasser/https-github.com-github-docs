---
title: 关于 GitHub Codespaces 预生成
shortTitle: About prebuilds
intro: Codespaces 预生成有助于加快为大型或复杂存储库创建新的 codespace 的速度。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: f08b4a1b691f5eaa55fe9126e1d74feeeff2188e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548102'
---
## 概述

通过预生成 codespace，可提高工作效率并更快地访问 codespace，尤其是当在存储库较大或复杂，并且新的 codespace 需要 2 分钟以上才能启动时。 这是因为在为项目创建 codespace 之前，已下载、安装和应用任何源代码、编辑器扩展、项目依赖项、命令和配置。 将预生成视为 codespace 的“就绪”模板。 

默认情况下，每当将更改推送到存储库时，{% data variables.product.prodname_github_codespaces %} 都会使用 {% data variables.product.prodname_actions %} 自动更新预生成。

当预生成可用于存储库的特定分支、特定开发容器配置文件和你所在的区域时，你会在创建 codespace 时在计算机类型选项列表中看到“{% octicon "zap" aria-label="The zap icon" %} 预生成就绪”标签。 如果仍在创建预生成，你将看到“{% octicon "history" aria-label="The history icon" %}正在进行预生成”标签。 有关详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

![用于选择计算机类型的对话框](/assets/images/help/codespaces/choose-custom-machine-type.png)

## 预生成过程

若要创建预生成，请设置预生成配置。 保存配置时，将运行 {% data variables.product.prodname_actions %} 工作流以创建每个所需的预生成；每个预生成一个工作流。 每当需要更新配置的预生成时，也会运行工作流。 在计划时间间隔、推送到已启用预生成的存储库时或更改开发容器配置时可能会发生这种情况。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。  

运行预生成配置工作流时，{% data variables.product.prodname_dotcom %} 会创建临时 codespace，从而执行直到 `devcontainer.json` 文件中的任何 `onCreateCommand` 和 `updateContentCommand` 命令（含）的设置操作。 在创建预生成期间不会运行任何 `postCreateCommand` 命令。 有关使用这些命令的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的 [`devcontainer.json` 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)。 然后创建并存储生成的容器的快照。

从预生成创建 codespace 时，{% data variables.product.prodname_dotcom %} 从存储下载现有容器快照，并将其部署到全新的虚拟机上，从而完成开发容器配置中指定的剩余命令。 由于已执行许多操作（例如克隆存储库），因此从预生成创建 codespace 可能比在没有预生成的情况下创建 codespace 要快得多。 存储库很大和/或 `onCreateCommand` 命令的运行时间很长时会出现这种情况。

## 关于 {% data variables.product.prodname_codespaces %} 预生成的计费

{% data reusables.codespaces.billing-for-prebuilds-default %} 有关 {% data variables.product.prodname_codespaces %} 存储定价的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。 

{% data reusables.codespaces.billing-for-prebuilds-reducing %} 

使用预生成创建的 codespace 的费用与常规 codespace 相同。

## 关于将更改推送到已启用预生成的分支

默认情况下，每次推送到有预生成配置的分支，都会运行一个 {% data variables.product.prodname_dotcom %} 托管的 Actions 工作流来更新预生成。 预生成工作流有一个并发限制，即，对于一个给定的预生成配置，一次只能运行一个工作流，除非进行的更改影响到相关存储库的开发容器配置。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。 如果运行已在进行中，则最近排队的工作流运行将在当前运行完成后运行。 

将预生成设置为在每次推送时更新，意味着如果存储库中存在非常频繁的推送，预生成更新将至少与运行预生成工作流所需的频率一样频繁。 也就是说，如果工作流运行通常需要一个小时才能完成且运行成功，那么大约每小时会为存储库创建一次预生成，如果分支上有更改开发容器配置的推送，则创建预生成会更频繁。

例如，假设针对有预生成配置的分支连续进行 5 次推送。 在这种情况下：

* 在第一次推送中会启动工作流运行，以更新预生成。
* 如果余下的 4 次推送不会影响开发容器配置，这些工作流运行将以“挂起”状态排队。 
  
  如果余下 4 次推送中的任何一次更改了开发容器配置，服务将不会跳过该推送，并将立即运行预生成创建工作流，运行成功后将相应地更新预生成。 

* 首次运行完成后，将取消第 2、3 和 4 次推送的工作流运行，最后排队的工作流（第 5 次推送）将运行并更新预生成。 
