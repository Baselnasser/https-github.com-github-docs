---
title: Getting started with GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
---

## Acerca del {% data variables.product.prodname_copilot %} y de las {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vscode %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vscode %} for macOS, Windows, or Linux.

## Prerrequisitos

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

## Installing the {% data variables.product.prodname_vscode %} extension

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vscode %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**. ![Install {% data variables.product.prodname_copilot %} extension {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**. ![Install button in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.
   - If you have previously authorized {% data variables.product.prodname_vscode %} for your account on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} will be automatically authorized. ![Screen shot of {% data variables.product.prodname_vscode %} authorization screen](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialog box, to confirm the authentication, click **Open**.


## Enviar tu primer sugerencia

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} sugerirá automáticamente todo el cuerpo de una función en texto gris, tal como se muestra a continuación. La sugerencia exacta podría variar.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Screenshot of a first suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## Ver sugerencias alternativas

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escribe el siguiente encabezado de función. El {% data variables.product.prodname_copilot %} te mostrará una sugerencia.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS      | Ver la siguiente sugerencia               | Ver sugerencia anterior                   |
   |:------- |:----------------------------------------- |:----------------------------------------- |
   | macOS   | <kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd> | <kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd>               | <kbd>Alt</kbd>+<kbd>[</kbd>               |
   | Linux   | <kbd>Alt</kbd>+<kbd>]</kbd>               | <kbd>Alt</kbd>+<kbd>[</kbd>               |
1. Alternatively, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Ver varias sugerencias en una pestaña nueva

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escribe el siguiente encabezado de función. El {% data variables.product.prodname_copilot %} te mostrará una sugerencia.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. To open a new tab with multiple additional options, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>.
1. Para aceptar una sugerencia, sobre esta, haz clic en **Aceptar solución**. Para rechazar todas las sugerencias, cierra la pestaña.

## Generar sugerencias de código desde los comentarios

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment. El {% data variables.product.prodname_copilot %} te sugerirá una implementación de la función.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Using a framework

You can also use {% data variables.product.prodname_copilot %} to generate suggestions for APIs and frameworks. The following example uses {% data variables.product.prodname_copilot %} to create a simple Express server that returns the current time.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation of the Express app.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. To accept each line, press <kbd>Tab</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Leer más

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
