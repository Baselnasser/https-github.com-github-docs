---
ms.openlocfilehash: b20ef3a51f3bf2b4bfbb89ad078bf221ce838904
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145115573"
---
1. {% data variables.product.prodname_codeql %}データベースを展開し、分析し、その結果を{% data variables.product.product_name %}にアップロードしてください。 結果は、リポジトリの **[セキュリティ]** タブに表示されます。

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. {% data variables.product.prodname_code_scanning %} の結果をプルリクエストのチェックとしてアップロードするには、<nobr>`--ref`</nobr> フラグを使用してプルリクエストを指定します。 [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) Webhook イベントで実行されるように、{% data variables.product.prodname_codeql_runner %} を設定することをお勧めします。

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

{% data variables.product.prodname_code_scanning %} アラートの表示の詳細については、「[Triaging code scanning alerts in pull requests (プルリクエストでのコード スキャン アラートのトリアージ)](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)」および「[Managing code scanning alerts for your repository (リポジトリのコード スキャン アラートの管理)](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)」を参照してください。
