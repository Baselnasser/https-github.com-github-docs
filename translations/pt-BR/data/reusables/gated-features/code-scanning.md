{%- ifversion fpt %}
{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_code_scanning_capc %} is also available for private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. To use {% data variables.product.prodname_code_scanning %} in a private repository owned by an organization, you must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
{% data variables.product.prodname_code_scanning_capc %} is available for organization-owned repositories in {% data variables.product.product_name %}. This feature requires a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} is available for organization-owned repositories in {% data variables.product.product_name %}. This is a {% data variables.product.prodname_GH_advanced_security %} feature (free during the beta release).

{%- endif %} For more information, see "[GitHub's products](/articles/githubs-products)."