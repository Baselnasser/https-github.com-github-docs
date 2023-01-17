---
title: Self-hosted runners
intro: 'Use the REST API to interact with self-hosted runners in {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 
## About self-hosted runners in {% data variables.product.prodname_actions %}

You can use the REST API to register, view, and delete self-hosted runners in {% data variables.product.prodname_actions %}. {% data reusables.actions.about-self-hosted-runners %} For more information, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `administration` permission for repositories the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises to use these endpoints.
