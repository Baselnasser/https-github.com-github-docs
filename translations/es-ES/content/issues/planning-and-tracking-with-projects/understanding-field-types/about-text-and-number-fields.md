---
title: About text and number fields
shortTitle: Acerca de los campos de número y de texto
intro: You can add custom text and number fields to your project.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

You can use text fields to include notes or any other freeform text in your project.

Text fields can be used in filters, for example: `field:"exact text"`. Text fields and item titles will also be used if you filter for text without specifying a field.

Number fields can also be used in filters. You can use `>`, `>=`, `<`, `<=`, and `..` range queries to filter by a number field. For example: `field:5..15` or `field:>=20`. Para obtener más información, consulta la sección "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adding a text field

{% data reusables.projects.new-field %}
1. Select **Text** ![Screenshot showing the text option](/assets/images/help/projects-v2/new-field-text.png)
1. Haz clic en **Save ** (guardar). ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."

## Adding a number field

{% data reusables.projects.new-field %}
1. Select **Number** ![Screenshot showing the number option](/assets/images/help/projects-v2/new-field-number.png)
1. Haz clic en **Save ** (guardar). ![Captura de pantalla que muestra el botón de guardar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abre la paleta de comandos del proyecto presionando {% data variables.projects.command-palette-shortcut %} y comienza a escribir "Create new field".
