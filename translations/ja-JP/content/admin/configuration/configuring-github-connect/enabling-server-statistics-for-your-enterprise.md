---
title: Enabling Server Statistics for your enterprise
intro: 'You can analyze your own aggregate data from {% data variables.product.prodname_ghe_server %} and help us improve {% data variables.product.company_short %} products by enabling {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
---

{% data reusables.server-statistics.release-phase %}

## {% data variables.product.prodname_server_statistics %}について

{% data variables.product.prodname_server_statistics %} collects aggregate usage data from {% data variables.product.product_location %}, which you can use to better anticipate the needs of your organization, understand how your team works, and show the value you get from {% data variables.product.prodname_ghe_server %}.

{% data variables.product.prodname_server_statistics %} only collects certain aggregate metrics on repositories, issues, pull requests, and other features.{% data variables.product.prodname_dotcom %} content, such as code, issues, comments, or pull request content, is not collected. 詳しい情報については、「[{% data variables.product.prodname_server_statistics %} について](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)」を参照してください。

By enabling {% data variables.product.prodname_server_statistics %}, you are also helping to improve {% data variables.product.company_short %}. The aggregated data you will provide helps us understand how our customers are using {% data variables.product.prodname_dotcom %}, and make better and more informed product decisions, ultimately benefiting you.

## {% data variables.product.prodname_server_statistics %} の有効化

Before you can enable {% data variables.product.prodname_server_statistics %}, you must first connect your {% data variables.product.prodname_ghe_server %} instance to {% data variables.product.prodname_dotcom_the_website %} through {% data variables.product.prodname_github_connect %}. 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

You can disable {% data variables.product.prodname_server_statistics %} from {% data variables.product.prodname_ghe_server %} at any time.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. Under "Share server statistics with GitHub.com", select the dropdown menu and click **Enabled** or **Disabled**. ![Screenshot of {% data variables.product.prodname_server_statistics %} drop-down menu with disabled or enabled options](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
