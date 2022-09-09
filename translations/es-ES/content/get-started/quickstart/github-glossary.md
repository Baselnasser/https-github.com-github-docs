---
title: Glosario de GitHub
intro: 'Este glosario te presenta la terminología común de Git y de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/github-glossary
  - /github/getting-started-with-github/github-glossary
  - /github/getting-started-with-github/quickstart/github-glossary
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e7c6be7286d1221970c9e4e50b477fb82b4d3652
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126257'
---
{% for term in site.data.glossaries.external %}
  ### {% data glossaries.external[forloop.index0].term %}
  {% data glossaries.external[forloop.index0].description %}
  ---
{% endfor %}

---

## Información adicional

- [Glosario oficial de Git](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Documentación de Git](https://git-scm.com/doc)
- [Lista de comandos de Git](https://git-scm.com/docs)
