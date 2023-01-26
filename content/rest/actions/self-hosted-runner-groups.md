---
title: Self-hosted runner groups
intro: 'Use the REST API to interact with self-hosted runner groups for {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About self-hosted runner groups in {% data variables.product.prodname_actions %}

You can use the REST API to manage groups of self-hosted runners in {% data variables.product.prodname_actions %}. For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `administration` permission for repositories or the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises to use these endpoints.
