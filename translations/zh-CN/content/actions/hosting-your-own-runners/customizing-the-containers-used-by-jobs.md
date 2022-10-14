---
title: 自定义作业使用的容器
intro: 可以自定义自托管运行器为作业调用容器的方式。
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881161'
---
{% note %}

注意：此功能目前为 beta 版本，可能会有变动。

{% endnote %}

## 关于容器自定义

通过 {% data variables.product.prodname_actions %}，可使用工作流文件中的 `container:` 语句在容器中运行作业。 有关详细信息，请参阅“[在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container)”。 为了处理基于容器的作业，自托管运行器会为每个作业创建一个容器。

{% data variables.product.prodname_actions %} 支持用于自定义自托管运行器创建容器的方式的命令。 例如，你可以使用这些命令通过 Kubernetes 或 Podman 来管理容器，还可以自定义用于调用容器的 `docker run` 或 `docker create` 命令。 自定义命令由脚本运行，当在运行器上设置特定环境变量时，将自动触发脚本。 有关详细信息，请参阅下面的“[触发自定义脚本](#triggering-the-customization-script)”。

此自定义仅适用于基于 Linux 的自托管运行器，不需要根用户访问权限。

## 容器自定义命令

{% data variables.product.prodname_actions %} 包含以下用于容器自定义的命令：

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job)：启动作业时调用。
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job)：在作业结束时调用。
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step)：针对作业中的每个容器操作调用一次。
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step)：运行任何不属于容器操作的步骤。

