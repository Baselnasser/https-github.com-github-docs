---
title: About secret scanning
intro: '{% data variables.product.product_name %} scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## About {% data variables.product.prodname_secret_scanning %}

If your project communicates with an external service, you might use a token or private key for authentication. Tokens and private keys are examples of secrets that a service provider can issue. If you check a secret into a repository, anyone who has read access to the repository can use the secret to access the external service with your privileges. We recommend that you store secrets in a dedicated, secure location outside of the repository for your project.

{% data variables.product.prodname_secret_scanning_caps %} will scan your entire Git history on all branches present in your {% data variables.product.prodname_dotcom %} repository for secrets{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, even if the repository is archived{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %}

{% ifversion secret-scanning-backfills-historical-issues %}
{% data variables.product.prodname_secret_scanning_caps %} also scans the titles, descriptions, and comments, in open and closed historical issues, and reports leaked secrets as alerts on {% data variables.product.prodname_dotcom %}{% ifversion ghec %}. A notification is sent to the relevant partner when a historical partner pattern is detected{% endif %}.

{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} for historical secret leaks is currently in public beta and subject to change.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_secret_scanning_caps %} is available on {% data variables.product.prodname_dotcom_the_website %} in two forms:

1. **{% data variables.secret-scanning.partner_alerts_caps %}.** Runs automatically on all public repositories and public npm packages. Any strings that match patterns that were provided by secret scanning partners are reported directly to the relevant partner. For more information, see the "[About {% data variables.secret-scanning.partner_alerts %}](#about-secret-scanning-alerts-for-partners)" section below.

2. **{% data variables.secret-scanning.user_alerts_caps %}.** {% ifversion fpt %}The following users can enable and configure additional scanning:
   - Owners of repositories on {% data variables.product.prodname_dotcom_the_website %}, on any _public_ repositories they own.
   - Organizations owning _public_ repositories, on any of these repositories.
   - Organizations using {% data variables.product.prodname_ghe_cloud %}, on any public repositories (for free), and on any private and internal repositories, when you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% elsif ghec %}You can enable and configure additional scanning for repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} for any public repositories (for free), and for private and internal repositorites when you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}

  Any strings that match patterns provided by secret scanning partners, by other service providers, or defined by you or your organization, are reported as alerts in the **Security** tab of repositories. If a string in a public repository matches a partner pattern, it is also reported to the partner. For more information, see the "[About {% data variables.secret-scanning.user_alerts %}](#about-secret-scanning-alerts-for-users)" section below.{% endif %}

{% data reusables.secret-scanning.audit-secret-scanning-events %}

Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

You can also enable {% data variables.product.prodname_secret_scanning %} as a push protection for a repository or an organization. When you enable this feature, {% data variables.product.prodname_secret_scanning %} prevents contributors from pushing code with a detected secret. To proceed, contributors must either remove the secret(s) from the push or, if needed, bypass the protection. {% ifversion push-protection-custom-link-orgs %}Admins can also specify a custom link that is displayed to the contributor when a push is blocked; the link can contain resources specific to the organization to aid contributors. {% endif %}For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."

{% endif %}

{% ifversion fpt or ghec %}
## About {% data variables.secret-scanning.partner_alerts %}

When you make a repository public, or push changes to a public repository, {% data variables.product.product_name %} always scans the code for secrets that match partner patterns. Public packages on the npm registry are also scanned. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} If {% data variables.product.prodname_secret_scanning %} detects a potential secret, we notify the service provider who issued the secret. The service provider validates the string and then decides whether they should revoke the secret, issue a new secret, or contact you directly. Their action will depend on the associated risks to you or them. For more information, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

You cannot change the configuration of {% data variables.product.prodname_secret_scanning %} for partner patterns on public repositories.

{% endif %}

## About {% data variables.secret-scanning.user_alerts %}{% ifversion ghes or ghae %} on {% data variables.product.product_name %}{% endif %}

{% ifversion ghes or ghae %}{% data variables.secret-scanning.user_alerts_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. The feature is not available on user-owned repositories.{% endif %}{% ifversion fpt or ghec %}{% data variables.secret-scanning.user_alerts_caps %} are available for free on all public repositories{% endif %}{% ifversion fpt %}.{% endif %}{%ifversion ghec %}, and for private and internal repositories that are owned by organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %} When you enable {% data variables.product.prodname_secret_scanning %} for a repository, {% data variables.product.prodname_dotcom %} scans the code for patterns that match secrets used by many service providers. {% ifversion secret-scanning-backfill-email %}When the scan is completed, {% data variables.product.prodname_dotcom %} sends an email alert to the enterprise and organization owners, even if no secrets were found.{% endif %}

{% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} When a supported secret is leaked, {% data variables.product.product_name %} generates a {% data variables.product.prodname_secret_scanning %} alert. {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} will also periodically run a full git history scan of existing content in {% ifversion fpt %}public{% else %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} repositories where {% data variables.product.prodname_secret_scanning %} is enabled, and send alert notifications following the {% data variables.product.prodname_secret_scanning %} alert notification settings. {% endif %}For more information, see "{% ifversion fpt or ghec %}[Supported secrets for user alerts](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-user-alerts){% else %}[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns){% endif %}."

{% ifversion secret-scanning-issue-body-comments %}
{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} for issue descriptions and comments is in public beta and subject to change.

{% endnote %}
{% endif %}

If you're a repository administrator, you can enable {% data variables.secret-scanning.user_alerts %} for any {% ifversion fpt %}public{% endif %} repository{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, including archived repositories{% endif %}. Organization owners can also enable {% data variables.secret-scanning.user_alerts %} for all {% ifversion fpt %}public {% endif %}repositories or for all new {% ifversion fpt %}public {% endif %}repositories within an organization. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for a repository, organization, or enterprise. For more information, see "[AUTOTITLE]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% ifversion secret-scanning-store-tokens %}
{% data variables.product.company_short %} stores detected secrets using symmetric encryption, both in transit and at rest.{% endif %}{% ifversion ghes > 3.7 %} To rotate the encryption keys used for storing the detected secrets, you can contact {% data variables.contact.contact_ent_support %}.{% endif %}

### Accessing {% data variables.secret-scanning.alerts %}

When you enable {% data variables.product.prodname_secret_scanning %} for a repository or push commits to a repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of those commits for secrets that match patterns defined by service providers{% ifversion ghes or ghae or ghec %} and any custom patterns defined in your enterprise, organization, or repository{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} also runs a scan of all historical code content in {% ifversion fpt %}public {% endif %}repositories with {% data variables.product.prodname_secret_scanning %} enabled when a new partner pattern {% ifversion not fpt %}or custom pattern{% endif %} is added or updated.{% endif%}

If {% data variables.product.prodname_secret_scanning %} detects a secret, {% data variables.product.prodname_dotcom %} generates an alert.

- {% data variables.product.prodname_dotcom %} sends an email alert to the repository administrators and organization owners. You'll receive an alert if you are watching the repository{% ifversion secret-scanning-notification-settings %}, {% else %}, and {% endif %}if you have enabled notifications either for security alerts or for all the activity on the repository{% ifversion secret-scanning-notification-settings %}, and if, in your notification settings, you have selected to receive email notifications for the repositories that you are watching.{% else %}.{% endif %}
- If the contributor who committed the secret isn't ignoring the repository, {% data variables.product.prodname_dotcom %} will also send an email alert to the contributor. The emails contains a link to the related {% data variables.product.prodname_secret_scanning %} alert. The commit author can then view the alert in the repository, and resolve the alert.
- {% data variables.product.prodname_dotcom %} displays an alert in the **Security** tab of the repository.

For more information about viewing and resolving {% data variables.secret-scanning.alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

{% ifversion secret-scanning-notification-settings %}
For more information on how to configure notifications for {% data variables.secret-scanning.alerts %}, see "[Configuring notifications for secret scanning alerts](/code-security/secret-scanning/managing-alerts-from-secret-scanning#configuring-notifications-for-secret-scanning-alerts)."
{% endif %}

Repository administrators and organization owners can grant users and teams access to {% data variables.secret-scanning.alerts %}. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

{% ifversion ghec or ghes or ghae > 3.4 %}
You can use security overview to see an organization-level view of which repositories have enabled {% data variables.product.prodname_secret_scanning %} and the alerts found. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."
{% endif %}

You can also use the REST API to monitor results from {% data variables.product.prodname_secret_scanning %} across your repositories{% ifversion ghes %} or your organization{% endif %}. For more information about API endpoints, see "[AUTOTITLE](/rest/secret-scanning)."

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}
{%- ifversion fpt or ghec or ghes %}
- "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)"{% endif %}
- "[AUTOTITLE](/actions/security-guides/encrypted-secrets)"
