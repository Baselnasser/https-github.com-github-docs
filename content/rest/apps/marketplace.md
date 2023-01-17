---
title: GitHub Marketplace
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: 'Use the REST API to interact with {% data variables.product.prodname_marketplace %}'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
---

## About {% data variables.product.prodname_marketplace %}

For more information about {% data variables.product.prodname_marketplace %}, see "[GitHub Marketplace](/marketplace/)."

These endpoints allow you to see which customers are using a pricing plan, see a customer's purchases, and see if an account has an active subscription.

### Testing with stubbed endpoints

You can [test your {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) with **stubbed data**. Stubbed data is hard-coded, fake data that will not change based on actual subscriptions.

To test with stubbed data, use a stubbed endpoint in place of its production counterpart. This allows you to test whether the API logic succeeds before listing {% data variables.product.prodname_github_apps %} on {% data variables.product.prodname_marketplace %}.

Make sure to replace stubbed endpoints with production endpoints before deploying your {% data variables.product.prodname_github_app %}.
