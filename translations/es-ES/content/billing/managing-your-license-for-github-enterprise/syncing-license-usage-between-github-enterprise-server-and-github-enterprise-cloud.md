---
title: Sincornizar el uso de licencias entre GitHub Enterprise Server y GitHub Enterprise Cloud
intro: 'Puedes sincronizar el uso de licencias desde {% data variables.product.prodname_ghe_server %} hacia {% data variables.product.prodname_ghe_cloud %} para ver el uso de licencias a lo largo de tu empresa en un solo lugar y garantizar que las personas con cuentas en ambos ambientes solo consuman una licencia.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sincronizar el uso de licencia
---

## Acerca de la sincronización del uso de licencias

{% data reusables.enterprise-licensing.about-license-sync %}

Para garantizar que ves los detalles actualizados de la licencia en {% data variables.product.prodname_dotcom_the_website %}, puedes sincronizar el uso de licencias entre los ambientes automáticamente, utilizando {% data variables.product.prodname_github_connect %}. Para obtener más información sobre {% data variables.product.prodname_github_connect %}, consulta la sección "[Acerca de {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}".{% endif %}

Si no quieres habilitar {% data variables.product.prodname_github_connect %}, puedes sincronizar el uso de licencia manualmente si subes un archivo desde {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Sincronizar el uso de licencias automáticamente

You can use {% data variables.product.prodname_github_connect %} to automatically synchronize user license count and usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly. Para obtener más información, consulta la sección "[Habilitar la sincronización automática de licencias de usuario para tu empresa]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %}" en la documentación de {% data variables.product.prodname_ghe_server %}{% elsif ghes %}".{% endif %}

{% ifversion ghec or ghes > 3.4 %}
After you enable {% data variables.product.prodname_github_connect %}, license data will be automatically synchronized weekly. You can also manually synchronize your license data at any time, by triggering a license sync job.

### Triggering a license sync job

1. Sign in to your {% data variables.product.prodname_ghe_server %} instance.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "License sync", click {% octicon "sync" aria-label="The Sync icon" %} **Sync now**. ![Screenshot of "Sync now" button in license sync section](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Manually uploading GitHub Enterprise Server license usage

Puedes descargar un archivo JSON desde {% data variables.product.prodname_ghe_server %} y subir el archivo a {% data variables.product.prodname_ghe_cloud %} para sincronizar de forma manual el uso de la licencia de usuario entre dos implementaciones.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Dentro de "Quick links (Vínculos rápidos)", para descargar un archivo que contiene tu uso de licencia actual en {% data variables.product.prodname_ghe_server %}, haz clic en **Export license usage (Exportar uso de licencia)**. ![Exporta el vínculo de uso de la licencia](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
10. Debajo de "Instancias de Enterprise Server", da clic en **Agregar uso del servidor**. ![Sube el vínculo de uso de los servidores de GitHub Enterprise](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Sube el archivo JSON que descargaste de {% data variables.product.prodname_ghe_server %}. ![Arrastra y suelta o selecciona un archivo para cargar](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
