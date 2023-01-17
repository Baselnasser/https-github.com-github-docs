---
title: OAuth Apps
allowTitleToDifferFromFilename: true
intro: 'Use the REST API to interact with {% data variables.product.prodname_oauth_apps %}'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About {% data variables.product.prodname_oauth_apps %}

You can use these endpoints to manage the OAuth tokens that {% data variables.product.prodname_oauth_app %} uses to access people's accounts on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.