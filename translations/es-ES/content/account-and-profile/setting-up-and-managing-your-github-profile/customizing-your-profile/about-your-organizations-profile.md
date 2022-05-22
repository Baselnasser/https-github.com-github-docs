---
title: Acerca del perfil de tu organización
intro: La página del perfil de tu organización muestra la información básica acerca de tu organización.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Perfil de la organización
---

You can optionally choose to add a description, location, website, and email address for your organization, and pin important repositories.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} You can customize your organization's public profile by adding a README.md file. Para obtener más información, consulta la sección "[Personalizar el perfil de tu organización ](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".{% endif %}

{% ifversion fpt %}
Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden confirmar la identidad de la organización y mostrar una insignia de "Verificado" en la página de perfil de la misma si verifican los dominios de la organización con {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes > 3.1 %}
Para confirmar la identidad de tu organización y mostrar una insignia de "Verificado" en su página de perfil, puedes verificar sus dominios con {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Muestra de la página de perfil de una organización](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Muestra de la página de perfil de una organización](/assets/images/help/profile/org_profile.png)
{% endif %}

## Leer más

- "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
