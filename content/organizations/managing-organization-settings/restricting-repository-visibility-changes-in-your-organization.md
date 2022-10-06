---
title: Restricting repository visibility changes in your organization
intro: 'To protect your organization''s data, you can configure permissions for changing repository visibility in your organization.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
---

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)." 

You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

{% warning %}

**Warning**: If enabled, this setting allows people with admin access to choose any visibility for an existing repository, even if you do not allow that type of repository to be created. For more information about restricting the visibility of repositories during creation, see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository visibility change", deselect **Allow members to change repository visibilities for this organization**.
![Checkbox to allow members to change repository visibility](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Click **Save**.
