import renderContent from '../../lib/render-content/index.js'

const example = `
\`\`\`yaml annotate
# The name of the workflow as it will appear in the "Actions" tab of the GitHub repository.
name: Post welcome comment

# Add the \`pull_request\` event, so that the workflow runs automatically
# every time a pull request is created.
on:
  pull_request:
    types: [opened]
\`\`\`
`

describe('annotate', () => {
  test('renders annotations', async () => {
    // We don't normally use snapshots,
    // but in this case its a short and concise example
    // that won't change regularly.
    expect(await renderContent(example)).toMatchSnapshot()
  })
})
