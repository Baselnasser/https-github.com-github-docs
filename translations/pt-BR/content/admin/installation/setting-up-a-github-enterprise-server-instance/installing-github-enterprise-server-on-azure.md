---
title: Instalar o GitHub Enterprise Server no Azure
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Azure, você deve implantar em uma instância com otimização de memória que dê suporte ao armazenamento premium.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 52c435b01e830968eaf81dc411727ea2bacabd2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093946'
---
Você pode implantar o {% data variables.product.prodname_ghe_server %} no Azure global ou Azure Government.

## Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você deve ter uma conta do Azure que permita provisionar novas máquinas. Para obter mais informações, acesse o [site do Microsoft Azure](https://azure.microsoft.com).
- A maioria das ações necessárias para iniciar sua máquina virtual (VM) também pode ser executada pelo Portal do Azure. No entanto, é recomendável instalar a interface da linha de comando (CLI) do Azure para a configuração inicial. Veja abaixo alguns exemplos de uso da CLI do Azure 2.0. Para obter mais informações, confira o guia do Azure "[Instalação da CLI 2.0 do Azure](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)".

## Considerações sobre hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determinar o tipo de máquina virtual

Antes de lançar {% data variables.product.product_location %} no Azure, você deverá determinar o tipo de máquina que melhor atende às necessidades da sua organização. Para obter mais informações sobre computadores com otimização de memória, confira "[Tamanhos de máquina virtual otimizados para memória](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory)" na documentação Microsoft Azure. Para examinar os requisitos mínimos de recursos para dados para {% data variables.product.product_name %}, confira "[Requisitos mínimos](#minimum-requirements)".


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## Criar a instância da máquina virtual do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Localize a imagem mais recente do appliance do {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre o comando `vm image list`, confira "[`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)" na documentação da Microsoft.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Crie uma VM usando a imagem do appliance. Para obter mais informações, confira "[`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)" na documentação da Microsoft.

  Veja as opções de nome da VM, grupo de recursos, tamanho da VM, nome da região preferida do Azure, nome da da imagem de VM do appliance que você listou na etapa anterior e o SKU de armazenamento para Premium. Para obter mais informações sobre grupos de recursos, confira "[Grupos de recursos](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)" na documentação da Microsoft.

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. Defina as configurações de segurança na VM para abrir as portas necessárias. Para obter mais informações, confira "[`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)" na documentação da Microsoft. A tabela abaixo descreve cada porta para determinar quais portas você precisa abrir.

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  Esta tabela identifica o uso de cada porta.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Crie e anexe um novo disco de dados não criptografado à VM e configure o tamanho com base na sua contagem de licenças do usuário. Para obter mais informações, confira "[`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)" na documentação da Microsoft.

  Transmita as opções de nome da VM (por exemplo, `ghe-acme-corp`), o grupo de recursos, o SKU de armazenamento premium, o tamanho do disco (por exemplo, `100`) e um nome para o VHD resultante.

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Observação:** para que as instâncias de não produção tenham uma taxa de transferência de E/S suficiente, o tamanho mínimo recomendado do disco é de 40 GiB com o cache de leitura/gravação habilitado (`--caching ReadWrite`).

   {% endnote %}

## Configurar a máquina virtual do {% data variables.product.prodname_ghe_server %}

1. Antes de configurar a VM, você deve aguardar a entrada no status ReadyRole. Verifique o status da VM com o comando `vm list`. Para obter mais informações, confira "[`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)" na documentação da Microsoft.
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **Observação:** o Azure não cria automaticamente uma entrada FQDNS para a VM. Para obter mais informações, confira o guia do Azure sobre como "[Criar um nome de domínio totalmente qualificado no portal do Azure para uma VM do Linux](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)".
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, confira "[Como configurar o dispositivo do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## Leitura adicional
  
- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
