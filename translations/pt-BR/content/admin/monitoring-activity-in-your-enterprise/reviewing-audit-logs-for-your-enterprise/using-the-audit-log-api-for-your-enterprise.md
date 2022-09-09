---
title: Como usar a API do log de auditoria para sua empresa
intro: 'Você pode recuperar eventos corporativos programaticamente com a API {% ifversion ghec or ghes > 3.2 %} REST ou{% endif %} GraphQL.'
shortTitle: Audit log API
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
ms.openlocfilehash: 2fca8bbb9ccabe8fcb8fa8d48e4b7b8b1b5d1f3b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147717906'
---
## Usando a API do log de auditoria

Você pode interagir com o log de auditoria usando a API do GraphQL{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %} ou a API REST{% endif %}. 

Os carimbos de data e hora e os campos de data na resposta da API são medidos em [milissegundos de época UTC](http://en.wikipedia.org/wiki/Unix_time).

## Como consultar a API do GraphQL do log de auditoria

Para garantir que a sua propriedade intelectual esteja segura e que você está mantendo a conformidade na sua empresa, use a API do GraphQL do log de auditoria para manter cópias dos seus dados de log de auditoria e monitore: {% data reusables.audit_log.audit-log-api-info %}

Observe que você não pode recuperar eventos do Git usando a {% ifversion not ghec %}API do log de auditoria. {% else %}API do GraphQL. Para recuperar eventos do Git, use a API REST. Para obter mais informações, confira as ações de categoria `git` em "[Ações de log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)" e "[Administração da empresa](/rest/reference/enterprise-admin#audit-log)" e "Pontos de extremidade de log de auditoria das [organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization) na documentação da API REST".{% endif %}

A resposta do GraphQL pode incluir dados por até 90 a 120 dias.

### Exemplo 1: membros adicionados a organizações em uma empresa ou removidos dela

A consulta abaixo busca os logs de auditoria da empresa `avocado-corp` e retorna as dez primeiras organizações da empresa, em que as únicas ações executadas foram adicionar ou remover um membro de uma organização. As vinte primeiras entradas do log de auditoria para cada organização são retornadas. 

Essa consulta usa o campo [auditlog](/graphql/reference/objects) do objeto Organization e os objetos [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) e [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). A conta do {% data variables.product.prodname_dotcom %} que consulta o log de auditoria da empresa precisa ser um proprietário da organização para cada organização na empresa.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

A API do GraphQL retornará, no máximo, 100 nós por consulta. Para recuperar resultados adicionais, você precisará implementar a paginação. Para obter mais informações, confira "[Limitações de recursos](/graphql/overview/resource-limitations#node-limit)" na documentação da API do GraphQL e [Paginação](https://graphql.org/learn/pagination/) na documentação oficial do GraphQL.
### Exemplo 2: eventos em uma organização, para uma data e um ator específicos

Você pode especificar várias frases de pesquisa, como `created` e `actor`, separando-as na cadeia de consulta com um espaço.

A consulta abaixo busca todos os logs de auditoria para a empresa `avocado-corp` relacionados à organização `octo-org`, em que as ações foram executadas pelo usuário `octocat` em 1º de janeiro de 2022 ou após essa data. As vinte primeiras entradas do log de auditoria são retornadas, com a entrada de log mais recente aparecendo primeiro. 

Essa consulta usa a interface [AuditEntry](/graphql/reference/interfaces#auditentry). A conta do {% data variables.product.prodname_dotcom %} que consulta o log de auditoria da empresa precisa ser um proprietário da organização `octo-org`.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Para obter mais exemplos de consulta, confira o [repositório platform-samples](https://github.com/github/platform-samples/blob/master/graphql/queries).

{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
## Como consultar a API REST do log de auditoria

Para garantir que a sua propriedade intelectual esteja segura e que você está mantendo a conformidade na sua empresa, use a API REST do log de auditoria para manter cópias dos seus dados de log de auditoria e monitore: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Para obter mais informações sobre a API REST do log de auditoria, confira "[Administração da empresa](/rest/reference/enterprise-admin#audit-log)" e "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

### Exemplo 1: todos os eventos em uma empresa, para uma data específica, com paginação

A consulta abaixo pesquisa eventos de log de auditoria criados em 1º de janeiro de 2022 na empresa `avocado-corp` e retorna a primeira página com, no máximo, 100 itens por página usando a [paginação da API REST](/rest/overview/resources-in-the-rest-api#pagination):

```shell
curl -H "Authorization: Bearer <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

### Exemplo 2: eventos para solicitações de pull em uma empresa, para uma data e um ator específicos

Você pode especificar várias frases de pesquisa, como `created` e `actor`, separando-as na URL formada com o símbolo `+` ou o código de caractere ASCII `%20`.

A consulta abaixo pesquisa eventos de log de auditoria para solicitações de pull, em que o evento ocorreu em 1º de janeiro de 2022 ou após essa data na empresa `avocado-corp` e em que a ação foi executada pelo usuário `octocat`:

```shell
curl -H "Authorization: Bearer <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```

{% endif %}
