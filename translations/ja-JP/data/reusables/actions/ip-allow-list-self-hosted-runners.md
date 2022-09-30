{% ifversion ghae %}
To allow your self-hosted runners to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your self-hosted runners to the IP allow list. For more information, see "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% else %}
{% warning %}

**Warning**: If you use an IP allow list and would also like to use {% data variables.product.prodname_actions %}, you must use self-hosted runners{% ifversion actions-hosted-runners %} or {% data variables.product.prodname_dotcom %}-hosted larger runners with a static IP address range{% endif %}. For more information, see "[Hosting your own runners](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)" {% ifversion actions-hosted-runners %} or "[Using larger runners](/actions/using-github-hosted-runners/using-larger-runners)"{% endif %}.

{% endwarning %}

To allow your self-hosted {% ifversion actions-hosted-runners %}or larger hosted{% endif %} runners to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your runners to the IP allow list. For more information, see "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% endif %}
