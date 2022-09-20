---
title: Resolver fallas de carga de Git Large File Storage
intro: 'Si tus archivos {% data variables.large_files.product_name_short %} no se cargaron bien, puedes tomar varias medidas para solucionar los problemas de error de carga.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/versioning-large-files/resolving-git-large-file-storage-upload-failures
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve upload failures
ms.openlocfilehash: d2f776561f08132e1ca05d0864368943098c5ddc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '145136488'
---
La {% data variables.large_files.product_name_short %} comprobación de integridad asegura que todos los archivos {% data variables.large_files.product_name_short %} referenciados en una subida se hayan cargado bien. Si la comprobación detecta archivos referenciados que no se cargaron, recibirás un mensaje de error y se bloqueará la subida.

Para resolver el mensaje de error, debes reinstalar tu cliente local de {% data variables.large_files.product_name_short %} para garantizar que los archivos referenciados de {% data variables.large_files.product_name_short %} pueden subirse adecuadamente en ocasiones posteriores.

1. Abre Terminal.
2. Reinstala {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs install
  ```
3. Sube todos los archivos referenciados {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs push --all origin
  ```
