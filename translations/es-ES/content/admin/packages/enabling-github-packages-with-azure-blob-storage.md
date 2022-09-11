---
title: Habilitar GitHub Packages con Azure Blob Storage
intro: 'Configura el {% data variables.product.prodname_registry %} con Azure Blob Storage como tu almacenamiento externo.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: ff9f7cc0e001a639cf5222ade02a6dabd57a3c47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120153'
---
{% warning %}

**Advertencias:**
- Es crítico que configures las políticas de acceso restrictivo que necesites para tu bucket de almacenamiento, ya que {% data variables.product.company_short %} no aplica permisos de objeto específicos o listas de control de acceso adicionales (ACLs) a tu configuración de bucket de almacenamiento. Por ejemplo, si haces a tu bucket público, el público general en la internet podrá acceder a ellos.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}

## Requisitos previos

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, necesitas preparar tu bucket de almacenamiento de Azure Blob Storage. Para preparar el cubo de Azure Blob Storage, se recomienda consultar los documentos oficiales de Azure Blob Storage en el [sitio oficial de documentación de Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Habilitar el {% data variables.product.prodname_registry %} con Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. Debajo de "Almacenamiento de paquetes", selecciona **Azure Blob Storage** y escribe el nombre de tu contenedor de Azure para el cubo de almacenamiento de paquetes y la cadena de conexión.
  ![Cuadros para el nombre del contenedor de Azure Blob Storage y la cadena de conexión](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **Nota:** Para encontrar la cadena de conexión de Azure, ve al menú Clave de acceso de la cuenta de Azure Storage. 
  Actualmente, no se admite el uso de un token de SAS o una dirección URL de SAS como cadena de conexión.
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
