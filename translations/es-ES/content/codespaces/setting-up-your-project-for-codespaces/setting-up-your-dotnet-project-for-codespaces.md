---
title: Configurar tu proyecto de C# (.NET) para Codespaces
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
intro: 'Inicia con tu proyecto de C# (.NET) en {% data variables.product.prodname_codespaces %} creando un contenedor dev personalizado.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: cae2c48e258cf2f9b8a8cce721d52e3772467430
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063254'
---
## Introducción

Esta guía te muestra cómo configurar tu proyecto de C# (.NET) en {% data variables.product.prodname_codespaces %}. Te mostrará un ejemplo de cómo abrir tu proyecto en un codespace y cómo agregar y modificar una configuración de contenedor de dev desde una plantilla.

### Requisitos previos

- Debes tener un proyecto existente de C# (.NET) en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tiene un proyecto, puede probar este tutorial con el ejemplo siguiente: https://github.com/2percentsilk/dotnet-quickstart.
- Debes tener {% data variables.product.prodname_codespaces %} habilitado en tu organización.

## Paso 1: Abre tu proyecto en un codespace

1. En el nombre del repositorio, usa el menú desplegable **{% octicon "code" aria-label="The code icon" %} Código** y, en la pestaña **Codespaces**, haz clic en **Crear codespace en principal**.

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

  Si no ves esta opción, entonces los {% data variables.product.prodname_codespaces %} no están disponibles para tu proyecto. Vea [Acceso a {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) para más información.

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor de tu codespace tiene muchos lenguajes de programación y tiempos de ejecución, incluyendo a .NET. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Paso 2: agregar una configuración de contenedor de desarrollo al repositorio desde una plantilla

El contenedor de desarrollo predeterminado, o «contenedor de desarrollo», para {% data variables.product.prodname_github_codespaces %} viene con la versión más reciente de Java, los administradores de paquetes (Maven, Gradle) y otras herramientas comunes preinstaladas. Sin embargo, recomendamos que configures tu propio contenedor de desarrollo para incluir todas las herramientas y scripts que necesita el proyecto. Esto garantizará un entorno totalmente reproducible para todos los usuarios de {% data variables.product.prodname_github_codespaces %} en el repositorio.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este ejemplo, haga clic en **C# (.NET)** . Si necesitas características adicionales puedes seleccionar cualquier contenedor que sea específico para C# (.NET) o una combinación de herramientas tales como C# (.NET) y MS SQL.
  ![Selección de la opción C# (.NET) en la lista](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. Haz clic en la versión recomendada de .NET.
  ![Selección de la versión de .NET](/assets/images/help/codespaces/add-dotnet-version.png)
1. Acepta la opción predeterminada para agregar a Node.js a tu personalización.
  ![Selección de agregar Node.js](/assets/images/help/codespaces/dotnet-options.png) {% data reusables.codespaces.rebuild-command %}

### Anatomía de tu contenedor dev

Al agregar la plantilla de contenedor de desarrollo de C# (.NET), se agrega una carpeta `.devcontainer` a la raíz del repositorio del proyecto con los siguientes archivos:

- `devcontainer.json`
- Dockerfile

En el archivo `devcontainer.json` recién agregado se definen varias propiedades que se describen después del ejemplo.

#### devcontainer.json

```json
{
    "name": "C# (.NET)",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
            "VARIANT": "5.0",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*",
            "INSTALL_AZURE_CLI": "false"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //
    // 2. Uncomment these 'remoteEnv' lines:
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Do one of the following depending on your scenario:
    //    * When using GitHub Codespaces and/or Remote - Containers:
    //      1. Start the container
    //      2. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer
    //      3. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https"
    //
    //    * If only using Remote - Containers with a local container, uncomment this line instead:
    //      "mounts": [ "source=${env:HOME}${env:USERPROFILE}/.aspnet/https,target=/home/vscode/.aspnet/https,type=bind" ],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name**: puedes asignar el nombre que quieras al contenedor de desarrollo, este es solo el nombre predeterminado.
- **build**: las propiedades de compilación.
  - **dockerfile**: en el objeto `build`, `dockerfile` contiene la ruta de acceso al Dockerfile que también se ha agregado desde la plantilla.
  - **args**
    - **variant**: este archivo solo contiene un argumento de compilación, la versión de .NET Core que queremos usar.
- **settings**: la configuración de {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux**: aunque aquí bash sea el shell de terminal predeterminado, puedes modificarlo y usar otros.
- **extensions**: las extensiones incluidas de forma predeterminada.
  - **ms-dotnettools.csharp**: la extensión C# de Microsoft proporciona soporte enriquecido para desarrollar en C#, incluidas características como IntelliSense, linting, depuración, navegación y formato de código, refactorización, explorador de variables, explorador de pruebas y mucho más.
- **forwardPorts**: cualquier puerto que se incluya aquí se reenviará de forma automática. Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand**: después de crear el codespace, usa esta opción para ejecutar comandos que no están definidos en el Dockerfile.
- **remoteUser**: de manera predeterminada, la ejecución se realiza como el usuario vscode, pero opcionalmente se puede establecer en root.

#### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Puedes utilizar este Dockerfile para agregar capas de contenedor adicionales y especificar paquetes de SO, versiones de nodo o paquetes globales que queremos incluir en nuestro contenedor.

## Paso 3: Modifica tu archivo devcontainer.json

Con la configuración del contenedor de desarrollo agregada y un conocimiento básico de lo que hace cada elemento, ya puedes realizar cambios para personalizar aún más el entorno. En este ejemplo, agregarás porpiedades para instalar extensiones y tus dependencias de pryecto cuando se lance tu codespace.

1. En el Explorador, seleccione el archivo `devcontainer.json` del árbol para abrirlo. Es posible que tenga que expandir la carpeta `.devcontainer` para verlo.

   ![Archivo de devcontainer.json en el explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Actualice la lista `extensions` del archivo `devcontainer.json` para agregar algunas extensiones que son útiles al trabajar con el proyecto.

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. Quite la marca de comentario de `postCreateCommand` para restaurar las dependencias como parte del proceso de configuración del codespace.

   ```json{:copy}
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Verifica que tus cambios se hayan aplicado con éxito verificando que se haya instalado la extensión "Code Spell Checker".

    ![Lista de extensiones](/assets/images/help/codespaces/dotnet-extensions.png)

## Paso 4: Ejecución de la aplicación

En la sección anterior, ha usado `postCreateCommand` para instalar un conjunto de paquetes mediante el comando `dotnet restore`. Ahora que instalamos nuestras dependencias, podemos ejecutar nuestra aplicación.

1. Para ejecutar la aplicación, presione `F5` o escriba `dotnet watch run` en el terminal.

2. Cuando tu proyecto inicia, debes ver una alerta en la esquina inferior derecha con un mensaje para conectarte al puerto que utiliza tu proyecto.

   ![Notificación de reenvío de puertos](/assets/images/help/codespaces/python-port-forwarding.png)

## Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

## Pasos siguientes

Ahora debes estar listo para comenzar a desarrollar tu proyecto de C# (.NET) en {% data variables.product.prodname_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
