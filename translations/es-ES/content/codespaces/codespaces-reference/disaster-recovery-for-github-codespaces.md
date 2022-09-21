---
title: Recuperación de desastres en GitHub Codespaces
intro: 'Este artículo describe la guía para una situación de recuperación de desastres, cuando toda una región experimenta una interrupción debido a un desastre natural mayor o una interrupción de servicios extendida.'
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
shortTitle: Disaster recovery
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
ms.openlocfilehash: 447bdfb2b89d5d880bfd43be9941597c6729f36c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111694'
---
Nos esforzamos para asegurarnos de que {% data variables.product.prodname_github_codespaces %} siempre esté disponible. Sin embargo, por causas de fuerza mayor que salen de nuestro control, algunas veces se impacta el servicio en formas qeu pueden causar interrupciones de servicio no planeadas.

Aunque los casos de recuperación de desastres son ocurrencias extraordinarias, te recomendamos que te prepares para la posibilidad de que exista una interrupción en una región entera. Si una región completa experimenta una interrupción de servicio, las copias locales redundantes de tus datos se encontrarán temporalmente no disponibles.

La siguiente orientación proporciona opciones sobre cómo manejar la interrupción del servicio para toda la región en donde se desplegó tu codespace.

{% note %}

**Nota:** Para reducir el posible impacto de las interrupciones del servicio, realice inserciones en los repositorios remotos con frecuencia.

{% endnote %}

## Opción 1: Crea un codespace nuevo en otra región

En caso de que haya una interrupción regional, te sugerimos volver a crear tu codespace en una región no afectada para seguir trabajando. Este codespace nuevo tendrá todos los cambios desde tu última subida en {% data variables.product.prodname_dotcom %}. Para información sobre cómo configurar manualmente otra región, consulta "[Configuración de la región predeterminada para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

Puede optimizar el tiempo de recuperación si configura un `devcontainer.json` en el repositorio de un proyecto, lo que le permite definir las herramientas, los tiempos de ejecución, la configuración del editor, las extensiones y otros tipos de configuración necesarios para restablecer el entorno de desarrollo automáticamente. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

## Opción 2: espera para recuperación

En este caso, no se requieren acciones por su parte. Sabe que trabajaremos con rapidez para que el servicio de Azure vuelva a estar disponible. 

Puede comprobar el estado actual del servicio en [Status Dashboard](https://www.githubstatus.com/).

## Opción 3: Clone el repositorio localmente o edítelo en el explorador

Mientras que los {% data variables.product.prodname_codespaces %} proporcinan el beneficio de un ambiente de desarrollador pre-configurado, siempre debe poderse acceder a tu código mediante el repositorio que se hospeda en {% data variables.product.prodname_dotcom_the_website %}. En caso de que haya una interrupción de un {% data variables.product.prodname_codespaces %}, aún podrás clonar el repositorio localmente o los archivos de edición en el editor del buscador de {% data variables.product.company_short %}. Para obtener más información, consulte "[Edición de archivos](/repositories/working-with-files/managing-files/editing-files)".

Si bien esta opción no te configura un ambiente de desarrollo, te permitirá hacer cambios a tu código fuente conforme los necesites mientras esperas a que se resuelva la interrupción del servicio.

## Opción 4: Utilice los contenedores remotos y Docker para crear un entorno en contenedores local

Si el repositorio tiene un elemento `devcontainer.json`, considera la posibilidad de usar la [extensión Remote-Containers](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) en {% data variables.product.prodname_vscode %} a fin de crear y adjuntar un contenedor de desarrollo local para el repositorio. El tiempo de configuración para esta opción variará dependiendo de tus especificaciones locales y de la complejidad de tu configuración de contenedor dev.

{% note %}

**Nota:** Asegúrese de que la configuración local cumpla los [requisitos mínimos](https://code.visualstudio.com/docs/remote/containers#_system-requirements) antes de probar esta opción.

{% endnote %}