每个自定义命令都必须在其自己的 JSON 文件中定义。 文件名必须与命令名称匹配，扩展名为 `.json`。 例如，`prepare_job` 命令在 `prepare_job.json` 中定义。 然后，这些 JSON 文件将在自托管运行器上一起运行，作为主 `index.js` 脚本的一部分。 “[生成自定义脚本](#generating-the-customization-script)”中更详细地介绍了此过程。

这些命令还包括配置参数，下面详细介绍了这些参数。

### `prepare_job`

启动作业时调用 `prepare_job` 命令。 {% data variables.product.prodname_actions %} 传入任何作业或作业具有的服务容器。 如果作业中有任何服务或作业容器，则将调用此命令。 

{% data variables.product.prodname_actions %} 假定你将通过 `prepare_job` 命令执行以下任务：

- 根据需要删除以前的作业中的所有内容。
- 根据需要创建网络。
- 拉取作业和服务容器。
- 启动作业容器。
- 启动服务容器。
- 将 {% data variables.product.prodname_actions %} 所需的任何信息写入响应文件：
  - 必需：说明容器是否为 `alpine` linux 容器（使用 `isAlpine` 布尔值）。 
  - 可选：要在作业上下文上设置的任何上下文字段，否则用户无法再使用它们。 有关详细信息，请参阅“[`job` 上下文](/actions/learn-github-actions/contexts#job-context)”。
- 当运行状况检查成功且作业/服务容器启动时，返回 `0`。

#### 参数

- `jobContainer`：可选。 包含有关指定作业容器的信息的对象。
  - `image`：必需。 包含 Docker 映像的字符串。
  - `workingDirectory`：必需。 包含工作目录的绝对路径的字符串。
  - `createOptions`：可选。 YAML 中指定的可选“创建”选项。 有关详细信息，请参阅“[示例：在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
  - `environmentVariables`：可选。 设置关键环境变量的映射。
  - `userMountVolumes`：可选。 由在 YAML 中设置的用户装载卷组成的数组。 有关详细信息，请参阅“[示例：在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
    - `sourceVolumePath`：必需。 要装载到 Docker 容器中的卷的源路径。
    - `targetVolumePath`：必需。 要装载到 Docker 容器中的卷的目标路径。
    - `readOnly`：必需。 确定装载是否应为只读。
  - `systemMountVolumes`：必需。 由要装载到容器中的装载组成的数组，与上述字段相同。
    - `sourceVolumePath`：必需。 要装载到 Docker 容器中的卷的源路径。
    - `targetVolumePath`：必需。 要装载到 Docker 容器中的卷的目标路径。
    - `readOnly`：必需。 确定装载是否应为只读。
  - `registry`：可选。 专用容器注册表的 Docker 注册表凭据。
    - `username`：可选。 注册表帐户的用户名。
    - `password`：可选。 注册表帐户的密码。
    - `serverUrl`：可选。 注册表 URL。
  - `portMappings`：可选。 要映射到容器的 source:target 端口的键值哈希。
- `services`：可选。 要启动的服务容器数组。
  - `contextName`：必需。 作业上下文中服务的名称。
  - `image`：必需。 包含 Docker 映像的字符串。
  - `createOptions`：可选。 YAML 中指定的可选“创建”选项。 有关详细信息，请参阅“[示例：在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
  - `environmentVariables`：可选。 设置关键环境变量的映射。
  - `userMountVolumes`：可选。 由要装载到容器中的装载组成的数组，与上述字段相同。
    - `sourceVolumePath`：必需。 要装载到 Docker 容器中的卷的源路径。
    - `targetVolumePath`：必需。 要装载到 Docker 容器中的卷的目标路径。
    - `readOnly`：必需。 确定装载是否应为只读。
  - `registry`：可选。 专用容器注册表的 Docker 注册表凭据。
    - `username`：可选。 注册表帐户的用户名。
    - `password`：可选。 注册表帐户的密码。
    - `serverUrl`：可选。 注册表 URL。
  - `portMappings`：可选。 要映射到容器的 source:target 端口的键值哈希。

#### 示例输入

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### 示例输出

此示例输出是上述输入中定义的 `responseFile` 的内容。

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

`cleanup_job` 命令在作业结束时调用。 {% data variables.product.prodname_actions %} 假定你将通过 `cleanup_job` 命令执行以下任务：

- 停止任何正在运行的服务或作业容器（或等效 pod）。
- 停止网络（如果存在）。
- 删除任何作业或服务容器（或等效的 Pod）。
- 删除网络（如果存在）。
- 清除为作业创建的任何其他内容。

#### 参数

未向 `cleanup_job` 提供任何参数。

#### 示例输入

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### 示例输出

`cleanup_job` 不会有输出。

### `run_container_step`

对于作业中的每个容器操作，都会调用一次 `run_container_step` 命令。 {% data variables.product.prodname_actions %} 假定你将通过 `run_container_step` 命令执行以下任务：

- 拉取或生成所需的容器（如果无法拉取或生成，则失败）。
- 运行容器操作并返回容器的退出代码。
- 将任何步骤日志输出流式传输到 stdout 和 stderr。
- 在执行后清理容器。

#### 参数

- `image`：可选。 包含 Docker 映像的字符串。 否则必须提供 dockerfile。
- `dockerfile`：可选。 包含 dockerfile 的路径的字符串，否则必须提供映像。
- `entryPointArgs`：可选。 包含入口点参数的列表。
- `entryPoint`：可选。 如果应覆盖默认映像入口点，则为要使用的容器入口点。
- `workingDirectory`：必需。 包含工作目录的绝对路径的字符串。
- `createOptions`：可选。 YAML 中指定的可选“创建”选项。 有关详细信息，请参阅“[示例：在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
- `environmentVariables`：可选。 设置关键环境变量的映射。
- `prependPath`：可选。 由要追加到 `$PATH` 变量的其他路径组成的数组。
- `userMountVolumes`：可选。 由在 YAML 中设置的用户装载卷组成的数组。 有关详细信息，请参阅“[示例：在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
  - `sourceVolumePath`：必需。 要装载到 Docker 容器中的卷的源路径。
  - `targetVolumePath`：必需。 要装载到 Docker 容器中的卷的目标路径。
  - `readOnly`：必需。 确定装载是否应为只读。
- `systemMountVolumes`：必需。 由要装载到容器中的装载组成的数组，使用与上述字段相同的字段。
  - `sourceVolumePath`：必需。 要装载到 Docker 容器中的卷的源路径。
  - `targetVolumePath`：必需。 要装载到 Docker 容器中的卷的目标路径。
  - `readOnly`：必需。 确定装载是否应为只读。
- `registry`：可选。 专用容器注册表的 Docker 注册表凭据。
  - `username`：可选。 注册表帐户的用户名。
  - `password`：可选。 注册表帐户的密码。
  - `serverUrl`：可选。 注册表 URL。
- `portMappings`：可选。 要映射到容器的 source:target 端口的键值哈希。

#### 映像的示例输入

如果使用的是 Docker 映像，则可以在 `"image":` 参数中指定映像名称。

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Dockerfile 的示例输入

如果容器由 Dockerfile 定义，则此示例演示如何使用 `"dockerfile":` 参数在输入中指定 `Dockerfile` 的路径。

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### 示例输出

`run_container_step` 不会有输出。

### `run_script_step`

{% data variables.product.prodname_actions %} 假定你将执行以下任务：

- 调用作业容器内提供的脚本并返回退出代码。
- 将任何步骤日志输出流式传输到 stdout 和 stderr。

#### 参数

- `entryPointArgs`：可选。 包含入口点参数的列表。
- `entryPoint`：可选。 如果应覆盖默认映像入口点，则为要使用的容器入口点。
- `prependPath`：可选。 由要追加到 `$PATH` 变量的其他路径组成的数组。
- `workingDirectory`：必需。 包含工作目录的绝对路径的字符串。
- `environmentVariables`：可选。 设置关键环境变量的映射。

#### 示例输入

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### 示例输出

`run_script_step` 不会有输出。

## 生成自定义脚本

{% data variables.product.prodname_dotcom %} 创建了一个示例存储库，演示如何为 Docker 和 Kubernetes 生成自定义脚本。 

{% note %}

注意：生成的脚本可用于测试目的，你需要确定它们是否适合你的要求。

{% endnote %}

1. 将 [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) 存储库克隆到自托管运行器。

1. `examples/` 目录中包含一些现有的自定义命令，每个命令都有其自己的 JSON 文件。 可以查看这些示例，并将其用作你自己的自定义命令的起点。

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. 生成 npm 包。 这些命令在 `packages/docker/dist` 和 `packages/k8s/dist` 内生成 `index.js` 文件。

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

当生成的 `index.js` 由 {% data variables.product.prodname_actions %} 触发时，它将运行 JSON 文件中定义的自定义命令。 若要触发 `index.js`，需要将其添加到 `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 环境变量，如下一部分所述。

## 触发自定义脚本

自定义脚本必须位于运行器上，但不应存储在自托管运行器应用程序目录中。 脚本在运行运行器服务的服务帐户的安全性上下文中执行。

{% note %}

注意：触发的脚本是同步处理的，因此它们会在运行时阻止作业执行。

{% endnote %}

当运行器具有以下包含脚本绝对路径的环境变量时，脚本会自动执行：

- `ACTIONS_RUNNER_CONTAINER_HOOK`：此环境变量中定义的脚本在作业分配给运行器之后且作业开始运行之前触发。

要设置此环境变量，可将其添加到操作系统中，或将其添加到自托管运行器应用程序目录中名为 `.env` 的文件中。 例如，以下 `.env` 条目将使运行器在每个基于容器的作业运行之前自动在 `/Users/octocat/runner/index.js` 运行脚本：

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

如果要确保作业始终在容器内运行，并且随后始终应用容器自定义项，可以将自托管运行器上的 `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 变量设置为 `true`。 这将使未指定作业容器的作业失败。

## 故障排除

### 无超时设置

目前没有可供 `ACTIONS_RUNNER_CONTAINER_HOOK` 执行的脚本使用的超时设置。 因此，可以考虑向脚本添加超时处理。

### 查看工作流运行日志

要确认脚本是否正在执行，可查看该作业的日志。 有关检查日志的详细信息，请参阅“[查看日志以诊断故障](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。
