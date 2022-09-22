---
ms.openlocfilehash: 6cff9129bc98844ebcbcf3449cd5b5621559242c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147710196"
---
1. `<YOUR-KEY-ID>` を GPG キー ID に置き換えて、{% data variables.product.product_name %} の環境変数としてキーを定義します。

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
