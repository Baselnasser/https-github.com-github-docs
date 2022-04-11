---
title: Restringindo a visibilidade das portas encaminhadas
shortTitle: Restringindo visibilidade da porta
intro: Você pode definir as restrições das opções de visibilidade que os usuários podem escolher quando encaminham portas em codespaces na sua organização.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Visão Geral

De modo geral, dentro de um codespace, você pode encaminhar portas privadamente (apenas para você mesmo), para integrantes da sua organização ou publicamente (para qualquer pessoa com o URL). Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Como proprietário de uma organização, você deverá configurar restrições sobre as opções de visibilidade que os usuários podem definir ao encaminhar portas. Por exemplo, por razões de segurança, você deverá impedir o encaminhamento da porta pública. Faça isso definindo uma ou mais políticas nas configurações de {% data variables.product.prodname_codespaces %} para a sua organização.

### Comportamento quando você define uma restrição de visibilidade da porta

Se houver códigos que não estiverem mais de acordo com uma política que você definiu, estes códigos continuarão a funcionar até que sejam interrompidos ou expirados. Quando o usuário restabelecer o codespace, ele estará sujeito às restrições da política.

{% note %}

**Observação**: Você não pode desabilitar o encaminhamento de porta privada, uma vez que o encaminhamento de portas privadas é exigido por {% data variables.product.prodname_codespaces %} para continuar funcionando como foi concebido, por exemplo, para o encaminhamento de SSH na porta 22.

{% endnote %}

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. A adição de políticas torna mais restritiva a escolha das opções de visibilidade e não menos.

Por exemplo, você poderia criar uma política de toda a organização que restrinja as opções de visibilidade apenas à organização. Em seguida, é possível definir uma política para o repositório A que desabilite a visibilidade pública e organizacional, o que resultaria no fato de que apenas o encaminhamento de porta privada estivesse disponível para este repositório. Definir uma política para o repositório A que permitisse público e organização resultaria apenas na visibilidade organizacional, porque a política de toda a organização não permite a visibilidade pública.

If you add an organization-wide policy, you should set it to the most lenient visibility option that will be available for any repository in your organization. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

## Adding a policy to limit the port visibility options

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "codespaces" aria-label="The codespaces icon" %} {% data variables.product.prodname_codespaces %}** then click **Policies**.
1. Na página "Políticas do codespace", clique em **Criar política**.
1. Insira um nome para sua nova política.
1. Click **Add constraint** and choose **Port visibility**.

   ![Add a constraint for port visibility](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the constraint

   ![Edit the port visibility constraint](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Clear the selection of the port visibility options (**Org** or **Public**) that you don't want to be available.

   ![Choose the port visibility options](/assets/images/help/codespaces/choose-port-visibility-options.png)

1. Na área "Alterar destino da política", clique no botão suspenso.
1. Selecione **Todos os repositórios** ou **Repositórios selecionados** para determinar em quais repositórios esta política será aplicada.
1. Se você escolheu **repositórios selecionados**:
   1. Clique em {% octicon "gear" aria-label="The settings icon" %}.

      ![Editar as configurações da política](/assets/images/help/codespaces/policy-edit.png)

   2. Selecione os repositórios aos quais você quer que esta política seja aplicada.
   3. Na parte inferior da lista de repositórios, clique em **Selecionar repositórios**.

      ![Selecionar repositórios para esta política](/assets/images/help/codespaces/policy-select-repos.png)

1. Clique em **Salvar**.

## Editando uma política

1. Exibir a página "Políticas de codespaces". For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Clique no nome da política que você deseja editar.
1. Faça as alterações necessárias e, em seguida, clique em **Salvar**.

## Excluindo uma política

1. Exibir a página "Políticas de codespaces". For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![O botão de excluir uma política](/assets/images/help/codespaces/policy-delete.png)
