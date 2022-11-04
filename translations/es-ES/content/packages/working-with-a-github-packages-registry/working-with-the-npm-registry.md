---
title: Working with the npm registry
intro: 'You can configure npm to publish packages to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in an npm project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %}
{% else %}
## Limits for published npm versions

If you publish over 1,000 npm package versions to {% data variables.product.prodname_registry %}, you may see performance issues and timeouts occur during usage.

In the future, to improve performance of the service, you won't be able to publish more than 1,000 versions of a package on {% data variables.product.prodname_dotcom %}. Any versions published before hitting this limit will still be readable.

If you reach this limit, consider deleting package versions or contact Support for help. When this limit is enforced, our documentation will be updated with a way to work around this limit. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)" or "[Contacting Support](/packages/learn-github-packages/about-github-packages#contacting-support)."
{% endif %}

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %}
{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

You can also choose to give access permissions to packages independently for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_actions %}. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) and [Ensuring workflow access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."
{% endif %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with npm by either editing your per-user *~/.npmrc* file to include your {% data variables.product.pat_v1 %} or by logging in to npm on the command line using your username and {% data variables.product.pat_generic %}.

To authenticate by adding your {% data variables.product.pat_v1 %} to your *~/.npmrc* file, edit the *~/.npmrc* file for your project to include the following line, replacing {% ifversion ghes or ghae %}*HOSTNAME* with the host name of {% data variables.location.product_location %} and {% endif %}*TOKEN* with your {% data variables.product.pat_generic %}. Create a new *~/.npmrc* file if one doesn't exist.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

To authenticate by logging in to npm, use the `npm login` command, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your {% data variables.product.pat_v1 %}, and *PUBLIC-EMAIL-ADDRESS* with your email address.

If {% data variables.product.prodname_registry %} is not your default package registry for using npm and you want to use the `npm audit` command, we recommend you use the `--scope` flag with the owner of the package when you authenticate to {% data variables.product.prodname_registry %}.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## Publishing a package

{% note %}

**Note:** Package names and scopes must only use lowercase letters.

{% endnote %}

{% ifversion packages-npm-v2 %}
The {% data variables.product.prodname_registry %} registry stores npm packages within your organization or personal account, and allows you to associate a package with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.
{% endif %}

By default, {% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the name field of the *package.json* file. For example, you would publish a package named `@my-org/test` to the `my-org/test` {% data variables.product.prodname_dotcom %} repository. If you're running [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) or later, you can add a summary for the package listing page by including a *README.md* file in your package directory. For more information, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" and "[How to create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)" in the npm documentation.

You can publish multiple packages to the same {% data variables.product.prodname_dotcom %} repository by including a `URL` field in the *package.json* file. For more information, see "[Publishing multiple packages to the same repository](#publishing-multiple-packages-to-the-same-repository)."

{% ifversion fpt or ghec %}
When a package is published, it isn't automatically linked to a repository. You can however choose to link your published package to a repository using the user interface or command line. For more information, see "[Connecting a repository to a package](/packages/learn-github-packages/connecting-a-repository-to-a-package)."
{% endif %}

You can set up the scope mapping for your project using either a local *.npmrc* file in the project or using the `publishConfig` option in the *package.json*. {% data variables.product.prodname_registry %} only supports scoped npm packages. Scoped packages have names with the format of `@owner/name`. Scoped packages always begin with an `@` symbol. You may need to update the name in your *package.json* to use the scoped name. For example, `"name": "@codertocat/hello-world-npm"`.

{% ifversion packages-npm-v2 %}
When you first publish a package, the default visibility is private. When a package is linked to repository, the package visibility is dependent on the repository's visibility. To change the visibility or set access permissions, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."
{% endif %}

{% data reusables.package_registry.viewing-packages %}

### Publishing a package using a local *.npmrc* file

You can use an *.npmrc* file to configure the scope mapping for your project. In the *.npmrc* file, use the {% data variables.product.prodname_registry %} URL and account owner so {% data variables.product.prodname_registry %} knows where to route package requests. Using an *.npmrc* file prevents other developers from accidentally publishing the package to npmjs.org instead of {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Verify the name of your package in your project's *package.json*. The `name` field must contain the scope and the name of the package. For example, if your package is called "test", and you are publishing to the "My-org" {% data variables.product.prodname_dotcom %} organization, the `name` field in your *package.json* should be `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publishing a package using `publishConfig` in the *package.json* file

You can use `publishConfig` element in the *package.json* file to specify the registry where you want the package published. For more information, see "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" in the npm documentation.

1. Edit the *package.json* file for your package and include a `publishConfig` entry.
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

## Publishing multiple packages to the same repository

To publish multiple packages to the same repository, you can include the URL of the {% data variables.product.prodname_dotcom %} repository in the `repository` field of the *package.json* file for each package.

To ensure the repository's URL is correct, replace REPOSITORY with the name of the repository containing the package you want to publish, and OWNER with the name of the user or organization account on {% data variables.product.prodname_dotcom %} that owns the repository.

{% data variables.product.prodname_registry %} will match the repository based on the URL, instead of based on the package name.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Installing a package

You can install packages from {% data variables.product.prodname_registry %} by adding the packages as dependencies in the *package.json* file for your project. For more information on using a *package.json* in your project, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" in the npm documentation.

By default, you can add packages from one organization. For more information, see "[Installing packages from other organizations](#installing-packages-from-other-organizations)."

You also need to add the *.npmrc* file to your project so that all requests to install packages will {% ifversion ghae %}be routed to{% else %}go through{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes or ghec %}When you route all package requests through {% data variables.product.prodname_registry %}, you can use both scoped and unscoped packages from *npmjs.org*. For more information, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation.{% endif %}

{% ifversion ghae %}
By default, you can only use npm packages hosted on your enterprise, and you will not be able to use unscoped packages. For more information on package scoping, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation. If required, {% data variables.product.prodname_dotcom %} support can enable an upstream proxy to npmjs.org. Once an upstream proxy is enabled, if a requested package isn't found on your enterprise, {% data variables.product.prodname_registry %} makes a proxy request to npmjs.org.  
{% endif %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Configure *package.json* in your project to use the package you are installing. To add your package dependencies to the *package.json* file for {% data variables.product.prodname_registry %}, specify the full-scoped package name, such as `@my-org/server`. For packages from *npmjs.com*, specify the full name, such as `@babel/core` or `@lodash`. For example, this following *package.json* uses the `@octo-org/octo-app` package as a dependency.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the @octo-org/octo-app package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "@octo-org/octo-app": "1.0.0"
    }
  }
  ```
5. Install the package.

  ```shell
  $ npm install
  ```

### Installing packages from other organizations

By default, you can only use {% data variables.product.prodname_registry %} packages from one organization. If you'd like to route package requests to multiple organizations and users, you can add additional lines to your *.npmrc* file, replacing {% ifversion ghes or ghae %}*HOSTNAME* with the host name of {% data variables.location.product_location %} and {% endif %}*OWNER* with the name of the user or organization account that owns the repository containing your project.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## Using the official NPM registry

{% data variables.product.prodname_registry %} allows you to access the official NPM registry at `registry.npmjs.com`, if your {% data variables.product.prodname_ghe_server %} administrator has enabled this feature. For more information, see [Connecting to the official NPM registry](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
