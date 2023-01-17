# Release notes for GitHub Enterprise Server

Rendered here: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Adding release notes to a deprecated GitHub Enterprise Server release

During the deprecation of a GitHub Enterprise Server release per [this issue template](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md), Docs Engineering removes the YAML files with the version's release notes from `github/docs-internal`.

If a stakeholder requests an update to deprecated release notes, you can update the notes by completing the following steps.

1. Check out the long-running branch <code>enterprise-<em>VERSION</em>-release</code> and create a PR to update the release notes for the deprecated version on that branch.
2. Reach out to #docs-engineering to request a re-scrape and update of the content stored in Azure. See the section about re-scraping content in the [deprecation checklist](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md).

## How it works

### Placeholder content file

A content file exists in `content/admin/release-notes.md`. It has a special frontmatter property `layout: release-notes` and no Markdown content. The source of the release notes comes from YAML data.

### YAML source

The source data for the release notes lives in this directory (`data/release-notes/enterprise-server`).

The directories are named by GHES release number (with a hyphen instead of a period).

The YAML files in each directory are named by patch number. Some patch filenames may end with `-rc<num>.yml`, which means it's a release candidate. A release candidate file also requires `release_candidate: true` in the YAML data.

Release notes of deprecated GHES versions (see `lib/enterprise-server-releases.js`) are **not** removed from the site and will always be displayed alongside currently supported versions.

Note that patch files can be deprecated individually (i.e., hidden on the docs site) by an optional `deprecated: true` property.

### Middleware processing

The YAML data is processed and sorted by `middleware/contextualizers/ghes-release-notes.js` and added to the `context` object.

### Layouts

The `context` object data is rendered by `components/release-notes`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss`.

### Schema

The schema that validates the YAML data lives in `tests/helpers/schemas/release-notes-schema.js`. See the schema file to find out the required and optional properties.

The schema is exercised by a test in `tests/linting/lint-files.js`. The test will fail if the data does not pass validation.
