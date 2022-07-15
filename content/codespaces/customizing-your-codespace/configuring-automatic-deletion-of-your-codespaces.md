---
title: Configuring automatic deletion of your codespaces
shortTitle: Configure automatic deletion
intro: 'Unused codespaces are automatically deleted. You can choose how long your stopped codespaces are retained, up to a maximum of 30 days.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
---

By default, {% data variables.product.prodname_codespaces %} are automatically deleted after they have been stopped and have remained inactive for 30 days.

However, because {% data variables.product.prodname_codespaces %} incur storage charges, you may prefer to reduce the retention period by changing your default period in your personal settings for {% data variables.product.prodname_github_codespaces %}. For more information about storage charges, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

{% note %}

**Note**: Whether or not you have set a personal codespace retention period, it's a good idea to get into the habit of deleting codespaces that you no longer need. For more information, see "[Deleting a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)."

{% endnote %}

Automatic deletion happens irrespective of whether a codespace contains unpushed changes. To prevent automatic deletion of a codespace, just open the codespace again. The retention period is reset every time you connect to a codespace, and the retention countdown restarts when the codespace is stopped.

If a repository belongs to an organization, the organization admin may have set a retention period for the whole organization. If this period is less than the default retention period in your personal settings then the organization retention period will apply to codespaces you create for this repository. For more information, see "[Restricting the retention period for codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)."

Each codespace has its own retention period. You may, therefore, have codespaces with different rentention periods. For example, if:
* You created a codespace, changed your default retention period, then created another codespace.
* You created a codespace using {% data variables.product.prodname_cli %} and specified a different retention period.
* You created a codespace from an organization-owned repository that has a retention period configured for the organization.

{% note %}

**Note**: The retention period is specified in days. A day represents a 24-hour period, beginning at the time of day when you stop a codespace.

{% endnote %}

{% webui %}

## Setting a default retention period for your codespaces

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Default retention period", enter the number of days for which you want your codespaces to be retained, by default, after they have been stopped. 

   ![Selecting your retention period](/assets/images/help/codespaces/setting-default-retention.png)

   You can set your default retention period between `0` and `30` days. 

   {% warning %}

   **Warning**: Setting the period to `0` will result in your codespaces being immediately deleted when you stop them, or when they timeout due to inactivity. For more information, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

   {% endwarning %}
 
1. Click **Save**.

When you create a codespace using {% data variables.product.prodname_cli %} you can override this default. If you create a codespace in an organization that specifies a shorter retention period, the organization-level value overrides your personal setting.

If you set a retention period of more than a day, you'll be sent an email notification one day prior to its deletion. 

## Checking the remaining time until autodeletion

You can check whether a codespace is due to be automatically deleted soon. 

When an inactive codespace is approaching the end of its retention period, this is indicated in your list of codespaces on {% data variables.product.prodname_dotcom %} at [https://github.com/codespaces](https://github.com/codespaces).

![The pre-deletion message in the codespaces list on {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Setting a retention period for a codespace

To set the codespace retention period when you create a codespace, use the `--retention-period` flag with the `codespace create` subcommand. Specify the period in days. The period must be between 0 and 30 days.

```shell
gh codespace create --retention-period DAYS
```

If you don't specify a retention period when you create a codespace, then either your default retention period, or an organization retention period, will be used, depending on which is lower. For information about setting your default retention period, click the "Web browser" tab on this page. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Setting the retention period

You can set your default retention period in your web browser, on {% data variables.product.prodname_dotcom_the_website %}. Alternatively, if you use {% data variables.product.prodname_cli %} to create a codespace you can set a retention period for that particular codespace. For more information, click the appropriate tab above.

## Checking whether codespaces will be autodeleted soon

You can check, in the {% data variables.product.prodname_vscode %} desktop application, whether a codespace is due to be automatically deleted soon.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Choose **{% data variables.product.prodname_github_codespaces %}** from the drop-down menu at the top right of the Remote Explorer, if it is not already selected.
1. Under "GITHUB CODESPACES," position the mouse pointer over the codespace that you're interested in. A pop-up box is displayed showing you information about the codespace.

   If the codespace is nearing the end of its retention period, a line is included telling you when the codespace will be deleted.

   ![Codespace information showing the time until deletion](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
