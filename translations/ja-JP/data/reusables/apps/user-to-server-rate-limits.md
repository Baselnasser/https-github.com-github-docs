---
ms.openlocfilehash: 3bc47303cbc18b4d40a76fd12e6f692990f66c54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113789"
---
{% ifversion ghes %}既定では、"user-to-server"{% else %}"User-to-server"{% endif %} 要求は、認証したユーザーあたり {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} 件/時に制限されています。 ユーザーによって、またはユーザーが所有している個人用アクセス トークンによって認可されている OAuth アプリケーションからのすべての要求と、ユーザーの認証資格情報のいずれかで認証された要求は、そのユーザーについて {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} 件/時という同じクォータを共有します。
