---
title: Using environments for deployment
shortTitle: Use environments for deployment
intro: You can configure environments with protection rules and secrets. A workflow job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.
product: '{% data reusables.gated-features.environments %}'
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
topics:
  - CD
  - Deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---


## About environments

Environments are used to describe a general deployment target like `production`, `staging`, or `development`. When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see "[AUTOTITLE](/actions/deployment/managing-your-deployments/viewing-deployment-history)."

You can configure environments with protection rules and secrets. When a workflow job references an environment, the job won't start until all of the environment's protection rules pass. A job also cannot access secrets that are defined in an environment until all the environment protection rules pass.

{% ifversion actions-break-glass %}Optionally, you can bypass an environment's protection rules and force all pending jobs referencing the environment to proceed. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments#bypassing-environment-protection-rules)."{% endif %}

{% ifversion fpt %}
{% note %}

**Note:** You can only configure environments for public repositories. If you convert a repository from public to private, any configured protection rules or environment secrets will be ignored, and you will not be able to configure any environments. If you convert your repository back to public, you will have access to any previously configured protection rules and environment secrets.

Organizations with {% data variables.product.prodname_team %} and users with {% data variables.product.prodname_pro %} can configure environments for private repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)."

{% endnote %}
{% endif %}

## Deployment protection rules

Deployment protection rules require specific conditions to pass before a job referencing the environment can proceed. You can use deployment protection rules to require a manual approval, delay a job, or restrict the environment to certain branches.{% ifversion actions-custom-deployment-protection-rules-beta %} You can also create and implement custom protection rules powered by {% data variables.product.prodname_github_apps %} to use third-party systems to control deployments referencing environments configured on {% data variables.location.product_location %}.

Third-party systems can be observability systems, change management systems, code quality systems, or other manual configurations that you use to assess readiness before deployments are safely rolled out to environments.

{% data reusables.actions.custom-deployment-protection-rules-limits %}

{% endif %}

### Required reviewers

Use required reviewers to require a specific person or team to approve workflow jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

For more information on reviewing jobs that reference an environment with required reviewers, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."

### Wait timer

Use a wait timer to delay a job for a specific amount of time after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).

### Deployment branches

Use deployment branches to restrict which branches can deploy to the environment. Below are the options for deployment branches for an environment:

* **All branches**: All branches in the repository can deploy to the environment.
* **Protected branches**: Only branches with branch protection rules enabled can deploy to the environment. If no branch protection rules are defined for any branch in the repository, then all branches can deploy. For more information about branch protection rules, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."
* **Selected branches**: Only branches that match your specified name patterns can deploy to the environment.

  For example, if you specify `releases/*` as a deployment branch rule, only branches whose name begins with `releases/` can deploy to the environment. (Wildcard characters will not match `/`. To match branches that begin with `release/` and contain an additional single slash, use `release/*/*`.) If you add `main` as a deployment branch rule, a branch named `main` can also deploy to the environment. For more information about syntax options for deployment branches, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

{% ifversion actions-break-glass %}
### Allow administrators to bypass configured protection rules

By default, administrators can bypass the protection rules and force deployments to specific environments. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments#bypassing-environment-protection-rules)."

Alternatively, you can configure environments to disallow bypassing the protection rules for all deployments to the environment.
{% endif %}

{% ifversion actions-custom-deployment-protection-rules-beta %}

### Custom deployment protection rules

{% data reusables.actions.custom-deployment-protection-rules-beta-note %}

{% data reusables.actions.about-custom-deployment-protection-rules %} For more information, see "[AUTOTITLE](/actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules)".

Once custom deployment protection rules have been created and installed on a repository, you can enable the custom deployment protection rule for any environment in the repository. For more information about configuring and enabling custom deployment protection rules, see "[AUTOTITLE](/actions/deployment/protecting-deployments/configuring-custom-deployment-protection-rules)."

{% endif %}

## Environment secrets

Secrets stored in an environment are only available to workflow jobs that reference the environment. If the environment requires approval, a job cannot access environment secrets until one of the required reviewers approves it. For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

{% note %}

**Note:** Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

{% endnote %}

{% ifversion actions-configuration-variables %}
## Environment variables

Variables stored in an environment are only available to workflow jobs that reference the environment. These variables are only accessible using the [`vars`](/actions/learn-github-actions/contexts#vars-context) context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables)."
{% endif %}

## Creating an environment

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %}
{% note %}

