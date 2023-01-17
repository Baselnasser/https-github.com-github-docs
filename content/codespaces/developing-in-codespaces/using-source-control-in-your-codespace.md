---
title: Using source control in your codespace
intro: After making changes to a file in your codespace you can quickly commit the changes and push your update to the remote repository.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
---

{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## About source control in {% data variables.product.prodname_github_codespaces %}

You can perform all the Git actions you need directly within your codespace. For example, you can fetch changes from a remote repository, switch branches, create a new branch, commit and push changes, and create a pull request. You can use the integrated terminal within your codespace to enter Git commands, or you can click icons and menu options to complete all the most common Git tasks. This guide explains how to use the graphical user interface for source control.

{% vscode %}

For more information about Git support in {% data variables.product.prodname_vscode %}, see "[Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)" in the {% data variables.product.prodname_vscode %} documentation.

{% endvscode %}

{% webui %}

Source control in the {% data variables.product.prodname_vscode %} web client uses the same workflow as the {% data variables.product.prodname_vscode %} desktop application. For more information, see "[Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)" in the {% data variables.product.prodname_vscode %} documentation.

{% endwebui %}

A typical workflow for updating a file using {% data variables.product.prodname_github_codespaces %} would be:

* From the default branch of your repository on {% data variables.product.prodname_dotcom %}, create a codespace. See "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)."
* In your codespace, create a new branch to work on.
* Make your changes and save them.
* Commit the change.
* Raise a pull request.

## About automatic forking

You can create a codespace for any repository to which you have write access. If you only have read access to a repository, you can create a codespace for the repository as long as you can fork it. 

You do not need to fork the repository before you create the codespace. For example, you can create a codespace from the repository to look at the project and make experimental changes, then delete the codespace if you no longer need it. 

If you make a commit from the codespace, {% data variables.product.prodname_github_codespaces %} either creates a fork of the repository under your account and links it to your codespace, or it links your codespace to an existing fork if you already have one for the repository. You can then push your changes to the fork and create a pull request to propose the changes to the upstream repository.

{% note %}

**Note:** If you delete your fork repository, then any codespaces linked to the fork are deleted, even if you originally created them from the upstream repository.

{% endnote %}

If you make a commit from the command line, you will see a prompt asking if you would like to proceed with linking your codespace to a new or existing fork. Enter `y` to proceed. If you commit changes from the **Source Control** view in {% data variables.product.prodname_vscode_shortname %}, or from the navigation bar in a JetBrains IDE, your codespace is automatically linked to a fork without you being prompted.

When {% data variables.product.prodname_github_codespaces %} creates a fork, or links your codespace to an existing fork, the following things happen.

- The access token associated with your codespace is updated to include `read` and `write` permission to your fork, in addition to `read` permission to the upstream repository.
- In your Git settings, the upstream repository is reassigned to the name `upstream`, and the fork is added as a new remote repository under the name `origin`.

By default, source control commands that you access from your editor's user interface, such as the **Sync Changes** button in {% data variables.product.prodname_vscode_shortname %}, target your fork. If you're working from the command line, you can use `origin` to refer to your fork and `upstream` to refer to the upstream repository. For example, you can fetch changes from the upstream repository to ensure your codespace is up to date with the latest changes to the project.

```Shell
$ git fetch upstream
```

When you have made some changes, you can push them to a feature branch of your fork.

```Shell
$ git push origin my-feature-branch
```

For more information, see "[About forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## Creating or switching branches

1. Click the branch name at the right side of the status bar.

   ![Screenshot of the branch name in the status bar](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. In the pop-up menu, do one of the following:
   * To create a new branch based on the current branch, click the name of the current branch, then choose **New Branch**. 

     ![Screenshot of the new branch option](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     Enter a name for the new branch and click **Create**.

     ![Screenshot of the create branch dialog box](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * To check out an existing branch, start typing the name of the branch you want to check out. Click the branch from the list, then click **Checkout**.

     ![Screenshot of the checkout option](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **Tip**: If someone has recently changed a file on the remote repository, in the branch you switched to, you may not see those changes until you pull the changes into your codespace. 

     {% endtip %}


## Committing your changes 

1. At the right side of the navigation bar, click the check mark.

   ![Screenshot of the commit check mark](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. In the Commit Changes dialog box, enter a commit message.
1. Click **Commit**.

   Alternatively, click the down arrow beside **Commit** and click **Commit and Push**.

   ![Screenshot of the commit and push button](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## Pulling changes from the remote repository

You can pull changes from the same branch on the remote repository and apply those changes to the copy of the repository you are working on in your codespace.

1. At the right side of the navigation bar, click the downward pointing arrow.

   ![Screenshot of the update project downward arrow button](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. In the Update Project dialog box, choose whether you want to merge or rebase the incoming changes.

   ![Screenshot of the Update Project dialog box](/assets/images/help/codespaces/jetbrains-update-options.png)

1. Click **OK**.

## Pushing changes to your remote repository

You can push changes you've saved and committed. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.

1. At the right side of the navigation bar, click the upward pointing arrow.

   ![Screenshot of the push commits upward arrow](/assets/images/help/codespaces/jetbrains-push-button.png)

1. In the Push Commits dialog box, click **Push**.

{% endjetbrains %}
