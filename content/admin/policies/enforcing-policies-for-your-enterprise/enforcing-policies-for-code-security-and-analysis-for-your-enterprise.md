---
title: Enforcing policies for code security and analysis for your enterprise
intro: 'You can enforce policies to manage the use of {% ifversion security-feature-enablement-policies %}code security and analysis{% else %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features within your enterprise''s organizations.'
permissions: 'Enterprise owners can enforce {% ifversion security-feature-enablement-policies %}code security and analysis{% endif %} policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Policies
  - Secret scanning
  - Security
redirect_from:
  - /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise
shortTitle: Code security & analysis
---
{% ifversion security-feature-enablement-policies %}
## About policies for code security and analysis in your enterprise

You can enforce policies to manage the use of code security and analysis features within organizations owned by your enterprise. You can allow or disallow people with admin access to a repository to enable or disable the security and analysis features.
{% else %}
## About policies for {% data variables.product.prodname_GH_advanced_security %} in your enterprise
{% endif %}

{% data reusables.advanced-security.ghas-helps-developers %} For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."

{% ifversion ghes or ghec %}If you purchase a license for {% data variables.product.prodname_GH_advanced_security %}, any{% else %}Any{% endif %} organization{% ifversion ghec %} owned by your enterprise{% endif %} on {% data variables.location.product_location %} can use {% data variables.product.prodname_advanced_security %} features. You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} use {% data variables.product.prodname_advanced_security %}.

{% ifversion security-feature-enablement-policies %}
## Enforcing a policy to manage the use of {% data variables.product.prodname_dependabot_alerts %} in your enterprise

Across all organizations owned by your enterprise, you can allow members with admin permissions for repositories to enable or disable {% data variables.product.prodname_dependabot_alerts %} and change {% data variables.product.prodname_dependabot_alerts %} settings.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "Change {% data variables.product.prodname_dependabot_alerts %} settings", use the dropdown menu and choose a policy.

   ![Screenshot of "Change Dependabot alert settings" dropdown](/assets/images/help/enterprises/change-dependabot-alerts-settings.png)

{% endif %}

## Enforcing a policy for the use of {% data variables.product.prodname_GH_advanced_security %} in your enterprise's organizations

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}{% else %}
{% data reusables.enterprise-accounts.advanced-security-policies %}{% endif %}{% ifversion security-feature-enablement-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies section, under "Availability", select the dropdown menu and click a policy for the organizations owned by your enterprise.

   ![Screenshot of "Availability" dropdown](/assets/images/help/enterprises/advanced-security-policies-availability.png){% else %}

{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %}{% endif %}
{% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}

{% ifversion security-feature-enablement-policies %}
## Enforcing a policy to manage the use of {% data variables.product.prodname_GH_advanced_security %} features in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage the use of {% data variables.product.prodname_GH_advanced_security %} features in the repositories. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies section, under "Enable or disable {% data variables.product.prodname_GH_advanced_security %}", use the dropdown menu and choose a policy.

   ![Screenshot of the "Enable or disable {% data variables.product.prodname_GH_advanced_security %}" dropdown](/assets/images/help/enterprises/advanced-security-policies-enable-or-disable.png)

## Enforcing a policy to manage the use of {% data variables.product.prodname_secret_scanning %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage and configure {% data variables.product.prodname_secret_scanning %} for the repositories. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies section, under "Change {% data variables.product.prodname_secret_scanning %} settings", use the dropdown menu and choose a policy.

   ![Screenshot of the "Change {% data variables.product.prodname_secret_scanning %} settings" dropdown](/assets/images/help/enterprises/advanced-security-policies-secret-scanning.png)

{% endif %}
