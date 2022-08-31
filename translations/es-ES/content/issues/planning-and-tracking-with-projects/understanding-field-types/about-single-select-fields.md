---
title: About single select fields
shortTitle: Acerca de los campos de selección simple
intro: You can create single select fields with defined options that can be selected from a dropdown menu.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

You can filter by your single select fields by specifying the option, for example: `fieldname:option`. You can filter for multiple values by providing a comma-separated list of options, for example: `fieldname:option,option`. Para obtener más información, consulta la sección "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Single select fields can contain up to 50 options.

## Adding a single select field

{% data reusables.projects.new-field %}
1. Select **Single select** ![Screenshot showing the single select option](/assets/images/help/projects-v2/new-field-single-select.png)
1. Below "Options", type the first option. ![Captura de pantalla que muestra la opción de selección simple](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - To add additional options, click **Add option**.
1. Haz clic en **Save ** (guardar). ![Captura de pantalla que muestra el botón de guardar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abre la paleta de comandos del proyecto presionando {% data variables.projects.command-palette-shortcut %} y comienza a escribir "Create new field".

## Editing a single select field

{% data reusables.projects.project-settings %}
1. Click the name of the single select field you want to adjust. ![Screenshot showing an single select field](/assets/images/help/projects-v2/select-single-select.png)
1. Edit existing options or click **Add option**. ![Screenshot showing single select options](/assets/images/help/projects-v2/single-select-edit-options.png)
1. Optionally, to delete an option, click {% octicon "x" aria-label="The x icon" %}. ![Screenshot showing delete button](/assets/images/help/projects-v2/single-select-delete.png)
1. Click **Save options**. ![Captura de pantalla que muestra el botón de guardar](/assets/images/help/projects-v2/save-options.png)
