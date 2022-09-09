---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147410671"
---
1. SSH en {% data variables.product.product_location %}. Si la instancia consta de varios nodos, por ejemplo, si la alta disponibilidad o la replicación geográfica están configuradas, utiliza SSH en el nodo principal. Si usas un clúster, puedes utilizar SSH en cualquier nodo. Para obtener más información acerca del acceso a SSH, consulta "[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
