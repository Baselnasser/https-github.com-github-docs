---
title: Viewing and updating Dependabot alerts
intro: 'If {% data variables.product.product_name %} discovers insecure dependencies in your project, you can view details on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the alert.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

Your repository's {% data variables.product.prodname_dependabot_alerts %} tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. You can{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filter alerts by package, ecosystem, or manifest. You can {% endif %} sort the list of alerts, and you can click into specific alerts for more details. {% ifversion dependabot-bulk-alerts %}You can also dismiss or reopen alerts, either one by one or by selecting multiple alerts at once.{% else %}You can also dismiss or reopen alerts. {% endif %} For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." 

{% ifversion fpt or ghec or ghes > 3.2 %}
You can enable automatic security updates for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## About updates for vulnerable dependencies in your repository

{% data variables.product.product_name %} generates {% data variables.product.prodname_dependabot_alerts %} when we detect that your codebase is using dependencies with known security risks. For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, when {% data variables.product.product_name %} detects a vulnerable dependency in the default branch, {% data variables.product.prodname_dependabot %} creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.

{% ifversion dependabot-most-important-sort-option %} By default, {% data variables.product.prodname_dependabot_alerts %} are displayed in the {% data variables.product.prodname_dependabot_alerts %} tab in order of importance, but you can sort alerts by other criteria. {% endif %}{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}You can sort and filter {% data variables.product.prodname_dependabot_alerts %} with the dropdown menus in the {% data variables.product.prodname_dependabot_alerts %} tab or by typing filters as `key:value` pairs into the search bar. The available filters are repository (for example, `repo:my-repository`), package (for example, `package:django`), ecosystem (for example, `ecosystem:npm`), manifest (for example, `manifest:webwolf/pom.xml`), state (for example, `is:open`), and whether an advisory has a patch (for example, `has: patch`).{% ifversion dependabot-alerts-development-label %} You can also filter alerts with dependency scope data using `scope`, for example: `scope:development` or `scope:runtime`. With `scope:development`, the list of alerts will only show dependencies used during development, not production.{% endif %}

Each {% data variables.product.prodname_dependabot %} alert has a unique numeric identifier and the {% data variables.product.prodname_dependabot_alerts %} tab lists an alert for every detected vulnerability. Legacy {% data variables.product.prodname_dependabot_alerts %} grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy {% data variables.product.prodname_dependabot %} alert, you will be redirected to a {% data variables.product.prodname_dependabot_alerts %} tab filtered for that package. {% endif %}
{% endif %}

{% ifversion dependabot-alerts-development-label %}
## Supported ecosystems and manifests for dependency scope

