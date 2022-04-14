---
title: Proteger pushes com digitalização de segredo
intro: 'Você pode usar o {% data variables.product.prodname_secret_scanning %} para evitar que segredos compatíveis sejam enviados por push para a sua organização ou repositório, habilitando a proteção por push push.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Proteção por push
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## Sobre a proteção por push para segredos

Até agora, {% data variables.product.prodname_secret_scanning_GHAS %} verifica segredos _após_ um push e alerta usuários de segredos expostos. {% data reusables.secret-scanning.push-protection-overview %}

{% data variables.product.prodname_secret_scanning_caps %} como proteção por push atualmente verifica repositórios de segredos emitidos pelos seguintes prestadores de serviços.

{% data reusables.secret-scanning.secret-list-private-push-protection %}

## Habilitando {% data variables.product.prodname_secret_scanning %} como uma proteção por push

Para você usar {% data variables.product.prodname_secret_scanning %} como proteção por push, a organização ou repositório deverá ter {% data variables.product.prodname_GH_advanced_security %} e {% data variables.product.prodname_secret_scanning %} habilitados. Para obter mais informações, consulte "[Gerenciando as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization), "[Gerenciando as configurações de segurança e análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)e "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

Os proprietários da organização, gerentes de segurança e administradores de repositórios podem habilitar a proteção por push para {% data variables.product.prodname_secret_scanning %} por meio da interface do usuário e da API. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#update-a-repository)" e expanda as "Propriedades do objeto `security_and_analysis` " na documentação da API REST.

### Habilitando {% data variables.product.prodname_secret_scanning %} como uma proteção por push para uma organização

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Habilitando {% data variables.product.prodname_secret_scanning %} como uma proteção por push para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}


## Usando {% data variables.product.prodname_secret_scanning %} como proteção por push da linha de comando

Ao tentar enviar um segredo compatível para um repositório ou organização com {% data variables.product.prodname_secret_scanning %} como uma proteção push habilitada, o {% data variables.product.prodname_dotcom %} bloqueará o push. Você pode remover o segredo do seu commit ou seguir um URL fornecido para permitir o push.

Até cinco segredos detectados serão exibidos por vez na linha de comando. Se um segredo específico já foi detectado no repositório e um alerta já existe, {% data variables.product.prodname_dotcom %} não bloqueará esse segredo.

![Captura de tela que mostra que um push está bloqueado quando um usuário tenta fazer push de um segredo para um repositório](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

Se você precisar remover o segredo do seu último commit (ou seja, `HEAD`) no branch pressionado e quaisquer commits anteriores que contenham o segredo, você poderá remover o segredo de `HEAD` e, em seguida, fazer a combinação por squash dos commits entre quando o commit foi introduzido e a primeira versão do `HEAD` para a qual o segredo foi removido.

{% note %}

**Atenção**:

* Se sua configuração do git é compatível com pushes para vários branches, e não apenas para o branch padrão, seu push pode ser bloqueado devido a novos refs indesejados. Para obter mais informações, consulte as opções [`push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) na documentação do Git.
* Se {% data variables.product.prodname_secret_scanning %} vencer em um push, {% data variables.product.prodname_dotcom %} ainda executará uma digitalização após o push.

{% endnote %}

### Permitindo que um segredo bloqueado seja enviado por push

Se {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro enviar por push, você poderá permitir o segredo e especificar a razão pela qual ele deve ser permitido.

Se você confirmar que um segredo é real e pretender corrigi-lo mais tarde, você deverá procurar remediar o segredo o mais rápido possível. Por exemplo, você pode revogar o segredo e remover o segredo do histórico de commit do repositório. Para obter mais informações, consulte "[Removendo dados confidenciais de um repositório](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

Quando você permite que um segredo seja feito push é criado um alerta na guia "Segurança". O alerta está fechado e nenhuma notificação é enviada se você especificar que o segredo é um falso-positivo ou usado apenas nos testes. Se você especificar que o segredo é real e que você vai corrigi-lo mais tarde o alerta de segurança permanece aberto e as notificações são enviadas ao autor dos administradores de commit e repositório. Para obter mais informações, consulte "[Gerenciando alertas da digitalização do segredo](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

1. Acesse o URL retornado por {% data variables.product.prodname_dotcom %} quando seu push foi bloqueado. ![Captura de tela que mostra o formulário com opções para desbloquear o push de um segredo](/assets/images/help/repository/secret-scanning-unblock-form.png)
2. Escolha a opção que melhor descreve por que você deve ser capaz de enviar por push o segredo.
    - Se o segredo é usado apenas em testes e não apresenta nenhuma ameaça, clique em **É usado em testes**.
    - Se a seqüência de caracteres detectada não é um segredo, clique **É um falso-´positivo**.
    - Se o segredo é real mas você pretende corrigi-lo mais tarde, clique em **Eu vou corrigi-lo mais tarde**.
3. Clique **Me permite enviar por push este segredo**.
4. Tente novamente na linha de comando em três horas. Se não enviou por push em três horas, você terá de repetir este processo.
