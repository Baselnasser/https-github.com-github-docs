---
title: About task lists
intro: 'You can use task lists to break the work for an issue or pull request into smaller tasks, then track the full set of work to completion.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
  - /issues/tracking-your-work-with-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
---

{% ifversion projects-v2-tasklists %}
{% note %}

**Note:** For more information about the new iteration of tasklists, which is currently in a private beta, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-tasklists)."

{% endnote %}
{% endif %}

## About task lists

A task list is a set of tasks that each render on a separate line with a clickable checkbox. You can select or deselect the checkboxes to mark the tasks as complete or incomplete.

You can use Markdown to create a task list in any comment on {% data variables.product.product_name %}. {% ifversion fpt or ghec %}If you reference an issue, pull request, or discussion in a task list, the reference will unfurl to show the title and state.{% endif %}

{% ifversion not fpt or ghec %}
You can view task list summary information in issue and pull request lists, when the task list is in the initial comment.
{% else %}

## About issue task lists

If you add a task list to the body of an issue, the list has added functionality.

- To help you track your team's work on an issue, the progress of an issue's task list appears in various places on {% data variables.product.product_name %}, such as a repository's list of issues.
- If a task references another issue and someone closes that issue, the task's checkbox will automatically be marked as complete.
- If a task requires further tracking or discussion, you can convert the task to an issue by hovering over the task and clicking {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. To add more details before creating the issue, you can use keyboard shortcuts to open the new issue form. For more information, see "[AUTOTITLE](/get-started/using-github/keyboard-shortcuts#issues-and-pull-requests)."
- Any issues referenced in the task list will specify that they are tracked in the referencing issue.

![Screenshot of a {% data variables.product.prodname_dotcom %} issue showing a task list under the header "Features." Some items are checked as done, others unchecked as undone. Three list items link to other {% data variables.product.prodname_github_issues %}.](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Creating task lists

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**Tip:** You cannot create task list items within closed issues or issues with linked pull requests.

{% endtip %}

## Reordering tasks

You can reorder the items in a task list. First, click or hover to the left of a task's checkbox until a grid of six dots appears. Then, drag and drop the grid to move the task to a new location.

You can reorder tasks across different lists in the same comment, but you cannot reorder tasks across different comments.

{% ifversion fpt or ghec %} ![Screenshot of a {% data variables.product.prodname_dotcom %} issue showing two tasks in a task list. A grid of six dots to the left of the second task is outlined in dark orange.](/assets/images/help/writing/task-list-reorder.png){% endif %}

{% ifversion fpt %}

## Navigating tracked issues

Any issues that are referenced in a task list specify that they are tracked by the issue that contains the task list. To navigate to the tracking issue from the tracked issue, click on the tracking issue number in the **Tracked in** section next to the issue status.

![Screenshot of a {% data variables.product.prodname_dotcom %} issue named "Create relationships between issues" and numbered issue 3. A button below the issue title reading "Tracked by issue #2" is outlined in dark orange.](/assets/images/help/writing/task-list-tracked.png)

{% endif %}

## Further reading

{% ifversion code-scanning-task-lists %}
* "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists)"{% endif %}
