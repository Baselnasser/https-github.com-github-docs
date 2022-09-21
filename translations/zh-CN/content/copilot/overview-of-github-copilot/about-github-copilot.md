---
title: 关于 GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} 可以通过提供自动完成样式的建议来帮助你编写代码。 可以了解使用 {% data variables.product.prodname_copilot %} 时要考虑的事项，以及 {% data variables.product.prodname_copilot %} 的工作原理。'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 340be078a8af263a477399a3303161864fe2040e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147092964'
---
## 关于 {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} 是一个 AI 配对程序员，可在编写代码时提供自动完成样式的建议。 可以从 {% data variables.product.prodname_copilot %} 接收建议，方法是开始编写要使用的代码，或者编写描述代码要执行的操作的自然语言注释。 {% data variables.product.prodname_copilot %} 会分析你正在编辑的文件以及相关文件中的上下文，并在文本编辑器中提供建议。

{% data variables.product.prodname_copilot %} 经过优化，有助于你编写 Python、JavaScript、TypeScript、Ruby、Go、C# 或 C++。 你还可使用 {% data variables.product.prodname_copilot %} 生成其他语言和各种框架的建议。 {% data variables.product.prodname_copilot %} 由 OpenAI Codex 提供支持，OpenAI Codex 是一个由 OpenAI 创建的新 AI 系统。 

{% data variables.product.prodname_copilot %} 在 Visual Studio Code、Visual Studio、Neovim 和 IDE 的 JetBrains 套件中作为扩展提供。 有关详细信息，请参阅“[{% data variables.product.prodname_copilot %} 入门指南](/copilot/getting-started-with-github-copilot)”。

## 使用 {% data variables.product.prodname_copilot %}

可以看到 {% data variables.product.prodname_copilot %} 的实际示例。 有关详细信息，请参阅 [{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 网站。 

GitHub Copilot 提供的建议来自 OpenAI 使用数十亿行开放源代码构建的模型。 因此，{% data variables.product.prodname_copilot %} 的训练集可能包含不安全的编码模式、bug 或对过时 API 或习惯用语的引用。 当 {% data variables.product.prodname_copilot %} 基于此训练数据生成建议时，这些建议也可能包含不需要的模式。 

你负责确保代码的安全性和质量。 建议你在使用由 {% data variables.product.prodname_copilot %} 生成的代码时采取与使用任何不是你自己编写的代码时相同的预防措施。 这些预防措施包括严格的测试、IP 扫描和安全漏洞跟踪。 {% data variables.product.company_short %} 提供了许多功能来帮助你监视和改进代码质量，例如 {% data variables.product.prodname_actions %}、{% data variables.product.prodname_dependabot %}、{% data variables.product.prodname_codeql %} 和 {% data variables.product.prodname_code_scanning %}。 所有这些功能都可以在公共存储库中免费使用。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)”和“[{% data variables.product.company_short %} 安全功能](/code-security/getting-started/github-security-features)”。

{% data variables.product.prodname_copilot %} 使用筛选器来阻止在提示中出现冒犯性词语，并避免在敏感上下文中生成建议。 我们致力于不断改进筛选系统，以便更智能地检测和删除 {% data variables.product.prodname_copilot %} 生成的冒犯性建议，包括有偏见的、歧视性的或滥用的输出。 如果有看到 {% data variables.product.prodname_copilot %} 生成的冒犯性建议，请直接将建议报告给 copilot-safety@github.com，以便我们改进保护措施。 

## 关于 {% data variables.product.prodname_copilot %} 的计费

{% data variables.product.prodname_copilot %} 是一项付费功能，需要按月或按年订阅。 {% data variables.product.prodname_dotcom %} 上热门的开放源代码项目的经过验证的学生和维护人员有资格免费使用 {% data variables.product.prodname_copilot %}。 如果满足免费订阅 {% data variables.product.prodname_copilot %} 的条件，则在访问 {% data variables.product.prodname_copilot %} 订阅页面时会自动收到通知。 如果不满足免费订阅 {% data variables.product.prodname_copilot %} 的条件，你将获得 60 天的免费试用期，之后需要付费订阅才能继续使用。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_copilot %} 的计费](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)”。

## 关于 JetBrains IDE 中 {% data variables.product.prodname_copilot %} 插件的许可证

{% data variables.product.prodname_dotcom %}, Inc. 是 JetBrains 插件的许可方。 此插件的最终用户许可协议为 [{% data variables.product.prodname_dotcom %} 附加产品和功能条款](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)，且此插件的使用受这些条款的约束。 JetBrains 对插件或此类协议不承担任何责任或义务。 使用插件即代表你同意上述条款。

## 延伸阅读

- [{% data variables.product.company_short %} 附加产品和功能条款](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
