---
title: Google Cloud Platform で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を Google Cloud Platform にインストールするには、サポートされているマシンタイプにデプロイし、永続的な標準ディスクまたは永続的な SSD を使用する必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: 0fffebece94753365e1b98f014f0514cdef4f98a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116526'
---
## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- Google Compute Engine（GCE）仮想マシン（VM）インスタンスを起動できるGoogle Cloud Platformのアカウントが必要です。 詳細については、[Google Cloud Platform Web サイト](https://cloud.google.com/)と [Google Cloud Platform ドキュメント](https://cloud.google.com/docs/)を参照してください。
- インスタンスの起動に必要なほとんどのアクションは、[Google Cloud Platform コンソール](https://cloud.google.com/compute/docs/console)を使用して実行することもできます。 とはいえ、初期セットアップのためにgcloud computeコマンドラインツールをインストールすることをお勧めします。 以下の例では、gcloud computeコマンドラインツールを使用しています。 詳細については、Google ドキュメントのインストールおよびセットアップ ガイド「[gcloud コンピューティング](https://cloud.google.com/compute/docs/gcloud-compute/)」を参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## マシンタイプの決定

Google Cloud Platform で{% data variables.product.product_location %} を起動する前に、Organization のニーズに最適なマシンタイプを決定する必要があります。 {% data variables.product.product_name %} の最小要件を確認するには、「[最小要件](#minimum-requirements)」を参照してください。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} は、{% data variables.product.prodname_ghe_server %} に汎用のハイメモリマシンを推奨しています。 詳細については、Google Compute Engine ドキュメントの「[マシンの種類](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types)」を参照してください。

## {% data variables.product.prodname_ghe_server %} イメージを選択する

1. [gcloud コンピューティング](https://cloud.google.com/compute/docs/gcloud-compute/) コマンドライン ツールを使用し、パブリック {% data variables.product.prodname_ghe_server %} イメージを一覧表示します。
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. {% data variables.product.prodname_ghe_server %} の最新の GCE イメージのイメージ名をメモしておきます。

## ファイアウォールを構成する

GCE 仮想マシンは、ファイアウォールが存在するネットワークのメンバーとして作成されます。 {% data variables.product.prodname_ghe_server %} VMに関連付けられているネットワークの場合、下記の表に一覧表示されている必要なポートを許可するようにファイアウォールを設定する必要があります。 Google Cloud Platform のファイアウォール規則の詳細については、Google ガイド「[ファイアウォール規則の概要](https://cloud.google.com/vpc/docs/firewalls)」を参照してください。

1. gcloud compute コマンドラインツールを使用して、ネットワークを作成します。 詳細については、Google ドキュメントの「[gcloud コンピューティング ネットワークの作成](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)」を参照してください。
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. 下記の表にある各ポートに関するファイアウォールルールを作成します。 詳細については、Google ドキュメントの「[gcloud コンピューティング ファイアウォール規則](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)」を参照してください。
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   次の表に、必要なポートと各ポートの使用目的を示します。

   {% data reusables.enterprise_installation.necessary_ports %}

## スタティックIPの取得とVMへの割り当て

これが稼働状態のアプライアンスである場合は、静的な外部 IP アドレスを予約し、それを {% data variables.product.prodname_ghe_server %} VM に割り当てることを強くおすすめします。 そうしなければ、VM のパブリックな IP アドレスは再起動後に保持されません。 詳細については、Google ガイド「[静的外部 IP アドレスの予約](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)」を参照してください。

稼働状態の High Availability 設定では、プライマリアプライアンスとレプリカアプライアンスの両方に別々の静的 IP アドレスを割り当ててください。

## {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data variables.product.prodname_ghe_server %} インスタンスを作成するには、{% data variables.product.prodname_ghe_server %} イメージを使用して GCE インスタンスを作成し、インスタンスデータ用の追加のストレージボリュームをアタッチする必要があります。 詳細については、「[ハードウェアに関する考慮事項](#hardware-considerations)」を参照してください。

1. gcloud computeコマンドラインツールを使い、インスタンスデータのためのストレージボリュームとしてアタッチして使うデータディスクを作成し、そのサイズをユーザライセンス数に基づいて設定してください。 詳細については、Google ドキュメントの「[gcloud コンピューティング ディスクの作成](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)」を参照してください。
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. 次に、選択した {% data variables.product.prodname_ghe_server %} イメージの名前を使用してインスタンスを作成し、データディスクをアタッチします。 詳細については、Google ドキュメントの「[gcloud インスタンス ネットワークの作成](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)」を参照してください。
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

## インスタンスの設定

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 参考資料

- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
