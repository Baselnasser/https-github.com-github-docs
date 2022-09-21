---
title: 缓存依赖项以加快工作流程
shortTitle: Caching dependencies
intro: 为了使工作流程更快、更高效，可以为依赖项及其他经常重复使用的文件创建和使用缓存。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 558d5f186ce75d9ace6f6c6be63e2e3eaeff3230
ms.sourcegitcommit: b0323777cfe4324a09552d0ea268d1afacc3da37
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/17/2022
ms.locfileid: '147580669'
---
## <a name="about-caching-workflow-dependencies"></a>关于缓存工作流程依赖项

工作流程运行通常在不同运行之间重新使用相同的输出或下载的依赖项。 例如，Maven、Gradle、npm 和 Yarn 等软件包和依赖项管理工具都会对下载的依赖项保留本地缓存。

{% data variables.product.prodname_dotcom %} 托管的运行器上的 {% ifversion fpt or ghec %} 作业在干净的运行器映像中启动，每次都必须下载依赖项，导致网络利用率提高、运行时间延长和成本增加。 {% endif %}为帮助加快重新创建依赖项等文件，{% data variables.product.prodname_dotcom %} 可以缓存你在工作流中经常使用的文件。

要缓存作业的依赖项，可以使用 {% data variables.product.prodname_dotcom %} 的 [`cache` 操作](https://github.com/actions/cache)。 该操作创建和还原由唯一键标识的缓存。 或者，如果要缓存下列包管理器，则使用其各自的 setup-* 操作需要最小配置并将为你创建和还原依赖项缓存。

| 包管理器 | 用于缓存的 setup-* 操作 |
|---|---|
| npm、Yarn、pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip、pipenv、Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle、Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

警告：{% ifversion fpt or ghec %}将缓存与 {% data variables.product.prodname_actions %} 结合使用时，请注意以下几点：

* {% endif %}建议不要在缓存中存储任何敏感信息。 例如，敏感信息可以包括存储在缓存路径的文件中的访问令牌或登录凭据。 此外，命令行接口 (CLI) 程序（例如 `docker login`）可以将访问凭据保存在配置文件中。 具有读取访问权限的任何人都可以在存储库上创建拉取请求并访问缓存的内容。 仓库的复刻也可在基本分支上创建拉取请求，并在基本分支上访问缓存。
{%- ifversion fpt or ghec %}
* 使用自托管运行器时，工作流运行中的缓存存储在 {% data variables.product.company_short %} 拥有的云存储上。 客户拥有的存储解决方案仅适用于 {% data variables.product.prodname_ghe_server %}。
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

有关工作流运行工件的详细信息，请参阅“[使用工件持久保存工作流数据](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

## <a name="restrictions-for-accessing-a-cache"></a>访问缓存的限制

工作流可以访问和还原当前分支、基础分支（包括复刻的存储库的基本分支）或默认分支（通常是 `main`）中创建的缓存。 例如，在默认分支上创建的缓存可从任何拉取请求访问。 此外，如果分支 `feature-b` 具有基础分支 `feature-a`，则在 `feature-b` 上触发的工作流将有权访问在默认分支 (`main`)、`feature-a` 和 `feature-b` 中创建的缓存。

访问限制通过在不同分支之间创建逻辑边界来提供缓存隔离和安全。 例如，针对分支 `feature-c`（具有基础 `main`）的拉取请求无法访问为分支 `feature-a`（具有基础 `main`）创建的缓存。

仓库中的多个工作流程共享缓存条目。 可以从同一仓库和分支的另一个工作流程访问和恢复为工作流程中的分支创建的缓存。

## <a name="using-the-cache-action"></a>使用 `cache` 操作

此 [`cache` 操作](https://github.com/actions/cache)将尝试根据你提供 `key` 的还原缓存。 当操作找到缓存时，该操作会将缓存的文件还原到你配置的 `path`。

如果没有精确匹配，该操作在作业成功完成时会自动创建一个新缓存。 新缓存将使用你提供的 `key`，并包含你在 `path` 中指定的文件。

可以选择提供在 `key` 与现有缓存不匹配时要使用的 `restore-keys` 列表。 从另一个分支还原缓存时，`restore-keys` 列表非常有用，因为 `restore-keys` 可以部分匹配缓存密钥。 有关匹配 `restore-keys` 的详细信息，请参阅“[匹配缓存密钥](#matching-a-cache-key)”。

### <a name="input-parameters-for-the-cache-action"></a>`cache` 操作的输入参数

- `key`：必要。保存缓存时创建的密钥和用于搜索缓存的密钥。 它可以是变量、上下文值、静态字符串和函数的任何组合。 密钥最大长度为 512 个字符，密钥长度超过最大长度将导致操作失败。
- `path`：必要。运行器上用于缓存或还原的路径。
  - 可以指定单个路径，也可以在单独的行上添加多个路径。 例如：

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - 可以指定目录或单个文件，并且支持 glob 模式。
  - 可以指定绝对路径或相对于工作区目录的路径。
- `restore-keys`：可选。包含备用还原键的字符串，每个还原键均放置在一个新行上。 如果 `key` 没有发生缓存命中，则按照提供的顺序依次使用这些还原键来查找和还原缓存。 例如：

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### <a name="output-parameters-for-the-cache-action"></a>`cache` 操作的输出参数

- `cache-hit`：表示找到了键的精确匹配项的布尔值。

### <a name="example-using-the-cache-action"></a>使用 `cache` 操作的示例

此示例在 `package-lock.json` 文件中的包更改时，或运行器的操作系统更改时，创建一个新的缓存。 缓存键使用上下文和表达式生成一个键值，其中包括运行器的操作系统和 `package-lock.json` 文件的 SHA-256 哈希。

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

当 `key` 匹配现有缓存时，被称为缓存命中，并且操作会将缓存的文件还原到 `path` 目录。

当 `key` 不匹配现有缓存时，则被称为缓存失误，在作业成功完成时会自动创建一个新缓存。

发生缓存失误时，该操作还会搜索指定的 `restore-keys` 以查找任何匹配项：

1. 如果提供 `restore-keys`，`cache` 操作将按顺序搜索与 `restore-keys` 列表匹配的任何缓存。
   - 当存在精确匹配时，该操作会将缓存中的文件还原到 `path` 目录。
   - 如果没有精确匹配，操作将会搜索恢复键值的部分匹配。 当操作找到部分匹配时，最近的缓存将还原到 `path` 目录。
1. `cache` 操作完成，作业中的下一个步骤运行。
1. 如果作业成功完成，则操作将自动创建一个包含 `path` 目录内容的新缓存。

有关缓存匹配过程的更详细说明，请参阅“[匹配缓存键](#matching-a-cache-key)”。 创建缓存后，无法更改现有缓存的内容，但可以使用新键创建新缓存。

### <a name="using-contexts-to-create-cache-keys"></a>使用上下文创建缓存键

缓存键可以包括 {% data variables.product.prodname_actions %} 支持的任何上下文、函数、文本和运算符。 有关详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”和“[表达式](/actions/learn-github-actions/expressions)”。

使用表达式创建 `key` 使你能够在依赖项更改时自动创建新缓存。

例如，可以使用可计算 npm `package-lock.json` 文件的哈希的表达式创建 `key`。 因此，当构成 `package-lock.json` 文件的依赖项更改时，缓存键会更改，并自动创建新缓存。

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} 计算表达式 `hash "package-lock.json"` 以派生最终的 `key`。

```yaml
npm-d5ea0750
```

### <a name="using-the-output-of-the-cache-action"></a>使用 `cache` 操作的输出

可以使用 `cache` 操作的输出，以根据发生的是缓存命中还是缓存失误来执行某些操作。 找到指定 `key` 的缓存的精确匹配时，`cache-hit` 输出设置为 `true`。

在上面的示例工作流中，有一个步骤会列出发生缓存失误时节点模块的状态：

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## <a name="matching-a-cache-key"></a>匹配缓存键

`cache` 操作首先在包含工作流运行的分支中搜索 `key` 和 `restore-keys` 的缓存命中。 如果当前分支中没有命中，`cache` 操作将在父分支和上游分支中搜索 `key` 和 `restore-keys`。

通过 `restore-keys`，你可以指定当 `key` 中发生缓存失误时要使用的备用还原键列表。 您可以创建从最具体到最不具体的多个恢复键。 `cache` 操作按顺序搜索 `restore-keys`。 当键不直接匹配时，操作将搜索以恢复键为前缀的键。 如果恢复键值有多个部分匹配项，操作将返回最近创建的缓存。

### <a name="example-using-multiple-restore-keys"></a>使用多个恢复键值的示例

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

运行器将计算表达式，这些表达式解析为以下 `restore-keys`：

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

还原键 `npm-feature-` 与以字符串 `npm-feature-` 开头的任何键匹配。 例如，`npm-feature-fd3052de` 和 `npm-feature-a9b253ff` 这两个键都与还原键匹配。 将使用创建日期最新的缓存。 此示例中的键值按以下顺序搜索：

1. `npm-feature-d5ea0750` 匹配特定哈希。
1. `npm-feature-` 匹配前缀为 `npm-feature-` 的缓存键。
1. `npm-` 匹配前缀为 `npm-` 的任何键。

#### <a name="example-of-search-priority"></a>搜索优先级示例

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

例如，如果拉取请求包含 `feature` 分支，并以默认分支 (`main`) 为目标，则该操作将按以下顺序搜索 `key` 和 `restore-keys`：

1. `feature` 分支中的键 `npm-feature-d5ea0750`
1. `feature` 分支中的键 `npm-feature-`
1. `feature` 分支中的键 `npm-`
1. `main` 分支中的键 `npm-feature-d5ea0750`
1. `main` 分支中的键 `npm-feature-`
1. `main` 分支中的键 `npm-`

## <a name="usage-limits-and-eviction-policy"></a>使用限制和收回政策

{% data variables.product.prodname_dotcom %} 将删除 7 天内未被访问的任何缓存条目。 可以存储的缓存数没有限制，但存储库中所有缓存的总大小限制{% ifversion actions-cache-policy-apis %}。 默认情况下，每个存储库的限制为 10 GB，但根据企业所有者或存储库管理员设置的策略，此限制可能有所不同。{% else %}为 10 GB。{% endif %} 

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %} 有关更改存储库缓存大小限制的策略的信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)”和“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)”。
{% endif %}

{% ifversion actions-cache-management %}

## <a name="managing-caches"></a>管理缓存

可以使用 {% data variables.product.product_name %} REST API 来管理缓存。 {% ifversion actions-cache-list-delete-apis %}可以使用 API 列出和删除缓存条目，并查看缓存使用情况。{% elsif actions-cache-management %}目前，可以使用 API 查看缓存使用情况，将来的更新中预期会有更多功能。{% endif %}有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 缓存](/rest/actions/cache)”REST API 文档。

你还可以安装 {% data variables.product.prodname_cli %} 扩展来从命令行管理缓存。 有关扩展的详细信息，请参阅[扩展文档](https://github.com/actions/gh-actions-cache#readme)。 有关 {% data variables.product.prodname_cli %} 扩展的详细信息，请参阅“[使用 GitHub CLI 扩展](/github-cli/github-cli/using-github-cli-extensions)”。

{% endif %}
