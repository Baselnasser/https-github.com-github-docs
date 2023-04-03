---
title: Configuring GitHub Copilot in your environment
shortTitle: In your environment
intro: 'You can enable, configure, or disable {% data variables.product.prodname_copilot %} in a supported IDE.'
product: '{% data reusables.gated-features.copilot %}'
redirect_from: 
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-visual-studio
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-visual-studio-code
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-a-jetbrains-ide
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-neovim
topics:
  - Copilot
versions:
  feature: copilot
---

{% jetbrains %}

## About {% data variables.product.prodname_copilot %} in JetBrains IDEs

If you use a JetBrains IDE, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within your IDE or on {% data variables.product.prodname_dotcom_the_website %}. This article describes how to configure {% data variables.product.prodname_copilot %} in the IntelliJ IDE, but the user interfaces of other JetBrains IDEs may differ.

{% data reusables.copilot.dotcom-settings %}

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in a JetBrains IDE, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=jetbrains)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

### Keyboard shortcuts for macOS

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Option (⌥)</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Option (⌥) or Alt</kbd>+<kbd>Return</kbd> |

### Keyboard shortcuts for Windows

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

### Keyboard shortcuts for Linux

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

## Enabling or disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within your JetBrains IDE. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel on the right of the JetBrains window.

    ![Screenshot of the bottom panel in a JetBrains IDE. The {% data variables.product.prodname_copilot %} status icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-jetbrains.png)

1. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable {% data variables.product.prodname_copilot %} for the specified language.

    ![Screenshot of the menu to disable {% data variables.product.prodname_copilot %} globally or for the current language in a JetBrains IDE](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuring advanced settings for {% data variables.product.prodname_copilot %}

You can manage advanced settings for {% data variables.product.prodname_copilot %} in your JetBrains IDE, such as how your IDE displays code completions, and which languages you want to enable or disable for {% data variables.product.prodname_copilot %}.

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Languages & Frameworks**, click **{% data variables.product.prodname_copilot %}**.
1. Edit the settings according to your personal preferences.
   - To adjust the behavior and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   - If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.
   - Under "Disabled languages," use the checkboxes to select or deselect the languages you want to disable {% data variables.product.prodname_copilot %} for.

## Configuring proxy settings for {% data variables.product.prodname_copilot %}

You can configure {% data variables.product.prodname_copilot %} to connect through an HTTP proxy server in a JetBrains IDE. {% data variables.product.prodname_copilot %} supports basic HTTP proxy setups, with or without basic authentication.

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Appearance & Behavior**, click **System Settings** and then click **HTTP Proxy**.
1. Select **Manual proxy configuration**, and then select **HTTP**.
1. In the "Host name" field, enter the hostname of your proxy server, and in the "Port number" field, enter the port number of your proxy server.
1. Optionally, in the left sidebar, click **Tools** and then click **Server Certificates**. Then select or deselect **Accept non-trusted certificates automatically**, depending on whether you want to accept non-trusted certificates automatically.

{% data reusables.copilot.dotcom-settings %}

{% endjetbrains %}

{% visualstudio %}

## About {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}

If you use {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within {% data variables.product.prodname_vs %} or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=visualstudio)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Tools settings for {% data variables.product.prodname_vs %} using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by its command name in the Keyboard Shortcuts editor.

| Action | Shortcut | Command name |
|:---|:---|:---|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>.</kbd>|Tools.Nextsuggestion|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>,</kbd>|Tools.Previoussuggestion|
|Trigger inline suggestion|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}, you can rebind the shortcuts in the Keyboard editor using your preferred keyboard shortcuts for each specific command.

