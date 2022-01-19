---
title: Fazer merge de várias contas de usuário
intro: 'Se você tem contas separadas para o trabalho e uso pessoal, é possível fazer merge das contas.'
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Fazer merge de várias contas de usuário
---

{% tip %}

{% ifversion ghec %}

**Tip:** {% data variables.product.prodname_emus %} allow an enterprise to provision unique user accounts for its members through an identity provider (IdP). For more information, see "[About Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)." For other use cases, we recommend using only one user account to manage both personal and professional repositories.

{% else %}

**Dicas::** recomendamos que você use apenas uma conta de usuário para gerenciar os repositórios pessoal e profissional.

{% endif %}

{% endtip %}

{% warning %}

**Aviso:** A organização e as permissões de acesso ao repositório não são transferíveis entre contas. Se a conta que você deseja excluir tiver uma permissão de acesso existente, um proprietário ou administrador de repositório da organização precisará convidar a conta que você deseja manter.

{% endwarning %}

1. [Transfira quaisquer repositórios](/articles/how-to-transfer-a-repository) da conta que você quer excluir para a conta que quer manter. Os problemas, pull requests e wikis também serão transferidos. Verifique se os repositórios estão na conta que você quer manter.
2. [Atualize as URLs remote](/github/getting-started-with-github/managing-remote-repositories) em quaisquer clones locais dos repositórios que foram movidos.
3. [Exclua a conta](/articles/deleting-your-user-account) que não quer mais usar.
4. Para atribuir commits anteriores à nova conta, adicione o endereço de e-mail que você usou para criar os commits para a conta que você está mantendo. Para obter mais informações, consulte "[Por que minhas contribuições não aparecem no meu perfil?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

## Leia mais

- "[Tipos de conta do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
