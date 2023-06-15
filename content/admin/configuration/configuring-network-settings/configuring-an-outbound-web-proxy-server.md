---
title: Configuring an outbound web proxy server
intro: 'A proxy server provides an additional level of security for {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
permissions: Site administrators can configure an outbound web proxy server for a {% data variables.product.product_name %} instance.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
---

## About configuration of a proxy for {% data variables.product.product_name %}

When a proxy server is enabled for {% data variables.location.product_location %}, outbound messages sent by {% data variables.product.prodname_ghe_server %} are first sent through the proxy server, unless the destination host is added as an HTTP proxy exclusion. Types of outbound messages include outgoing webhooks, uploading bundles, and fetching legacy avatars. The proxy server's URL is the protocol, domain or IP address, plus the port number, for example `http://127.0.0.1:8123`.

{% note %}

**Note:**  To connect {% data variables.location.product_location %} to {% data variables.product.prodname_dotcom_the_website %}, your proxy configuration must allow connectivity to `github.com` and `api.github.com`. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."

{% endnote %}

{% data reusables.actions.proxy-considerations %} For more information about using {% data variables.product.prodname_actions %} with {% data variables.product.prodname_ghe_server %}, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."

## Configuring an outbound web proxy server

You can configure an outbound proxy server {% data variables.location.product_location %}, and you can configure exceptions for connections to specific domains.

{% ifversion ghes > 3.8 %}

Your instance validates the hostnames for proxy exclusion using the list of IANA's registered top-level domains (TLDs). For more information, see the [list of TLDs](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) on the IANA website.

{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
1. Under **HTTP Proxy Server**, type the URL of your proxy server.
1. Optionally, under **HTTP Proxy Exclusion**, type any hosts that do not require proxy access, separating hosts with commas. To exclude all hosts in a domain from requiring proxy access, you must use `.` as a wildcard prefix, such as `.octo-org.tentacle`.

   {%- ifversion ghes < 3.9 %}
   {% note %}

   **Note**: In {% data variables.product.product_name %} 3.{% ifversion ghes = 3.4 %}4.18{% elsif ghes = 3.5 %}5.15{% elsif ghes = 3.6 %}6.11{% elsif ghes = 3.7%}7.8{% elsif ghes = 3.8 %}8.1{% endif %} and later, your instance validates the hostnames using the list of IANA's registered top-level domains (TLDs). For more information, see the [list of TLDs](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) on the IANA website. If you want to exclude an unregistered TLD, see "[Excluding additional unregistered TLDs from the proxy](#excluding-additional-unregistered-tlds-from-the-proxy)."

   {% endnote %}
   {%- endif %}
{% data reusables.enterprise_management_console.save-settings %}

## Excluding additional unregistered TLDs from the proxy

{% ifversion ghes < 3.9 %}In {% data variables.product.product_name %} 3.{% ifversion ghes = 3.4 %}4.18{% elsif ghes = 3.5 %}5.15{% elsif ghes = 3.6 %}6.11{% elsif ghes = 3.7%}7.8{% elsif ghes = 3.8 %}8.1{% endif %} and later, you{% elsif ghes > 3.8 %}You{% endif %} can configure your instance's proxy settings to exclude unregistered TLDs that aren't specified in the [list of TLDs](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) on the IANA website.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Enter the following command, replacing COMMA-SEPARATED-TLD-LIST with a comma-separated list of TLDs.

   ```shell
   $ ghe-config noproxy.exception-tld-list "COMMA-SEPARATED-TLD-LIST"
   ```
{% data reusables.enterprise.apply-configuration %}
