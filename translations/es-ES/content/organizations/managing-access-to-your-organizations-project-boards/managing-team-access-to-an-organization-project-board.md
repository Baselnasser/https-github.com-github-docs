---
title: 'Administrar el acceso de un equipo al {% data variables.product.prodname_project_v1 %} de una organización'
intro: 'Como propietario de organización o administrador de {% data variables.projects.projects_v1_board %}, puedes dar acceso a un equipo para un {% data variables.projects.projects_v1_board %} que le pertenezca a tu organización.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar el acceso de los equipos
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% warning %}

**Advertencias:**
- Puedes cambiar el nivel de permiso de un equipo si este tiene acceso directo a un {% data variables.projects.projects_v1_board %}. Si el acceso de un equipo al {% data variables.projects.projects_v1_board %} se hereda de un equipo padre, debes cambiar el acceso de dicho equipo padre al {% data variables.projects.projects_v1_board %}.
- Si agregas o eliminas el acceso a un {% data variables.projects.projects_v1_board %} para un equipo padre, cada uno de los equipos hijos de este también recibirán o perderán el acceso al {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".

{% endwarning %}

## Otorgar acceso a un equipo para un {% data variables.projects.projects_v1_board %}

Puedes otorgar el mismo nivel de permiso para un {% data variables.projects.projects_v1_board %} a todo un equipo.

{% note %}

**Nota:** {% data reusables.project-management.cascading-permissions %} Por ejemplo, si un propietario de organización otorgó permisos de lectura a un equipo para un {% data variables.projects.projects_v1_board %} y un administrador de {% data variables.projects.projects_v1_board %} otorga permisos administrativos para dicho tablero a un miembro del equipo como colaborador individual, esta persona tendría permisos administrativos en el {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta la sección "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. En la barra lateral izquierda, haz clic en **Teams (Equipos)**.
9. Para agregar un equipo, haz clic en **Add a team: Select team (Agregar un equipo: seleccionar equipo)**. Después, elige un equipo del menú desplegable o busca el equipo que deseas agregar. ![Agregar un menú desplegable de equipo con una lista de equipos en la organización](/assets/images/help/projects/add-a-team.png)
10. Junto al nombre del equipo, utiliza el menú desplegable para seleccionar el nivel de permiso deseado: **Read** (Lectura), **Write** (Escritura) o **Admin** (Administración). ![Menú desplegable de permisos de equipo con opciones de lectura, escritura o administrador](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Configurar el acceso de un equipo a un {% data variables.projects.projects_v1_board %}

Si se hereda el acceso de un equipo a {% data variables.projects.projects_v1_board %} desde un equipo padre, debes cambiar el acceso del equipo padre al {% data variables.projects.projects_v1_board %} para actualizar el acceso para los equipos hijos.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
4. Encima de la conversación del equipo, haz clic en {% octicon "project" aria-label="The Projects icon" %} **Projects (Proyectos)**. ![La pestaña de repositorios del equipo](/assets/images/help/organizations/team-project-board-button.png)
5. Para cambiar los niveles de permiso, a la derecha del {% data variables.projects.projects_v1_board %} que quieres actualizar, utiliza el menú desplegable. Para eliminar un {% data variables.projects.projects_v1_board %}, haz clic en **{% octicon "trash" aria-label="The trash icon" %}**. ![Botón para eliminar un tablero de proyecto de la papelera del equipo](/assets/images/help/organizations/trash-button.png)
