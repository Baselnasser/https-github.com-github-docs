---
title: Disaster recovery for GitHub Codespaces
intro: この記事では、大規模な自然災害や広範囲にわたるサービスの中断により、地域全体で障害が発生した場合のシステム災害復旧シナリオのガイダンスについて説明します。
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
shortTitle: Disaster recovery
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
---

当社は、ユーザが {% data variables.product.prodname_github_codespaces %} をいつでも確実にご利用いただけるよう努力しています。 しかし、当社の管理できる範囲を超えてサービスに影響を及ぼし、計画外のサービスの中断を引き起こす不可抗力が発生する可能性があります。

システム災害復旧シナリオはまれにしか発生しませんが、リージョン全体にわたる停止が発生する可能性に備えておくことをお勧めします。 リージョン全体でサービスが中断した場合、ローカルで冗長化されたデータのコピーは一時的に利用できなくなります。

次のガイダンスでは、codespace がデプロイされているリージョン全体へのサービスの中断を処理する方法を説明します。

{% note %}

**注釈:** リモートリポジトリに頻繁にプッシュすることで、サービス全体の停止による潜在的な影響を減らすことができます。

{% endnote %}

## Option 1: Create a new codespace in another region

In the case of a regional outage, we suggest you recreate your codespace in an unaffected region to continue working. この新しい codespace には、{% data variables.product.prodname_dotcom %} への最後のプッシュ時点までのすべての変更が含まれます。 For information on manually setting another region, see "[Setting your default region for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."

You can optimize recovery time by configuring a `devcontainer.json` in the project's repository, which allows you to define the tools, runtimes, frameworks, editor settings, extensions, and other configuration necessary to restore the development environment automatically. 詳しい情報については「[開発コンテナの紹介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。

## オプション 2: リカバリを待つ

この場合、ユーザ側でのアクションは必要ありません。 当社がサービスの可用性をリストアするために作業を行います。

You can check the current service status on the [Status Dashboard](https://www.githubstatus.com/).

## オプション 3: リポジトリをローカルでクローンする、またはブラウザで編集する

{% data variables.product.prodname_codespaces %} では事前構成された開発者環境を利用できるメリットがありますが、ソースコードは常に {% data variables.product.prodname_dotcom_the_website %} でホストされているリポジトリからアクセス可能である必要があります。 {% data variables.product.prodname_codespaces %} が停止した場合でも、リポジトリをローカルでクローンしたり、{% data variables.product.company_short %} ブラウザエディタでファイルを編集したりすることができます。 詳しい情報については「[ファイルの編集](/repositories/working-with-files/managing-files/editing-files)」を参照してください。

このオプションでは開発環境を設定しませんが、サービスの中断が解決するのを待つ間、必要に応じてソースコードを変更できます。

## オプション 4: ローカルのコンテナ化された環境にリモートコンテナとDockerを使用する

If your repository has a `devcontainer.json`, consider using the [Remote-Containers extension](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) in {% data variables.product.prodname_vscode %} to build and attach to a local development container for your repository. このオプションのセットアップ時間は、ローカル仕様と開発コンテナセットアップの複雑さによって異なります。

{% note %}

**注釈:** このオプションを試す前に、ローカル設定が[最小要件](https://code.visualstudio.com/docs/remote/containers#_system-requirements)を満たしていることを確認してください。

{% endnote %}
