---
title: 'Managing access to a {% data variables.product.prodname_project_v1 %} for organization members'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can set a default permission level for a {% data variables.projects.projects_v1_board %} for all organization members.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar acesso para os integrantes
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

By default, organization members have write access to their organization's {% data variables.projects.projects_v1_boards %} unless organization owners or {% data variables.projects.projects_v1_board %} admins set different permissions for specific {% data variables.projects.projects_v1_boards %}.

## Configurar um nível referencial de permissão para todos os integrantes da organização

{% tip %}

**Tip:** You can give an organization member higher permissions to {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Em "Organization member permission" (Permissão de integrante da organização), escolha um nível referencial de permissão para todos os integrantes da organização: **Read** (Leitura), **Write** (Gravação), **Admin** (Administrador) ou **None** (Nenhuma). ![Opções de permissões a quadro de projeto para todos os integrantes da organização](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Clique em **Salvar**.

## Leia mais

- "[Managing an individual’s access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
