---
title: Configurar permisos para agregar colaboradores externos
intro: 'Para proteger los datos de tu organización y la cantidad de licencias pagadas que se utilizan en ella, puedes configurar quién puede agregar colaboradores externos a los repositorios que le pertenezcan.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: eadf4f805775a99f763ec4df211fe6ea9735dabc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145119242'
---
Predeterminadamente, cualquiera con acceso administrativo en un repositorio puede invitar a los colaboradores externos a trabajar en el repositorio. Puedes elegir restringir la posibilidad de agregar colaboradores externos solo a los propietarios de la organización.

{% ifversion ghec %} {% note %}

**Nota:** Solo las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} pueden restringir la capacidad de invitar a colaboradores externos para que sean propietarios de la organización. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}Si tu organización es propiedad de una cuenta de empresa y el propietario de la cuenta de empresa ha establecido una directiva en el nivel de empresa, es posible que{% else %}no puedas{% endif %} configurar este valor para tu organización. Para más información, consulta "[Aplicación de directivas de administración de repositorios en tu empresa]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}."

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion ghes < 3.3 %}
5. En "Invitaciones al repositorio", seleccione **Permitir que los miembros inviten a colaboradores externos a los repositorios para esta organización**.
   ![Casilla para permitir que los miembros inviten a colaboradores externos a repositorios de la organización](/assets/images/help/organizations/repo-invitations-checkbox-old.png){% else %}
5. En "Colaboradores externos del repositorio", desactiva **Permitir que los administradores del repositorio inviten a colaboradores externos a repositorios de esta organización**.
  ![Casilla para permitir que los administradores del repositorio inviten a colaboradores externos a repositorios de la organización](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% endif %}
6. Haga clic en **Save**(Guardar).
