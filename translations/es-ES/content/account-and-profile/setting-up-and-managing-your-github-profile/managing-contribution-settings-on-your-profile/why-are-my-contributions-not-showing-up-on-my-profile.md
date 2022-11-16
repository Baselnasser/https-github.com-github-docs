---
title: ¿Por qué mis contribuciones no aparecen en mi perfil?
intro: Aprende sobre las razones habituales por las cuales podrían faltar contribuciones en tu gráfica.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
ms.openlocfilehash: f3480b1b4f2857a144ad8e264e0d8b78196b1a3e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107049'
---
## Acerca de tu gráfica de contribuciones

La gráfica de contribuciones de tu perfil es un registro de las contribuciones que has hecho en los repositorios {% ifversion ghae %}propiedad{% else %}de{% endif %} {% data variables.location.product_location %}. Las contribuciones son registros horarios de acuerdo a la zona horaria universal coordinada (UTC) en lugar de tu zona horaria local. Las contribuciones solo se cuentan si cumplen con determinados criterios. En algunos casos, necesitamos reconstruir tu gráfico para que aparezcan las contribuciones.

Si eres parte de una organización que utiliza el inicio de sesión único (SSO) de SAML, no podrás ver la actividad de las contribuciones desde la organización en tu perfil de no tener una sesión de SSO activa. Las personas que ven tu perfil desde fuera de tu organización verán una actividad de contribución anonimizada de aquella para tu organización.

## Contribuciones que se cuentan

### Propuestas, solicitudes de cambios y debates

Las propuestas, solicitudes de cambios y debates aparecerán en tu gráfica de contribuciones si se abrieron en un repositorio independiente y no en una bifurcación.

### Confirmaciones
Las confirmaciones aparecerán en el gráfico de contribuciones si cumplen **todas** las condiciones siguientes:
- La dirección de correo electrónico que se utiliza para las confirmaciones se asocia con tu cuenta de {% data variables.location.product_location %}.
- Las confirmaciones se hicieron en un repositorio independiente, no en una bifurcación.
- Las confirmaciones se hicieron:
  - En la rama predeterminada del repositorio
  - En la rama `gh-pages` (para repositorios con sitios del proyecto)

Para obtener más información acerca de los sitios del proyecto, vea "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Además, debe cumplirse **al menos una** de las siguientes condiciones:
- Eres un colaborador en el repositorio o eres miembro de la organización a la que pertenece el repositorio.
- Has bifurcado el repositorio.
- Has abierto una solicitud de extracción o una propuesta en el repositorio.
- Has destacado el repositorio.

## Razones comunes por las que las contribuciones no se cuentan

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### La confirmación se hizo hace menos de 24 horas

Después de hacer una confirmación que cumpla con los requisitos para contar como una contribución, es posible que debas esperar hasta 24 horas para que aparezca la contribución en tu gráfico de contribución.

### Tu correo electrónico de confirmaciones de Git no está conectado a tu cuenta

Las confirmaciones deben realizarse con una dirección de correo electrónico conectada a tu cuenta de {% data variables.location.product_location %}{% ifversion fpt or ghec %}, o la dirección de correo electrónico `noreply` proporcionada por {% data variables.product.prodname_dotcom %} y facilitada en la configuración de correo electrónico,{% endif %} para que aparezca en el gráfico de contribuciones.{% ifversion fpt or ghec %} Para obtener más información sobre las direcciones de correo electrónico `noreply`, consulta "[Configuración de la dirección de correo electrónico de confirmación](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)".{% endif %}

Puede comprobar la dirección de correo electrónico usada para una confirmación agregando `.patch` al final de una dirección URL de confirmación como, por ejemplo, <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

La dirección de correo electrónico del campo `From:` es la dirección que se ha establecido en los [valores de configuración de git local](/articles/set-up-git). En este ejemplo, la dirección de correo electrónico usada para la confirmación es `octocat@nowhere.com`.

Si la dirección de correo electrónico que se utiliza para la confirmación no está conectada a tu cuenta de {% data variables.location.product_location %}, {% ifversion ghae %}cambia la que se utiliza para crear confirmaciones en Git. Para obtener más información, consulta "[Configuración de la dirección de correo electrónico de confirmación](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".{% else %}debes [agregar la dirección de correo electrónico](/articles/adding-an-email-address-to-your-github-account) a tu cuenta de {% data variables.location.product_location %}. Tu gráfica de contribuciones se reconstruirá automáticamente cuando agregues la nueva dirección.{% endif %}

{% ifversion fpt or ghec %} {% note %}

**Nota**: Si usas una {% data variables.enterprise.prodname_managed_user %}, no puedes agregar más direcciones de correo electrónico a la cuenta, aunque haya varias direcciones de correo registradas electrónico con el proveedor de identidades (IdP). Por lo tanto, solo se pueden asociar a tu {% data variables.enterprise.prodname_managed_user %} las confirmaciones creadas mediante la dirección de correo electrónico principal registrada con el IdP.

{% endnote %} {% endif %}

Las direcciones de correo electrónico genéricas, como `jane@computer.local`, no se pueden agregar a cuentas de {% data variables.product.prodname_dotcom %} ni vincularse a confirmaciones. Si has creado confirmaciones con una dirección de correo electrónico genérica, las confirmaciones no se vincularán a tu perfil de {% data variables.product.prodname_dotcom %} ni aparecerán en tu gráfico de contribución.

### No se ha realizado la confirmación en la rama `gh-pages` o en la predeterminada

Las confirmaciones solo se cuentan si se realizan en la rama `gh-pages` o en la predeterminada (para los repositorios con sitios del proyecto). Para obtener más información, consulta [Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Si sus confirmaciones se encuentran en una rama que no es la rama predeterminada ni la rama `gh-pages` y le gustaría que contaran para sus contribuciones, necesitará realizar una de las acciones siguientes:
- [Abrir una solicitud de incorporación de cambios](/articles/creating-a-pull-request) para que los cambios se combinen en la rama `gh-pages` o en la predeterminada.
- [Cambiar la rama predeterminada](/github/administering-a-repository/changing-the-default-branch) del repositorio.

{% warning %}

**Advertencia**: Cambiar la rama predeterminada del repositorio hará que se cambie para todos los colaboradores del repositorio. Realiza esta acción solamente si quieres que la nueva rama se convierta en la base respecto de todas las confirmaciones y las solicitudes de extracción que se harán en el futuro.

{% endwarning %}

### La confirmación se hizo en una bifurcación

Las confirmaciones que se hicieron en una bifurcación no contarán para tus contribuciones. Para hacer que cuenten, debes realizar una de las siguientes acciones:
- [Abrir una solicitud de incorporación de cambios](/articles/creating-a-pull-request) para que los cambios se combinen en el repositorio principal.
- Para desconectar la bifurcación y convertirla en un repositorio independiente en {% data variables.location.product_location %}, ponte en contacto con {% data variables.contact.contact_support %}. Si la bifurcación tiene a su vez más bifurcaciones, indícale al {% data variables.contact.contact_support %} si éstas deberán moverse junto con tu repositorio a una nueva red o permanecer en la actual. Para obtener más información, vea "[Acerca de las bifurcaciones](/articles/about-forks/)".

## Información adicional

- "[Divulgación u ocultación de las contribuciones privadas en el perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Visualización de contribuciones en la página del perfil](/articles/viewing-contributions-on-your-profile-page)"