**Note:** Creation of an environment in a private repository is available to organizations with {% data variables.product.prodname_team %} and users with {% data variables.product.prodname_pro %}.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Optionally, specify people or teams that must approve workflow jobs that use this environment.
   1. Select **Required reviewers**.
   1. Enter up to 6 people or teams. Only one of the required reviewers needs to approve the job for it to proceed.
   1. Click **Save protection rules**.
1. Optionally, specify the amount of time to wait before allowing workflow jobs that use this environment to proceed.
   1. Select **Wait timer**.
   1. Enter the number of minutes to wait.
   1. Click **Save protection rules**.
{%- ifversion actions-break-glass %}
1. Optionally, disallow bypassing configured protection rules. For more information about bypassing configured protection rules, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
   1. Deselect **Allow administrators to bypass configured protection rules**.
   1. Click **Save protection rules**.
{%- endif %}
{%- ifversion actions-custom-deployment-protection-rules-beta %}
1. Optionally, enable any custom deployment protection rules that have been created with {% data variables.product.prodname_github_apps %}. For more information about configuring custom deployment protection rules with {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/actions/deployment/protecting-deployments/configuring-custom-deployment-protection-rules)."
   1. Select the custom protection rule you want to enable.
   1. Click **Save protection rules**.
{%- endif %}
1. Optionally, specify what branches can deploy to this environment. For more information about the possible values, see "[Deployment branches](#deployment-branches)."
   1. Select the desired option in the **Deployment branches** dropdown.
   1. If you chose **Selected branches**, enter the branch name patterns that you want to allow.
1. Optionally, add environment secrets. These secrets are only available to workflow jobs that use the environment. Additionally, workflow jobs that use this environment can only access these secrets after any configured rules (for example, required reviewers) pass. For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
   1. Under **Environment secrets**, click **Add Secret**.
   1. Enter the secret name.
   1. Enter the secret value.
   1. Click **Add secret**.
{%- ifversion actions-configuration-variables %}
6. Optionally, add environment variables. These variables are only available to workflow jobs that use the environment, and are only accessible using the [`vars`](/actions/learn-github-actions/contexts#vars-context) context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables)."
   1. Under **Environment variables**, click **Add Variable**.
   1. Enter the variable name.
   1. Enter the variable value.
   1. Click **Add variable**.
{%- endif %}


You can also create and configure environments through the REST API. For more information, see "[AUTOTITLE](/rest/deployments/environments)," "[AUTOTITLE](/rest/actions/secrets),"{% ifversion actions-configuration-variables %} "[AUTOTITLE](/rest/actions/variables),"{% endif %} and "[AUTOTITLE](/rest/deployments/branch-policies)."

Running a workflow that references an environment that does not exist will create an environment with the referenced name. The newly created environment will not have any protection rules or secrets configured. Anyone that can edit workflows in the repository can create environments via a workflow file, but only repository admins can configure the environment.

## Using an environment

Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. The job can access the environment's secrets only after the job is sent to a runner.

When a workflow references an environment, the environment will appear in the repository's deployments. For more information about viewing current and previous deployments, see "[AUTOTITLE](/actions/deployment/managing-your-deployments/viewing-deployment-history)."

{% data reusables.actions.environment-example %}

## Deleting an environment

{% data reusables.actions.permissions-statement-environment %}

Deleting an environment will delete all secrets and protection rules associated with the environment. Any jobs currently waiting because of protection rules from the deleted environment will automatically fail.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Next to the environment that you want to delete, click {% octicon "trash" aria-label="The trash icon" %}.
2. Click **I understand, delete this environment**.

You can also delete environments through the REST API. For more information, see "[AUTOTITLE](/rest/repos#environments)."

## How environments relate to deployments

{% data reusables.actions.environment-deployment-event %}

You can access these objects through the REST API or GraphQL API. You can also subscribe to these webhook events. For more information, see "[AUTOTITLE](/rest/repos#deployments)" (REST API), "[AUTOTITLE](/graphql/reference/objects#deployment)" (GraphQL API), or "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

## Next steps

{% data variables.product.prodname_actions %} provides several features for managing your deployments. For more information, see "[AUTOTITLE](/actions/deployment/about-deployments/deploying-with-github-actions)."
