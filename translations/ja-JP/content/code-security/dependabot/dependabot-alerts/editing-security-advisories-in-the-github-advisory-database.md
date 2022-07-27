---
title: GitHub Advisory Databaseのセキュリティアドバイザリの編集
intro: '{% data variables.product.prodname_advisory_database %}で公開されているアドバイザリには、改善を提案できます。'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Advisory Databaseの編集
---

## {% data variables.product.prodname_advisory_database %}内のアドバイザリの編集について
[github.com/advisories](https://github.com/advisories)にある{% data variables.product.prodname_advisory_database %}中のセキュリティアドバイザリは、グローバルなアドバイザリとみなされています。 {% data variables.product.prodname_advisory_database %}中のグローバルなセキュリティアドバイザリには、誰でも改善を提案できます。 追加で影響を受けるエコシステム、重要度、影響を受ける人の説明を含む、いかなる詳細も編集や追加ができます。 {% data variables.product.prodname_security %}のキュレーションチームは提案された改善をレビューし、受理されればそれらを{% data variables.product.prodname_advisory_database %}上に公開します。
{% ifversion fpt or ghec %}
リポジトリレベルのセキュリティアドバイザリを編集できるのは、リポジトリのオーナーと管理者のみです。 For more information, see "[Editing a repository security advisory](/code-security/security-advisories/editing-a-security-advisory)."{% endif %}

## GitHub Advisory Database中のアドバイザリの編集

1. Https://github.com/advisories にアクセスします。
2. コントリビュートしたいセキュリティアドバイザリを選択してください。
3. ページの右側で、**Suggest improvements for this vulnerability（この脆弱性に改善を提案）**をクリックしてください。 ![改善提案リンク](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. コントリビューションフォームで、希望する改善を行ってください。 どのような詳細でも編集あるいは追加できます。
5. アドバイザリの編集を終えたら、**Submit improvements（改善を提案）**をクリックしてください。
6. 改善を提案したら、その変更を含むPull Requestが{% data variables.product.prodname_security %}キュレーションチームによって[github/advisory-database](https://github.com/github/advisory-database)内にレビューのために作成されます。 そのアドバイザリの発生元が{% data variables.product.prodname_dotcom %}リポジトリなら、オプションのコメントのためにオリジナルの公開者をタグ付けします。 あなたはこのPull Requestを見ることができ、このPull Requestが更新されるかクローズされると通知を受けます。

[github/advisory-database](https://github.com/github/advisory-database)リポジトリ中のアドバイザリファイルに対して直接Pull Requestをオープンすることもできます。 詳しい情報については[コントリビューションのガイドライン](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md)を参照してください。

{% ifversion security-advisories-ghes-ghae %}
## Editing advisories from {% data variables.product.product_location %}

If you have {% data variables.product.prodname_github_connect %} enabled for {% data variables.product.product_location %}, you will be able to see advisories by adding `/advisories` to the instance url.

1. Navigate to `https://HOSTNAME/advisories`.
2. コントリビュートしたいセキュリティアドバイザリを選択してください。
3. On the right-hand side of the page, click the **Suggest improvements for this vulnerability on Github.com.** link. A new tab opens with the same security advisory on {% data variables.product.prodname_dotcom_the_website %}. ![改善提案リンク](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Edit the advisory, following steps four through six in "[Editing advisories in the GitHub Advisory Database](#editing-advisories-in-the-github-advisory-database)" above.
{% endif %}
