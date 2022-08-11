---
title: Adicionar uma nova chave SSH à sua conta do GitHub
intro: 'Para configurar sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para usar sua chave SSH nova (ou existente) chave SSH, você também deverá adicionar a chave à sua conta.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Adicionar uma nova chave SSH
---

## Sobre a adição de chaves SSH à sua conta

{% data reusables.ssh.about-ssh %} Para obter mais informações, consulte "[Sobre SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

Após gerar um par de chaves SSH, você deve adicionar a chave pública em {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar o acesso SSH para a sua conta.

## Pré-requisitos

Antes de adicionar uma nova chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, siga os seguintes passos.

1. Verifique se há chaves SSH existentes. Para obter mais informações, consulte "[Verificar as chaves SSH existentes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)".
1. Gere uma nova chave SSH e adicione-a ao agente SSH da sua máquina. Para obter mais informações, consulte "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Adicionando uma nova chave SSH à sua conta

Depois de adicionar uma nova chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá reconfigurar quaisquer repositórios locais para usar SSH. Para obter mais informações, consulte "[Alternar URLs remotos de HTTPS para SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.key-type-support %}

{% mac %}

{% webui %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Dica:** se `pbcopy` não estiver funcionando, você poderá localizar a pasta `.ssh` oculta, abrir o arquivo no seu editor de texto de preferência e copiá-lo na área de transferência.

  {% endtip %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "MacBook Air Pessoal".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% webui %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Dica:** se `clip` não estiver funcionando, você poderá localizar a pasta `.ssh` oculta, abrir o arquivo no seu editor de texto de preferência e copiá-lo na área de transferência.

  {% endtip %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "MacBook Air Pessoal".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endwindows %}

{% linux %}

{% webui %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Dica:** Como alternativa, você pode localizar a pasta oculta de `.ssh`, abrir o arquivo no seu editor de texto favorito e copiá-lo na sua área de transferência.

  {% endtip %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "MacBook Air Pessoal".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de poder usar o {% data variables.product.prodname_cli %} para adicionar uma chave SSH à sua conta, você deve efetuar a autenticação no {% data variables.product.prodname_cli %}. Para obter mais informações, consulte [`login login gh`](https://cli.github.com/manual/gh_auth_login) na documentação do {% data variables.product.prodname_cli %}.

Para adicionar uma chave SSH à sua conta do GitHub, use o subcomando `ssh-key add`, especificando a sua chave pública.

```shell
gh ssh-key add <em>key-file</em>
```

Para incluir um título para a nova chave, use o sinalizador `-t` ou `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

Se você gerou a sua chave SSH seguindo as instruções em "[Gerando uma nova chave SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", você pode adicionar a chave à sua conta usando este comando.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Leia mais

- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
