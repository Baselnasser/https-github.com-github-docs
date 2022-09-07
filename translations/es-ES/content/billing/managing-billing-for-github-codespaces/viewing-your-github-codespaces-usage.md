---
title: Viewing your GitHub Codespaces usage
shortTitle: Ver tu uso
intro: 'Puedes ver los minutos de cálculo y almacenamiento que utilizan los {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
---

## Visualizar el uso de {% data variables.product.prodname_github_codespaces %} para tu organización

Los propietarios de la organización y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_github_codespaces %} para una organización. Para las organizaciones que administra una cuenta empresarial, los propietarios de estas pueden ver el uso de los {% data variables.product.prodname_codespaces %} en la página de facturación de la misma y los administradores empresariales pueden ver el uso de toda la empresa.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. Filter the report to show only rows that mention "Codespaces" in the `Product` field.

   ![A usage report filtered for Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Visualizar el uso de {% data variables.product.prodname_codespaces %} para tu cuenta empresarial

Los propietarios de empresa y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_codespaces %} para una cuenta empresarial.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "{% data variables.product.prodname_codespaces %}", ve los detalles de uso de cada organización en tu cuenta empresarial.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
