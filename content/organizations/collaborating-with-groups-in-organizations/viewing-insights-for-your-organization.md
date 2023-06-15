---
title: Viewing insights for your organization
intro: 'Organization insights provide data about your organization''s activity, contributions, and dependencies.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
---

{% note %}

**Note:** To view organization insights, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## About organization insights

You can use organization activity insights to help you better understand how members of your organization are using {% data variables.product.product_name %} to collaborate and work on code. Dependency insights can help you track, report, and act on your organization's open source usage.

## Viewing organization activity insights

{% note %}

**Note:** Organization activity insights are currently in public beta and subject to change.

{% endnote %}

With organization activity insights you can view weekly, monthly, and yearly data visualizations of your entire organization or specific repositories, including issue and pull request activity, top languages used, and cumulative information about where your organization members spend their time.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.insights %}
1. Optionally, to view data for the last 1 week, 1 month, or 1 year, in the upper-right corner of the page, select the **Period** dropdown menu, then click a period.
1. Optionally, to filter by repositories, in the upper-right corner of the page, select the **Repositories** dropdown menu, click up to three repositories, then click **Apply**.

## Viewing organization dependency insights

{% note %}

**Note:** Please make sure you have enabled the [Dependency Graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% endnote %}

With dependency insights you can view vulnerabilities, licenses, and other important information for the open source projects your organization depends on.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.insights %}
1. In the "Insights" sidebar, click **Dependencies**.
1. Optionally, to view dependency insights for all your organizations, click **My organizations**.

   ![Screenshot of the "Dependency insights" page. A button, labeled "My organizations," is outlined in dark orange.](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
1. To filter by a vulnerability status, a license, or a combination of the two, click the results in the **Open security advisories** and **Licenses** graphs.
1. To see which dependents in your organization are using each library, next to a vulnerability, click {% octicon "package" aria-hidden-"true" %} **X dependents**.

## Further reading
- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)"
- "[AUTOTITLE](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)"{% ifversion ghec %}
- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)"{% endif %}
