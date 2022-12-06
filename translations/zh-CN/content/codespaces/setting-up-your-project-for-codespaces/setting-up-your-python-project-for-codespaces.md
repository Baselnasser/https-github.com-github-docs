---
title: 为 GitHub Codespaces 设置 Python 项目
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: '通过创建自定义开发容器，开始在 {% data variables.product.prodname_github_codespaces %} 中使用 Python 项目。'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159422'
---
## 简介

本指南介绍如何设置 Python 项目 {% data reusables.codespaces.setting-up-project-intro %}

### 先决条件

- 您应该在 {% data variables.product.prodname_dotcom_the_website %} 的仓库中有现有的 Python 项目。 如果没有项目，可以使用以下示例尝试本教程： https://github.com/2percentsilk/python-quickstart 。
- 必须为组织启用 {% data variables.product.prodname_github_codespaces %}。

## 步骤 1：在代码空间中打开项目

1. 在存储库名称下，使用“{% octicon "code" aria-label="The code icon" %} 代码”下拉菜单，然后在“Codespaces”选项卡中，单击加号 ({% octicon "plus" aria-label="The plus icon" %}) 。

  ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

创建代码空间时，您的项目是在专用于您的远程 VM 上创建的。 默认情况下，代码空间的容器有许多语言和运行时，包括 Node.js、JavaScript、Typescript、nvm、npm 和 yarn。 它还包括一套常见的工具，例如 git、wget、rsync、openssh 和 nano。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## 步骤 2：从模板将开发容器配置添加到存储库

{% data variables.product.prodname_github_codespaces %} 的默认开发容器预先安装了最新的 Python 版本、包管理器（pip、Miniconda）和其他常用工具。 但是，我们建议配置自己的开发容器，以包含项目所需的所有工具和脚本。 这将确保存储库中的所有 {% data variables.product.prodname_github_codespaces %} 用户都拥有完全可复制的环境。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. 对于本示例，请单击“Python 3”。 如果需要其他功能，您可以选择任何特定于 Python 或工具（如 Python 3 和 PostgreSQL）组合的容器。
  ![从列表中选择 Python 选项](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. 单击推荐的 Python 版本。
  ![Python 版本选择](/assets/images/help/codespaces/add-python-version.png)
1. 接受默认选项，将 Node.js 添加到您的自定义中。
  ![添加 Node.js 选择](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### 开发容器的剖析

添加 Python 开发容器模板会将 `.devcontainer` 目录添加到项目存储库的根目录中，其中包含以下文件：

- `devcontainer.json`
- Dockerfile

新添加的 `devcontainer.json` 文件定义了在示例之后描述的几个属性。

#### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": {
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- name - 可以将开发容器命名为任何名称，这只是默认名称。
- build - 生成属性。
  - dockerfile - 在 `build` 对象中，`dockerfile` 包含 Dockerfile 的路径，该文件也是从模板中添加的。
  - **args**
    - variant：此文件仅包含一个生成参数，即我们要使用并传递到 Dockerfile 的节点变体。
- settings - 这些是 {% data variables.product.prodname_vscode %} 设置。
  - terminal.integrated.shell.linux - 虽然 bash 是此处的默认设置，但你可以通过修改它来使用其他终端 shell。
- extensions - 这些是默认包含的扩展。
  - **ms-python.python** - Microsoft Python 扩展为 Python 语言提供丰富的支持（对于所有有效支持的语言版本：>=3.6），包括 IntelliSense、linting、调试、代码导航、代码格式化、重构、变量资源管理器、测试资源管理器等功能。
- **forwardPorts** - 此处列出的任何端口都将自动转发。 有关详细信息，请参阅“[在 codespace 中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)。”
- postCreateCommand - 使用此方法在创建 codespace 后，运行未在 Dockerfile 中定义的命令，例如 `pip3 install -r requirements`。
- **remoteUser** - 默认情况下以 `vscode` 用户身份运行，但可以选择将其设置为 `root`。

#### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

您可以使用 Dockerfile 添加其他容器层，以指定要包含在容器中的操作系统包、节点版本或全局包。

## 步骤 3：修改 devcontainer.json 文件

添加了开发容器配置并基本了解所有功能之后，现在可以进行更改以进一步自定义你的环境。 在此示例中，您将在代码空间启动时添加属性以安装扩展和项目依赖项。

1. 在资源管理器中，展开 `.devcontainer` 文件夹，然后从树中选择 `devcontainer.json` 文件以将其打开。

  ![Explorer 中的 devcontainer.json 文件](/assets/images/help/codespaces/devcontainers-options.png)

2. 更新 `devcontainer.json` 文件中的 `extensions` 列表，以添加一些在处理项目时有用的扩展。

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. 在代码空间设置过程中取消注释 `postCreateCommand` 以自动安装要求。

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. 通过验证是否安装了 Code Spell Checker 和 Flask Snippet 扩展，检查更改是否成功应用。

   ![扩展列表](/assets/images/help/codespaces/python-extensions.png)

## 步骤 4：运行应用程序

在上一部分中，你使用 `postCreateCommand` 通过 pip3 安装了一组包。 现已安装您的依赖项，您可以运行应用程序。

1. 通过按 `F5` 或在 codespace 终端中输入 `python -m flask run` 来运行你的应用程序。

2. 项目启动时，应会在 {% data variables.product.prodname_vscode_shortname %} 的右下角看到一条“toast”通知消息，其中包含连接到项目使用的端口的提示。

  ![端口转发“toast”通知](/assets/images/help/codespaces/python-port-forwarding.png)

## 步骤 5：提交更改

{% data reusables.codespaces.committing-link-to-procedure %}

## 后续步骤

现在，应准备开始在 {% data variables.product.prodname_github_codespaces %} 中开发 Python 项目。 以下是用于更高级场景的一些额外资源。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
