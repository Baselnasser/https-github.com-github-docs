---
title: Organization interactions
shortTitle: Organización
intro: 'The Organization interactions API allows organization owners to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization''s public repositories.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Organization interactions API

The Organization interactions API allows organization owners to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization's public repositories. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en la organización.
* {% data reusables.interactions.contributor-user-limit-definition %} en la organización.
* {% data reusables.interactions.collaborator-user-limit-definition %} en la organización.

Configurar el límite de interacciones a nivel organizacional sobreescribirá cualquier límite de interacción que se haya configurado para los repositorios individuales que pertenezcan a la organización. Para configurar los límites de interacción para los repositorios individuales que pertenezcan a la organización, mejor utiliza la terminal de interaciones del [Repositorio](#repository).
