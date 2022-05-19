---
title: Requerir políticas para las GitHub Actions en tu empresa
intro: 'Puedes requerir políticas para las {% data variables.product.prodname_actions %} dentro de las organizaciones de tu empresa o permitir que estas se configuren en cada organización.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: Políticas de GitHub Actions
---

{% data reusables.actions.enterprise-beta %}

## Acerca de las políticas para {% data variables.product.prodname_actions %} en tu empresa

Las {% data variables.product.prodname_actions %} ayudan a los miembros de tu empresa a automatizar los flujos de trabajo de desarrollo de software en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Entender las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

{% ifversion ghes %}Si habilitas las {% data variables.product.prodname_actions %}, cualquier{% else %}Cualquier{% endif %} organización en {% data variables.product.product_location %} podrá utilizar {% data variables.product.prodname_actions %}. Puedes requerir políticas para controlar la forma en la que los miembros de tu empresa de {% data variables.product.product_name %} utilizan las {% data variables.product.prodname_actions %}. Predeterminadamente, los propietarios de las organizaciones pueden administrar la forma en la que los miembros utilizan las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)".

## Requerir una política para restringir el uso de las {% data variables.product.prodname_actions %} en tu empresa

Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa, o puedes permitir solo organizaciones específicas. También puedes limitar el uso de las acciones públicas {% if actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} para que las personas solo puedan utilizar acciones {% if actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} que existan en tu empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Políticas", selecciona tus opciones.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %}
   {% note %}

   **Nota:** Para habilitar el acceso a las acciones públicas{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}, primero debes configurar {% data variables.product.product_location %} para que se conecte a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Habilitar el acceso automática para las acciones de GitHub.com utilizando GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

   {% endnote %}
   {%- endif %}
   {% if actions-workflow-policy %}
   ![Habilita, inhabilita o limita las acciones para esta cuenta empresarial](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
   {%- else %}
   ![Habilita, inhabilita o limita las acciones para esta cuenta empresarial](/assets/images/help/organizations/enterprise-actions-policy.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Políticas", selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y agrega tus acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} requeridos a la lista.
   {% if actions-workflow-policy %}
   ![Agrega acciones y flujos de trabajo reutilizables a la lista de elementos permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes or ghae %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}

## Requerir una política para la retención de bitácoras y artefactos en tu empresa

Las {% data variables.product.prodname_actions %} pueden restablecer los archivos de bitácora y artefactos. Para obtener más información, consulta la sección "[Descargar artefactos de los flujos de trabajo ](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Requerir una política para bifurcar solicitudes de cambio en tu empresa

Puedes requerir políticas para controlar la forma en la que se comportan las {% data variables.product.prodname_actions %} en {% data variables.product.product_location %} cuando los miembros de tu empresa{% ifversion ghec %} o colaboradores externos{% endif %} ejecutan flujos de trabajo desde las bifurcaciones.

{% ifversion ghec %}

### Requerir una política para la aprobación de las solicitudes de cambio desde los colaboradores externos

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Requerir una política para bifurcar solicitudes de cambio en repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

Si se habilita una política para una empresa, esta puede inhabilitarse selectivamente en organizaciones o repositorios individuales. Si se inhabilita una política para una empresa, las organizaciones o repositorios individuales no pueden habilitarla.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes > 3.1 or ghae %}

## Requerir una política para los permisos de flujo de trabajo en tu empresa

{% data reusables.actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para del `GITHUB_TOKEN` en la configuración de tu empresa, organización o repositorio. If you choose a restricted option as the default in your enterprise settings, this prevents the more permissive setting being chosen in the organization or repository settings.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% if allow-actions-to-approve-pr-with-ent-repo %}
By default, when you create a new enterprise, `GITHUB_TOKEN` only has read access for the `contents` scope.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Workflow permissions", choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.

   ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise{% if allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% if allow-actions-to-approve-pr-with-ent-repo %}
### Preventing {% data variables.product.prodname_actions %} from creating or approving pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

By default, when you create a new enterprise, workflows are not allowed to create or approve pull requests.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Workflow permissions", use the **Allow GitHub Actions to create and approve pull requests** setting to configure whether `GITHUB_TOKEN` can create and approve pull requests.

   ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% endif %}
{% endif %}

{% if actions-cache-policy-apis %}

## Enforcing a policy for cache storage in your enterprise

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

However, you can set an enterprise policy to customize both the default total cache size for each repository, as well as the maximum total cache size allowed for a repository. For example, you might want the default total cache size for each repository to be 5 GB, but also allow repository administrators to configure a total cache size up to 15 GB if necessary.

People with admin access to a repository can set a total cache size for their repository up to the maximum cache size allowed by the enterprise policy setting.

The policy settings for {% data variables.product.prodname_actions %} cache storage can currently only be modified using the REST API:

* To view the current enterprise policy settings, see "[Get GitHub Actions cache usage policy for an enterprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)."
* To change the enterprise policy settings, see "[Set GitHub Actions cache usage policy for an enterprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)."

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
