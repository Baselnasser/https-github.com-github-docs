---
title: Sobre a cobrança de pacotes do GitHub
intro: 'Se você quiser usar {% data variables.product.prodname_registry %} além do armazenamento ou transferência de dados incluídos em sua conta, você será cobrado pelo uso adicional.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: e75b13f2422ac407264381a4637e763608bc9657
ms.sourcegitcommit: 58db85219d094c2fb752117361e21eb49965d6ad
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/15/2022
ms.locfileid: '147576986'
---
## <a name="about-billing-for--data-variablesproductprodname_registry-"></a>Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} Para obter mais informações, confira "[Sobre os limites de gastos](#about-spending-limits)".

{% note %}

**Atualização de cobrança para o armazenamento de imagens de contêiner:** o período de uso gratuito para o armazenamento de imagens de contêiner e a largura de banda para o {% data variables.product.prodname_container_registry %} foi estendido. Se estiver usando {% data variables.product.prodname_container_registry %}, você será informado com pelo menos um mês antes de começar a cobrar e receberá uma estimativa de quanto espera pagar. Para obter mais informações sobre o {% data variables.product.prodname_container_registry %}, confira "[Como trabalhar com o registro de contêiner](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% endnote %}

{% ifversion ghec %} Se você comprou o {% data variables.product.prodname_enterprise %} por meio de um Contrato Enterprise da Microsoft, conecte sua ID de Assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso do {% data variables.product.prodname_registry %} além dos valores, incluindo com a sua conta. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

A transferência de dados é reiniciada todos os meses, mas o uso do armazenamento não.

Produto | Armazenamento | Transferência de dados (por mês)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1 GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
{% data variables.product.prodname_free_team %} para organizações | 500MB | 1 GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

Todos os dados transferidos, quando acionados por {% data variables.product.prodname_actions %}, e os dados transferidos de qualquer fonte são gratuitos. Determinamos que você está baixando pacotes usando o {% data variables.product.prodname_actions %} ao fazer logon no {% data variables.product.prodname_registry %} usando um `GITHUB_TOKEN`.

||Hospedado|Auto-hospedado|
|-|-|-|
|Acesso por meio de um `GITHUB_TOKEN`|Gratuita|Gratuita|
|Acesso usando um token de acesso pessoal|Gratuita|$|

O uso do armazenamento é compartilhado com artefatos de construção produzidos por {% data variables.product.prodname_actions %} para repositórios de sua conta. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

O {% data variables.product.prodname_dotcom %} cobra o uso da conta que possui o repositório onde o pacote é publicado. Se o uso da sua conta ultrapassar esses limites e você definir um limite de gastos acima de US$ 0, você pagará US$ 0,25 por GB de armazenamento por dia e US$ 0,50 por GB de transferência de dados.

Por exemplo, se sua organização usa {% data variables.product.prodname_team %}, permite gastos ilimitados, usa 150GB de armazenamento, e possui 50GB de transferência de dados durante um mês, a organização teria excessos de 148GB para armazenamento e 40GB para transferência de dados para esse mês. O excedente de armazenamento custaria US$ 0,25 por GB por dia ou US$ 37. O excesso para transferência de dados custaria US$ 0,50 ou US$ 20 por GB.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

No final do mês, {% data variables.product.prodname_dotcom %} arredonda sua transferência de dados para o GB mais próximo.

O {% data variables.product.prodname_dotcom %} calcula seu uso do armazenamento para cada mês com base no uso por hora durante aquele mês. Por exemplo, se durante o mês de março você utilizar 3 GB em 10 dias e 12 GB nos 21 dias subsequentes, o uso do armazenamento será de:

- 3 GB x 10 dias x (24 horas por dia) = 720 GB-Horas
- 12 GB x 21 dias x (24 horas por dia) = 6,048 GB-Horas
- 720 GB-Horas + 6.048 GB-Horas = 6.768 GB-Horas
- 6\.768 GB-Horas / (744 horas por mês) = 9,0967 GB-Meses

No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Portanto, seu uso de armazenamento em março seria de 9,097 GB.

Se uso de {% data variables.product.prodname_registry %} compartilha a data de cobrança, o método de pagamento e o recibo que já existem para sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## <a name="about-spending-limits"></a>Sobre limites de gastos

{% data reusables.package_registry.packages-spending-limit-detailed %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)".

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
