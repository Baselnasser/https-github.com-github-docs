---
title: Por que minhas contribuições não aparecem no meu perfil?
intro: Entenda os motivos comuns que as contribuições podem não ter no seu gráfico de contribuição.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
ms.openlocfilehash: dbdf99a77c423774c03f69d21542f8174e813bc6
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127656'
---
## Sobre o seu gráfico de contribuição

O gráfico de contribuições de perfil é um registro de contribuições que você fez para repositórios {% ifversion ghae %}pertencentes a{% else %}em{% endif %} {% data variables.location.product_location %}. As contribuições recebem registros de data e hora de acordo com o UTC (Coordinated Universal Time, Horário universal coordenado), e não com o fuso horário local. As contribuições só serão contabilizadas se atenderem a determinados critérios. Em alguns casos, pode ser necessário recriar o gráfico para que as contribuições sejam exibidas.

Se você faz parte de uma organização que usa o logon único SAML (SSO), você não poderá ver a atividade de contribuição da organização em seu perfil se não tiver uma sessão SSO ativa. As pessoas que visualizarem o seu perfil de fora da sua organização verão a atividade de contribuição anônima de sua atividade de contribuição para sua organização.

## Contribuições que são contabilizadas

### Problemas, pull requests e discussões

Os problemas, as solicitações de pull e as discussões aparecerão no grafo de contribuição se tiverem sido abertos em um repositório autônomo, não em um fork.

### Confirmações
Os commits serão exibidos no seu grafo de contribuições se eles atenderem a **todas** as seguintes condições:
- O endereço de email usado para os commits está associado à sua conta em {% data variables.location.product_location %}.
- Os commits foram criados em um repositório autônomo, e não em uma bifurcação.
- Os commits foram criados:
  - No branch-padrão do repositório
  - No branch `gh-pages` (para repositórios com sites de projeto)

Para obter mais informações sobre sites de projeto, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

**Pelo menos, uma** das seguintes condições precisa ser verdadeira:
- Você é um colaborador no repositório ou um integrante da organização que possui o repositório.
- Você bifurcou o repositório.
- Você abriu uma pull request ou um problema no repositório.
- Você marcou o repositório como favorito.

## Motivos comuns para as contribuições não serem contabilizadas

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### O commit foi criado menos de 24 horas atrás

Depois de fazer um commit que atenda aos requisitos para ser contabilizado como contribuição, talvez você precise aguardar até 24 horas para que a contribuição seja exibida no gráfico de contribuições.

### Seu e-mail de confirmação do Git local não está conectado à sua conta

Os commits precisam ser feitos com um endereço de email que esteja conectado à conta do {% data variables.location.product_location %}{% ifversion fpt or ghec %} ou ao endereço de email `noreply` fornecido pelo {% data variables.product.prodname_dotcom %} a você nas configurações de email,{% endif %} para que sejam exibidos no grafo de contribuições.{% ifversion fpt or ghec %} Para obter mais informações sobre os endereços de email `noreply`, confira "[Como definir o endereço de email de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)".{% endif %}

Verifique o endereço de email usado para um commit adicionando `.patch` ao final de uma URL de commit, por exemplo, <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

O endereço de email do campo `From:` é o endereço definido nas [definições de configuração do Git local](/articles/set-up-git). Neste exemplo, o endereço de email usado para o commit é `octocat@nowhere.com`.

Se o endereço de email usado para o commit não estiver conectado à conta em {% data variables.location.product_location %}, {% ifversion ghae %}altere o endereço de email usado para criar commits no Git. Para obter mais informações, confira "[Como configurar o endereço de email de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".{% else %}você precisa [adicionar o endereço de email](/articles/adding-an-email-address-to-your-github-account) à conta do {% data variables.location.product_location %}. Seu gráfico de contribuições será reconstruído automaticamente quando você adicionar o novo endereço.{% endif %}

{% ifversion fpt or ghec %} {% note %}

**Observação**: se você usar um {% data variables.enterprise.prodname_managed_user %}, não poderá adicionar endereços de email adicionais à conta, mesmo que vários endereços de email sejam registrados no IdP (provedor de identidade). Portanto, somente os commits criados pelo endereço de email principal registrado no IdP podem ser associados ao {% data variables.enterprise.prodname_managed_user %}.

{% endnote %} {% endif %}

Endereços de email genéricos, como `jane@computer.local`, não podem ser adicionados a contas do {% data variables.product.prodname_dotcom %} nem vinculados a commits. Se você criou commits usando um endereço de email genérico, eles não serão vinculados ao seu perfil do {% data variables.product.prodname_dotcom %} e não serão exibidos no grafo de contribuições.

### O commit não foi feito no branch padrão ou `gh-pages`

Os commits só serão considerados se forem feitos no branch padrão ou no branch `gh-pages` (para repositórios com sites de projeto). Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Se os commits estiverem em um branch não padrão ou que não sejam o `gh-pages` e você quiser que eles sejam considerados como contribuições, siga um destes procedimentos:
- [Abra uma solicitação de pull](/articles/creating-a-pull-request) para que as alterações sejam mescladas no branch padrão ou no branch `gh-pages`.
- [Altere o branch padrão](/github/administering-a-repository/changing-the-default-branch) do repositório.

{% warning %}

**Aviso**: a alteração do branch padrão do repositório vai alterá-lo para todos os colaboradores do repositório. Faça isso apenas se quiser que o novo branch se torne a base de todos os futuros commits e pull requests a serem criados.

{% endwarning %}

### O commit foi criado em uma bifurcação

Os commits criados em uma bifurcação não são contabilizados para suas contribuições. Para isso, é preciso que você siga estes procedimentos:
- [Abra uma solicitação de pull](/articles/creating-a-pull-request) para que as alterações sejam mescladas no repositório pai.
- Para desanexar o fork e transformá-la em um repositório autônomo em {% data variables.location.product_location %}, entre em contato com o {% data variables.contact.contact_support %}. Se a bifurcação tiver bifurcações próprias, informe o {% data variables.contact.contact_support %} se as bifurcações devem mover-se com o repositório para uma nova rede ou se devem permanecer na rede atual. Para obter mais informações, confira "[Sobre os forks](/articles/about-forks/)".

## Leitura adicional

- "[Como publicar ou ocultar contribuições privadas no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Como ver as contribuições na página do seu perfil](/articles/viewing-contributions-on-your-profile-page)"
