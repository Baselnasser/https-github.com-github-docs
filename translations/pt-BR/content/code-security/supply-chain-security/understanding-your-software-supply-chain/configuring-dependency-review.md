---
title: Configurando a revisão de dependências
intro: Você pode usar a análise de dependência para capturar vulnerabilidades antes que sejam adicionadas ao seu projeto.
shortTitle: Configurar a revisão de dependências
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

{% data reusables.dependency-review.beta %}

## Sobre revisão de dependências

{% data reusables.dependency-review.feature-overview %}

Para obter mais informações, consulte[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" e[Revisando as alterações de dependência em um pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

## Sobre a configuração de revisão de dependências

{% ifversion fpt %}
A revisão de dependências está disponível em todos os repositórios públicos de todos os produtos e não pode ser desabilitada. A revisão de dependências está disponível em repositórios privados pertencentes a organizações que usam o GitHub Enterprise Cloud e têm uma licença para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %}
Revisão de dependências está incluída em {% data variables.product.product_name %} para repositórios públicos. Para usar a revisão de dependências em repositórios privados pertencentes a organizações, você deve ter uma licença para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) e ter o gráfico de dependências habilitado.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Se "{% data variables.product.prodname_GH_advanced_security %} não estiver ativado, clique em **Habilitar ** ao lado do recurso. ![Captura de tela do recurso do GitHub Advanced Security com o botão "Habilitar" destacado](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes %}
A revisão de dependências está disponível quando o gráfico de dependências está habilitado para {% data variables.product.product_location %} e {% data variables.product.prodname_advanced_security %} está habilitado para a organização ou repositório. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."

### Verificando se o gráfico de dependências está habilitado


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Configurar funcionalidades de segurança e análise", verifique se o gráfico de dependências está habilitado.
1. Se o gráfico de dependência estiver habilitado, clique em **Habilitar** ao lado de "{% data variables.product.prodname_GH_advanced_security %}" para habilitar {% data variables.product.prodname_advanced_security %}, incluindo a revisão de dependência. O botão de habilitar estará desabilitado se a sua empresa não tiver licenças disponíveis para {% data variables.product.prodname_advanced_security %}.{% ifversion ghes < 3.3 %} ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %} ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}
{% endif %}

{% ifversion dependency-review-action-configuration %}
## Configuring the {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}
{% data reusables.dependency-review.dependency-review-action-overview %}

The following configuration options are available.

| Opção              | Obrigatório | Uso                                                                                                                                                                                                                                                                       |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fail-on-severity` | Opcional    | Defines the threshold for level of severity (`low`, `moderate`, `high`, `critical`).</br>The action will fail on any pull requests that introduce vulnerabilities of the specified severity level or higher.                                                              |
| `allow-licenses`   | Opcional    | Contains a list of allowed licenses. You can find the possible values for this parameter in the [Licenses](/rest/licenses) page of the API documentation.</br>The action will fail on pull requests that introduce dependencies with licenses that do not match the list. |
| `deny-licenses`    | Opcional    | Contains a list of prohibited licenses. You can find the possible values for this parameter in the [Licenses](/rest/licenses) page of the API documentation.</br>The action will fail on pull requests that introduce dependencies with licenses that match the list.     |

{% tip %}

**Tip:** The  `allow-licenses` and  `deny-licenses` options are mutually exclusive.

{% endtip %}

This {% data variables.product.prodname_dependency_review_action %} example file illustrates how you can use these configuration options.

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v2
        with:
          # Possible values: "critical", "high", "moderate", "low" 
          fail-on-severity: critical
          # You can only can only include one of these two options: `allow-licenses` and `deny-licences`
          # ([String]). Only allow these licenses (optional)
          # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # allow-licenses: GPL-3.0, BSD-3-Clause, MIT

          # ([String]). Block the pull request on these licenses (optional)
          # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # deny-licenses: LGPL-2.0, BSD-2-Clause
```

For further details about the configuration options, see [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
