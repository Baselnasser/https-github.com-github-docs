---
title: Configurando um cache de repositório
intro: 'Você pode configurar um cache de repositório criando um novo dispositivo, conectando o cache do repositório ao dispositivo primário e configurando a replicação das redes de repositórios no cache do repositório.'
versions:
  ghes: '>=3.3'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: dced49e1e6795407e2e41f12275a310c3a98aaf1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331999'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## Sobre a configuração para cache de repositório

{% data reusables.enterprise.repository-caching-config-summary %} Em seguida, você pode definir as políticas de localização de dados que regem quais redes de repositório são replicadas no cache do repositório.

O cache de repositório não é compatível com clustering.

## DNS para caches de repositório

A instância primária e o cache do repositório devem ter nomes de DNS diferentes. Por exemplo, se a instância primária estiver em `github.example.com`, você poderá optar por nomear um cache `europe-ci.github.example.com` ou `github.asia.example.com`.

Para que os computadores de CI busquem o cache do repositório em vez da instância primária, use a definição de configuração `url.<base>.insteadOf` do Git. Para obter mais informações, confira [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) na documentação do Git. 

Por exemplo, o `.gitconfig` global do computador de CI incluirá estas linhas.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Em seguida, quando instruído para buscar `https://github.example.com/myorg/myrepo`, o Git o buscará em `https://europe-ci.github.example.com/myorg/myrepo`.

## Configurando um cache de repositório

{% ifversion ghes = 3.3 %}
1. Em seu dispositivo {% data variables.product.prodname_ghe_server %} principal, habilite o sinalizador de recurso para cache de repositório.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Configure um novo appliance do {% data variables.product.prodname_ghe_server %} na plataforma desejada. Este dispositivo será o cache do repositório. Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
{% data reusables.enterprise_installation.replica-steps %}
1. Conecte ao endereço IP do repositório utilizando o SSH.

   ```shell
   $ ssh -p 122 admin@<em>REPLICA IP</em>
   ```
{%- ifversion ghes = 3.3 %}
1. Na réplica de cache, habilite o sinalizador de recurso para o cache do repositório.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para verificar a conexão com o primário e habilitar o modo de réplica para o cache do repositório, execute `ghe-repl-setup` novamente.

   ```shell
   $ ghe-repl-setup <em>PRIMARY IP</em>
   ```

1. Defina um `cache_location` para o cache do repositório, substituindo *CACHE-LOCATION* por um identificador alfanumérico, como a região em que o cache foi implantado. Defina também um nome de datacenter para esse cache. Os novos caches tentarão ser semeados de outro cache no mesmo datacenter.

   ```shell
   $ ghe-repl-node --cache <em>CACHE-LOCATION</em> --datacenter <em>REPLICA-DC-NAME</em>
   ```

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. Para habilitar a replicação de redes de repositórios no cache do repositório, defina uma política de localização de dados. Para obter mais informações, confira "[Políticas de localização de dados](#data-location-policies)".

## Políticas de localização de dados

Você pode controlar a localidade dos dados configurando políticas de localização de dados para seus repositórios com o comando `spokesctl cache-policy`. As políticas de localização de dados determinam quais redes de repositório são replicadas em quais caches de repositório. Por padrão, nenhuma rede de repositório será replicada em todos os caches de repositórios até que uma política de localização de dados seja configurada.

As políticas de localização de dados afetam apenas o conteúdo do Git. O conteúdo do banco de dados, como comentários sobre problemas e solicitações de pull, será replicado para todos os nós, independentemente da política.

{% note %}

**Observação:** as políticas de localização de dados não são iguais ao controle de acesso. Você precisa usar funções de repositório para controlar os usuários que podem acessar um repositório. Para obter mais informações sobre as funções de repositório, confira "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% endnote %} 

Você pode configurar uma política para replicar todas as redes com o sinalizador `--default`. Por exemplo, este comando criará uma política para replicar uma única cópia de cada rede de repositório para o conjunto de caches de repositório cujo `cache_location` é "kansas".

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

Para configurar a replicação de uma rede de repositório, especifique o repositório que é a raiz da rede. A rede de um repositório inclui um repositório e todas as bifurcações do repositório. Você não pode replicar parte de uma rede sem replicar toda a rede.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

Você pode substituir uma política que replica todas as redes e excluir as redes específicas, especificando uma contagem de réplica de zero para a rede. Por exemplo, este comando especifica que qualquer cache de repositórios no local "kansas" não pode conter cópias dessa rede.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

As contagens de réplica superiores a um em um determinado local de cache não são compatíveis.
