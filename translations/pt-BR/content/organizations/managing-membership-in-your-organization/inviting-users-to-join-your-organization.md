---
title: Como convidar usuários para ingressar em sua organização
intro: 'Você pode convidar qualquer pessoa para se tornar um integrante da sua organização usando o nome de usuário ou endereço de e-mail deles para {% data variables.product.product_location %}.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: f0b5d1c41fc5f348077a77d29ac4be309c1cad0f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145093242'
---
## Sobre convites para a organização

Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, confira "[Sobre os preços por usuário](/articles/about-per-user-pricing)". 

{% data reusables.organizations.org-invite-scim %}

Se a sua organização exige que os integrantes usem a autenticação de dois fatores, os usuários que você convidar deverão ativar a autenticação de dois fatores antes de aceitar o convite. Para obter mais informações, confira "[Como exigir a autenticação de dois fatores na sua organização](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)" e "[Como proteger sua conta com a 2FA (autenticação de dois fatores)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% ifversion fpt %}As organizações que usam {% data variables.product.prodname_ghe_cloud %}{% else %}Você{% endif %} podem implementar o SCIM para adicionar, gerenciar e remover o acesso dos integrantes da organização a {% data variables.product.prodname_dotcom_the_website %} por meio de um provedor de identidade (IdP). Para obter mais informações, confira "[Sobre o SCIM para organizações](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Convidando um usuário para participar da sua organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## Leitura adicional
- "[Como adicionar membros da organização a uma equipe](/articles/adding-organization-members-to-a-team)"
