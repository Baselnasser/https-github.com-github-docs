---
title: Gerar uma nova chave SSH e adicioná-la ao ssh-agent
intro: 'Depois de verificar a existência de chaves SSH, é possível gerar uma nova chave SSH para autenticação e adicioná-la ao ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Gerar nova chave SSH
---

## About SSH key passphrases

{% data reusables.ssh.about-ssh %} For more information, see "[About SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

When you generate an SSH key, you can add a passphrase to further secure the key. Whenever you use the key, you must enter the passphrase. If your key has a passphrase and you don't want to enter the passphrase every time you use the key, you can add your key to the SSH agent. The SSH agent manages your SSH keys and remembers your passphrase.

Se você ainda não tem uma chave SSH, você deve gerar uma nova chave SSH para usar para a autenticação. Se você não tem certeza se já tem uma chave SSH, você pode verificar se há chaves existentes. Para obter mais informações, consulte "[Verificar as chaves SSH existentes](/github/authenticating-to-github/checking-for-existing-ssh-keys)".

Se você deseja usar uma chave de segurança de hardware para efetuar a autenticação em {% data variables.product.product_name %}, você deverá gerar uma nova chave SSH para a sua chave de segurança de hardware. Você deve conectar a sua chave de segurança de hardware ao seu computador ao efetuar a a sua autenticação com o par de chaves. Para obter mais informações, consulte as [notas de versão do OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Gerar uma nova chave SSH

You can generate a new SSH key on your local machine. After you generate the key, you can add the key to your account on {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} to enable authentication for Git operations over SSH.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cole o texto abaixo, substituindo o endereço de e-mail pelo seu {% data variables.product.product_name %}.
   {%- ifversion ghae %}
    <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>" 
   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
   ```
   {% note %}

   **Observação:** Se você estiver usando um sistema legado que não é compatível com o algoritmo Ed25519, use:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
   ```

   {% endnote %}
   {%- endif %}

   Isto cria uma nova chave SSH, usando o nome de e-mail fornecido como uma etiqueta.
   ```shell
   > Generating public/private <em>algorithm</em> key pair.
   ```
3. Quando aparecer a solicitação "Enter a file in which to save the key" (Insira um arquivo no qual salvar a chave), presssione Enter. O local padrão do arquivo será aceito.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_<em>algorithm</em>): <em>[Press enter]</em>
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_<em>algorithm</em>):<em>[Press enter]</em>
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/<em>algorithm</em>): <em>[Press enter]</em>
   ```

   {% endlinux %}

4. Digite uma frase secreta segura no prompt. Para obter mais informações, consulte ["Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)".
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```

## Adicionar sua chave SSH ao ssh-agent

Antes de adicionar uma nova chave SSH ao agente para gerenciar suas chaves, você deve verificar as chaves SSH existentes e gerado uma nova chave SSH. <span class="platform-mac">Ao adicionar sua chave SSH ao agent, use o comando padrão "ssh-add" do macOS, e não um aplicativo instalado por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) ou qualquer outra fonte externa.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Se estiver usando macOS Sierra 10.12.2 ou posterior, será necessário modificar seu arquivo `~/.ssh/config` para carregar automaticamente as chaves no ssh-agent e armazenar as frases secretas em seu keychain.

   * Primeiro, verifique se o arquivo `~/.ssh/config` existe no local padrão.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/<em>you</em>/.ssh/config does not exist.
     ```

   * Se o arquivo não existir, crie o arquivo.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Abra seu arquivo `~/.ssh/config` e modifique o arquivo para que contenha as seguintes linhas. Se o seu arquivo de chave SSH tiver um nome ou caminho diferente do exemplo de código, modifique o nome ou o caminho para corresponder à sua configuração atual.

     ```
     Host *
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Notas:**

     - If you chose not to add a passphrase to your key, you should omit the `UseKeychain` line.

     - If you see a `Bad configuration option: usekeychain` error, add an additional line to the configuration's' `Host *` section.

       ```
       Host *
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Adicione sua chave SSH privada ao ssh-agent e armazene sua frase secreta no keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
   ```
   {% note %}

   **Observação:** A opção `-K` é a versão padrão da Apple de `ssh-add`, que armazena a frase secreta na sua keychain para você quando você adiciona uma chave SSH ao ssh-agent. Se você optou por não adicionar uma frase secreta à sua chave, execute o comando sem a opção `-K`.

   Caso não tenha a versão standard da Apple instalada, você poderá receber uma mensagem de erro. Para obter mais informações sobre como resolver esse erro, consulte "[Erro: ssh-add: opção ilícita -- K](/articles/error-ssh-add-illegal-option-k)".

   No MacOS Monterey (12.0), os sinalizadores `-K` e `-A` tornaram-se obsoletos e foram substituídos pelos sinalizadores `--apple-use-keychain` e `--apple-load-keychain`, respectivamente.

   {% endnote %}

4. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Certifique-se de que o ssh-agent está em execução. Você pode usar as instruções "Lançamento automático do ssh-agent" em "[Trabalhando com palavras-chave SSH](/articles/working-with-ssh-key-passphrases)" ou iniciá-lo manualmente:
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endlinux %}

## Gerar uma nova chave SSH para uma chave de segurança de hardware

Se você estiver usando macOS ou Linux, Talvez você precise atualizar seu cliente SSH ou instalar um novo cliente SSH antes de gerar uma nova chave SSH. Para obter mais informações, consulte "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)."

1. Insira sua chave de segurança de hardware no seu computador.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cole o texto abaixo, substituindo o endereço de e-mail da sua conta em {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "<em>your_email@example.com</em>"
   ```

   {%- ifversion not ghae %}
   {% note %}

   **Observação:** Se o comando falhar e você receber o erro `formato inválido` ou a funcionalidade `não compatível`, é possível que você esteja usando uma chave de segurança de hardware incompatível com o algoritmo Ed25519. Insira o comando a seguir.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %}
   {%- endif %}
4. Quando solicitado, toque no botão da sua chave de segurança de hardware.
5. Quando for solicitado a "Insira um arquivo para salvar a chave", pressione Enter para aceitar o local padrão do arquivo.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):<em>[Press enter]</em>
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endlinux %}

6. Quando solicitado que você digite uma frase secreta, pressione **Enter**.
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```
7. Adicione a chave SSH à sua conta em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".
