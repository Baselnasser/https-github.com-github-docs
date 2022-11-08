{% ifversion ghes %}

{% note %}

**Note:** Your site administrator must enable {% data variables.product.prodname_code_scanning %} for {% data variables.location.product_location %} before you can use this feature. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %} for your appliance](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance)."

{% ifversion security-feature-enablement-policies %} You may not be able to enable or disable {% data variables.product.prodname_code_scanning %} if an enterprise owner has set a policy at the enterprise level. For more information, see "[Enforcing policies for code security and analysis for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."{% endif %}

{% endnote %}

{% endif %}
