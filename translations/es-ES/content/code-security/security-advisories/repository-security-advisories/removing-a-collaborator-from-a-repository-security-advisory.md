---
title: Eliminación de un colaborador de un aviso de seguridad del repositorio
intro: 'Cuando eliminas a un colaborador de una asesoría de seguridad de repositorio, este pierde el acceso de lectura y escritura en el debate y los metadatos de aquella.'
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: 77c21bea9c593935ee1b92028fc52859320f5a38
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114125'
---
Las personas con permisos administrativos en una asesoría de seguridad pueden eliminar a los colaboradores de la misma.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Eliminar un colaborador de una asesoría de seguridad

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic sobre aquella en la que quieras eliminar a algún colaborador.
  ![Aviso de seguridad en la lista](/assets/images/help/security/security-advisory-in-list.png)
5. En el lado derecho de la página, debajo de "Colaboradores", encuentra el nombre del usuario o equipo al que quieres eliminar de la asesoría de seguridad.
  ![Colaborador de asesoría de seguridad](/assets/images/help/security/security-advisory-collaborator.png)
6. Junto al colaborador que quiera quitar, haga clic en el icono **X**.
  ![Icono X para quitar al colaborador de la asesoría de seguridad](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Información adicional

- "[Niveles de permiso para avisos de seguridad de repositorios](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Adición de un colaborador a un aviso de seguridad de repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
