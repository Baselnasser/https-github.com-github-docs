---
title: Code security documentation
shortTitle: Code security
intro: 'Build security into your {% data variables.product.prodname_dotcom %} workflow with features to keep secrets and vulnerabilities out of your codebase{% ifversion not ghae %}, and to maintain your software supply chain{% endif %}.'
introLinks:
  overview: /code-security/getting-started/github-security-features
featuredLinks:
  startHere:
    - /code-security/getting-started/securing-your-repository
    - /code-security/getting-started/securing-your-organization
    - '{% ifversion fpt or ghec %}/code-security/security-advisories/repository-security-advisories/creating-a-repository-security-advisory{% endif %}'
    - '{% ifversion ghes or ghae %}/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository{% endif%}'
  guideCards:
    - '{% ifversion fpt or ghec or ghes %}/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates{% endif %}'
    - '{% ifversion fpt or ghec or ghes %}/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates{% endif %}'
    - '{% ifversion fpt or ghec or ghes %}/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository{% endif %}'
    - '{% ifversion ghae %}/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories{% endif %}'
    - '{% ifversion ghae %}/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github{% endif %}'
    - '{% ifversion ghae %}/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system{% endif %}'
    - /code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview
  popular:
    - '{% ifversion ghes %}/admin/release-notes{% endif %}'
    - /code-security/dependabot/dependabot-alerts/about-dependabot-alerts
    - /code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities
    - /code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot
    - /code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file
    - /code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot
    - '{% ifversion ghae %}/code-security/secret-scanning/about-secret-scanning{% endif %}'
    - /code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies
    - '{% ifversion ghae %}/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages{% endif %}'
    - '{% ifversion ghae %}/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow{% endif %}'
    - '{% ifversion ghae %}/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container{% endif %}'
changelog:
  label: security-and-compliance
  versions:
    fpt: '*'
    ghec: '*'
layout: product-landing
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
children:
  - /getting-started
  - /adopting-github-advanced-security-at-scale
  - /secret-scanning
  - /code-scanning
  - /codeql-cli
  - /security-advisories
  - /supply-chain-security
  - /dependabot
  - /security-overview
  - /guides
---
