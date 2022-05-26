---
title: 管理预构建
shortTitle: 管理预构建
intro: 您可以查看、修改和删除存储库的预构建配置。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.prebuilds-beta-note %}

## 检查、更改和删除预构建配置

您为存储库配置的预构建是使用 {% data variables.product.prodname_actions %} 工作流程创建和更新的，由 {% data variables.product.prodname_codespaces %} 服务管理。

根据预构建配置中的设置，更新预构建模板的工作流程可能由以下事件触发：

* 创建或更新预构建配置
* 将提交或拉取请求推送到配置为具有预构建的分支
* 更改任何开发容器配置文件
* 在预构建配置中定义的计划
* 手动触发工作流程

预构建配置中的设置确定哪些事件会自动触发预构建模板的更新。 更多信息请参阅“[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

对存储库具有管理员访问权限的人员可以检查预构建、编辑和删除预构建配置的进度。

### 查看预构建的进度
您可以查看在存储库设置的 {% data variables.product.prodname_codespaces %} 页面上设置的每个预构建配置的最新工作流程运行当前状态。 例如，“正在运行”或“上次在 1 小时前运行”。

要查看最新预构建工作流程运行的日志输出，请单击 **See output（查看输出）**。

![“查看输出”按钮](/assets/images/help/codespaces/prebuilds-see-output.png)

这将在 **Actions（操作）**选项卡中显示最近运行的工作流程的输出。

![预构建工作流程输出](/assets/images/help/codespaces/prebuilds-log-output.png)

或者，要查看与指定分支关联的所有预构建工作流程运行，请单击省略号按钮，然后从下拉菜单中选择 **View runs（查看运行）**。

![下拉菜单中的“查看运行”选项](/assets/images/help/codespaces/prebuilds-view-runs.png)

这将显示关联分支的预构建的工作流程运行历史记录。

![工作流程运行历史记录](/assets/images/help/codespaces/prebuilds-workflow-runs.png)

### 编辑预构建配置

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页面上，单击要编辑的预构建配置右侧的省略号。
1. 在下拉菜单中，单击 **Edit（编辑）**。

   ![下拉菜单中的“编辑”选项](/assets/images/help/codespaces/prebuilds-edit.png)

1. 对预构建配置进行所需的更改，然后单击 **Update（更新）**。

### 禁用预构建配置

要暂停更新配置的预构建模板，可以禁用配置的工作流程运行。 为预构建配置禁用工作流程不会删除以前为该配置创建的任何预构建模板，因此，代码空间将继续从现有预构建模板生成。

如果需要调查模板创建失败，则禁用工作流程运行预构建配置非常有用。

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页面上，单击要禁用的预构建配置右侧的省略号。
1. 在下拉菜单中，单击 **Disable runs（禁用运行）**。

   ![下拉菜单中的“Disable runs（禁用运行）”选项](/assets/images/help/codespaces/prebuilds-disable.png)

1. 要确认是否要禁用此配置，请单击“ **OK（确定）**”。

### 删除预构建配置

删除预构建配置也会删除以前为该配置创建的所有预构建模板。 因此，在删除配置后不久，在创建新代码空间时，由该配置生成的预构建将不再可用。

删除预构建配置后，该配置已排队或已启动的工作流程运行仍将运行。 它们将与以前完成的工作流程运行一起列在工作流程运行历史记录中。

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页面上，单击要删除的预构建配置右侧的省略号。
1. 在下拉菜单中，单击 **Delete（删除）**。

   ![下拉菜单中的“删除”选项](/assets/images/help/codespaces/prebuilds-delete.png)

1. 单击 **OK（确定）**以确认删除。

### 手动触发预构建

手动触发预构建配置的工作流程运行可能很有用。 通常，仅当您要调试预构建配置的工作流程问题时，才需要这样做。

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页面上，单击要触发其工作流程的预构建配置右侧的省略号。
1. 在下拉菜单中，单击 **Manually trigger（手触发）**。

   ![下拉菜单中的“手动触发”选项](/assets/images/help/codespaces/prebuilds-manually-trigger.png)

## 允许预构建访问外部资源

默认情况下，预构建配置的 {% data variables.product.prodname_actions %} 工作流程只能访问其自己的存储库内容。 您的项目可能会使用其他资源来构建开发环境，例如其他存储库中的文件、包、GHCR 映像和 API。 要允许预构建安装程序访问这些资源，需要创建一个新的个人帐户，然后使用此帐户创建具有适当作用域的个人访问令牌 (PAT)。

1. 在 {% data variables.product.prodname_dotcom %} 上创建新的个人帐户。

   {% warning %}

   **警告**：虽然您可以使用现有的个人帐户生成 PAT，但我们强烈建议您创建一个只能访问方案所需目标存储库的新帐户。 这是因为访问令牌的 `repository` 权限授予访问对帐户有权访问的所有存储库。 更多信息请参阅“[注册新的 GitHub 帐户](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)”和“[ {% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)”。

   {% endwarning %}
1. 向新帐户授予对所需存储库的读取访问权限。 更多信息请参阅“[管理个人对组织仓库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)”。
1. 登录到新帐户时，创建 `repo` 范围的 PAT。 （可选）如果预构建需要从 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 下载包，还要选择 `read:packages` 作用域。 更多信息请参阅“[创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

   ![为 PAT 选择的 'repo' 和 'packages' 作用域](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   如果预构建将使用 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 中的软件包，则需要向新帐户授予对软件包的访问权限，或者将软件包配置为继承要预构建的存储库的访问权限。 更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。
{% ifversion ghec %}1. 授权令牌与 SAML 单点登录 (SSO) 一起使用，以便它可以访问启用了 SSO 的组织所拥有的存储库。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。

   ![用于为 PAT 配置 SSO 的按钮](/assets/images/help/codespaces/configure-SSO-for-PAT.png)

{% endif %}
1. 复制令牌字符串。 您将此密钥分配给 {% data variables.product.prodname_codespaces %} 存储库机密。
1. 重新登录到对存储库具有管理员访问权限的帐户。
1. 在要为其创建 {% data variables.product.prodname_codespaces %} 预构建的存储库中，创建一个名为 `CODESPACES_PREBUILD_TOKEN` 的新 {% data variables.product.prodname_codespaces %} 存储库机密，为其提供您创建和复制的令牌值。 更多信息请参阅“[管理用于 {% data variables.product.prodname_codespaces %} 的仓库和组织的加密密钥](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-a-repository)”。

PAT 将用于为存储库创建的所有后续预构建模板。 与其他 {% data variables.product.prodname_codespaces %} 存储库机密不同， `CODESPACES_PREBUILD_TOKEN` 机密仅用于预构建，不可用于从存储库创建的代码空间。

## 延伸阅读

- “[预构建疑难解答](/codespaces/troubleshooting/troubleshooting-prebuilds)”
