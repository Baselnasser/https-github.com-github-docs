---
title: Moderar discussões
intro: 'Você pode promover uma colaboração saudável marcando comentários como respostas, bloqueando ou desbloqueando discussões, convertendo problemas em discussões, editando ou excluindo comentários, discussões e categorias que não estão alinhados com{% ifversion fpt or ghec %} o código de conduta da comunidade{% elsif ghes > 3.5 %} as diretrizes de contribuição da organização{% endif %}.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 7d128c9beadb190f9c22c345cf0c3124b1dfcfcb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410112'
---
## Sobre a moderação de discussões

{% data reusables.discussions.about-discussions %} Se você tiver permissões de triagem para um repositório, você poderá ajudar a moderar as discussões desse repositório marcando comentários como respostas, bloqueando discussões que não são mais úteis ou que prejudicam a comunidade e convertendo os problemas em discussões quando uma ideia ainda está nos primeiros estágios de desenvolvimento. Da mesma forma, se você tiver permissão de triagem para o repositório de origem para discussões da organização, poderá moderar as discussões para essa organização.

## Marcar um comentário como uma resposta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Bloquear discussões

É apropriado bloquear uma conversa quando toda a conversa não for construtiva ou violar o código de conduta da sua comunidade ou as [Diretrizes da Comunidade](/free-pro-team@latest/github/site-policy/github-community-guidelines) do {% data variables.product.prodname_dotcom %}. Você também pode bloquear uma conversa para evitar comentários em uma discussão que você deseja usar como um anúncio para a comunidade. Quando você bloqueia uma conversa, as pessoas com acesso de gravação ao repositório ou repositório de origem para discussões da organização ainda poderão comentar a discussão.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. Na lista de discussões, clique na discussão que você deseja bloquear.
  ![Bloquear uma discussão](/assets/images/help/discussions/unanswered-discussion.png)
1. Na margem direita de uma discussão, clique em **Bloquear conversa**.
1. Leia as informações sobre como bloquear conversas e clique em **Bloquear conversa nesta discussão**.
1. Quando estiver pronto para desbloquear a conversa, clique em **Desbloquear conversa** e clique em **Desbloquear conversa nesta discussão**.

## Converter um problema em uma discussão

Ao converter um problema em uma discussão, a discussão será criada automaticamente usando o conteúdo do problema. Pessoas com acesso de gravação a um repositório ou repositório de origem para discussões da organização podem converter problemas em massa com base em rótulos. Para obter mais informações, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions)".

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. Na lista de problemas, clique no problema que deseja converter.
1. Na margem direita de um problema, clique em **Converter em discussão**.
1. Selecione o menu suspenso **Escolher uma categoria** e clique em uma categoria para ver a discussão.
1. Clique em **Entendi. Converter este problema em uma discussão**.
