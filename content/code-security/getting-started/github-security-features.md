---
title: GitHub security features
intro: 'An overview of {% data variables.product.prodname_dotcom %} security features.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

## About {% data variables.product.prodname_dotcom %}'s security features

{% data variables.product.prodname_dotcom %} has security features that help keep code and secrets secure in repositories and across organizations. {% data reusables.advanced-security.security-feature-availability %}

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that you can view, search, and filter. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Available for all repositories
### Security policy

Make it easy for your users to confidentially report security vulnerabilities they've found in your repository. For more information, see "[AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository)."

{% ifversion fpt or ghec %}
### Security advisories

Privately discuss and fix security vulnerabilities in your repository's code. You can then publish a security advisory to alert your community to the vulnerability and encourage community members to upgrade. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)."

{% endif %}
{% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} and security updates

View alerts about dependencies that are known to contain security vulnerabilities, and choose whether to have pull requests generated automatically to update these dependencies. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

View alerts about dependencies that are known to contain security vulnerabilities, and manage these alerts. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
{% endif %}

{% ifversion fpt or ghec or ghes %}
### {% data variables.product.prodname_dependabot %} version updates

Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."
{% endif %}

### Dependency graph
The dependency graph allows you to explore the ecosystems and packages that your repository depends on and the repositories and packages that depend on your repository.

You can find the dependency graph on the **Insights** tab for your repository. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% ifversion dependency-graph-sbom-export %}{% data reusables.dependency-graph.sbom-export %}{% endif %}

{% ifversion security-overview-displayed-alerts %}
### Security overview

Security overview allows you to review security configurations and alerts, making it easy to identify the repositories and organizations at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."

{% else %}
### Security overview for repositories
Security overview shows which security features are enabled for the repository, and lets you configure any available security features that are not already enabled.
{% endif %}


{% ifversion fpt or ghec %}
## Available for free public repositories

### {% data variables.secret-scanning.partner_alerts_caps %}

Automatically detect leaked secrets across all public repositories, as well as public npm packages. {% data variables.product.company_short %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% endif %}
## Available with {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}
The following {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can use the full set of features in any of their repositories. For a list of the features available with {% data variables.product.prodname_ghe_cloud %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %}
Many {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations within an enterprise that have a {% data variables.product.prodname_GH_advanced_security %} license can use the following features on all their repositories. {% data reusables.advanced-security.more-info-ghas %}

{% data reusables.advanced-security.ghas-trial %}

{% elsif ghes %}
{% data variables.product.prodname_GH_advanced_security %} features are available for enterprises with a license for {% data variables.product.prodname_GH_advanced_security %}. The features are restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %}
{% data variables.product.prodname_GH_advanced_security %} features are available for repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### {% data variables.product.prodname_code_scanning_caps %}

Automatically detect security vulnerabilities and coding errors in new or modified code. Potential problems are highlighted, with detailed information, allowing you to fix the code before it's merged into your default branch. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)."

### {% data variables.secret-scanning.user_alerts_caps %}

Automatically detect tokens or credentials that have been checked into a repository. You can view alerts for any secrets that {% data variables.product.company_short %} finds in your code, in the **Security** tab of the repository, so that you know which tokens or credentials to treat as compromised. For more information, see {% ifversion fpt or ghec %}"[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users){% elsif ghes %}"[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-on-github-enterprise-server){% elsif ghae %}"[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-on-github-ae){% endif %}."

### Dependency review

Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Security overview for organizations{% ifversion ghes > 3.4 or ghae > 3.4 %}, enterprises,{% endif %} and teams

Review the security configuration and alerts for your organization and identify the repositories at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."
{% endif %}

## Further reading
- "[AUTOTITLE](/get-started/learning-about-github/githubs-products)"
- "[AUTOTITLE](/get-started/learning-about-github/github-language-support)"
