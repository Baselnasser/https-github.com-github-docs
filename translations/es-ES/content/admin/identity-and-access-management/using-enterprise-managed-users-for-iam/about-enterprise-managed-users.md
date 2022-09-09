---
title: Acerca de los Usuarios Administrados Empresariales
shortTitle: About managed users
intro: 'Puedes administrar centralmente la identidad y el acceso para los miembros de tu empresa en {% data variables.product.prodname_dotcom %} desde tu proveedor de identidad.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 0a71f698a11b8a0998d69dc0b8fb824378b2739b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147687064'
---
## Acerca de {% data variables.product.prodname_emus %}

Con {% data variables.product.prodname_emus %}, puedes controlar las cuentas de usuario de los miembros de tu empresa a través de tu proveedor de identidad (IdP). Los usuarios que se asignen a la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP se aprovisionarán como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} y se agregarán a tu empresa. Tú controlas los nombres de usuario, los datos de perfil, la pertenencia del equipo y el acceso de las cuentas de usuario al repositorio desde tu IdP.

En tu IdP, puedes dar a cada {% data variables.product.prodname_managed_user %} el rol de usuario, propietario de la empresa o gerente de facturación. {% data variables.product.prodname_managed_users_caps %} puede ser propietario de organizaciones dentro de tu empresa y puede agregar a otros {% data variables.product.prodname_managed_users %} a las organizaciones y equipos dentro de ella. Para obtener más información, vea "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" y "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

La pertenencia de la organización puede administrarse manualmente o actualizarse de forma automática conforme se agreguen {% data variables.product.prodname_managed_users %} a los grupos de IdP que están conectados a equipos de la organización. Cuando se agrega un {% data variables.product.prodname_managed_user %} manualmente a una organización, el desasignarlo de la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP suspenderá al usuario pero no lo eliminará de la organización. Para obtener más información sobre la administración automática de la organización y la pertenencia a equipos, consulte "[Administración de la pertenencia a equipos con grupos de proveedores de identidades](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} Para obtener más información, consulta "[Acerca de la compatibilidad con la directiva de acceso condicional del IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)".

{% endif %}

Puedes conceder acceso a las {% data variables.product.prodname_managed_users %} a repositorios de la empresa, así como la capacidad de contribuir a ellos, pero las {% data variables.product.prodname_managed_users %} no pueden crear contenido público ni colaborar con otros usuarios, organizaciones y empresas del resto de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Habilidades y restricciones de las {% data variables.product.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users)".

El nombre de usuario de los {% data variables.product.prodname_managed_users %} de tu empresa y su información de perfil, tal como los nombres y direcciones de correo electrónico que se muestran, se configuran mediante tu IdP y no pueden cambiarlos los mismos usuarios. Para más información, vea "[Nombres de usuario e información de perfil](#usernames-and-profile-information)".

Los propietarios de las empresas pueden auditar todas las acciones de los {% data variables.product.prodname_managed_users %} en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Eventos del registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)".

Para utilizar los {% data variables.product.prodname_emus %}, necesitas un tipo separado de cuenta empresarial con {% data variables.product.prodname_emus %} habilitados. Para obtener más información sobre cómo crear esta cuenta, consulte "[Acerca de las empresas con usuarios administrados](#about-enterprises-with-managed-users)".

{% note %}

**Nota**: Hay varias opciones para la administración de identidades y acceso con {% data variables.product.prodname_ghe_cloud %}, y la solución de {% data variables.product.prodname_emus %} no es la mejor para todos los clientes. Para obtener más información que te ayude a decidir si la opción de {% data variables.product.prodname_emus %} es adecuada para tu empresa, consulta "[Acerca de la autenticación de la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)".

{% endnote %}

## Soporte del proveedor de identidad

{% data variables.product.prodname_emus %} admite los siguientes IdP{% ifversion oidc-for-emu %} y métodos de autenticación:

|                                  | SAML                                          | OIDC (beta)                                   |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Habilidades y restricciones de los {% data variables.product.prodname_managed_users %}

Los {% data variables.product.prodname_managed_users_caps %} solo pueden colaborar en los repositorios privados e internos dentro de su empresa y con los repositorios que pertenecen a su cuenta de usuario. Los {% data variables.product.prodname_managed_users_caps %} tienen acceso de solo lectura al resto de la comunidad de {% data variables.product.prodname_dotcom %}. Estas restricciones de visibilidad y acceso para los usuarios, así como el contenido, aplican a todas las solicitudes, incluyendo a las de la API.

