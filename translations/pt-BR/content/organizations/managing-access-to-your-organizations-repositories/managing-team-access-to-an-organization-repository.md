---
title: Gerenciar o acesso da equipe em um repositório da organização
intro: Você pode conceder e remover o acesso da equipe a um repositório ou mudar o nível de permissão dela no repositório.
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program
  - /articles/managing-team-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
ms.openlocfilehash: d03c6dcb8f1f386d0545ad99154edaf0991a987e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126454'
---
Pessoas com acesso de administrador a um repositório podem gerenciar o acesso de equipes ao repositório. Mantenedores de equipes podem remover o acesso de uma equipe a um repositório.

{% warning %}

**Avisos:**
- Você pode alterar os níveis de permissões de uma equipe se a equipe tiver acesso direto a um repositório. Se o acesso da equipe ao repositório é herança de uma equipe principal, você deve alterar o acesso da equipe principal ao repositório.
- Se você adicionar ou remover acesso de uma equipe principal ao repositório, cada uma das equipes secundárias da equipe principal também receberá ou perderá o acesso ao repositório. Para obter mais informações, confira "[Sobre as equipes](/articles/about-teams)".

{% endwarning %}

## Conceder a uma equipe acesso a um repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Você pode dar a uma equipe acesso a um repositório ou alterar o nível de acesso de uma equipe a um repositório nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)". {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Acima da lista de repositórios, clique em **Adicionar repositório**.
  ![O botão Adicionar repositório](/assets/images/help/organizations/add-repositories-button.png)
6. Digite o nome de um repositório e clique em **Adicionar repositório à equipe**.
  ![Campo de pesquisa Repositório](/assets/images/help/organizations/team-repositories-add.png)
7. Como opção, use o menu suspenso à direita do nome do repositório e escolha um nível de permissão diferente para a equipe.
  ![Menu suspenso do nível de acesso do repositório](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## Remover acesso de uma equipe a um repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Você pode remover o acesso de uma equipe a um repositório da organização nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)".

Se uma equipe tiver acesso direto a um repositório, você poderá remover o acesso dessa equipe ao repositório. Se o acesso da equipe ao repositório é herdado de uma equipe principal, você deve remover o repositório da equipe principal para remover o repositório das equipes secundárias.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

Você pode remover o acesso de uma equipe a um repositório se a equipe tiver acesso direto a ele. Se o acesso da equipe ao repositório é herdado de uma equipe principal, você deve remover o repositório da equipe principal para remover o repositório das equipes secundárias.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Selecione o repositório ou repositórios que deseja remover da equipe.
  ![Lista de repositórios de equipes com as caixas de seleção de alguns repositórios selecionadas](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Acima da lista de repositórios, use o menu suspenso e clique em **Remover da equipe**.
  ![Menu suspenso com a opção para remover um repositório de uma equipe](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Revise os repositórios que serão removidos da equipe e clique em **Remover repositórios**.
  ![Caixa de diálogo modal com uma lista de repositórios aos quais a equipe não terá mais acesso](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## Leitura adicional

- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
