---
title: Linking a repository to a {% data variables.product.prodname_project_v1 %}
intro: You can link a repository to your organization's or personal account's {% data variables.projects.projects_v1_board %}.
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: "projects-v1"
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

Anyone with write permissions to a {% data variables.projects.projects_v1_board %} can link repositories owned by that organization or personal account to the {% data variables.projects.projects_v1_board %}. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization/)" or "[Permission levels for user-owned {% data variables.product.prodname_projects_v1 %}](/articles/permission-levels-for-user-owned-project-boards/)."

{% data reusables.project-management.link-repos-to-project-board %} You can add issues and pull requests from any unlinked repositories by typing the issue or pull request URL in a card. For more information, see "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)."

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to link a repository.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. In the left sidebar, click **Linked repositories**.
![Linked repositories menu option in left sidebar](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Click **Link a repository**.
![Link a repository button on Linked repositories tab](/assets/images/help/projects/link-repository-button.png)
6. Search for the repository you'd like to link.
![Search field on Link a repository window](/assets/images/help/projects/search-to-link-repository.png)
7. Click **Link**. To unlink, click **Unlink**.
![Link button](/assets/images/help/projects/link-button.png)

{% note %}

**Note:** In order to link a repository to your organization or user owned {% data variables.projects.projects_v1_board %} the repository needs to have issues enabled. That is, the repository has an "Issues" tab (in forked repositories issues are disabled by default).  For information on how to enable or disable issues for a repository, see "[Disabling issues for a repository](/github/managing-your-work-on-github/disabling-issues)."

{% endnote %}

## Further reading

- "[About {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
