---
title: 撤出集群节点
intro: 您可以撤出集群节点上的数据服务。
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 775e53aafadae8c5c76a9f1dfef43ebaf7ceb9f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100049'
---
## 关于撤出群集节点

在 {% data variables.product.product_name %}的群集配置中，您可以在使节点脱机之前撤出该节点。 撤出可确保服务层中的其余节点包含服务的所有数据。 例如，替换群集中节点的虚拟机时，应先撤出该节点。

有关 {% data variables.product.prodname_ghe_server %} 的节点和服务层的更多信息，请参阅“[关于群集节点](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)”。

{% warning %}

**警告**：

- 为避免数据丢失，{% data variables.product.company_short %} 强烈建议您在使节点脱机之前撤出该节点。 

- 如果数据服务群集中只有三个节点，则无法撤出节点，因为 `ghe-spokes` 没有其他位置可以进行复制。 如果有四个或更多节点，则 `ghe-spokes` 会将所有存储库移出已撤出的节点。

{% endwarning %}

## 撤出集群节点

如果计划使运行 `git-server`、`pages-server` 或 `storage-server` 等数据服务角色的节点脱机，请在使该节点脱机之前撤出每个节点。

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. 若要查找要撤出的节点的 UUID，请运行以下命令。 将 `HOSTNAME` 替换为节点的主机名。

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. 在 {% data variables.product.product_name %} 复制数据时监控节点的状态。 在复制完成之前，不要使节点脱机。 要监控节点的状态，请运行以下任一命令，将 `UUID` 替换为步骤 2 中的 UUID。

   - **Git**：

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}** ：

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **存储**：

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. 复制完成后，可以通过运行以下任一命令来撤出节点，将 `UUID` 替换为步骤 2 中的 UUID。

   - **Git**：

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}** ：

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - 对于“存储”，先通过运行以下命令使节点脱机。

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     存储节点脱机后，可以通过运行以下命令撤出该节点。

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