* No se puede invitar a {% data variables.product.prodname_managed_users_caps %} para que se unan a organizaciones o repositorios de fuera de la empresa, ni se puede invitar a {% data variables.product.prodname_managed_users %} a otras empresas. 
* Los colaboradores externos no son compatibles con los {% data variables.product.prodname_emus %}.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden crear propuestas ni solicitudes de cambios, comentar o agregar reacciones, ni marcar como favoritos u observar o bifurcar repositorios fuera de la empresa.
* {% data variables.product.prodname_managed_users_caps %} puede ver todos los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %} pero no puede subir código a los repositorios fuera de la empresa.
* Solo otros miembros de la empresa pueden ver a los {% data variables.product.prodname_managed_users_caps %} y al contenido que estos crean. 
* Los {% data variables.product.prodname_managed_users_caps %} no pueden seguir a usuarios que estén fuera de la empresa.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden crear gists o comentar en ellos.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden instalar {% data variables.product.prodname_github_apps %} en sus cuentas de usuario.
* Otros usuarios de {% data variables.product.prodname_dotcom %} no pueden ver, mencionar o invitar a {% data variables.product.prodname_managed_user %} para colaborar.
* Puedes elegir si los {% data variables.product.prodname_managed_users %} pueden crear repositorios propiedad de sus cuentas de usuario. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
* Si permites que {% data variables.product.prodname_managed_users %} creen repositorios propiedad de sus cuentas de usuario, solo pueden poseer repositorios privados y únicamente pueden invitar a otros miembros de la empresa a colaborar en los repositorios propiedad del usuario.
* {% data reusables.enterprise-accounts.emu-forks %}
* Solo se pueden crear repositorios internos y privados en las organizaciones que pertenezcan a una {% data variables.product.prodname_emu_enterprise %}, dependiendo de los ajustes de visibilidad del repositorio o empresa. 
* {% data variables.product.prodname_managed_users_caps %} están limitados en su uso de {% data variables.product.prodname_pages %}. Para obtener más información, consulta [Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users).

## Introducción a {% data variables.product.prodname_emus %}

Para que los desarrolladores puedan usar la {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_emus %}, debes llevar a cabo una serie de pasos de configuración.

1. Para utilizar los {% data variables.product.prodname_emus %}, necesitas un tipo separado de cuenta empresarial con {% data variables.product.prodname_emus %} habilitados. Para probar {% data variables.product.prodname_emus %} o para analizar las opciones para migrar desde su empresa existente, póngase en contacto con el [equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).
  
  Tu contacto en el equipo de ventas de GitHub trabajará contigo para crear tu {% data variables.product.prodname_emu_enterprise %} nueva. Necesitarás proporcionar la dirección de correo electrónico del usuario que configurará tu empresa y un código corto que se utilizará como el sufijo de los nombres de usuario de los miembros. {% data reusables.enterprise-accounts.emu-shortcode %} Para más información, vea "[Nombres de usuario e información de perfil](#usernames-and-profile-information)".
  
2. Después de crear tu empresa, recibirás un mensaje de correo electrónico de {% data variables.product.prodname_dotcom %}, el cual te invitará a elegir una contraseña para tu usuario de configuración de la empresa, quien será el primer propietario de esta. Utiliza una ventana de búsqueda privada o en modo incógnito al configurar la contraseña. El usuario de configuración solo se usa para configurar el inicio de sesión único y la integración de aprovisionamiento de SCIM para la empresa. Ya no tendrá acceso para administrar la cuenta empresarial una vez que se habilite correctamente el inicio de sesión único. El nombre de usuario del usuario de configuración es el código corto de la empresa con el sufijo `_admin`. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. Después de iniciar sesión como usuario de configuración, se recomienda habilitar la autenticación en dos fases. Para obtener más información, vea "[Configuración de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

1. Para empezar, configura {% ifversion oidc-for-emu %}cómo se autenticarán los miembros. Si usas Azure Active Directory como proveedor de identidades, puedes elegir entre OpenID Connect (OIDC) y el Lenguaje de marcado de aserción de seguridad (SAML). Ambas opciones proporcionan una experiencia de inicio de sesión sin problemas para los miembros, pero solo OIDC incluye compatibilidad con las directivas de acceso condicional (CAP). Si usas Okta como proveedor de identidades, puedes usar SAML para autenticar a los miembros. {% else %}SSO de SAML para tu empresa. Para obtener más información, consulta "[Configuración del inicio de sesión único de SAML para Usuarios Administrados de Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  Para empezar, lea la guía del método de autenticación elegido.
  
    - "[Configuración de OIDC para Usuarios Administrados de Enterprise](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".
    - "[Configuración del inicio de sesión único de SAML para Usuarios Administrados de Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".
  
  {% endif %}
  
