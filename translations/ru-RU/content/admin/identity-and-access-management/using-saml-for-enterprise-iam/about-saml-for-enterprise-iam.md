---
title: Сведения о SAML для корпоративной системы IAM
shortTitle: About SAML for IAM
intro: 'Вы можете использовать единый вход SAML {% ifversion ghae %} и System for Cross-domain Identity Management (SCIM) {% endif %}для централизованного управления доступом {% ifversion ghec %}к организациям, принадлежащим ваше предприятие на {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}в {% data variables.location.product_location %}{% elsif ghae %}в {% data variables.location.product_location %}{% endif %}.'
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
ms.openlocfilehash: d719ef81948cef75018b0976fc97ef45c267469f
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180032'
---
## Сведения о едином входе SAML для {% ifversion ghec or ghae %}вашего предприятия в {% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Если участники предприятия управляют своими учетными записями пользователей в {% data variables.location.product_location %}, вы можете настроить проверку подлинности SAML в качестве дополнительного ограничения доступа для вашего предприятия или организации. {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} Дополнительные сведения см. в статье [Настройка единого входа на основе SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Кроме того, вы можете создавать учетные записи участников предприятий и управлять ими с помощью {% data variables.product.prodname_emus %}. Чтобы определить, что лучше всего подойдет для вашего предприятия — единый вход на основе SAML или {% data variables.product.prodname_emus %}, — см. статью [О проверке подлинности для вашего предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise).

{% data reusables.enterprise-accounts.about-recovery-codes %} Дополнительные сведения см. в разделе [Управление кодами восстановления для вашей организации](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise).

После включения единого входа SAML в зависимости от используемого поставщика удостоверений можно включить дополнительные функции управления удостоверениями и доступом. 

Если вы используете Azure AD в качестве поставщика удостоверений, можно использовать синхронизацию команд для управления членством в группах в каждой организации. {% data reusables.identity-and-permissions.about-team-sync %} Дополнительные сведения см. в разделе [Управление синхронизацией команд для организаций в корпоративной учетной записи](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

{% note %}

**Примечание:** ScIM запрещается использовать на корпоративном уровне, если только ваша организация не включена для {% data variables.product.prodname_emus %}.

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} Дополнительные сведения см. в разделе [Переключение конфигурации SAML с организации на корпоративную учетную запись](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

{% elsif ghes %}

Единый вход SAML позволяет пользователям проходить проверку подлинности и получать доступ к {% data variables.location.product_location %} через внешнюю систему для управления удостоверениями.

SAML — это стандарт на основе XML для проверки подлинности и авторизации. При настройке SAML для {% data variables.location.product_location %} внешняя система проверки подлинности называется поставщиком удостоверений (IdP). Ваш экземпляр выступает в качестве поставщика услуг SAML (SP). Дополнительные сведения о стандарте SAML см. в разделе [Язык разметки заявлений системы безопасности](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) в Википедии.

Дополнительные сведения о настройке единого входа SAML в {% data variables.product.product_name %} см. в разделе [Настройка единого входа SAML для вашей организации](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

После настройки приложения для {% data variables.product.product_name %} в поставщике удостоверений (IdP) можно подготовить доступ к {% data variables.location.product_location %}, назначив приложение пользователям и группам в поставщике удостоверений. Дополнительные сведения о едином входе SAML для {% data variables.product.product_name %} см. в разделе [Настройка единого входа SAML для вашей организации](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise).

{% data reusables.scim.after-you-configure-saml %} Дополнительные сведения см. в разделе [Настройка подготовки пользователей для вашей организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

Сведения о настройке проверки подлинности и подготовки пользователей для {% data variables.location.product_location %} с помощью конкретного поставщика [удостоверений см. в разделе Настройка проверки подлинности и подготовки с помощью поставщика удостоверений](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider).

{% endif %}

## Поддерживаемые поставщики удостоверений

{% ifversion ghec %}

Мы проверяем и официально поддерживаем следующих поставщиков удостоверений. Для единого входа SAML мы предлагаем ограниченную поддержку для всех поставщиков удостоверений, реализующих стандарт SAML 2.0. Дополнительные сведения см. на [вики-странице по SAML](https://wiki.oasis-open.org/security) на веб-сайте OASIS.

IdP | SAML | Синхронизация команд | 
--- | :--: | :-------: |
Службы федерации Active Directory (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Azure Active Directory (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

Если ваш поставщик удостоверений поддерживает зашифрованные утверждения, можно настроить зашифрованные утверждения в {% data variables.product.product_name %} для повышения безопасности при проверке подлинности.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

Следующие поставщики удостоверений официально поддерживаются для интеграции с {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## Сопоставление команд {% data variables.product.prodname_ghe_managed %} с группами Okta

Если вы используете Okta в качестве поставщика удостоверений, можно сопоставить группы Okta с командами в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

{% endif %}

## Дополнительные материалы

- [Вики-сайт SAML](https://wiki.oasis-open.org/security) на веб-сайте OASIS
- [Система междоменного управления удостоверениями: протокол (RFC 7644) на веб-сайте](https://tools.ietf.org/html/rfc7644) IETF {%- ifversion ghae %}
- ["Ограничение сетевого трафика для предприятия с помощью списка разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
