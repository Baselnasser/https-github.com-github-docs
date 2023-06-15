---
title: Reviewing the audit log for your organization
intro: 'The audit log allows organization admins to quickly review the actions performed by members of your organization. It includes details such as who performed the action, what the action was, and when it was performed.'
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
---

## Accessing the audit log

The audit log lists events triggered by activities that affect your organization within the current month and previous six months. Only owners can access an organization's audit log.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Searching the audit log

{% data reusables.audit_log.audit-log-search %}

### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. Actions listed in the audit log are grouped in different categories. For the full list of events in each category, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)."


| Category name | Description
|------------------|-------------------{% ifversion fpt or ghec %}
| `account` | Contains all activities related to your organization account.{% endif %}{% ifversion fpt or ghec %}
| `advisory_credit` | Contains all activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)."{% endif %}{% ifversion pat-v2%}
| `auto_approve_personal_access_token_requests` | Contains activities related to your organization's approval policy for {% data variables.product.pat_v2 %}s. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."{% endif %}{% ifversion fpt or ghec %}
| `billing` | Contains all activities related to your organization's billing.{% endif %}{% ifversion fpt or ghec %}
| `business` | Contains activities related to business settings for an enterprise. |{% endif %}{% ifversion fpt or ghec %}
| `codespaces` | Contains all activities related to your organization's codespaces. |{% endif %}
| `dependabot_alerts` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in existing repositories. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
| `dependabot_alerts_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in new repositories created in the organization.{% ifversion fpt or ghec or ghes %}
| `dependabot_security_updates` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
| `dependabot_security_updates_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.{% endif %}{% ifversion fpt or ghec %}
| `dependency_graph` | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."
| `dependency_graph_new_repos` | Contains organization-level configuration activities for new repositories created in the organization.{% endif %}
| `discussion_post` | Contains all activities related to discussions posted to a team page.
| `discussion_post_reply` | Contains all activities related to replies to discussions posted to a team page.{% ifversion fpt or ghes or ghec %}
| `enterprise` | Contains activities related to enterprise settings. |{% endif %}
| `hook` | Contains all activities related to webhooks.
| `integration_installation` | Contains activities related to integrations installed in an account. |
| `integration_installation_request` | Contains all activities related to organization member requests for owners to approve integrations for use in the organization. |{% ifversion ghec or ghae %}
| `ip_allow_list` | Contains activities related to enabling or disabling the IP allow list for an organization.
| `ip_allow_list_entry` | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.{% endif %}
| `issue` | Contains activities related to deleting an issue. {% ifversion fpt or ghec %}
| `marketplace_agreement_signature` | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| `marketplace_listing` | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes or ghec %}
| `members_can_create_pages` | Contains all activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)." | {% endif %}
| `org` | Contains activities related to organization membership.{% ifversion ghec %}
| `org_credential_authorization` | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| `org_secret_scanning_custom_pattern` | Contains organization-level activities related to {% data variables.product.prodname_secret_scanning %} custom patterns. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." {% endif %}
| `organization_default_label` | Contains all activities related to default labels for repositories in your organization.
| `oauth_application` | Contains all activities related to OAuth Apps.
| `packages` | Contains all activities related to {% data variables.product.prodname_registry %}.{% ifversion fpt or ghec %}
| `payment_method` | Contains all activities related to how your organization pays for GitHub.{% endif %}{% ifversion pat-v2%}
| `personal_access_token` | Contains activities related to {% data variables.product.pat_v2 %}s in your organization. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."{% endif %}
| `profile_picture`| Contains all activities related to your organization's profile picture.
| `project` | Contains all activities related to project boards.
| `protected_branch` | Contains all activities related to protected branches.
| `repo` | Contains activities related to the repositories owned by your organization.{% ifversion fpt or ghec %}
| `repository_advisory` | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)."
| `repository_content_analysis` | Contains all activities related to [enabling or disabling data use for a private repository](/get-started/privacy-on-github/about-githubs-use-of-your-data).{% endif %}{% ifversion fpt or ghec %}
| `repository_dependency_graph` | Contains repository-level activities related to enabling or disabling the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."{% endif %}{% ifversion ghes or ghae or ghec %}
| `repository_secret_scanning` | Contains repository-level activities related to {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)." {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| `repository_secret_scanning_custom_pattern` | Contains repository-level activities related to {% data variables.product.prodname_secret_scanning %} custom patterns. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." {% endif %}{% ifversion secret-scanning-custom-pattern-push-protection-audit %}
| `repository_secret_scanning_custom_pattern_push_protection`| Contains repository-level activities related to push protection of a custom pattern for {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| `repository_secret_scanning_push_protection` | Contains repository-level activities related to {% data variables.product.prodname_secret_scanning %} custom patterns. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)." {% endif %}
| `repository_vulnerability_alert` | Contains all activities related to [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %}
| `repository_vulnerability_alerts` | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %}
| `role` | Contains all activities related to [custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %}
| `secret_scanning` | Contains organization-level configuration activities for {% data variables.product.prodname_secret_scanning %} in existing repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."
| `secret_scanning_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_secret_scanning %} for new repositories created in the organization. {% endif %}{% ifversion fpt or ghec %}
| `sponsors`| Contains all events related to sponsor buttons (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)"){% endif %}
| `team` | Contains all activities related to teams in your organization.{% ifversion team-discussions %}
| `team_discussions` | Contains activities related to managing team discussions for an organization.{% endif %}
| `workflows` | Contains activities related to {% data variables.product.prodname_actions %} workflows.

You can search for specific sets of actions using these terms. For example:

* `action:team` finds all events grouped within the team category.
* `-action:hook` excludes all events in the webhook category.

Each category has a set of associated actions that you can filter on. For example:

* `action:team.create` finds all events where a team was created.
* `-action:hook.events_changed` excludes all events where the events on a webhook have been altered.

### Search based on time of action

Use the `created` qualifier to filter events in the audit log based on when they occurred. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

For example:

* `created:2014-07-08` finds all events that occurred on July 8th, 2014.
* `created:>=2014-07-08` finds all events that occurred on or after July 8th, 2014.
* `created:<=2014-07-08` finds all events that occurred on or before July 8th, 2014.
* `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.

