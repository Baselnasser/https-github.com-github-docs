---
title: Configuring backups on your appliance
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'As part of a disaster recovery plan, you can protect production data on {% data variables.location.product_location %} by configuring automated backups.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
---
## About {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} is a backup system you install on a separate host, which takes backup snapshots of {% data variables.location.product_location %} at regular intervals over a secure SSH network connection. You can use a snapshot to restore an existing {% data variables.product.prodname_ghe_server %} instance to a previous state from the backup host.

Only data added since the last snapshot will transfer over the network and occupy additional physical storage space. To minimize performance impact, backups are performed online under the lowest CPU/IO priority. You do not need to schedule a maintenance window to perform a backup.

Major releases and version numbers for {% data variables.product.prodname_enterprise_backup_utilities %} align with feature releases of {% data variables.product.product_name %}. We support the four most recent versions of both products. For more information, see "[{% data variables.product.product_name %} releases](/admin/all-releases)."

For more detailed information on features, requirements, and advanced usage, see the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Prerequisites

To use {% data variables.product.prodname_enterprise_backup_utilities %}, you must have a Linux or Unix host system separate from {% data variables.location.product_location %}.

You can also integrate {% data variables.product.prodname_enterprise_backup_utilities %} into an existing environment for long-term permanent storage of critical data.

We recommend that the backup host and {% data variables.location.product_location %} be geographically distant from each other. This ensures that backups are available for recovery in the event of a major disaster or network outage at the primary site.

Physical storage requirements will vary based on Git repository disk usage and expected growth patterns:

| Hardware | Recommendation |
| -------- | --------- |
| **vCPUs**  | 2 |
| **Memory** | 2 GB |
| **Storage** | Five times the primary instance's allocated storage |

More resources may be required depending on your usage, such as user activity and selected integrations.