<!-- TODO: for now we'd have this table and heading as they are, but we're planning to replace this with at a later date a new heading containing all the available filters in one or more tables -->
{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Alerts for packages listed as development dependencies are marked with the `Development` label on the {% data variables.product.prodname_dependabot_alerts %} page and are also available for filtering via the `scope` filter.
![Screenshot showing the "Development" label in the list of alerts](/assets/images/help/repository/dependabot-alerts-development-label.png)

The alert details page of alerts on development-scoped packages shows a "Tags" section containing a `Development` label.
![Screenshot showing the "Tags" section in the alert details page](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## About the detection of calls to vulnerable functions

{% data reusables.dependabot.vulnerable-calls-beta %}

When {% data variables.product.prodname_dependabot %} tells you that your repository uses a vulnerable dependency, you need to determine what the vulnerable functions are and check whether you are using them. Once you have this information, then you can determine how urgently you need to upgrade to a secure version of the dependency. 

For supported languages, {% data variables.product.prodname_dependabot %} automatically detects whether you use a vulnerable function and adds the label "Vulnerable call" to affected alerts. You can use this information in the {% data variables.product.prodname_dependabot_alerts %} view to triage and prioritize remediation work more effectively.

{% note %}

**Note:** During the beta release, this feature is available only for new Python advisories created *after* April 14, 2022, and for a subset of historical Python advisories. {% data variables.product.prodname_dotcom %} is working to backfill data across additional historical Python advisories, which are added on a rolling basis. Vulnerable calls are highlighted only on the {% data variables.product.prodname_dependabot_alerts %} pages.

{% endnote %}

![Screenshot showing an alert with the "Vulnerable call" label](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

You can filter the view to show only alerts where {% data variables.product.prodname_dependabot %} detected at least one call to a vulnerable function using the `has:vulnerable-calls` filter in the search field.

For alerts where vulnerable calls are detected, the alert details page shows additional information:

- One or more code blocks showing where the function is used.
- An annotation listing the function itself, with a link to the line where the function is called.

![Screenshot showing the alert details page for an alert with a "Vulnerable call" label](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

For more information, see "[Reviewing and fixing alerts](#reviewing-and-fixing-alerts)" below.

{% endif %}

## Viewing {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Optionally, to filter alerts, select the **Repository**, **Package**, **Ecosystem**, or **Manifest** dropdown menu then click the filter that you would like to apply. You can also type filters into the search bar. For example, `ecosystem:npm`{% ifversion ghes < 3.7 or ghae-issue-5638 %} or `has:patch`{% endif %}{% ifversion dependabot-alerts-development-label %}, `has:patch` or `scope:development`{% endif %}. To sort alerts, select the **Sort** dropdown menu then click the option that you would like to sort by, or type `sort:` into the search bar and choose an option from the suggestions (for example, `sort:newest`).
   
   {% ifversion dependabot-most-important-sort-option %}
   {% note %}

   **Note:** By default, {% data variables.product.prodname_dependabot_alerts %} are sorted by importance. The "Most important" sort helps you prioritize which {% data variables.product.prodname_dependabot_alerts %} to focus on first. Alerts are ranked based on their potential impact, actionability, and relevance. Our prioritization calculation is constantly being improved and includes factors like CVSS score, dependency scope, and whether vulnerable function calls are found for the alert.
   {% endnote %}

   ![Screenshot of Sort dropdown with "Most important" sort](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png)
   {% endif %}
   
   You can also click a label on an alert to only show alerts of that type.{% ifversion dependabot-alerts-development-label %} For example, clicking the `Development` label in the list of alerts will only show alerts relating to dependencies used in development, not production. For information about the list of ecosystems supported, see "[Supported ecosystems and manifests for dependency scope ](#supported-ecosystems-and-manifests-for-dependency-scope)."

{% endif %}
{%- ifversion dependabot-bulk-alerts %}
  ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %}
   ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Click the alert that you would like to view.{% ifversion dependabot-bulk-alerts %}
   ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %}
   ![Alert selected in list of alerts](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Click the alert you'd like to view.
  ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Reviewing and fixing alerts

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When {% data variables.product.prodname_dependabot %} discovers vulnerabilities {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application.

If a patched version of the dependency is available, you can generate a {% data variables.product.prodname_dependabot %} pull request to update this dependency directly from a {% data variables.product.prodname_dependabot %} alert. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, the pull request may be linked will in the Dependabot alert. 

In cases where a patched version is not available, or you can’t update to the secure version, {% data variables.product.prodname_dependabot %} shares additional information to help you determine next steps. When you click through to view a {% data variables.product.prodname_dependabot %} alert, you can see the full details of the security advisory for the dependency including the affected functions. You can then check whether your code calls the impacted functions. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security advisory.

{% ifversion dependabot-alerts-vulnerable-calls %}

For supported languages, {% data variables.product.prodname_dependabot %} detects calls to vulnerable functions for you. When you view an alert labeled as "Vulnerable call", the details include the name of the function and a link to the code that calls it. Often you will be able to take decisions based on this information, without exploring further.

{% endif %}

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (above).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request.
  ![Create {% data variables.product.prodname_dependabot %} security update button](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
{% elsif ghes < 3.3 or ghae %}
1. You can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to the manifest or lock file to a secure version.
{% endif %}
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request. 

{% ifversion fpt or ghec or ghes > 3.2 %}
   Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
{% endif %}

## Dismissing {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Tip:** You can only dismiss open alerts.
{% endtip %}

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-dependabot-alerts)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% ifversion reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %}
   ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)
{% ifversion dependabot-bulk-alerts %}

### Dismissing multiple alerts at once

1. View the open {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Optionally, filter the list of alerts by selecting a dropdown menu, then clicking the filter that you would like to apply. You can also type filters into the search bar.
3. To the left of each alert title, select the alerts that you want to dismiss.
   ![Screenshot of open alerts with checkboxes emphasized](/assets/images/help/graphs/select-multiple-alerts.png)
4. Optionally, at the top of the list of alerts, select all alerts on the page.
   ![Screenshot of all open alerts selected](/assets/images/help/graphs/select-all-alerts.png)
5. Select the "Dismiss alerts" dropdown, and click a reason for dismissing the alerts.
   ![Screenshot of open alerts page with "Dismiss alerts" drop-down emphasized](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Viewing and updating closed alerts

{% tip %}

**Tip:** You can only reopen alerts that have been previously dismissed. Closed alerts that have already been fixed cannot be reopened.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**.{% ifversion dependabot-bulk-alerts %}
  ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){% else %}
  ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png){% endif %}
1. Click the alert that you would like to view or update.{% ifversion dependabot-bulk-alerts %}
  ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){% else %}
  ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){% endif %}
2. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. Alerts that have already been fixed cannot be reopened.
  ![Screenshot showing the "Reopen" button](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reopening multiple alerts at once

1. View the closed {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Viewing and updating closed alerts](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (above).
2. To the left of each alert title, select the alerts that you want to reopen.
   ![Screenshot of closed alerts with checkboxes emphasized](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Optionally, at the top of the list of alerts, select all closed alerts on the page.
   ![Screenshot of closed alerts with all alerts selected](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Click **Reopen** to reopen the alerts. Alerts that have already been fixed cannot be reopened.
   ![Screenshot of closed alerts with "Reopen" button emphasized](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
