---
title: Receiving webhooks with the GitHub CLI
intro: 'You can use the {% data variables.product.prodname_cli %} to test webhooks in your development environment without the complexity of port forwarding or third-party tools.'
versions:
  feature: 'cli-webhook-forwarding'
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
---
## About receiving webhooks with {% data variables.product.prodname_cli %}

{% note %}

**Note**: Receiving webhooks with the {% data variables.product.prodname_cli %} is currently in limited public beta and subject to change. To sign up for the beta, reply to our GitHub Community [discussion](https://github.com/orgs/community/discussions/38261). You may not be added immediately. You will receive an email notification once you have been added to the beta.

{% endnote %}

When you make changes to your integration code, running the code in a local environment lets you test and iterate quickly without deploying the code. You can use {% data variables.product.prodname_cli %} to forward webhooks to your local environment.

{% note %}

**Note:** Webhook forwarding in the {% data variables.product.prodname_cli %} only works with repository and organization webhooks. If you want to test sponsorship, GitHub App, enterprise, or Marketplace webhooks locally, you'll need to do this manually. For more information, see "[Creating webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)."

{% endnote %}

## Receiving webhooks with {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

1. To install the {% data variables.product.prodname_cli %} extension to enable webhook forwarding, use the `extension install` subcommand. 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. Start your application locally, and take a note of the URL where it's expecting to receive webhooks. This guide assumes that your application is listening for webhook events at `http://localhost:3000/webhook`.

1. To set up webhooks to be delivered to your application, run the `webhook forward` subcommand. Replace `REPOSITORY` with the name of your repository. For example, `monalisa/octocat`. Replace `EVENTS` with a comma-separated list of the events that you want to receive. For example, `issues,pull_request`. Replace `URL` with the local URL where your application expects to receive webhooks. For example, `"http://localhost:3000/webhook"`.  To listen for organization webhooks instead of repository webhooks, replace the `--repo` flag with the `--org` flag. For example `--org="octo-org"`.


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Leave the command running in the background. It will receive all of the specified events for the specified repository and forward them to your webhook handler running at the specified URL.
