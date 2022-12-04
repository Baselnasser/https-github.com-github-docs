---
title: Blobs de Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'La API de blobs de Git permite crear y obtener un blob de Git (objeto binario grande), el tipo de objeto que se usa para almacenar el contenido de cada archivo en un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3b7cac6d268fb4c7e786651a7281ca5ce4241ec5
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181249'
---
## Acerca de Git blob API

Un blob (objeto binario grande, por sus siglas en inglés) de Git es el tipo de objeto que se utiliza para almacenar el contenido de cada archivo en un repositorio. El hash SHA-1 del archivo se calcula y almacena en el objeto del blob. Estos puntos de conexión permiten leer y escribir [objetos de blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) en la base de datos de Git en {% data variables.product.product_name %}. Los blobs sacan provecho de [estos tipos de medios personalizados](#custom-media-types-for-blobs). [Aquí](/rest/overview/media-types) puede obtener más información sobre el uso de los tipos de medios en la API.

### Tipos de medios personalizados para los blobs

Estos son los tipos de medios compatibles para los blobs.

    application/json
    application/vnd.github.raw

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
