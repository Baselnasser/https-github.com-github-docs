---
title: Prueba de los cambios de configuración del contenedor de desarrollo en una rama habilitada para precompilación
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 'Al cambiar la configuración del contenedor de desarrollo de una rama habilitada para las precompilaciones, debes probar los cambios en un codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: ad89e9242f27c00bf95dab308b8ce571e3d3b1b2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548076'
---
Los cambios realizados en la configuración del contenedor de desarrollo para una rama habilitada para precompilación darán lugar a una actualización de la configuración del codespace y la precompilación asociada. Por tanto, es importante probar estos cambios en un codespace de una rama de prueba antes de confirmarlos en una rama del repositorio que se use de forma activa. Esto garantizará que no se introducen cambios importantes para el equipo.

Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

## Prueba de los cambios en la configuración del contenedor de desarrollo

1. Cree un codespace a partir de la rama habilitada para precompilación cuyo contenedor de desarrollo quiera cambiar. Para más información, vea "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".
1. En el codespace, extraiga del repositorio una rama de prueba. Para más información, vea "[Uso del control de código fuente en el codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)".
1. Realice los cambios necesarios en la configuración del contenedor de desarrollo.
1. Recompile el contenedor para aplicar los cambios. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".
1. Cuando todo parezca correcto, también se recomienda crear un codespace desde la rama de prueba para asegurarse de que todo funciona. Después, puede confirmar los cambios en la rama predeterminada del repositorio o en una rama de características activa, lo que desencadena una actualización de la precompilación para esa rama.

   {% note %}
   
   **Nota**: La creación de este codespace tardará más de lo habitual porque no se creará a partir de una precompilación.
   
   {% endnote %}
