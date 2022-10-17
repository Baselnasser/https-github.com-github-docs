---
title: Sobre SAML para IAM empresarial
shortTitle: About SAML for IAM
intro: 'Você pode usar o SSO (logon único) do SAML {% ifversion ghae %}e o SCIM (Sistema de Gerenciamento de Usuários entre Domínios) {% endif %}para gerenciar de modo centralizado o acesso {% ifversion ghec %}a organizações pertencentes à sua empresa no {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}para {% data variables.product.product_location %}{% elsif ghae %}para {% data variables.product.product_location %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
ms.openlocfilehash: 5a29e3a22e611e6a8a8dcfec75b2f6537a50f08a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147650394'
---
## Sobre o SSO do SAML para {% ifversion ghec or ghae %}sua empresa em {% endif %}{% ifversion ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Se os membros da empresa gerenciam as próprias contas de usuário no {% data variables.product.product_location %}, você pode configurar a autenticação do SAML como uma restrição de acesso adicional da empresa ou organização. {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Como alternativa, você pode provisionar e gerenciar as contas dos membros da empresa com {% data variables.product.prodname_emus %}. Como ajuda para determinar qual é a melhor opção para sua empresa, o SSO do SAML ou {% data variables.product.prodname_emus %}, confira "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)".

{% data reusables.enterprise-accounts.about-recovery-codes %} Para obter mais informações, confira "[Como gerenciar códigos de recuperação para sua empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

Depois de habilitar o SSO do SAML, dependendo do IdP que você usar, você poderá habilitar as funcionalidades adicionais de gerenciamento de identidade e acesso. 

Se você usar o Azure AD como seu IDP, você poderá usar a sincronização de equipe para gerenciar a associação de equipe em cada organização. {% data reusables.identity-and-permissions.about-team-sync %} Para obter mais informações, confira "[Como gerenciar a sincronização da equipe para organizações na sua conta corporativa](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

{% note %}

**Observação:** você não poderá usar o SCIM no nível da empresa, a menos que sua empresa esteja habilitada para {% data variables.product.prodname_emus %}.

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, confira "[Como alternar a configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

{% elsif ghes %}

O SAML SSO permite que as pessoas efetuem a autenticação e acessem {% data variables.product.product_location %} por meio de um sistema externo para gerenciamento de identidades.

O SAML é um padrão baseado em XML para autenticação e autorização. Ao configurar o SAML para {% data variables.product.product_location %}, o sistema externo para autenticação é chamado de provedor de identidade (IdP). Sua instância atua como um provedor de serviço (SP) do SAML. Para obter mais informações sobre o padrão SAML, consulte [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) na Wikipédia.

Para obter mais informações sobre a configuração do SSO do SAML para o {% data variables.product.product_name %}, consulte "[Como configurar o logon único do SAML para sua empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Após configurar o aplicativo para {% data variables.product.product_name %} no seu provedor de identidade (IdP), você poderá fornecer acesso ao {% data variables.product.product_location %}, atribuindo o aplicativo a usuários e grupos no seu IdP. Para obter mais informações sobre o SSO do SAML para o {% data variables.product.product_name %}, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obter mais informações, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Para saber como configurar a autenticação e o provisionamento de usuário para o {% data variables.product.product_location %} com seu IdP específico, confira "[Como configurar a autenticação e o provisionamento com seu provedor de identidade](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

{% endif %}

## IdPs compatíveis

{% ifversion ghec %}

Nós testamos e oferecemos compatibilidade oficial os seguintes IdPs. Para o SSO do SAML, oferecemos suporte limitado a todos os provedores de identidade que implementam o padrão SAML 2.0. Para obter mais informações, confira o [wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

IdP | SAML | Sincronização de equipe | 
--- | :--: | :-------: |
Serviços de Federação do Active Directory (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Active Directory do Azure (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

Se oseu IdP oferecer suporte a declarações criptografadas, você poderá configurar asserções criptografadas no {% data variables.product.product_name %} para aumentar a segurança durante o processo de autenticação.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

Os seguintes IdPs são oficialmente compatíveis com a integração a {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## Mapeando equipes de {% data variables.product.prodname_ghe_managed %} com grupos do Okta

Se usar o Okta como seu IdP, você poderá mapear seus grupos Okta para as equipes em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

{% endif %}

## Leitura adicional

- [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS
- [Sistema de Gerenciamento de Usuários entre Domínios: protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) no site do IETF{% ifversion ghae %}
- [Como restringir o tráfego de rede para sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}
