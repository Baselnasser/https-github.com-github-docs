---
ms.openlocfilehash: 3598eaa94fadd1b5bed7e58f37941ebce60058fb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062107"
---
1. `<YOUR-KEY-ID>` を GPG キー ID に置き換えて、{% data variables.product.product_name %} の環境変数としてキーを定義します。

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
