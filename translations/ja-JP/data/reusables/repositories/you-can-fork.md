{% ifversion ghae %}
If the policies for your enterprise permit forking private and internal repositories, you can fork a repository to your personal account or an organization where you have repository creation permissions. 詳しい情報については「[Organization内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

{% elsif ghes or ghec %}
You can fork a private or internal repository to your personal account or an organization on
{% data variables.product.product_location %} where you have repository creation permissions, if settings for the repository and your enterprise policies allow forking.

{% elsif fpt %}
If you have access to a private repository and the owner permits forking, you can fork the repository to your personal account, or an organization on
{% data variables.product.prodname_team %} where you have repository creation permissions. You cannot fork a private repository to an organization using {% data variables.product.prodname_free_team %}. 詳しい情報については「[GitHubの製品](/articles/githubs-products)」を参照してください。
{% endif %}
