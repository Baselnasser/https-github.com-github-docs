---
title: 关于组织
intro: 组织是共享帐户，企业和开源项目可以同时跨多个项目进行协作，具有复杂的安全性和管理功能。
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## 关于组织

{% data reusables.organizations.about-organizations %} 有关帐户类型的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)”。

您可以邀请不限数量的人员加入您的组织，然后为这些组织成员提供各种角色，以授予对组织及其数据的不同级别的访问权限。 更多信息请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

除了管理对组织本身的访问外，您还可以单独管理对组织存储库、项目板和应用程序的访问。 更多信息请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”、“[组织的项目板权限](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)”和“[管理对组织应用程序的访问](/organizations/managing-access-to-your-organizations-apps)”。

为了简化访问管理并增强协作，您可以创建反映组结构的嵌套团队，并具有级联访问权限和提及。 更多信息请参阅“[关于团队](/organizations/organizing-members-into-teams/about-teams)”。

您可以通过管理设置（例如限制成员可以创建的存储库类型）来配置组织以满足组的独特需求。 更多信息请参阅“[管理组织设置](/organizations/managing-organization-settings)”。

为加强组织的安全性，可以强制实施安全要求并查看组织的审核日志。 更多信息请参阅“[保护组织安全](/organizations/keeping-your-organization-secure)”。

{% data reusables.organizations.org-ownership-recommendation %} 更多信息请参阅“[管理组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

{% ifversion fpt or ghec %}
## 关于功能可用性

{% data reusables.organizations.organization-plans %}
{% endif %}

## 组织和企业帐户

{% ifversion fpt %}
企业帐户是 {% data variables.product.prodname_ghe_cloud %} 的一项功能，允许所有者集中管理多个组织的策略和计费。 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)。
{% else %}
{% ifversion ghec %}对于属于企业帐户的组织，计费在企业帐户级别进行管理，而计费设置在组织级别不可用。{% endif %} 企业所有者可以为企业帐户中的所有组织设置策略，或允许组织所有者在组织级别设置策略。 组织所有者无法更改在企业帐户级对组织执行的设置。 如果对组织的策略或设置有疑问，请联系企业帐户的所有者。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} 更多信息请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## 组织的服务条款和数据保护

实体（如公司、非营利组织或集团）可同意用于其组织的标准服务条款或公司服务条款。 更多信息请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

{% endif %}
