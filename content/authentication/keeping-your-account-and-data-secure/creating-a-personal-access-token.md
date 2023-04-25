---
title: Creating a personal access token
intro: 'Use a {% data variables.product.pat_generic %} in place of a password when authenticating to GitHub in the command line or with the API.'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 'Create a {% data variables.product.pat_generic %}'
---

{% warning %}

**Warning**: Treat your access tokens like passwords. For more information, see "[Keeping your {% data variables.product.pat_generic %}s secure](#keeping-your-personal-access-tokens-secure)."

{% endwarning %}

## About {% data variables.product.pat_generic %}s

{% data variables.product.pat_generic_caps %}s are an alternative to using passwords for authentication to {% data variables.product.product_name %} when using the [GitHub API](/rest/overview/authenticating-to-the-rest-api) or the [command line](#using-a-personal-access-token-on-the-command-line).

{% data variables.product.pat_generic_caps %}s are intended to access {% data variables.product.company_short %} resources on behalf of yourself. To access resources on behalf of an organization, or for long-lived integrations, you should use a {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

{% ifversion pat-v2 %}

### Types of {% data variables.product.pat_generic %}s

{% data variables.product.company_short %} currently supports two types of {% data variables.product.pat_generic %}s: {% data variables.product.pat_v2 %}s and {% data variables.product.pat_v1_plural %}. {% data variables.product.company_short %} recommends that you use {% data variables.product.pat_v2 %}s instead of {% data variables.product.pat_v1_plural %} whenever possible.

{% ifversion pat-v2 %}

Organization owners can set a policy to restrict the access of {% data variables.product.pat_v1_plural %} to their organization{% ifversion ghec or ghes or ghae %}, and enterprise owners can restrict the access of {% data variables.product.pat_v1_plural %} to the enterprise or organizations owned by the enterprise{% endif %}. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization#restricting-access-by-personal-access-tokens-classic)."

{% endif %}

#### {% data variables.product.pat_v2_caps %}s

{% data variables.product.pat_v2_caps %}s have several security advantages over {% data variables.product.pat_v1_plural %}:

- Each token can only access resources owned by a single user or organization.
- Each token can only access specific repositories.
- Each token is granted specific permissions, which offer more control than the scopes granted to {% data variables.product.pat_v1_plural %}.
- Each token must have an expiration date.
- Organization owners can require approval for any {% data variables.product.pat_v2 %}s that can access resources in the organization.{% ifversion ghec or ghes or ghae %}
- Enterprise owners can require approval for any {% data variables.product.pat_v2 %}s that can access resources in organizations owned by the enterprise.{% endif %}

#### {% data variables.product.pat_v1_caps_plural %}

{% data reusables.user-settings.patv2-limitations %}

If you choose to use a {% data variables.product.pat_v1 %}, keep in mind that it will grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your personal account.

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}
{% endif %}

{% ifversion pat-v2 %}

### Keeping your {% data variables.product.pat_generic %}s secure

{% data variables.product.pat_generic_caps %}s are like passwords, and they share the same inherent security risks. Before creating a new {% data variables.product.pat_generic %}, consider if there is a more secure method of authentication available to you:

- To access {% data variables.product.company_short %} from the command line, you can use [{% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) or [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) instead of creating a {% data variables.product.pat_generic %}.
- When using a {% data variables.product.pat_generic %} in a {% data variables.product.prodname_actions %} workflow, consider whether you can use the built-in `GITHUB_TOKEN` instead. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

If these options are not possible, and you must create a {% data variables.product.pat_generic %}, consider using another service such as the [1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely, or 1Password's [{% data variables.product.company_short %} shell plugin](https://developer.1password.com/docs/cli/shell-plugins/github/) to securely authenticate to {% data variables.product.prodname_cli %}.

When using a {% data variables.product.pat_generic %} in a script, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."{%- ifversion ghec or fpt %} You can also store your token as a {% data variables.product.prodname_codespaces %} secret and run your script in {% data variables.product.prodname_codespaces %}. For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

## Creating a {% data variables.product.pat_v2 %}

{% note %}

**Note**: {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [Verify your email address](/get-started/signing-up-for-github/verifying-your-email-address), if it hasn't been verified yet.{% endif %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
1. In the left sidebar, under **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, click **Fine-grained tokens**.
1. Click **Generate new token**.
1. Under **Token name**, enter a name for the token.
1. Under **Expiration**, select an expiration for the token.
1. Optionally, under **Description**, add a note to describe the purpose of the token.
1. Under **Resource owner**, select a resource owner. The token will only be able to access resources owned by the selected resource owner. Organizations that you are a member of will not appear unless the organization opted in to {% data variables.product.pat_v2 %}s. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."{% ifversion ghec or ghae %} You may be required to perform SAML single sign-on (SSO) if the selected organization requires it and you do not already have an active SAML session.{% endif %}
1. Optionally, if the resource owner is an organization that requires approval for {% data variables.product.pat_v2 %}s, below the resource owner, in the box, enter a justification for the request.
1. Under **Repository access**, select which repositories you want the token to access. You should choose the minimal repository access that meets your needs. Tokens always include read-only access to all public repositories on GitHub.
1. If you selected **Only select repositories** in the previous step, under the **Selected repositories** dropdown, select the repositories that you want the token to access.
1. Under **Permissions**, select which permissions to grant the token. Depending on which resource owner and which repository access you specified, there are repository, organization, and account permissions. You should choose the minimal permissions necessary for your needs. For more information about what permissions are required for each REST API operation, see "[AUTOTITLE](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)."
1. Click **Generate token**.

If you selected an organization as the resource owner and the organization requires approval for {% data variables.product.pat_v2 %}s, then your token will be marked as `pending` until it is reviewed by an organization administrator. Your token will only be able to read public resources until it is approved. If you are an owner of the organization, your request is automatically approved. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)".

{% endif %}

## Creating a {% data variables.product.pat_v1 %}

{% ifversion pat-v2 %}

{% note %}

**Note**: Organization owners can restrict the access of {% data variables.product.pat_v1 %} to their organization. If you try to use a {% data variables.product.pat_v1 %} to access resources in an organization that has disabled {% data variables.product.pat_v1 %} access, your request will fail with a 403 response. Instead, you must use a {% data variables.product.prodname_github_app %}, {% data variables.product.prodname_oauth_app %}, or {% data variables.product.pat_v2 %}.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**Note**: Your {% data variables.product.pat_v1 %} can access every repository that you can access. {% data variables.product.company_short %} recommends that you use {% data variables.product.pat_v2 %}s instead, which you can restrict to specific repositories. {% data variables.product.pat_v2_caps %}s also enable you to specify fine-grained permissions instead of broad scopes.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [Verify your email address](/get-started/signing-up-for-github/verifying-your-email-address), if it hasn't been verified yet.{% endif %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% ifversion pat-v2 %}1. In the left sidebar, under **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, click **Tokens (classic)**.{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %}
{% ifversion pat-v2%}1. Select **Generate new token**, then click **Generate new token (classic)**.{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %}
5. In the "Note" field, give your token a descriptive name.
6. To give your token an expiration, select **Expiration**, then choose a default option or click **Custom** to enter a date.
7. Select the scopes you'd like to grant this token. To use your token to access repositories from the command line, select **repo**. A token with no assigned scopes can only access public information. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".
8. Click **Generate token**.
1. Optionally, to copy the new token to your clipboard, click {% octicon "copy" aria-label="Copy token" %}.

   ![Screenshot of the "{% data variables.product.pat_generic_caps_plural %}" page. Next to a blurred-out token, an icon of two overlapping squares is outlined in orange.](/assets/images/help/settings/personal_access_tokens.png){% ifversion fpt or ghec %}
1. To use your token to access resources owned by an organization that uses SAML single sign-on, authorize the token. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

## Using a {% data variables.product.pat_generic %} on the command line

{% data reusables.command_line.providing-token-as-password %}

{% data variables.product.pat_generic_caps %}s can only be used for HTTPS Git operations. If your repository uses an SSH remote URL, you will need to [switch the remote from SSH to HTTPS](/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-ssh-to-https).

If you are not prompted for your username and password, your credentials may be cached on your computer. You can [update your credentials in the Keychain](/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain) to replace your old password with the token.

Instead of manually entering your {% data variables.product.pat_generic %} for every HTTPS Git operation, you can cache your {% data variables.product.pat_generic %} with a Git client. Git will temporarily store your credentials in memory until an expiry interval has passed. You can also store the token in a plain text file that Git can read before every request. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)."

## Further reading

- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)"
