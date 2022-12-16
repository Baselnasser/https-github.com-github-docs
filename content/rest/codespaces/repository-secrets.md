---
title: Codespaces repository secrets
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 'Use the REST API to manage secrets for repositories that the user has access to in a codespace.'
permissions: Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About {% data variables.product.prodname_codespaces %} repository secrets

You can create, list, and delete secrets (such as access tokens for cloud services) for repositories that the user has access to. These secrets are made available to the codespace at runtime. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."
