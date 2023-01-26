---
title: Initializing the cluster
intro: 'A {% data variables.product.prodname_ghe_server %} cluster must be set up with a license and initialized using the administrative shell (SSH).'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Installing {% data variables.product.prodname_ghe_server %}

1. On each cluster node, provision and install {% data variables.product.prodname_ghe_server %}. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)."
2. Using the administrative shell or DHCP, **only** configure the IP address of each node. Don't configure any other settings.

## Configuring the first node

1. Connect to the node that will be designated as MySQL primary in `cluster.conf`. For more information, see "[About the cluster configuration file](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)."
2. In your web browser, visit `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}
{% data reusables.enterprise_installation.instance-will-restart-automatically %}

## Initializing the cluster

To initialize the cluster, you need a cluster configuration file (`cluster.conf`). For more information, see "[About the cluster configuration file](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".

1. From the first node that was configured, run `ghe-cluster-config-init`.  This will initialize the cluster if there are nodes in the cluster configuration file that are not configured.
2. Run `ghe-cluster-config-apply`. This will validate the `cluster.conf` file, apply the configuration to each node file and bring up the configured services on each node.

To check the status of a running cluster use the `ghe-cluster-status` command.

## About the cluster configuration file

The cluster configuration file (`cluster.conf`) defines the nodes in the cluster, and what services they run.
For more information, see "[About cluster nodes](/enterprise/admin/guides/clustering/about-cluster-nodes)."

This example `cluster.conf` defines a cluster with 11 nodes.

  - Two nodes called `ghes-front-end-node-\*` run services responsible for responding to client requests.
  - Three nodes called `ghes-database-node-\*` run services responsible for storage, retrieval, and replication of database data.
  - Three nodes called `ghes-search-node-\*` run services responsible for search functionality.
  - Three nodes called `ghes-storage-node-\*` run services responsible for storage, retrieval, and replication of data.

The names of the nodes can be any valid hostname you choose. The names are set as the hostname of each node, and will also be added to `/etc/hosts` on each node, so that the nodes are locally resolvable to each other.

Specify the first cluster node you configured as the MySQL primary via `mysql-server` and `mysql-master`.

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

Create the file `/data/user/common/cluster.conf` on the configured first node. For example, using `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
