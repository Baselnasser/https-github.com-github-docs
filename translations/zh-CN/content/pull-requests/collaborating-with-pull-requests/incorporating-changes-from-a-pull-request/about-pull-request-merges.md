---
title: 关于拉取请求合并
intro: '您可以通过将所有提交保留在功能分支中、将所有提交压缩到一个提交中，或者将个别提交从“头部分支”变基为“基本”分支，以 [合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% data reusables.pull_requests.default_merge_option %}

## 压缩与合并拉取请求提交

{% data reusables.pull_requests.squash_and_merge_summary %}

### 合并压缩合并的消息

在压缩与合并时，{% data variables.product.prodname_dotcom %} 生成默认提交消息，您可以进行编辑。 默认消息取决于拉取请求中的提交次数，不包括合并提交。

| 提交数  | 摘要                   | 描述                  |
| ---- | -------------------- | ------------------- |
| 一个提交 | 单个提交的提交消息标题，后接拉取请求编号 | 单个提交的提交消息正文         |
| 多个提交 | 拉取请求标题，后接拉取请求编号      | 按日期顺序列出所有被压缩提交的提交消息 |

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7042 %}
对存储库具有管理员访问权限的人员可以将存储库配置为使用拉取请求的标题作为所有压缩提交的默认合并消息。 更多信息请参阅“[配置提交压缩](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)”。
{% endif %}

### 压缩与合并长运行分支

如果计划在合并拉取请求后继续操作[头部分支](/github/getting-started-with-github/github-glossary#head-branch)，建议不要压缩与合并拉取请求。

在创建拉取请求时，{% data variables.product.prodname_dotcom %} 会标识头部分支和[基础分支](/github/getting-started-with-github/github-glossary#base-branch)上的最新提交：共同的提交原型。 在压缩与合并拉取请求时，{% data variables.product.prodname_dotcom %} 会在基础分支上创建提交，其中包含自提交原型以来对头部分支所做的所有更改。

由于此提交仅位于基础分支而不是头部分支上，因此两个分支的共同原型保持不变。 如果您继续使用头部分支，则在两个分支之间创建新的拉取请求，该拉取请求将包含自共同原型以来的所有提交，其中包括你在之前的拉取请求中压缩与合并的提交。 如果没有冲突，您可以安全地合并这些提交。 但是，此工作流会增大合并冲突的可能性。 如果您继续压缩与合并长运行头部分支的拉取请求，则必须反复解决相同的冲突。

## 变基与合并拉取请求提交

{% data reusables.pull_requests.rebase_and_merge_summary %}

在以下情况下，您无法在 {% data variables.product.product_location %} 上自动变基与合并：
- 拉取请求有合并冲突。
- 将提交从基本分支变基为遇到冲突的头部分支。
- 变基提交被视为“不安全”，例如变基可行、不会发生冲突但会产生与合并不同的结果时。

如果您仍然要变基提交，但不能在 {% data variables.product.product_location %} 上自动变基与合并，则您必须：
- 在命令行上以本地方式将主题分支（或头部分支）变基为基本分支
- [解决命令行上的任何冲突](/articles/resolving-a-merge-conflict-using-the-command-line/)。
- 强制推送变基的命令到拉取请求的主题分支（或远端头部分支）。

在仓库中具有写入权限的任何人然后可以使用 {% data variables.product.product_location %} 上的变基与合并按钮[合并更改](/articles/merging-a-pull-request/)。

## 延伸阅读

- "[关于拉取请求](/articles/about-pull-requests/)"
- "[解决合并冲突](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
