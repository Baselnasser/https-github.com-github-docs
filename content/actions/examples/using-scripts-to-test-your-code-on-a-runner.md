---
title: Using scripts to test your code on a runner
shortTitle: Using scripts to test your code on a runner
intro: 'How to use essential {% data variables.product.prodname_actions %} features for continuous integration (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
showMiniToc: false
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

- [Example overview](#example-overview)
- [Features used in this example](#features-used-in-this-example)
- [Example workflow](#example-workflow)
- [Understanding the example](#understanding-the-example)
- [Next steps](#next-steps)

## Example overview

{% data reusables.actions.example-workflow-intro-ci %} When this workflow is triggered, it automatically runs a script that checks whether the {% data variables.product.prodname_dotcom %} Docs site has any broken links.

{% data reusables.actions.example-diagram-intro %}

![Overview diagram of workflow steps](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Features used in this example

{% data reusables.actions.example-table-intro %}

| **Feature**  | **Implementation** |
| --- | --- | 
{% data reusables.actions.push-table-entry %}
{% data reusables.actions.pull-request-table-entry %}
{% data reusables.actions.workflow-dispatch-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.concurrency-table-entry %}
| Running the job on different runners, depending on the repository: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Using a third-party action: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)|
| Running a script on the runner: | Using `./script/rendered-content-link-checker.mjs` |

## Example workflow

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml).

{% data reusables.actions.note-understanding-example %}

<table style="width:350px">
<thead>
  <tr>
    <th style="width:100%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'

# **What it does**: Renders the content of every page and check all internal links.
# **Why we have it**: To make sure all links connect correctly.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  check-links:
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      - name: Install
        run: npm ci

      # Creates file "${{ env.HOME }}/files.json", among others
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # For verification
      - name: Show files changed
        run: cat $HOME/files.json

      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</tr>
</td>
</tbody>
</table>

## Understanding the example

{% data reusables.actions.example-explanation-table-intro %}

<table style="width:350px">
<thead>
  <tr>
    <th style="width:60%"><b>Code</b></th>
    <th style="width:40%"><b>Explanation</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
```
</td>
<td>

The `on` keyword lets you define the events that trigger when the workflow is run. You can define multiple events here. For more information, see "[Triggering a workflow](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Add the `workflow_dispatch` event if you want to be able to manually run this workflow from the UI. For more information, see [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - main
```
</td>
<td>

Add the `push` event, so that the workflow runs automatically every time a commit is pushed to a branch called `main`. For more information, see [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Add the `pull_request` event, so that the workflow runs automatically every time a pull request is created or updated. For more information, see [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

Modifies the default permissions granted to `GITHUB_TOKEN`. This will vary depending on the needs of your workflow. For more information, see "[Assigning permissions to jobs](/actions/using-jobs/assigning-permissions-to-jobs)."
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
</td>
<td>

Creates a concurrency group for specific events, and uses the `||` operator to define fallback values. For more information, see "[Using concurrency](/actions/using-jobs/using-concurrency)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Cancels any currently running job or workflow in the same concurrency group.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Groups together all the jobs that run in the workflow file.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

Defines a job with the ID `check-links` that is stored within the `jobs` key.
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}
```
{% endraw %}
</td>
<td>

Configures the job to run on a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner, depending on the repository running the workflow. In this example, the job will run on a self-hosted runner if the repository is named `docs-internal` and is within the `github` organization. If the repository doesn't match this path, then it will run on an `ubuntu-latest` runner hosted by {% data variables.product.prodname_dotcom %}. For more information on these options see "[Choosing the runner for a job](/actions/using-jobs/choosing-the-runner-for-a-job)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Groups together all the steps that will run as part of the `check-links` job. Each job in a workflow has its own `steps` section.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

The `uses` keyword tells the job to retrieve the action named `actions/checkout`. This is an action that checks out your repository and downloads it to the runner, allowing you to run actions against your code (such as testing tools). You must use the checkout action any time your workflow will run against the repository's code or you are using an action defined in the repository.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
```
</td>
<td>

This step uses the `actions/setup-node` action to install the specified version of the Node.js software package on the runner, which gives you access to the `npm` command.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Install
        run: npm ci
```
</td>
<td>

The `run` keyword tells the job to execute a command on the runner. In this case, `npm ci` is used to install the npm software packages for the project.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
```
</td>
<td>

Uses the `trilom/file-changes-action` action to gather all the changed files. This example is pinned to a specific version of the action, using the `a6ca26c14274c33b15e6499323aac178af06ad4b` SHA.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Show files changed
        run: cat $HOME/files.json
```
</td>
<td>

Lists the contents of `files.json`. This will be visible in the workflow run's log, and can be useful for debugging.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
```
</td>
<td>

This step uses `run` command to execute a script that is stored in the repository at `script/rendered-content-link-checker.mjs` and passes all the parameters it needs to run.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</td>
<td>

This step also uses `run` command to execute a script that is stored in the repository at `script/rendered-content-link-checker.mjs` and passes a different set of parameters.
</tr>

</tbody>
</table>

## Next steps

{% data reusables.actions.learning-actions %}