4. Una vez que hayas configurado el inicio de sesión único, puedes configurar el aprovisionamiento de SCIM. SCIM es la forma en la que el proveedor de identidades aprovisionará y administrará los equipos y cuentas de miembro en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información sobre cómo configurar el aprovisionamiento de SCIM, consulta "[Configuración del aprovisionamiento de SCIM para Usuarios Administrados de Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".
  
5. Una vez que hayas configurado la autenticación y el aprovisionamiento, podrás empezar a aprovisionar miembros y administrar equipos. Para más información sobre cómo administrar equipos, vea "[Administración de pertenencias a equipos con grupos de proveedores de identidades](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)".

Si los miembros de tu empresa deben usar una estación de trabajo para contribuir a los repositorios en {% data variables.product.product_location %} tanto de un {% data variables.product.prodname_managed_user %} como de una cuenta personal, puedes proporcionar compatibilidad. Para obtener más información, consulta "[Compatibilidad con desarrolladores con varias cuentas de usuario en {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom)".

## Autenticación como {% data variables.product.prodname_managed_user %}

Los {% data variables.product.prodname_managed_users_caps %} se deben autenticar mediante su proveedor de identidad. Para autenticarse, un {% data variables.product.prodname_managed_user %} puede visitar su portal de aplicación IdP o utilizar una página de inicio de sesión en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %} Para más información, vea "[Administración de códigos de recuperación para la empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

### Autenticarse como un {% data variables.product.prodname_managed_user %} a través de {% data variables.product.prodname_dotcom_the_website %}

1. Vaya a [https://github.com/login](https://github.com/login).
1. En la caja de texto de "Nombre de usuario o dirección de correo electrónico", ingresa tu nombre de usuario incluyendo el guion bajo y código corto.
  ![Captura de pantalla que muestra el formulario de inicio de sesión](/assets/images/help/enterprises/emu-login-username.png). Si el formulario reconoce el nombre de usuario, se actualizará. No necesitas ingresar tu contraseña en este formato.
1. Para continuar con el proveedor de identidades, haga clic en **Sign in with your identity provider** (Iniciar sesión con el proveedor de identidades).
  ![Captura de pantalla que muestra el botón "Sign in with your identity provider" (Iniciar sesión con el proveedor de identidades)](/assets/images/help/enterprises/emu-login-submit.png)

## Nombres de usuario e información de perfil

{% data variables.product.product_name %} crea automáticamente un nombre de usuario para cada persona mediante la normalización de un identificador proporcionado por el IdP. Para más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

Puede producirse un conflicto al aprovisionar usuarios si las partes únicas del identificador proporcionado por el IdP se quitan durante la normalización. Si no puedes aprovisionar un usuario debido a un conflicto con el nombre de usuario, debes modificar el nombre de usuario proporcionado por el IdP. Para más información, consulta "[Resolución de conflictos de nombre de usuario](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts)".

El nombre de perfil y dirección de correo electrónico de un {% data variables.product.prodname_managed_user %} también lo proporciona el IdP. Las {% data variables.product.prodname_managed_users_caps %} no pueden cambiar su nombre de perfil ni la dirección de correo electrónico en {% data variables.product.prodname_dotcom %}, y el IdP solo puede proporcionar una dirección de correo electrónico.

## Compatibilidad con desarrolladores con varias cuentas de usuario en {% data variables.product.product_location %}

Es posible que personas del equipo necesiten contribuir a los recursos de {% data variables.product.product_location %} que están fuera de {% data variables.product.prodname_emu_enterprise %}. Por ejemplo, puede que quieras mantener una empresa independiente para los proyectos de código abierto de la empresa. Dado que un {% data variables.product.prodname_managed_user %} no puede contribuir a los recursos públicos, los usuarios deberán mantener una cuenta personal independiente para este trabajo.

Las personas que deben contribuir desde dos cuentas de usuario en {% data variables.product.product_location %} con una estación de trabajo pueden configurar Git para simplificar el proceso. Para obtener más información, consulta "[Administración de varias cuentas](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)".
