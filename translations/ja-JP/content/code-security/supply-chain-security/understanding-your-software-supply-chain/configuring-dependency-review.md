---
title: 依存関係レビューの構成
intro: 依存関係レビューを使用して、脆弱性がプロジェクトに追加される前に捕捉できます。
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: e7fae5d42e4f7c14098414c28e5b5eb857c39687
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107502'
---
## 依存関係の確認について

{% data reusables.dependency-review.feature-overview %}   

詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」と「[pull request 内の依存関係の変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

## 依存関係レビューの構成について

{% ifversion fpt %}依存関係レビューは、すべての製品のすべてのパブリック リポジトリで使用できます。また、無効にすることはできません。 依存関係レビューは、GitHub Enterprise Cloud を使い、[{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) のライセンスを持つ組織が所有するプライベート リポジトリで利用できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)を参照してください。

{% elsif ghec %}依存関係レビューは、パブリック リポジトリの {% data variables.product.product_name %} に含まれています。 組織が所有するプライベート リポジトリで依存関係レビューを使うには、[{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) のライセンスがあり、依存関係グラフを有効にする必要があります。

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. まだ "{% data variables.product.prodname_GH_advanced_security %}" が有効になっていない場合は、機能の横にある **[Enable]\(有効にする\)** をクリックします。
   ![[Enable]\(有効にする\) ボタンが強調表示された GitHub Advanced Security 機能のスクリーンショット](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

依存関係の確認は、{% data variables.location.product_location %}に対して依存関係グラフが有効になっており、{% data variables.product.prodname_advanced_security %} が組織またはリポジトリで有効になっている場合に使用できます。{% ifversion ghes %}詳細については、「[エンタープライズで {% data variables.product.prodname_GH_advanced_security %} を有効にする](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)」を参照してください。{% endif %}

### 依存関係グラフが有効になっているかどうかを確認する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. [Configure security and analysis features]\(セキュリティと分析機能の構成\) で、依存関係グラフが有効になっているかどうかを確認します。 
1. 依存関係グラフが有効である場合は、"{% data variables.product.prodname_GH_advanced_security %}" の横にある **[Enable]\(有効にする\)** をクリックして、依存関係レビューを含む {% data variables.product.prodname_advanced_security %} を有効にします。 エンタープライズに {% data variables.product.prodname_advanced_security %} に使用できるライセンスがない場合、[有効にする] ボタンは無効です。{% ifversion ghes %}!["コードのセキュリティと分析" 機能のスクリーンショット](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## {% data variables.product.prodname_dependency_review_action %} の構成

{% data reusables.dependency-review.dependency-review-action-beta-note %} {% data reusables.dependency-review.dependency-review-action-overview %}

次の構成オプションを使用できます。

| オプション | 必須 | 使用法 |
|------------------|-------------------------------|--------|
| `fail-on-severity` | オプション | 重大度レベル (`low`、`moderate`、`high`、`critical`) のしきい値を定義します。</br>アクションは、指定した重大度レベル以上の脆弱性を引き起こす pull request で失敗します。 |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | 省略可能 | 許可されているライセンスの一覧が含まれています。 このパラメーターに使用できる値は、API ドキュメントの「[ライセンス](/rest/licenses)」のページで確認できます。</br>このアクションは、list.| と一致しないライセンスを持つ依存関係を導入するプル要求で失敗します。{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` |省略可能な|禁止されているライセンスの一覧が含まれています。 このパラメーターに使用できる値は、API ドキュメントの「[ライセンス](/rest/licenses)」のページで確認できます。</br>アクションは、リストに一致するライセンスを持つ依存関係を導入する pull request で失敗します。|{% endif %}

{% ifversion dependency-review-action-licenses %} {% tip %}

**ヒント:** オプション `allow-licenses` と `deny-licenses` は同時に指定できません。

{% endtip %} {% endif %}

この {% data variables.product.prodname_dependency_review_action %} サンプル ファイルは、これらの構成オプションを使用する方法を示しています。 この例では、アクションに対して、semver リリース番号 (`v2.0.8` など) ではなく、短いバージョン番号 (`v2`) が使われています。 これにより、アクションの最新のマイナー バージョンを使うことができます。

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v2
        with:
          # Possible values: "critical", "high", "moderate", "low" 
          fail-on-severity: critical
{% ifversion dependency-review-action-licenses %}
          # You can only can only include one of these two options: `allow-licenses` and `deny-licences`
          # ([String]). Only allow these licenses (optional)
          # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # allow-licenses: GPL-3.0, BSD-3-Clause, MIT

          # ([String]). Block the pull request on these licenses (optional)
          # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # deny-licenses: LGPL-2.0, BSD-2-Clause
{% endif %}
```

構成オプションの詳細については、「[`dependency-review-action`](https://github.com/actions/dependency-review-action#readme)」を参照してください。
{% endif %}
