#!/usr/bin/env node

import * as github from '@actions/github'
import { setOutput } from '@actions/core'

import { getContents } from '../../script/helpers/git-utils.js'
import parse from '../../lib/read-frontmatter.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { allVersionShortnames } from '../../lib/all-versions.js'

const { GITHUB_TOKEN, APP_URL } = process.env
const context = github.context

if (!GITHUB_TOKEN) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

if (!APP_URL) {
  throw new Error(`APP_URL environment variable not set`)
}

const PROD_URL = 'https://docs.github.com'
const octokit = github.getOctokit(GITHUB_TOKEN)

// get the list of file changes from the PR
const response = await octokit.rest.repos.compareCommitsWithBasehead({
  owner: context.repo.owner,
  repo: context.payload.repository.name,
  basehead: `${context.payload.pull_request.base.sha}...${context.payload.pull_request.head.sha}`,
})

const { files } = response.data

let markdownTable =
  '| **Source** | **Preview** | **Production** | **What Changed** |\n|:----------- |:----------- |:----------- |:----------- |\n'

const pathPrefix = 'content/'
const articleFiles = files.filter(
  ({ filename }) => filename.startsWith(pathPrefix) && !filename.endsWith('/index.md')
)
for (const file of articleFiles) {
  const sourceUrl = file.blob_url
  const fileName = file.filename.slice(pathPrefix.length)
  const fileUrl = fileName.slice(0, fileName.lastIndexOf('.'))

  // get the file contents and decode them
  // this script is called from the main branch, so we need the API call to get the contents from the branch, instead
  const fileContents = await getContents(
    context.repo.owner,
    context.payload.repository.name,
    context.payload.pull_request.head.sha,
    file.filename
  )

  // parse the frontmatter
  const { data } = parse(fileContents)

  let contentCell = ''
  let previewCell = ''
  let prodCell = ''

  if (file.status === 'added') contentCell = `New file: `
  contentCell += `[\`${fileName}\`](${sourceUrl})`

  try {
    // the try/catch is needed because getApplicableVersions() returns either [] or throws an error when it can't parse the versions frontmatter
    // try/catch can be removed if docs-engineering#1821 is resolved
    // i.e. for feature based versioning, like ghae: 'issue-6337'
    const fileVersions = getApplicableVersions(data.versions)

    for (const plan in allVersionShortnames) {
      // plan is the shortName (i.e., fpt)
      // allVersionShortNames[plan] is the planName (i.e., free-pro-team)

      // walk by the plan names since we generate links differently for most plans
      const versions = fileVersions.filter((fileVersion) =>
        fileVersion.includes(allVersionShortnames[plan])
      )

      if (versions.length === 1) {
        // for fpt, ghec, and ghae

        if (versions.toString() === nonEnterpriseDefaultVersion) {
          // omit version from fpt url

          previewCell += `[${plan}](${APP_URL}/${fileUrl})<br>`
          prodCell += `[${plan}](${PROD_URL}/${fileUrl})<br>`
        } else {
          // for non-versioned releases (ghae, ghec) use full url

          previewCell += `[${plan}](${APP_URL}/${versions}/${fileUrl})<br>`
          prodCell += `[${plan}](${PROD_URL}/${versions}/${fileUrl})<br>`
        }
      } else if (versions.length) {
        // for ghes releases, link each version

        previewCell += `${plan}@ `
        prodCell += `${plan}@ `

        versions.forEach((version) => {
          previewCell += `[${version.split('@')[1]}](${APP_URL}/${version}/${fileUrl}) `
          prodCell += `[${version.split('@')[1]}](${PROD_URL}/${version}/${fileUrl}) `
        })
        previewCell += '<br>'
        prodCell += '<br>'
      }
    }
  } catch (e) {
    console.error(
      `Version information for ${file.filename} couldn't be determined from its frontmatter.`
    )
  }
  markdownTable += `| ${contentCell} | ${previewCell} | ${prodCell} | |\n`
}
setOutput('changesTable', markdownTable)
