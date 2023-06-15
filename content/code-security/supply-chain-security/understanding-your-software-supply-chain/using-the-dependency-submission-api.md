---
title: Using the Dependency submission API
intro: 'You can use the Dependency submission API to submit dependencies for projects, such as the dependencies resolved when a project is built or compiled.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
---

{% data reusables.dependency-submission.dependency-submission-api-beta %}

## About the Dependency submission API

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the dependency submission API in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit. Snapshots can be generated from your dependencies detected at build time or from a software bill of materials (SBOM). There are {% data variables.product.prodname_actions %} that support either of these use cases. For more information about the Dependency submission API, see the [Dependency submission REST API documentation](/rest/dependency-graph/dependency-submission).

## Submitting dependencies at build-time

You can use the Dependency submission API in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built.

### Using pre-made actions

The simplest way to use the Dependency submission API is by adding a pre-made action to your repository that will gather and convert the list of dependencies to the required snapshot format and submit the list to the API. Actions that complete these steps for various ecosystems are available on {% data variables.product.prodname_marketplace %}. Some of these actions are provided by third parties. You can find links to the currently available actions in the table below.

Ecosystem | Action | Maintained by {% data variables.product.prodname_dotcom %}
--- | --- | --- |
Go | [Go Dependency Submission](https://github.com/marketplace/actions/go-dependency-submission) | {% octicon "check" aria-label="Maintained by {% data variables.product.prodname_dotcom %}" %} |
Gradle | [Gradle Dependency Submission](https://github.com/marketplace/actions/gradle-dependency-submission) | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |
Maven | [Maven Dependency Tree Dependency Submission](https://github.com/marketplace/actions/maven-dependency-tree-dependency-submission) | {% octicon "check" aria-label="Maintained by {% data variables.product.prodname_dotcom %}" %} |
Mill | [Mill Dependency Submission](https://github.com/marketplace/actions/mill-dependency-submission) | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |
Scala | [Sbt Dependency Submission](https://github.com/marketplace/actions/sbt-dependency-submission) | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |


For example, the following [Go Dependency Submission](https://github.com/actions/go-dependency-submission) workflow calculates the dependencies for a Go build-target (a Go file with a `main` function) and submits the list to the Dependency submission API.

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main

# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}

      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"

      - name: Run snapshot action
        uses: actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```

### Creating your own action

Alternatively, you can write your own action to submit dependencies for your project at build-time. Your workflow should:

  1. Generate a list of dependencies for your project.
  2. Translate the list of dependencies into the snapshot format accepted by the Dependency submission API. For more information about the format, see the body parameters for the "Create a repository snapshot" API operation in the [Dependency submission REST API documentation](/rest/dependency-graph/dependency-submission).
  3. Submit the formatted list of dependencies to the Dependency submission API.

{% data variables.product.product_name %} maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you build your own GitHub Action for submitting dependencies to the Dependency submission API. For more information about writing an action, see "[AUTOTITLE](/actions/creating-actions)".

## Generating and submitting a software bill of materials (SBOM)

{% data reusables.dependency-graph.sbom-intro %}

{% ifversion dependency-graph-sbom-export %}
To generate an SBOM, you can use:
- the {% data variables.product.prodname_dotcom %} user interface.  For more information about how to export an SBOM for a repository using information from the dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository)."
- the REST API. For more information, see "[AUTOTITLE](/rest/dependency-graph/sboms)."
- {% data variables.product.prodname_actions %}. The following actions will generate an SBOM for your repository and attach it as a workflow artifact which you can download and use in other applications. For more information about downloading workflow artifacts, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)."
{% else %}
You can use {% data variables.product.prodname_actions %} to generate an SBOM. The following actions will generate an SBOM for your repository and attach it as a workflow artifact which you can download and use in other applications. For more information about downloading workflow artifacts, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)."
{% endif %}

Action | Details | <nobr>Maintained by {% data variables.product.prodname_dotcom %}</nobr>
--- | --- | ---
[SBOM-generator-action](https://github.com/marketplace/actions/sbom-generator-action) | Uses the information in your dependency graph to generate an SPDX SBOM | {% octicon "check" aria-label="Maintained by {% data variables.product.prodname_dotcom %}" %} |
[Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) | Uses [Syft](https://github.com/anchore/syft) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/anchore/syft#supported-ecosystems)  | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |
[sbom-tool by Microsoft](https://github.com/microsoft/sbom-tool) | Scans your dependencies and creates an SPDX compatible SBOM | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |

You can then upload and submit the SBOM to the dependency submission API using one of the following actions so that you can receive {% data variables.product.prodname_dependabot_alerts %} on any dependencies that have known vulnerabilities. Actions that appear in both tables can be configured to both generate and submit an SBOM.

Action | Details | <nobr>Maintained by {% data variables.product.prodname_dotcom %}</nobr>
---  | --- | ---
[SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) | Uses [Microsoft's SBOM Tool](https://github.com/microsoft/sbom-tool) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/microsoft/component-detection/blob/main/docs/feature-overview.md) | {% octicon "check" aria-label="Maintained by {% data variables.product.prodname_dotcom %}" %} |
[Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) | Uses [Syft](https://github.com/anchore/syft) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/anchore/syft#supported-ecosystems)  | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |
[SBOM Dependency Submission Action](https://github.com/marketplace/actions/sbom-submission-action)| Uploads a CycloneDX SBOM to the dependency submission API | {% octicon "x" aria-label="Not maintained by {% data variables.product.prodname_dotcom %}" %} |

For example, the following [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) workflow calculates the dependencies for a repository, generates an exportable SBOM in SPDX 2.2 format, and submits it to the dependency submission API.

```yaml

name: SBOM upload

on:
  workflow_dispatch:
  push:
    branches: ["main"]

jobs:
  SBOM-upload:

    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write

    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Generate SBOM
      # generation command documentation: https://github.com/microsoft/sbom-tool#sbom-generation
      run: |
        curl -Lo $RUNNER_TEMP/sbom-tool https://github.com/microsoft/sbom-tool/releases/latest/download/sbom-tool-linux-x64
        chmod +x $RUNNER_TEMP/sbom-tool
        $RUNNER_TEMP/sbom-tool generate -b . -bc . -pn ${{ github.repository }} -pv 1.0.0 -ps OwnerName -nsb https://sbom.mycompany.com -V Verbose
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: sbom
        path: _manifest/spdx_2.2
    - name: SBOM upload
      uses: advanced-security/spdx-dependency-submission-action@v0.0.1
      with:
        filePath: "_manifest/spdx_2.2/"
```
