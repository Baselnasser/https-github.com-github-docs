---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062704"
---
1. 在管理 shell 中，创建 PGP 密钥。 记下电子邮件地址和密钥 ID。

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - 使用默认密钥类型，并且至少有 `4096` 位且未过期。 
    - 使用 `web-flow` 作为用户名。 
