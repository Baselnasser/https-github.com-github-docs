---
title: codespace コンピューターに対して最小仕様を設定する
shortTitle: Set a minimum machine spec
intro: 'リソース不足のコンピューターの種類が、リポジトリの {% data variables.product.prodname_github_codespaces %} に使用されないようにすることができます。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 623b50a9423d855f807e2b480882f1e5eb2c479f
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113858'
---
## 概要

作成する各 codespace は個別の仮想マシンでホストされ、通常はさまざまな種類の仮想マシンから選択できます。 マシンの種類ごとにリソース (プロセッサ コア、メモリ、ストレージ) が異なり、既定では、リソースが最も少ないコンピューターの種類が使用されます。 詳細については、「[codespace に合わせたコンピューターの種類の変更](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)」を参照してください。

プロジェクトで特定のレベルのコンピューティング能力が必要な場合は、それらの要件を満たすコンピューターの種類のみを、既定で使用、またはユーザーが選択できるように、{% data variables.product.prodname_github_codespaces %} を構成することができます。 `devcontainer.json` ファイル内でこれを構成します。

{% note %}

**重要:** 一部のコンピューターの種類へのアクセスは、組織レベルで制限される場合があります。 通常、これは、より高いレートで課金される、よりリソースの多いコンピューターをユーザーが選択することを防ぐために行われます。 リポジトリがコンピューターの種類に関する組織レベルのポリシーの影響を受ける場合は、ユーザーが選択できるコンピューターの種類がなくなるような最小仕様を設定しないようにする必要があります。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

{% endnote %}

## コンピューターの最小仕様の設定

{% data reusables.codespaces.edit-devcontainer-json %}
1. `devcontainer.json` ファイルを編集し、ファイルの最上位レベルにある JSON オブジェクト内に `hostRequirements` プロパティを追加します。 次に例を示します。

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   次のいずれかの、またはすべてのオプションを指定できます: `cpus`、`memory`、`storage`。
   
   リポジトリで現在使用可能な、{% data variables.product.prodname_github_codespaces %} のコンピューターの種類の仕様を確認するには、コンピューターの種類の選択肢が表示されるまで、codespace の作成プロセスをステップ実行します。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。
   
1. ファイルを保存し、リポジトリの必要なブランチに加えた変更をコミットします。

   ここで、リポジトリのそのブランチ用に codespace を作成し、作成設定オプションに進むと、指定したリソースと一致するか、またはそれを超えるコンピューターの種類のみを選択できるようになります。

   ![コンピューターの種類の選択が制限されているダイアログ ボックス](/assets/images/help/codespaces/machine-types-limited-choice.png)

## 参考資料

- "[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
