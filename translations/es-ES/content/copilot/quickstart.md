---
title: Quickstart for GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} can help you work, by offering inline suggestions as you code.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Inicio Rápido
topics:
  - Copilot
---

## Introducción

{% data variables.product.prodname_copilot %} is an AI pair programmer. You can use {% data variables.product.prodname_copilot %} to get suggestions for whole lines or entire functions right inside your editor.

This guide will show you how to sign up for {% data variables.product.prodname_copilot %}, install the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}, and get your first suggestion. For more information on {% data variables.product.prodname_copilot %}, see "[About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)." For more in-depth information on how to use {% data variables.product.prodname_copilot %} in a variety of environments, see "[Getting Started](/copilot/getting-started-with-github-copilot)."

## Prerrequisitos

{% data reusables.copilot.copilot-prerequisites %}
- Para utilizar el {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}, debes tener instalado {% data variables.product.prodname_vscode %}. For more information, see the [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) documentation.

## Registrarse en {% data variables.product.prodname_copilot %}

{% data reusables.copilot.signup-procedure %}

## Installing the {% data variables.product.prodname_copilot %} extension for {% data variables.product.prodname_vscode %}

Para utilizar el {% data variables.product.prodname_copilot %}, primero debes instalar la extensión de {% data variables.product.prodname_vscode %}.

1. En el mercado de {% data variables.product.prodname_vscode %}, dirígete a la página de la [Extensión del {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) y haz clic en **Instalar**. ![Instalar la extensión del {% data variables.product.prodname_copilot %} para {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Se mostrará una ventana emergente que pide abrir {% data variables.product.prodname_vscode %}. Haz clic en **Abrir {% data variables.product.prodname_vscode %}**.
1. En la pestaña de "Extensión: {% data variables.product.prodname_copilot %}" en {% data variables.product.prodname_vscode %}, haz clic en **Instalar**. ![Botón de instalar en {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Si no has autorizado a {% data variables.product.prodname_vscode %} previamente en tu cuenta de {% data variables.product.prodname_dotcom %}, se te pedirá iniciar sesión en {% data variables.product.prodname_dotcom %} en {% data variables.product.prodname_vscode %}.
   - If you have previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, {% data variables.product.prodname_copilot %} will be automatically authorized. ![Captura de la pantalla de autorización de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. En tu buscdor, {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para el {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar a {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialogue box, to confirm the authentication, click **Open**.

## Getting your first suggestion

{% data reusables.copilot.supported-languages %} Los siguientes ejemplos están en JavaScript, pero toros lenguajes funcionarán de forma similar.

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} sugerirá automáticamente todo el cuerpo de una función en texto gris, tal como se muestra a continuación. La sugerencia exacta podría variar.
   ![First suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## Siguientes pasos

You successfully installed {% data variables.product.prodname_copilot %} and received your first suggestion, but that's just the beginning! Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_copilot %}.

- [Getting Started](/copilot/getting-started-with-github-copilot): You've learned how to get your first suggestion in {% data variables.product.prodname_vscode %}. These guides show you how to set up and navigate the various functions of {% data variables.product.prodname_copilot %} across all of the supported environments.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): See practical examples of how {% data variables.product.prodname_copilot %} can help you work.
- [Configuring {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot): These guides provide details on how to configure {% data variables.product.prodname_copilot %} to your personal preferences.


## Leer más

- [Acerca de {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