1. In the {% data variables.product.prodname_vs %} toolbar, under **Tools**, click **Options**.

   ![Screenshot of the Options option in the {% data variables.product.prodname_vs %} toolbar](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, under **Environment**, click **Keyboard**.
1. Under "Show commands containing:", search for the command you want to rebind.

   ![Screenshot of the show commands containing search bar](/assets/images/help/copilot/vs-show-commands-containing.png)

1. Under "Press shortcut keys," type the shortcut you want to assign to the command, then click **Assign**.

   ![Screenshot of the keyboard shortcut assignment](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Configuring ReSharper for {% data variables.product.prodname_copilot %}

If you use ReSharper, {% data variables.product.prodname_copilot %} may work best when you configure ReSharper to use {% data variables.product.prodname_copilot %}'s native IntelliSense. For more information about ReSharper, see the [ReSharper documentation](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. In the {% data variables.product.prodname_vs %} toolbar, under **Tools**, click **Options**.
   ![Screenshot of the Options option in the {% data variables.product.prodname_vs %} toolbar](/assets/images/help/copilot/vs-toolbar-options.png)
1. In the "Options" dialog, under **Environment**, click **IntelliSense** and then click **General**.
1. Under "General" select **{% data variables.product.prodname_vs %}** and then click **Save**.

{% data reusables.copilot.dotcom-settings %}


{% endvisualstudio %}

{% vscode %}

## About {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}

If you use {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within {% data variables.product.prodname_vscode %} or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=vscode)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by command name in the Keyboard Shortcuts editor.

### Keyboard shortcuts for macOS

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

### Keyboard shortcuts for Windows

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

### Keyboard shortcuts for Linux

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command.

### Rebinding keyboard shortcuts for macOS

1. Click **Code**, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of Visual Studio Code keyboard shortcuts](/assets/images/help/copilot/vsc-keyboard-shortcuts-mac.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of Keyboard shortcut editor](/assets/images/help/copilot/vsc-edit-shortcuts-mac.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Rebinding keyboard shortcuts for Windows

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of Visual Studio Code keyboard shortcuts](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of Keyboard shortcut editor](/assets/images/help/copilot/vsc-edit-shortcuts.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Rebinding keyboard shortcuts for Linux

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of Visual Studio Code keyboard shortcuts](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of Keyboard shortcut editor](/assets/images/help/copilot/vsc-edit-shortcuts.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.


{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Enabling or disabling inline suggestions

You can choose to enable or disable inline suggestions for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.

{% data reusables.copilot.vscode-settings %}
1. In the left-side panel of the settings tab, click **Extensions** and then select **{% data variables.product.prodname_copilot_short %}**.
1. Under "Inline Suggest:Enable," select or deselect the checkbox to enable or disable inline suggestions.

## Enabling or disabling {% data variables.product.prodname_copilot %} for specific languages

You can specify which languages you want to enable or disable {% data variables.product.prodname_copilot %} for.

1. From the {% data variables.product.prodname_vscode %}, click the **Extensions** tab, then navigate to the **Copilot** section. For more information, see "[Enabling and disabling inline suggestions](#enabling-and-disabling-inline-suggestions)."
1. Under "Enable or disable {% data variables.product.prodname_copilot_short %} for specified languages," click **Edit in settings.json**.
1. In the _settings.json_ file, add or remove the languages you want to enable or disable {% data variables.product.prodname_copilot %} for. For example, to enable Python in {% data variables.product.prodname_copilot %}, add `"python": true` to the list, ensuring there is a trailing comma after all but the last list item.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

## Revoking {% data variables.product.prodname_copilot %} authorization

{% data variables.product.prodname_vscode %} retains authorization to use {% data variables.product.prodname_copilot %} through a particular {% data variables.product.prodname_dotcom %} account. If you want to prevent your {% data variables.product.prodname_dotcom %} account being used for {% data variables.product.prodname_copilot %} on a device you no longer have access to, you can revoke authorization and then go through the authorization process again. The device you previously used will not have the new authorization.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
{% data reusables.user-settings.access_authorized_oauth_apps %}
1. Click the **...** next to **{% data variables.product.prodname_dotcom %} for {% data variables.product.prodname_vscode_shortname %}** and click **Revoke**.
{% data reusables.user-settings.access_authorized_github_apps %}
1. If the **{% data variables.product.prodname_copilot %}** plugin is listed, click **Revoke**.

After revoking authorization, {% data variables.product.prodname_vscode %} will be able to continue using {% data variables.product.prodname_copilot %} in a current session for a maximum of 30 minutes. After that time, you will need to re-authorize {% data variables.product.prodname_copilot %} for use in {% data variables.product.prodname_vscode %} again.

## Re-authorizing {% data variables.product.prodname_copilot %}

After you have revoked authorization, if you want to continue using {% data variables.product.prodname_copilot %}, you will need to complete the re-authorization process.

1. In the bottom left corner of {% data variables.product.prodname_vscode %}, click the **Accounts** icon, hover over your username, and click **Sign out**.

   ![Screenshot of the menu in {% data variables.product.prodname_vscode %}. The "Sign out" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-out.png)

1. In the "{% data variables.product.prodname_vscode %}" pop-up, click **Sign Out**.

1. In the bottom left corner of {% data variables.product.prodname_vscode %}, click the **Accounts** icon, hover over your username, and click **Sign in with {% data variables.product.prodname_dotcom %} to use {% data variables.product.prodname_copilot %}**.

  ![Screenshot of the accounts menu in {% data variables.product.prodname_vscode %}. The "Sign in with {% data variables.product.prodname_dotcom %} to use {% data variables.product.prodname_copilot %} (1)" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-in.png)

1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Continue**.
1. In the "Open {% data variables.product.prodname_vscode %}?" pop-up, click **Open {% data variables.product.prodname_vscode %}**.

## Configuring proxy settings for {% data variables.product.prodname_copilot %}

You can configure {% data variables.product.prodname_copilot %} to connect through an HTTP proxy server in {% data variables.product.prodname_vscode %}. {% data variables.product.prodname_copilot %} supports basic HTTP proxy setups, with or without basic authentication.

{% data reusables.copilot.vscode-settings %}
1. In the left-side panel of the settings tab, click **Application** and then select **Proxy**.
1. In the textbox under "Proxy", type the address of your proxy server, for example `http://localhost:3128`. Alternatively, {% data variables.product.prodname_copilot %} will use the `http_proxy` and `https_proxy` variables from your environment.
1. Optionally, under "Proxy Authorization", click **Edit in settings.json** and add your required value to send as the `Proxy-Authorization` header for every network request.
1. Optionally, under "Proxy Strict SSL", select or deselect the checkbox to enable or disable strict SSL.

{% data reusables.copilot.dotcom-settings %}

{% endvscode %}

{% neovim %}

## Configuring {% data variables.product.prodname_copilot %} in Neovim

For guidance on configuring {% data variables.product.prodname_copilot %} in Neovim, invoke the {% data variables.product.prodname_copilot %} documentation in Neovim by running the following command:


    :help copilot

{% data reusables.copilot.dotcom-settings %}

{% endneovim %}

