---
title: GitHub Actions Cache
allowTitleToDifferFromFilename: true
shortTitle: Cache
intro: 'Use the REST API to interact with the cache for repositories in {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.4'
---

## About the cache in {% data variables.product.prodname_actions %}

You can use the REST API to query and manage the cache for repositories in {% data variables.product.prodname_actions %}. {% ifversion actions-cache-management %}You can also install a {% data variables.product.prodname_cli %} extension to manage your caches from the command line. {% endif %}For more information, see "[Caching dependencies to speed up workflows](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#managing-caches)."
