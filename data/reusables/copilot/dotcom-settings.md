## Configuring {% data variables.product.prodname_copilot %} settings on {% data variables.product.prodname_dotcom_the_website %}

Once you have an active {% data variables.product.prodname_copilot %} trial or subscription, you can adjust {% data variables.product.prodname_copilot %} settings for your personal account on {% data variables.product.prodname_dotcom %} in the [{% data variables.product.prodname_copilot %} settings](https://github.com/settings/copilot). The settings apply anywhere that you use {% data variables.product.prodname_copilot %}. You can configure the suggestions that {% data variables.product.prodname_copilot %} offers and how {% data variables.product.company_short %} uses your telemetry data.

## Enabling or disabling duplication detection

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions matching public code on {% data variables.product.prodname_dotcom %}. You can choose to enable or disable the filter. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown to you.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.copilot-settings %}
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
  ![Screenshot of duplication detection option](/assets/images/help/copilot/duplication-detection.png)
{% data reusables.copilot.save-settings %}

## Enabling or disabling telemetry

You can choose whether your code snippets are collected and retained by GitHub and further processed and shared with Microsoft and OpenAI by adjusting your user settings. For more information about data that {% data variables.product.prodname_copilot %} may collect depending on your telemetry settings, see "[{% data variables.product.company_short %} Terms for Additional Products and Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [{% data variables.product.prodname_copilot %} privacy FAQ](https://github.com/features/copilot/#faq-privacy).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.copilot-settings %}
1. To allow or prevent {% data variables.product.prodname_dotcom %} using your telemetry data, select or deselect **Allow {% data variables.product.prodname_dotcom %} to use my code snippets for product improvements**.
  ![Screenshot of telemetry option](/assets/images/help/copilot/telemetry-option.png)
{% data reusables.copilot.save-settings %}

## Further reading

- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot/#faq)