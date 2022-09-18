---
ms.openlocfilehash: c30f6000486156f1995f0f05ff27fc173b893de5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529273"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>ランナー イメージ</b></th>
    <th style="width:25%"><b>YAML ワークフロー ラベル</b></th>
    <th style="width:40%"><b>メモ</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> または <code>windows-2022</code>
</td>
<td>
<code>windows-latest</code> ラベルは現在、Windows Server 2022 ランナー イメージを使用しています。
</td>
</tr>
<tr>
<td>
Windows Server 2019
</td>
<td>
<code>windows-2019</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 22.04
</td>
<td>
<code>ubuntu-22.04</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> または <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[非推奨]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
<code>ubuntu-20.04</code> または <code>ubuntu-22.04</code> に移行。 詳しくは、<A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">こちらの GitHub のブログ記事</A>をご覧ください。
</td>
</tr>
<tr>
<td>
macOS Monterey 12
</td>
<td>
<code>macos-12</code>
  </td>
</tr>
<tr>
<td>
macOS Big Sur 11
</td>
<td>
<code>macos-latest</code> または <code>macos-11</code>
</td>
<td>
<code>macos-latest</code> ラベルは現在、macOS 11 ランナー イメージを使用しています。
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[非推奨]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
<code>macOS-11</code> または <code>macOS-12</code> に移行。 詳しくは、<A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">こちらの GitHub のブログ記事</A>をご覧ください。
</td>
</tr>
</tbody>
</table>

{% note %}

**注:** `-latest` ランナー イメージは、{% data variables.product.prodname_dotcom %} が提供する最新の安定したイメージであり、オペレーティング システム ベンダーから入手できるオペレーティング システムの最新バージョンではない可能性があります。

{% endnote %}

{% warning %}

<b>注:</b> ベータ版および非推奨のイメージは、"現状のまま"、"保証なし"、"利用可能な状態" で提供され、サービス レベル アグリーメントと保証から除外されます。 ベータ版のイメージは、カスタマー サポートでカバーされない場合があります。

{% endwarning %}
