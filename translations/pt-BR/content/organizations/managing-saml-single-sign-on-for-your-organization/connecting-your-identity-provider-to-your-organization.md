---
title: Conectar o provedor de identidade à organização
intro: 'Para usar o logon único SAML e o SCIM, você deve conectar seu provedor de identidade (IdP) à sua organização em {% data variables.product.product_name %}.'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Authentication
  - Organizations
  - Teams
shortTitle: Conectar um IdP
---

## Sobre a conexão do seu IdP à sua organização

Ao habilitar o SAML SSO para sua organização de {% data variables.product.product_name %}, você conecta seu provedor de identidade (IdP) à sua organização. Para obter mais informações, consulte "[Habilitar e testar logon único de SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.ghec-only %}

Você pode encontrar as informações de implementação do SAML e SCIM para seu IdP na documentação do IdP.
- [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services) do Active Directory Federation Services (AD FS)
- [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) e [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial) do Azure Active Directory (Azure AD)
- [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) e [SCIM](http://developer.okta.com/standards/SCIM/) do Okta
- [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) e [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e) do OneLogin
- [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector) do PingOne
- [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home) do Shibboleth

{% note %}

**Observação:** os provedores de identidade aceitos pelo {% data variables.product.product_name %} para SCIM são Azure AD, Okta e OneLogin. Para obter mais informações sobre o SCIM, consulte "[Sobre o SCIM para as organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.scim.enterprise-account-scim %}

{% endnote %}

## Metadados SAML

Para obter mais informações sobre metadados do SAML para a sua organização, consulte "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)".
