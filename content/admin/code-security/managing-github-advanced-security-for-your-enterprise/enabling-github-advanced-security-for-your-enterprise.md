---
title: Enabling GitHub Advanced Security for your enterprise
shortTitle: Enabling GitHub Advanced Security
intro: 'You can configure {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}. This provides extra features that help users find and fix security problems in their code.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
---

## About enabling {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %}
When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features unless you set up a policy to restrict access. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."
{% else %}
When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features.
{% endif %}

{% ifversion secret-scanning-enterprise-level-api %}{% data reusables.secret-scanning.secret-scanning-enterprise-level-api %}{% endif %}

{% ifversion ghes %}
For guidance on a phased deployment of GitHub Advanced Security, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)."
{% endif %}

## Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. If your license includes {% data variables.product.prodname_GH_advanced_security %}, the license page includes a section showing details of current usage.
{% endif %}

## Prerequisites for enabling {% data variables.product.prodname_GH_advanced_security %}

1. Upgrade your license for {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} For information about licensing, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
2. Download the new license file. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."
3. Upload the new license file to {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% ifversion ghes %}
4. Review the prerequisites for the features you plan to enable.

    - {% data variables.product.prodname_code_scanning_caps %}, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    - {% data variables.product.prodname_secret_scanning_caps %}, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."{% endif %}
    - {% data variables.product.prodname_dependabot %}, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

## Enabling and disabling {% data variables.product.prodname_GH_advanced_security %} features

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
{%- ifversion ghes %}
1. Under "Security," select the features that you want to enable and deselect any features you want to disable.
{%- else %}
1. Under "{% data variables.product.prodname_advanced_security %}," select **{% data variables.product.prodname_code_scanning_caps %}**.
{%- endif %}
{% data reusables.enterprise_management_console.save-settings %}

When {% data variables.product.product_name %} has finished restarting, you're ready to set up any additional resources required for newly enabled features. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."

## Enabling or disabling {% data variables.product.prodname_GH_advanced_security %} features via the administrative shell (SSH)

You can enable or disable features programmatically on {% data variables.location.product_location %}. For more information about the administrative shell and command-line utilities for {% data variables.product.prodname_ghe_server %}, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-config)."

For example, you can enable any {% data variables.product.prodname_GH_advanced_security %} feature with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

1. SSH into {% data variables.location.product_location %}.
1. Enable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To enable {% data variables.product.prodname_code_scanning_caps %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - To enable {% data variables.product.prodname_secret_scanning_caps %}, enter the following command.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - To enable the dependency graph, enter the following {% ifversion ghes %}command{% else %}commands{% endif %}.
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - To disable {% data variables.product.prodname_secret_scanning %}, enter the following command.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - To disable the dependency graph, enter the following {% ifversion ghes %}command{% else %}commands{% endif %}.
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```
