---
title: Configurar una especificación mínima para las máquinas de los codespaces
shortTitle: Set a minimum machine spec
intro: 'Puedes evitar que los tipos de máquina con recursos insuficientes se usen en los {% data variables.product.prodname_github_codespaces %} de tu repositorio.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 368b7c73d13bb0624c9d838ac2d7bb18a2b050e3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880738'
---
## Información general

Cada codespace que crees se hospeda en una máquina virtual independiente, y normalmente puedes elegir entre diferentes tipos de máquinas virtuales. Cada tipo de máquina tiene recursos diferentes (CPU, memoria, almacenamiento) y, de forma predeterminada, se usa el tipo de máquina con los recursos mínimos. Para obtener más información, consulte "[Cambio del tipo de máquina para el codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".

Si tu proyecto necesita cierto nivel de potencia de cómputo, puedes configurar {% data variables.product.prodname_github_codespaces %} para que solo los tipos de máquina que cumplan con estos requisitos se puedan usar de forma predeterminada o los puedan seleccionar los usuarios. Esta configuración se realiza en un archivo `devcontainer.json`.

{% note %}

**Importante:** El acceso a algunos tipos de máquina puede estar restringido en el nivel de organización. Habitualmente, esto se hace para prevenir que las personas elijan máquinas con recursos superiores, las cuales se cobran en tazas más altas. Si tu repositorio se ve afectado por la política de tipos de máquina a nivel organizacional, debes asegurarte de que no configures una especificación mínima que impida que las personas seleccionen los tipos de máquina disponibles que necesitan. Para obtener más información, consulte "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

{% endnote %}

## Configurar una especificación de máquina mínima

1. Los {% data variables.product.prodname_github_codespaces %} del repositorio se configuran en un archivo `devcontainer.json`. Si el repositorio aún no contiene un archivo `devcontainer.json`, agregue uno ahora. Consulta "[Adición de una configuración de contenedor de desarrollo al repositorio](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".
1. Edite el archivo `devcontainer.json` y agregue una propiedad `hostRequirements` como esta:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Puede especificar una de las opciones o todas: `cpus`, `memory` y `storage`.
   
   Para verificar las especificaciones de los tipos de máquina de {% data variables.product.prodname_github_codespaces %} que actualmente están disponibles para tu repositorio, realiza el proceso de crear un codespace hasta que veas la elección de tipos de máquina. Para obtener más información, consulte "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".
   
1. Guarda el archivo y confirma tus cambios a la rama requerida del repositorio.

   Ahora, cuando crees un codespace para esta rama del repositorio y vayas a las opciones de configuración de creación, solo podrás seleccionar tipos de máquina que coincidan con los recursos que especificaste o los excedan.

   ![Caja de diálogo que muestra una selección limitada de tipos de máquina](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Información adicional

- "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