For more information, see [{% data variables.product.prodname_enterprise_backup_utilities %} requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Installing {% data variables.product.prodname_enterprise_backup_utilities %}

To install {% data variables.product.prodname_enterprise_backup_utilities %} on your backup host, we recommend cloning the project's Git repository. This approach allows you to fetch new releases directly using Git, and your existing backup configuration file, `backup.config`, will be preserved when installing a new version.

Alternatively, if the host machine can't access the internet, you can download each {% data variables.product.prodname_enterprise_backup_utilities %} release as a compressed archive, then extract and install the contents. For more information, see [Getting started](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

Backup snapshots are written to the disk path set by the `GHE_DATA_DIR` data directory variable in your `backup.config` file. Snapshots need to be stored on a filesystem which supports symbolic and hard links.

{% note %}

**Note:** We recommend ensuring your snapshots are not kept in a subdirectory of the {% data variables.product.prodname_enterprise_backup_utilities %} installation directory, to avoid inadvertently overwriting your data directory when upgrading {% data variables.product.prodname_enterprise_backup_utilities %} versions.

{% endnote %}

1. To clone the [{% data variables.product.prodname_enterprise_backup_utilities %} project repository](https://github.com/github/backup-utils/) to a local directory on your backup host, run the following command.

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. To change into the local repository directory, run the following command.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. To copy the included `backup.config-example` file to `backup.config`, run the following command.

   ```shell
   cp backup.config-example backup.config
   ```
1. To customize your configuration, edit `backup.config` in a text editor.
   1. Set the `GHE_HOSTNAME` value to your primary {% data variables.product.prodname_ghe_server %} instance's hostname or IP address.

     {% note %}

     **Note:** If {% data variables.location.product_location %} is deployed as a cluster or in a high availability configuration using a load balancer, the `GHE_HOSTNAME` can be the load balancer hostname, as long as it allows SSH access (on port 122) to {% data variables.location.product_location %}.

     To ensure a recovered appliance is immediately available, perform backups targeting the primary instance even in a geo-replication configuration.

     {% endnote %}
   1. Set the `GHE_DATA_DIR` value to the filesystem location where you want to store backup snapshots. We recommend choosing a location on the same filesystem as your backup host, but outside of where you cloned the Git repository in step 1.
1. To grant your backup host access to your instance, open your primary instance's settings page at `http(s)://HOSTNAME/setup/settings` and add the backup host's SSH key to the list of authorized SSH keys. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)."
1. On your backup host, verify SSH connectivity with {% data variables.location.product_location %} with the `ghe-host-check` command.

  ```shell
  ./bin/ghe-host-check
  ```		  
1. To create an initial full backup, run the following command.

  ```shell
  ./bin/ghe-backup
  ```

For more information on advanced usage, see the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Upgrading {% data variables.product.prodname_enterprise_backup_utilities %}

When upgrading {% data variables.product.prodname_enterprise_backup_utilities %}, you must choose a release that will work with your current version of {% data variables.product.product_name %}. Your installation of {% data variables.product.prodname_enterprise_backup_utilities %} must be at least the same version as {% data variables.location.product_location %}, and cannot be more than two versions ahead. For more information, see [{% data variables.product.prodname_ghe_server %} version requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.
You can upgrade {% data variables.product.prodname_enterprise_backup_utilities %} in a Git repository by fetching and checking out the latest changes.

Alternatively, if you don't use a Git repository for your installation, you can extract a new archive into place, or you can change your approach to use a Git repository instead.

### Verifying the installation type

You can verify the installation method for {% data variables.product.prodname_enterprise_backup_utilities %} and determine the best way to upgrade your installation.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. To check if a valid working directory exists inside a Git repository, run the following command.

   ```
   git rev-parse --is-inside-work-tree
   ```

   If the output is `true`, {% data variables.product.prodname_enterprise_backup_utilities %} was installed by cloning the project's Git repository. If the output includes `fatal: not a git repository (or any of the parent directories)`, {% data variables.product.prodname_enterprise_backup_utilities %} was likely installed by extracting a compressed archive file.
If your installation is in a Git repository, you can install the latest version using Git. If the installation is from a compressed archive file, you can either download and extract the latest version, or you can reinstall {% data variables.product.prodname_enterprise_backup_utilities %} using Git to simplify future upgrades.

- [Upgrading an installation in a Git repository](#upgrading-an-installation-in-a-git-repository)
- [Using Git instead of compressed archives for upgrades](#using-git-instead-of-compressed-archives-for-upgrades)

### Upgrading an installation in a Git repository

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
  {% note %}

  **Note:** We recommend creating a copy of your existing `backup.config` file in a temporary location, like `$HOME/backup.config`, before upgrading {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Download the latest project updates by running the `git fetch` command.

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### Using Git instead of compressed archives for upgrades

If your backup host has internet connectivity and you previously used a compressed archive (`.tar.gz`) to install or upgrade {% data variables.product.prodname_enterprise_backup_utilities %}, we recommend using a Git repository for your installation instead. Upgrading using Git requires less work and preserves your backup configuration.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. To back up your existing {% data variables.product.prodname_enterprise_backup_utilities %} configuration, copy your current `backup.config` file to a safe location, such as your home directory.

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. Change to the local directory on your backup host where you want to install the {% data variables.product.prodname_enterprise_backup_utilities %} Git repository.
1. To clone the [project repository](https://github.com/github/backup-utils/) to the directory on your backup host, run the following command.

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. To change into the cloned repository, run the following command.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. To restore your backup configuration from earlier, copy your existing backup configuration file to the local repository directory. Replace the path in the command with the location of the file saved in step 2.

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **Note:** You can choose where to restore your backup configuration file to after cloning. For more information about where configuration files can be located, see [Getting started](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

  {% endnote %}

1. To confirm that the paths to directories or scripts in your backup configuration file are correct, review the file in a text editor.
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. Delete your old GitHub Enterprise Server Backup Utilities directory from step 1 (where the compressed archive installation was located).

## Scheduling a backup

You can schedule regular backups on the backup host using the `cron(8)` command or a similar command scheduling service. The configured backup frequency will dictate the worst case recovery point objective (RPO) in your recovery plan. For example, if you have scheduled the backup to run every day at midnight, you could lose up to 24 hours of data in a disaster scenario. We recommend starting with an hourly backup schedule, guaranteeing a worst case maximum of one hour of data loss if the primary site data is destroyed.

If backup attempts overlap, the `ghe-backup` command will abort with an error message, indicating the existence of a simultaneous backup. If this occurs, we recommended decreasing the frequency of your scheduled backups. For more information, see the "Scheduling backups" section of the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Restoring a backup

In the event of prolonged outage or catastrophic event at the primary site, you can restore {% data variables.location.product_location %} by provisioning another {% data variables.product.prodname_enterprise %} appliance and performing a restore from the backup host. You must add the backup host's SSH key to the target {% data variables.product.prodname_enterprise %} appliance as an authorized SSH key before restoring an appliance.

{% note %}

**Note:** When performing backup restores to {% data variables.location.product_location %}, the same version supportability rules apply. You can only restore data from at most two feature releases behind.

For example, if you take a backup from {% data variables.product.product_name %} 3.0.x, you can restore the backup to a {% data variables.product.product_name %} 3.2.x instance. You cannot restore data from a backup of {% data variables.product.product_name %} 2.22.x to an instance running 3.2.x, because that would be three jumps between versions (2.22 to 3.0 to 3.1 to 3.2). You would first need to restore to an instance running 3.1.x, and then upgrade to 3.2.x.

{% endnote %}

To restore {% data variables.location.product_location %} from the last successful snapshot, use the `ghe-restore` command.

{% note %}

**Note:** Prior to restoring a backup, ensure:
- Maintenance mode is enabled on the primary instance and all active processes have completed. For more information, see "[Enabling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)."
- Replication is stopped on all replicas in high availability configurations. For more information, see the `ghe-repl-stop` command in "[About high availability configuration](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)."
- If {% data variables.location.product_location %} has {% data variables.product.prodname_actions %} enabled, you must first configure the {% data variables.product.prodname_actions %} external storage provider on the replacement appliance. For more information, see "[Backing up and restoring {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_actions %} enabled](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)."

{% endnote %}

When running the `ghe-restore` command, you should see output similar to this:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %}
Optionally, to validate the restore, configure an IP exception list to allow access to a specified list of IP addresses. For more information, see "[Validating changes in maintenance mode using the IP exception list](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)."
{% endif %}

{% note %}

**Note:** 

- The network settings are excluded from the backup snapshot. You must manually configure the network on the target {% data variables.product.prodname_ghe_server %} appliance as required for your environment.

- When restoring to new disks on an existing or empty {% data variables.product.prodname_ghe_server %} instance, stale UUIDs may be present, resulting in Git and/or Alambic replication reporting as out of sync. Stale server entry IDs can be the result of a retired node in a high availability configuration still being present in the application database, but not in the restored replication configuration. To remediate, stale UUIDs can be torn down using `ghe-repl-teardown` once the restore has completed and prior to starting replication. In this scenario, contact {% data variables.contact.contact_ent_support %} for further assistance.

{% endnote %}

You can use these additional options with `ghe-restore` command:
- The `-c` flag overwrites the settings, certificate, and license data on the target host even if it is already configured. Omit this flag if you are setting up a staging instance for testing purposes and you wish to retain the existing configuration on the target. For more information, see the "Using backup and restore commands" section of the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.
- The `-s` flag allows you to select a different backup snapshot.
