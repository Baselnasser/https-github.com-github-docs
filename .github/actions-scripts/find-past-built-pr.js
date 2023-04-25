#!/usr/bin/env node
import got from 'got'

import { setOutput } from '@actions/core'

import github from '../../script/helpers/github.js'
import { getActionContext } from './lib/action-context.js'

async function main() {
  const sha = await getBuiltSHA()
  console.log({ sha })

  const actionContext = getActionContext()
  const { owner, repo } = actionContext

  const octokit = github()
  let number = ''

  const q = `${sha} repo:"${owner}/${repo}"`
  const { data } = await octokit.rest.search.issuesAndPullRequests({ q })
  for (const issue of data.items) {
    // console.log(issue)
    console.log('ID:', issue.id)
    console.log('Number:', issue.number)
    console.log('URL:', issue.html_url)
    number = issue.number
    if (number) {
      break
    }
  }

  setOutput('number', number)
}

async function getBuiltSHA() {
  const r = await got('https://docs.github.com/_build')
  const sha = r.body.trim()
  if (!/[a-f0-9]{40}/.test(sha)) {
    throw new Error(`Response body does not look like a SHA ('${r.body.slice(0, 100)}'...)`)
  }
  return sha
}

main()
