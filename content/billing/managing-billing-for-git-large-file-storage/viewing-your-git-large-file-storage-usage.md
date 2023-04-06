---
title: Viewing your Git Large File Storage usage
intro: 'You can audit your account''s monthly bandwidth quota and remaining storage for {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-git-large-file-storage-usage
  - /articles/viewing-storage-and-bandwidth-usage-for-a-personal-account
  - /articles/viewing-storage-and-bandwidth-usage-for-an-organization
  - /articles/viewing-your-git-large-file-storage-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - LFS
  - Organizations
  - User account
shortTitle: View Git LFS usage
---
{% data reusables.large_files.owner_quota_only %} {% data reusables.large_files.does_not_carry %}

## Viewing storage and bandwidth usage for a personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.lfs-data %}

## Viewing storage and bandwidth usage for an organization

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.lfs-data %}

{% ifversion ghec %}
## Viewing storage and bandwidth for an enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Scroll to the "Git LFS" section.
{% endif %}

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage)"
- "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage)"
