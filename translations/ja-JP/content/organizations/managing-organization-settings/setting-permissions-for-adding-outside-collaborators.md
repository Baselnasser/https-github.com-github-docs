---
title: 外部のコラボレーターを追加するための権限を設定する
intro: Organization のデータを保護し、Organization 内で使用されている有料ライセンスの数が無駄遣いされないようにするために、外部コラボレーターをOrganizationのリポジトリに招待できる人を設定できます。
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: コラボレータポリシーの設定
---

デフォルトでは、リポジトリへの管理アクセスを持つ人は、そのリポジトリで作業してもらうために外部のコラボレータを招待できます。 外部のコラボレータを追加する機能は、Organizationのオーナーのみに制限することもできます。

{% ifversion ghec %}
{% note %}

**ノート:**{% data variables.product.prodname_ghe_cloud %}を使うOrganizationだけが、外部のコラボレータを招待する機能をOrganizationのオーナーに制限できます。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% ifversion ghec %}OrganizationがEnterpriseアカウントによって所有されているなら、{% else %}{% endif %}EnterpriseのオーナーがEnterpriseのレベルでポリシーを設定している場合、Organiationのこの設定はできないかもしれません。 詳しい情報については「[Enterpriseでのリポジトリ管理ポリシーの施行]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)」{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)」{% endif %}を参照してください。

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}{% ifversion ghes < 3.3 %}
5. [Repository invitations] の下で、[**Allow members to invite outside collaborators to repositories for this organization**] を選択します。 ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-old.png){% else %}
5. [Repository outside collaborators] の下で、[**Allow repository administrators to invite outside collaborators to repositories for this organization**]の選択を解除します。 ![Checkbox to allow repository administrators to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% endif %}
6. [**Save**] をクリックします。