{% note %}

**Note**: The audit log contains data for the current month and every day of the previous six months.

{% endnote %}

### Search based on location

Using the qualifier `country`, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. For example:

* `country:de` finds all events that occurred in Germany.
* `country:Mexico` finds all events that occurred in Mexico.
* `country:"United States"` all finds events that occurred in the United States.

{% ifversion fpt or ghec %}
## Exporting the audit log

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

## Using the audit log API

{% ifversion fpt %}

Organizations that use {% data variables.product.prodname_ghe_cloud %} can interact with the audit log using the GraphQL API and REST API. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

You can interact with the audit log using the GraphQL API{% ifversion fpt or ghec %} or the REST API{% endif %}.{% ifversion read-audit-scope %} You can use the `read:audit_log` scope to access the audit log via the APIs.{% endif %}

{% ifversion ghec %}

{% note %}

**Note:** To use the audit log API, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Using the GraphQL API

{% endif %}

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %}
Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see "[`git` category actions](#git-category-actions)."
{% endif %}

The GraphQL response can include data for up to 90 to 120 days.

For example, you can make a GraphQL request to see all the new organization members added to your organization. For more information, see the "[AUTOTITLE](/graphql/reference/interfaces#auditentry/)."

{% ifversion ghec %}

### Using the REST API

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

By default, only events from the past three months are returned. To include older events, you must specify a timestamp in your query.

For more information about the audit log REST API, see "[AUTOTITLE](/rest/orgs#get-the-audit-log-for-an-organization)."

{% endif %}
{% endif %}

# Further reading

- "[AUTOTITLE](/organizations/keeping-your-organization-secure)"
{%- ifversion fpt or ghec %}
- "[AUTOTITLE](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)"{% endif %}