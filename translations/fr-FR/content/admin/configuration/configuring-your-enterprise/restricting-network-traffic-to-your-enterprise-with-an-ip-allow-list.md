---
title: Restriction du trafic réseau vers votre entreprise avec une liste d’adresses IP autorisées
shortTitle: Restricting network traffic
intro: Vous pouvez restreindre l’accès à votre entreprise et autoriser uniquement l’accès à vos ressources à partir d’adresses IP spécifiées à l’aide d’une liste d’adresses IP autorisées.
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: b62ab2a143ed0e7ec57f7e7225a09c0ca713295c
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185042'
---
## À propos des restrictions du trafic réseau

Par défaut, les utilisateurs autorisés peuvent accéder à votre entreprise à partir de n’importe quelle adresse IP. Vous pouvez restreindre l’accès aux ressources {% ifversion ghec %}qui sont la propriété d’organisations d’un compte d’entreprise {% endif %}en configurant une liste d’adresses IP spécifiques autorisées. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

Si votre entreprise utilise des {% data variables.product.prodname_emus %} avec OIDC, vous pouvez choisir d’utiliser la fonctionnalité de liste d’adresses IP autorisées de {% data variables.product.company_short %} ou d’utiliser les restrictions de la liste d’autorisations de votre fournisseur d’identité (IdP). Si votre entreprise n’utilise pas de {% data variables.product.prodname_emus %} avec OIDC, vous pouvez utiliser la fonctionnalité de liste d’autorisations de {% data variables.product.company_short %}. 

{% elsif ghae %}

Par défaut, les règles du groupe de sécurité réseau (NSG) Azure laissent entrer l’ensemble du trafic sur les ports 22, 80, 443 et 25. Vous pouvez contacter le {% data variables.contact.github_support %} pour configurer des restrictions d’accès pour {% data variables.product.product_name %}.

Pour des restrictions avec des NSG Azure, contactez le {% data variables.contact.github_support %} avec les adresses IP qui doivent être autorisées à accéder à {% data variables.product.product_name %}. Spécifiez des plages d’adresses au format CIDR (Classless Inter-Domain Routing) standard. Le {% data variables.contact.github_support %} configurera les règles de pare-feu adaptées afin de limiter l’accès réseau via HTTP, SSH, HTTPS et SMTP. Pour plus d’informations, consultez « [Obtention d’aide auprès du {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support) ».

{% endif %}

{% ifversion ghec %}

## À propos de la liste d’adresses IP autorisées de {% data variables.product.company_short %}

Vous pouvez utiliser la liste d’adresses IP autorisées de {% data variables.product.company_short %} pour contrôler l’accès à votre entreprise et aux ressources appartenant aux organisations de votre entreprise. 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

## À propos de la liste d’autorisations de votre IdP

Si vous utilisez des {% data variables.product.prodname_emus %} avec OIDC, vous pouvez utiliser la liste d’autorisations de votre IdP. 

L’utilisation de la liste d’autorisations de votre IdP désactive les configurations de liste d’adresses IP autorisées de {% data variables.product.company_short %} pour toutes les organisations de votre entreprise et désactive les API GraphQL pour l’activation et la gestion des listes d’adresses IP autorisées. 

Par défaut, votre IdP exécute la stratégie d’accès conditionnel sur la connexion SAML ou OIDC interactive initiale à {% data variables.product.company_short %} pour toute configuration de liste d’adresses IP autorisées de votre choix.

La stratégie d’accès conditionnel OIDC s’applique uniquement aux requêtes adressées à l’API à l’aide d’un jeton utilisateur-à-serveur, tel qu’un jeton pour une {% data variables.product.prodname_oauth_app %} ou une {% data variables.product.prodname_github_app %} agissant pour le compte d’un utilisateur. La stratégie d’accès conditionnel OIDC ne s’applique pas lorsqu’une {% data variables.product.prodname_github_app %} utilise un jeton serveur-à-serveur. Pour plus d’informations, consultez « [Authentification avec des {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation) » et « [À propos de la prise en charge de la stratégie d’accès conditionnel de vos IdP](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps) ».

Pour garantir une utilisation transparente de la stratégie d’accès conditionnel OIDC tout en appliquant la stratégie aux jetons utilisateur-à-serveur, vous devez copier toutes les plages d’adresses IP de chaque {% data variables.product.prodname_github_app %} que votre entreprise utilise dans la stratégie de votre IdP. 

## Utilisation de la liste d’adresses IP autorisées de {% data variables.product.company_short %}

### Activation de la liste d’adresses IP autorisées de {% data variables.product.company_short %}
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Sous « Liste d’adresses IP autorisées », activez la liste d’adresses IP autorisées. 
   - Si vous utilisez des {% data variables.product.prodname_emus %} avec OIDC, sélectionnez le menu déroulant et cliquez sur **GitHub**.
      ![Capture d’écran du menu déroulant montrant trois options de configuration de liste d’adresses IP autorisées : Désactivé, Fournisseur d’identité et GitHub](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      Sélectionnez **Activer la liste d’adresses IP autorisées**.
      ![Capture d’écran de la case à cocher pour autoriser les adresses IP](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - Si vous n’utilisez pas de {% data variables.product.prodname_emus %} avec OIDC, sélectionnez **Activer la liste d’adresses IP autorisées**.
     ![Capture d’écran de la case à cocher pour autoriser les adresses IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. Cliquez sur **Enregistrer**.

### Ajout d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### Autorisation de l’accès par {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Modification d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Cliquez sur **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

### Vérification de l’autorisation d’une adresse IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### Suppression d’une adresse IP autorisée

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Utilisation de la liste d’autorisations de votre fournisseur d’identité

Vous pouvez utiliser la liste d’autorisations de votre IdP si vous utilisez des {% data variables.product.prodname_emus %} avec OIDC.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Sous « Liste d’adresses IP autorisées », sélectionnez la liste déroulante et cliquez sur **Fournisseur d’identité**.

   ![Capture d’écran du menu déroulant montrant trois options de configuration de liste d’adresses IP autorisées : Désactivé, Fournisseur d’identité et GitHub](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
1. Si vous le souhaitez, pour autoriser les {% data variables.product.prodname_oauth_apps %} {% data variables.product.company_short %} installées à accéder à votre entreprise à partir de n’importe quelle adresse IP, sélectionnez **Ignorer la vérification de l’IdP pour les applications**.

   ![Case à cocher permettant d’autoriser des adresses IP](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. Cliquez sur **Enregistrer**.

{% endif %}

{% ifversion ghae %}

## Activation des adresses IP autorisées

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Liste verte d’adresses IP », sélectionnez **Activer la liste verte d’adresses IP**.
  ![Case à cocher permettant d’autoriser des adresses IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Cliquez sur **Enregistrer**.

## Ajout d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Autorisation de l’accès par {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Modification d’une adresse IP autorisée

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Cliquez sur **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Vérification de l’autorisation d’une adresse IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Suppression d’une adresse IP autorisée

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## Utilisation de {% data variables.product.prodname_actions %} avec une liste verte d’adresses IP

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
