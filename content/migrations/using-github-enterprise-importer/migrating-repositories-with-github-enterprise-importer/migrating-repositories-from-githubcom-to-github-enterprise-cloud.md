---
title: Migrating repositories from GitHub.com to GitHub Enterprise Cloud
shortTitle: GitHub.com to Enterprise Cloud
intro: 'You can migrate repositories from {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_cloud %}, using the {% data variables.product.prodname_cli %} or the GraphQL API.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
defaultTool: cli
redirect_from:
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-enterprise-cloud/migrating-repositories-from-githubcom-to-github-enterprise-cloud
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-githubcom-to-github-enterprise-cloud
---

{% data reusables.enterprise-migration-tool.release-phase %}

## About repository migrations with {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.tool-options %}

{% cli %}
{% data reusables.enterprise-migration-tool.gei-tool-switcher-api %}
{% endcli %}
{% api %}
{% data reusables.enterprise-migration-tool.gei-tool-switcher-cli %}
{% endapi %}

## Prerequisites

{% data reusables.enterprise-migration-tool.migration-prerequisites %}
- You must be either an organization owner or be granted the migrator role for both the source and destination organizations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."

{% api %}

## Step 0: Get ready to use the {% data variables.product.prodname_dotcom %} GraphQL API

{% data reusables.enterprise-migration-tool.migration-query-method %}

## Step 1: Get the `ownerId` for your migration destination

{% data reusables.enterprise-migration-tool.get-destination-ownerId-ec %}

{% data reusables.enterprise-migration-tool.migration-destination-query %}

## Step 2: Identify where you're migrating from

{% data reusables.enterprise-migration-tool.identify-migration-source-intro %}

Your migration source is an organization on {% data variables.product.prodname_dotcom_the_website %}.

#### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: "https://github.com", ownerId: $ownerId, type: GITHUB_ARCHIVE}) {
    migrationSource {
      id
      name
      url
      type
    }
  }
}
```

{% data reusables.enterprise-migration-tool.type-note-github-archive %}

{% data reusables.enterprise-migration-tool.createMigrationSource-table-ec %}

#### `createMigrationSource` response

```json
{
  "data": {
    "createMigrationSource": {
      "migrationSource": {
        "id": "MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA",
        "name": "GitHub.com Source",
        "url": "https://github.com",
        "type": "GITHUB_SOURCE"
      }
    }
  }
}
```

In this example, `MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA` is the migration source ID, which we'll use in the next step.

## Step 3: Start your repository migration

{% data reusables.enterprise-migration-tool.start-repository-migration-ec %}

#### `startRepositoryMigration` mutation

```graphql
mutation startRepositoryMigration (
  $sourceId: ID!,
  $ownerId: ID!,
  $sourceRepositoryUrl: URI!,
  $repositoryName: String!,
  $continueOnError: Boolean!,
  $accessToken: String!,
  $githubPat: String!,
  $targetRepoVisibility: String!
){
  startRepositoryMigration( input: {
    sourceId: $sourceId,
    ownerId: $ownerId,
    repositoryName: $repositoryName,
    continueOnError: $continueOnError,
    accessToken: $accessToken,
    githubPat: $githubPat,
    targetRepoVisibility: $targetRepoVisibility
    sourceRepositoryUrl: $sourceRepositoryUrl,
  }) {
    repositoryMigration {
      id
      migrationSource {
        id
        name
        type
      }
      sourceUrl
    }
  }
}
```

{% data reusables.enterprise-migration-tool.startRepositoryMigration-table-ec %}
| `sourceRepositoryUrl` | The URL of your source repository, using the format `https://github.com/{organization}/{repository}`.

{% data reusables.enterprise-migration-tool.next-check-status %}

## Step 4: Check the status of your migration

{% data reusables.enterprise-migration-tool.check-migration %}

## Step 5: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-log %}

{% endapi %}

{% cli %}

## Step 1: Install the {% data variables.product.prodname_gei_cli %}

{% data reusables.enterprise-migration-tool.install-gei-extension-intro %}

{% data reusables.enterprise-migration-tool.install-github-cli %}
{% data reusables.enterprise-migration-tool.install-gei-extension %}

{% data reusables.enterprise-migration-tool.gei-help-flag %}

## Step 2: Update the {% data variables.product.prodname_gei_cli %}

{% data reusables.enterprise-migration-tool.update-gei-cli %}

## Step 3: Set environment variables

{% data reusables.enterprise-migration-tool.set-env-variables-gei %}

{% data reusables.enterprise-migration-tool.create-pats %}
{% data reusables.enterprise-migration-tool.env-variables-gei %}

## Step 4: Generate a migration script

{% data reusables.enterprise-migration-tool.generate-migration-script %}

### Generating a migration script

{% data reusables.enterprise-migration-tool.gh-gei-generate-script %}

```shell{:copy}
gh gei generate-script --github-source-org SOURCE --github-target-org DESTINATION --output FILENAME
```

{% data reusables.enterprise-migration-tool.download-migration-logs-flag %}

{% data reusables.enterprise-migration-tool.generate-script-table %}

### Reviewing the migration script

{% data reusables.enterprise-migration-tool.review-migration-script %}

## Step 5: Migrate repositories

{% data reusables.enterprise-migration-tool.migrate-repos-gei %}

### Migrate multiple repositories

{% data reusables.enterprise-migration-tool.migrate-multiple-repos %}

### Migrate a single repository

{% data reusables.enterprise-migration-tool.gei-migrate-repo %}

```shell{:copy}
gh gei migrate-repo --github-source-org SOURCE --source-repo CURRENT-NAME --github-target-org DESTINATION --target-repo NEW-NAME --wait
```

{% data reusables.enterprise-migration-tool.wait-flag %}

{% data reusables.enterprise-migration-tool.skip-releases %}

{% data reusables.enterprise-migration-tool.migrate-repo-table-ec %}

## Step 6: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-logs %}

{% endcli %}
