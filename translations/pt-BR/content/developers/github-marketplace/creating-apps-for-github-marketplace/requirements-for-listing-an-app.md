---
title: Requisitos para listar um aplicativo
intro: 'Os aplicativos em {% data variables.product.prodname_marketplace %} devem atender aos requisitos definidos nessa página antes que o anúncio possa ser publicado.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 58112d935a77119325dab4ad72c87561d0c00e47
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083967'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Os requisitos para a anunciar um aplicativo em {% data variables.product.prodname_marketplace %} variam de acordo com o fato de você desejar oferecer um aplicativo grátis ou pago.

## Requisitos para todos os anúncios de {% data variables.product.prodname_marketplace %}

Todos os anúncios em {% data variables.product.prodname_marketplace %} devem ser para ferramentas que fornecem valor à comunidade de {% data variables.product.product_name %}. Ao enviar sua listagem para publicação, você precisa ler e aceitar os termos do "[Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)".

### Requisitos de experiência do usuário para todos os aplicativos

Todos os anúncios devem atender aos requisitos a seguir, independentemente de serem para um aplicativo grátis ou pago.

- Os anúncios não devem persuadir ativamente os usuários para fora de {% data variables.product.product_name %}.
- Os anúncios devem incluir informações de contato válidas para o editor.
- Os anúncios devem ter uma descrição relevante do aplicativo.
- Os anúncios devem especificar um plano de preços.
- Os aplicativos devem fornecer valor aos clientes e integrar-se à plataforma de alguma forma além da autenticação.
- Os aplicativos devem estar disponíveis publicamente em {% data variables.product.prodname_marketplace %} e não podem estar na versão beta ou disponíveis apenas por convite.
- Os aplicativos devem ter eventos webhook configurados para notificar o editor de qualquer alteração do plano ou cancelamentos usando a API de {% data variables.product.prodname_marketplace %} Para obter mais informações, confira "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Para obter mais informações sobre como fornecer uma ótima experiência do cliente, confira "[Melhores práticas de experiência do cliente para aplicativos](/developers/github-marketplace/customer-experience-best-practices-for-apps)".

### Requisitos da marca e anúncios para todos os aplicativos

- Os aplicativos que usam logotipos do GitHub precisam seguir as diretrizes de {% data variables.product.company_short %}. Para obter mais informações, confira "[Logotipos e uso do {% data variables.product.company_short %}](https://github.com/logos)".
- Os aplicativos precisam ter um logotipo, um cartão de recurso e imagens de captura de tela que atendam às recomendações fornecidas em "[Como escrever descrições de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".
- As listagens devem incluir descrições bem escritas e sem erros gramaticais. Para obter diretrizes sobre como escrever sua listagem, confira "[Como escrever descrições de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".

Para proteger seus clientes, recomendamos que siga as práticas recomendadas em matéria de segurança. Para obter mais informações, confira "[Melhores práticas de segurança para aplicativos](/developers/github-marketplace/security-best-practices-for-apps)".

## Considerações para aplicativos gratuitos

{% data reusables.marketplace.free-apps-encouraged %} 

## Requisitos para aplicativos pagos

Para publicar um plano pago para o seu aplicativo em {% data variables.product.prodname_marketplace %}, seu aplicativo deverá pertencer a uma organização que seja um publicador verificado. Para obter mais informações sobre o processo de verificação ou a transferência da propriedade do seu aplicativo, confira "[Como solicitar a verificação de editor para sua organização](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

Se seu aplicativo já está publicado e você é um editor verificado, você poderá publicar um novo plano pago no editor do plano de preços. Para obter informações, confira "[Como definir planos de preços para sua listagem](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

Para publicar um aplicativo pago (ou um aplicativo que ofereça um plano pago), você também deve atender aos seguintes requisitos:

- {% data variables.product.prodname_github_apps %} deve ter no mínimo 100 instalações.
- {% data variables.product.prodname_oauth_apps %} deve ter no mínimo 200 usuários.
- Todos os aplicativos pagos devem lidar com eventos de compra de {% data variables.product.prodname_marketplace %} para novas compras, atualizações, downgrades, cancelamentos e testes grátis. Para obter mais informações, confira "[Requisitos de cobrança para aplicativos pagos](#billing-requirements-for-paid-apps)" abaixo.

Quando estiver pronto para publicar o aplicativo em {% data variables.product.prodname_marketplace %}, você deverá solicitar a verificação para o anúncio do aplicativo.

{% note %}

**Observação:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obter informações sobre como transferir um aplicativo para uma organização, confira: "[Como enviar sua listagem para publicação](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% endnote %}

## Requisitos de cobrança para aplicativos pagos

Seu aplicativo não precisa gerenciar pagamentos, mas precisa usar eventos de compra de {% data variables.product.prodname_marketplace %} para gerenciar novas compras, atualizações, downgrades, cancelamentos e testes grátis. Para obter informações sobre como integrar esses eventos ao seu aplicativo, confira "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Usar a API de cobrança do GitHub permite aos clientes comprar um aplicativo sem sair do GitHub e pagar o serviço com o método de pagamento já anexado à sua conta em {% data variables.product.product_location %}.

- Os aplicativos devem ser compatíveis tanto com a cobrança anual quanto mensal para as compras de suas assinaturas pagas.
- As listagens podem oferecer qualquer combinação de planos grátis e pagos. Os planos grátis são opcionais, porém incentivados. Para obter mais informações sobre como criar um plano de preços, confira "[Como definir um plano de preços da listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".
