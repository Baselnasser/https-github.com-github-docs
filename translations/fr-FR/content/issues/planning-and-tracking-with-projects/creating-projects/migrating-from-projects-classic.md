---
title: 'Migration depuis {% data variables.product.prodname_projects_v1 %}'
intro: 'Vous pouvez migrer votre {% data variables.projects.projects_v1_board %} vers la nouvelle expérience de {% data variables.product.prodname_projects_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e6db4fd8c6587f413ee0e6832dbae93bbf281573
ms.sourcegitcommit: 9bf175b190674416ad4e11b5c567409f74c00ad2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/23/2022
ms.locfileid: '148181220'
---
{% note %}

**Remarques :**

- Si le projet que vous migrez contient plus de {% data variables.projects.item_limit %} éléments, les problèmes ouverts sont priorisés, suivis des demandes de tirage ouvertes, puis des notes. L’espace restant est utilisé pour les problèmes fermés, les demandes de tirage fusionnées et les demandes de tirage fermées. Les éléments qui ne peuvent pas être migrés en raison de cette limite sont déplacés vers l’archive. Si la limite d’archivage de {% data variables.projects.archived_item_limit %} éléments est atteinte, aucun élément supplémentaire n’est migré.
- Notez que les cartes sont converties en brouillons de problème et que le contenu est enregistré dans le corps du brouillon. Si des informations apparaissent manquantes, affichez les champs masqués. Pour plus d’informations, consultez « [Affichage et masquage des champs](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields) ».
- L’automatisation n’est pas migrée.
- Le tri, l’archivage et l’activité ne sont pas migrés.
- Après la migration, le nouveau projet migré et l’ancien projet ne restent pas synchronisés.

{% endnote %}

## À propos de la migration des projets

Vous pouvez migrer vos panneaux de projet vers la nouvelle expérience de {% data variables.product.prodname_projects_v2 %} et essayer des tableaux, plusieurs vues, les nouvelles options d’automatisation et des types de champs performants. Pour plus d’informations, consultez « [À propos des projets](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ».

## Migration d’un tableau de projet d’organisation

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. Sur la gauche, cliquez sur **Projets (classique)** .
  ![Capture d’écran montrant l’option de menu Projets (classique)](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## Migration d’un tableau de projet d’utilisateur

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. En haut de votre page de profil, dans le volet de navigation principal, cliquez sur {% octicon "table" aria-label="The project board icon" %} **Projets**.
  ![Capture d’écran montrant l’onglet « Projets ».](/assets/images/help/projects-v2/tab-projects.png)
1. Au-dessus de la liste des projets, cliquez sur **Projets (classique)** .
  ![Capture d’écran montrant l’option de menu Projets (classique)](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## Migration d’un tableau de projet de dépôt

{% note %}

**Remarque :** {% data variables.projects.projects_v2_caps %} ne prend pas en charge les projets de niveau dépôt. Lorsque vous migrez un tableau de projet de dépôt, celui-ci migre vers l’organisation ou le compte personnel propriétaire du projet de dépôt, tandis que le projet migré est épinglé au dépôt d’origine.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Sous le nom de votre dépôt, cliquez sur {% octicon "table" aria-label="The project board icon" %} **Projets**.
![Onglet Projet](/assets/images/help/projects-v2/repo-tabs-projects.png)
1. Cliquez sur **Projets (classique)** .
  ![Capture d’écran montrant l’option de menu Projets (classique)](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
