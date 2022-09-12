---
title: 'Erro: chave em uso'
intro: 'Este erro ocorre quando você tenta [adicionar uma chave](/articles/adding-a-new-ssh-key-to-your-github-account) que já foi adicionada a outra conta ou repositório.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: d202de2efe05951fe829a8198b20831fc15bbd72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083554'
---
## Descobrir onde a chave foi usada

Para determinar o local em que a chave já foi usada, abra um terminal e digite o comando `ssh`. Use o sinalizador `-i` para fornecer o caminho para a chave que deseja verificar:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

O *nome de usuário* na resposta é a conta do {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} à qual a chave está anexada no momento. Se a resposta se parece com "nome de usuário/repositório", a chave foi anexada a um repositório como uma [*chave de implantação*](/guides/managing-deploy-keys#deploy-keys).


Para forçar o SSH a usar apenas a chave fornecida na linha de comando, use `-o` para adicionar a opção `IdentitiesOnly=yes`:

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## Corrigir o problema

Para resolver o problema, primeiro, remova a chave da outra conta ou do outro repositório e [adicione-a à sua conta](/articles/adding-a-new-ssh-key-to-your-github-account).

Se você não tiver permissões para transferir a chave e não puder entrar em contato com um usuário que consiga fazer isso, remova as chaves e [gere outras](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Chaves de implantação

Depois que uma chave tiver sido vinculada a um repositório como uma chave de implantação, ela não poderá ser usada em outro repositório.  Se estiver encontrando esse erro ao configurar chaves de implantação, confira "[Como gerenciar chaves de implantação](/guides/managing-deploy-keys)".
