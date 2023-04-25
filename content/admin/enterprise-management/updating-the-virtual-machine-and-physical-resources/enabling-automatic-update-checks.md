---
title: Enabling automatic update checks
intro: 'You can enable automatic update checks so that {% data variables.location.product_location %} checks for and downloads the latest {% data variables.product.prodname_ghe_server %} release.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
---

## About automatic update checks

When an upgrade package is automatically downloaded for {% data variables.location.product_location %}, you'll receive a message letting you know you can upgrade {% data variables.product.prodname_ghe_server %}. Packages download to the `/var/lib/ghe-updates` directory on {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)."

If a hotpatch is available for an upgrade, the `.hpkg` will download automatically. In the management console you can choose to install the hotpatch immediately or schedule installation for a later time. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)."


## Enabling automatic update checks

{% tip %}

**Tip:** To enable automatic update checks, {% data variables.location.product_location %} must be able to connect to `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Click **Yes, automatically check for updates**.
{% data reusables.enterprise_management_console.save-settings %}

## Viewing whether an update is available

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
1. At the top of the page, view whether your instance is up-to-date, or whether an update is available.

## Viewing the status of the most recent update check

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
1. Under "Logs," view status of the most recent update check.
