---
title: 'Adding items to your {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Learn how to add pull requests, issues, and draft issues to your projects individually or in bulk.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Your project can track draft issues, issues, and pull requests. 

{% note %}

**Note:** A project can contain a maximum of {% data variables.projects.item_limit %} items and {% data variables.projects.archived_item_limit %} archived items. {% ifversion projects-v2-auto-archive %}To learn more about automatically archiving items when they meet specific criteria, see "[Archiving items automatically](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)."{% endif %}

{% endnote %}

### Adding issues and pull requests to a project

You can add issues and pull requests to your project individually{% ifversion projects-v2-auto-add %}, automatically, {% endif %} or in bulk. You can also add draft issues which can later be transformed into issues. For more information, see "[Creating draft issues](#creating-draft-issues)."

{% ifversion projects-v2-timeline-events %}

{% note %} 

**Note:** Timeline events for Projects is currently in beta and subject to change.

{% endnote %}

When you add an issue or pull request to your project, an event will be added to the issue or pull request's timeline. Timeline events will also be added when you remove issues or pull requests and when changes are made to its `status` field for those items. Timeline events are only visible to people who have at least read permission for the project. If a change is made by a built-in workflow, the activity will be attributed to **@github-project-automation**.

{% endif %}

{% ifversion projects-v2-auto-add %}

#### Automatically adding issues and pull requests

You can configure a built-in workflow to automatically add issues and pull requests from a repository when they meet specific filter criteria. For more information about configuring a workflow, see "[Adding items automatically](/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)."

{% endif %}

#### Pasting the URL of an issue or pull request

You can copy the URL of an issue or pull request into your clipboard and paste that into your project.

{% data reusables.projects.add-item-via-paste %}

#### Searching for an issue or pull request

If you know the issue or pull request number or if you know part of the title, you can search for an issue or pull request directly from your project.

{% data reusables.projects.add-item-bottom-row %}
2. Enter <kbd>#</kbd>.
3. Select the repository where the pull request or issue is located. You can type part of the repository name to narrow down your options.
  ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Select the issue or pull request. You can type part of the title to narrow down your options.
  ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Bulk adding issues and pull requests

You can add multiple issues and pull requests from your project and use filters, such as `label:bug`, to narrow down your search.

1. In the bottom row of the project, click {% octicon "plus" aria-label="plus icon" %}.
  ![Screenshot showing + button at the bottom of the project](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**.
  ![Screenshot showing "add item from repository" menu item](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### Adding multiple issues or pull requests from a repository

You can also add issues and pull requests to your project from a repository's issue and pull request lists.

1. On {% data variables.location.product_location %}, navigate to the repository that contains the issues or pull requests you want to add to your project.
{% data reusables.repositories.sidebar-issue-pr %}
1. To the left of each issue title, select the issues that you want to add to your project.
  ![Screenshot showing checkbox to select issue or pull request](/assets/images/help/issues/select-issue-checkbox.png)
1. Optionally, to select every issue or pull request on the page, at the top of the list of issues or pull requests, select all. 
  ![Screenshot showing checkbox to select all on screen](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**. 
  ![Screenshot showing projects option](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Click the projects you want to add the selected issues or pull requests to.
  ![Screenshot showing checkbox to select all on screen](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Assigning a project from within an issue or pull request

You can also add an issue or pull request to your project from within the issue or pull request itself.

1. Navigate to the issue or pull request that you want to add to a project.
2. In the side bar, click **Projects**.
  ![Screenshot showing "Projects" in the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Select the project that you want to add the issue or pull request to.
  ![Screenshot showing selecting a project from the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Optionally, populate the custom fields.
  ![Project sidebar](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Using the command palette to add an issue or pull request

You can use the command palette when viewing your project to quickly add items.

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Add items" and press <kbd>Return</kbd>.
{% data reusables.projects.bulk-add %}

### Creating draft issues

Draft issues are useful to quickly capture ideas. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

{% data reusables.projects.add-draft-issue %}

Draft issues can have a title, text body, assignees, and any custom fields from your project. In order to populate the repository, labels, or milestones for a draft issue, you must first convert the draft issue to an issue. For more information, see "[Converting draft issues to issues](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)."

{% note %}

**Note**: Users will not receive notifications when they are assigned to or mentioned in a draft issue unless the draft issue is converted to an issue.

{% endnote %}
