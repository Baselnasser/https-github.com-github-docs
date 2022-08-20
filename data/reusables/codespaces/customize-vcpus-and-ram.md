You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed.

{% data variables.product.prodname_codespaces %} uses a file called `devcontainer.json` to configure the development container that you use when you work in a codespace. Each repository can contain one or more  `devcontainer.json` files, to give you exactly the development environment you need to work on your code in a codespace. 

On launch, {% data variables.product.prodname_codespaces %} uses a `devcontainer.json` file, and any dependent files that make up the dev container configuration, to install tools and runtimes, and perform other setup tasks that the project requires. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."
