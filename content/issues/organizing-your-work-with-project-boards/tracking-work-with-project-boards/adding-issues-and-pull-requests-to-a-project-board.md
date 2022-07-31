---
title: Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}
intro: You can add issues and pull requests to a {% data variables.projects.projects_v1_board %} in the form of cards and triage them into columns.
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: "projects-v1"
topics:
  - Pull requests
shortTitle: Add issues & PRs to {% data variables.product.prodname_project_v1 %}
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

You can add issue or pull request cards to your {% data variables.projects.projects_v1_board %} by:
- Dragging cards from the **Triage** section in the sidebar.
- Typing the issue or pull request URL in a card.
- Searching for issues or pull requests in the {% data variables.projects.projects_v1_board %} search sidebar.

You can put a maximum of 2,500 cards into each project column. If a column has reached the maximum number of cards, no cards can be moved into that column.

![Cursor moves issue card from triaging sidebar to project board column](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Note:** You can also add notes to your project board to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add related information to your {% data variables.projects.projects_v1_board %}. For more information, see "[Adding notes to a project board](/articles/adding-notes-to-a-project-board)."

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} When you search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %}, the search automatically scopes to your linked repositories. You can remove these qualifiers to search within all organization repositories. For more information, see "[Linking a repository to a project board](/articles/linking-a-repository-to-a-project-board)."

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add issues and pull requests.
2. In your {% data variables.projects.projects_v1_board %}, click {% octicon "plus" aria-label="The plus icon" %} **Add cards**.
![Add cards button](/assets/images/help/projects/add-cards-button.png)
3. Search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %} using search qualifiers. For more information on search qualifiers you can use, see "[Searching issues](/articles/searching-issues)."
  ![Search issues and pull requests](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Tips:**
    - You can also add an issue or pull request by typing the URL in a card.
    - If you're working on a specific feature, you can apply a label to each related issue or pull request for that feature, and then easily add cards to your {% data variables.projects.projects_v1_board %} by searching for the label name. For more information, see "[Apply labels to issues and pull requests](/articles/applying-labels-to-issues-and-pull-requests)."

  {% endtip %}
4. From the filtered list of issues and pull requests, drag the card you'd like to add to your {% data variables.projects.projects_v1_board %} and drop it in the correct column. Alternatively, you can move cards using keyboard shortcuts. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Tip:** You can drag and drop or use keyboard shortcuts to reorder cards and move them between columns. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %} from the sidebar

1. On the right side of an issue or pull request, click **Projects {% octicon "gear" aria-label="The Gear icon" %}**.
  ![Project board button in sidebar](/assets/images/help/projects/sidebar-project.png)
2. Click the **Recent**, **Repository**,**User**, or **Organization** tab for the {% data variables.projects.projects_v1_board %} you would like to add to.
  ![Recent, Repository and Organization tabs](/assets/images/help/projects/sidebar-project-tabs.png)
3. Type the name of the project in **Filter projects** field.
  ![Project board search box](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more {% data variables.projects.projects_v1_boards %} where you want to add the issue or pull request.
  ![Selected project board](/assets/images/help/projects/sidebar-select-project.png)
5. Click {% octicon "triangle-down" aria-label="The down triangle icon" %}, then click the column where you want your issue or pull request. The card will move to the bottom of the {% data variables.projects.projects_v1_board %} column you select.
  ![Move card to column menu](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Further reading

- "[About {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"
