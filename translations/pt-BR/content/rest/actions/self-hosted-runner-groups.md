---
title: Grupos de runner auto-hospedados
intro: A API dos Grupos de Runners auto-hospedados permite que você gerencie grupos de runners auto-hospedados.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## Sobre a API de grupos de executores auto-hospedados

A API de grupos de executores auto-hospedados permite que você gerencie grupos de executores auto-hospedados. Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão de administração `` para repositórios ou a permissão `organization_self_hosted_runners` para as organizações. Os usuários autenticados devem ter acesso de administrador a repositórios ou organizações ou ao escopo `manage_runners:corporativo` para que as empresas usem esta API.
