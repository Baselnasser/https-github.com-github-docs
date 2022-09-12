---
title: Solução de problemas de encaminhamento de porta para o GitHub Codespaces
intro: Etapas de solução de problemas para problemas comuns de encaminhamento de portas.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
ms.openlocfilehash: 326c96e86883604ecc1f4ebcb81be98dae23bf84
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111417'
---
Quando um aplicativo em execução em um codespace tiver saída gerada em uma porta para o console, o {% data variables.product.prodname_github_codespaces %} detectará o padrão da URL do localhost e encaminhará a porta automaticamente. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Se uma porta não for redirecionada automaticamente, você poderá redirecioná-la manualmente. Para obter mais informações, confira "[Como encaminhar uma porta](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)".

Se o encaminhamento de porta estiver configurado, verifique o seguinte:

- Use o alerta de notificação ou clique no URL no Terminal para abrir a porta encaminhada. Se você digitar `localhost:8000` (por exemplo) no computador local, isso não funcionará se você estiver conectado ao codespace por meio do navegador.
- Certifique-se de verificar se seu aplicativo ainda está sendo executado dentro do seu codespace. Se seu codespace parou após um período de inatividade, você deverá certificar-se de reiniciar o seu aplicativo depois que o codespace for reiniciado.

Normalmente, você pode tornar uma porta encaminhada acessível publicamente ou dentro da organização que é o proprietário de um repositório. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)". Se uma ou ambas as opções de visibilidade pública ou da organização não estiverem disponíveis, isso indicará que uma política no nível da organização foi configurada. Para obter mais informações, confira "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".
