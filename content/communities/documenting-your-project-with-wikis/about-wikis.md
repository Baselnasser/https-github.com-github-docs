---
title: About wikis
intro: 'You can host documentation for your repository in a wiki, so that others can use and contribute to your project.'
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
---

Every repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} comes equipped with a section for hosting documentation, called a wiki. You can use your repository's wiki to  share long-form content about your project, such as how to use it, how you designed it, or its core principles. A README file quickly tells what your project can do, while you can use a wiki to provide additional documentation. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."

With wikis, you can write content just like everywhere else on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)." We use [our open-source Markup library](https://github.com/github/markup) to convert different formats into HTML, so you can choose to write in Markdown or any other supported format. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}If you create a wiki in a public repository, the wiki is available to {% ifversion ghes %}anyone with access to {% data variables.location.product_location %}{% else %}the public{% endif %}. {% endif %}If you create a wiki in a private{% ifversion ghec or ghes %} or internal{% endif %} repository, only {% ifversion fpt or ghes or ghec %}people{% elsif ghae %}enterprise members{% endif %} with access to the repository can access the wiki. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."

You can edit wikis directly on {% data variables.product.product_name %}, or you can edit wiki files locally. By default, only people with write access to your repository can make changes to wikis, although you can allow everyone on {% data variables.location.product_location %} to contribute to a wiki in {% ifversion ghae %}an internal{% else %}a public{% endif %} repository. For more information, see "[AUTOTITLE](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)."

{% note %}

**Note:** Search engines will not index the contents of wikis. To have your content indexed by search engines, you can use [{% data variables.product.prodname_pages %}](/pages) in a public repository.

{% endnote %}

## Further reading

- "[AUTOTITLE](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)"
- "[AUTOTITLE](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)"
- "[AUTOTITLE](/communities/documenting-your-project-with-wikis/editing-wiki-content)"
- "[AUTOTITLE](/communities/documenting-your-project-with-wikis/viewing-a-wikis-history-of-changes)"
- "[AUTOTITLE](/search-github/searching-on-github/searching-wikis)"
