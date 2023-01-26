---
title: Customizing the table layout
shortTitle: Customizing tables
intro: 'You can use the table layout to build a spreadsheet using your project''s items,  {% data variables.product.company_short %} metadata, and your custom fields.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

## About the table layout

{% data reusables.projects.about-table-layout %}

For more information about changing a view to use the table layout, see "[Changing the project layout](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout)."

## Showing and hiding fields

You can show or hide a specific field.

{% data reusables.projects.customize.show-hide-field %}

You can also hide individual fields using the field headers.

1. Next to the field you want to hide, click {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Screenshot showing field menu icon](/assets/images/help/projects-v2/modify-field-menu.png)
1. Click {% octicon "eye-closed" aria-label="the eye closed icon" %} **Hide field**.
   ![Screenshot showing hide field menu option](/assets/images/help/projects-v2/hide-field-via-menu.png)

## Grouping by field values

You can group items by a custom field value. When items are grouped, if you drag an item to a new group, the value of that group is applied. For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`. Similarly, when you add a new item to a group, the new item is populated with the value of the group.

{% data reusables.projects.customize.group-fields %}

## Reordering fields

You can change the order of fields.

1. Click the field header.
   ![Screenshot showing the field header](/assets/images/help/projects-v2/select-field-header.png)
2. While continuing to click, drag the field to the required location.

## Reordering rows

You can change the order of rows.

1. Click the number at the start of the row.
   ![Screenshot showing the row number](/assets/images/help/projects-v2/select-row-number.png)
2. While continuing to click, drag the row to the required location.

## Sorting by field values

You can sort items by a field value.

{% note %}

**Note:** When a table is sorted, you cannot manually reorder rows.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Click **Sort**.
   ![Screenshot showing the sort menu item](/assets/images/help/projects-v2/sort-menu-item.png)
1. Click the field you want to sort by.
   ![Screenshot showing the sort menu](/assets/images/help/projects-v2/sort-menu.png)
2. Optionally, to change the direction of the sort, click {% octicon "sort-desc" aria-label="the sort icon" %}.
   ![Screenshot showing sort order option](/assets/images/help/projects-v2/sort-order.png)
3. Optionally, to remove a sort, click {% octicon "x" aria-label="the x icon" %} **No sorting** at the bottom of the list.
   ![Screenshot showing "no sorting"](/assets/images/help/projects-v2/no-sorting.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Sort by."

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

{% data reusables.projects.customize.sum %}

{% endif %}