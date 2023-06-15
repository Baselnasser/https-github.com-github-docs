---
title: Using LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'If you use Lightweight Directory Access Protocol (LDAP) to centralize access across applications, you can integrate {% data variables.product.product_name %} by configuring LDAP authentication for your instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

## About LDAP authentication for {% data variables.product.product_name %}

LDAP is a popular application protocol for access and maintenance of directory information services, and is one of the most common protocols for integration of third-party software with large company user directories. For more information, see "[Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)" on Wikipedia.

If you use an LDAP directory for centralized authentication, you can configure LDAP authentication for the people who use {% data variables.location.product_location %}.

{% data reusables.enterprise.saml-or-ldap %}

{% data reusables.enterprise_user_management.built-in-authentication %}

## Supported LDAP services

{% data variables.product.prodname_ghe_server %} integrates with these LDAP services:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## Username considerations with LDAP

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## Configuring LDAP with {% data variables.location.product_location %}

After you configure LDAP, users will be able to sign into your instance with their LDAP credentials. When users sign in for the first time, their profile names, email addresses, and SSH keys will be set with the LDAP attributes from your directory.

When you configure LDAP access for users via the {% data variables.enterprise.management_console %}, your user licenses aren't used until the first time a user signs in to your instance. However, if you create an account manually using site admin settings, the user license is immediately accounted for.

{% warning %}

**Warning:** Before configuring LDAP on {% data variables.location.product_location %}, make sure that your LDAP service supports paged results.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Under "Authentication", select **LDAP**.
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}
1. Add your configuration settings.

## LDAP attributes
Use these attributes to finish configuring LDAP for {% data variables.location.product_location %}.

| Attribute name           | Required     | Description |
|--------------------------|----------|-------------|
| `Host`                   | {% octicon "check" aria-label="Required" %} | The LDAP host, e.g. `ldap.example.com` or `10.0.0.30`. If the hostname is only available from your internal network, you may need to configure {% data variables.location.product_location %}'s DNS first so it can resolve the hostname using your internal nameservers. |
| `Port`                   | {% octicon "check" aria-label="Required" %} | The port the host's LDAP services are listening on. Examples include: 389 and 636 (for LDAPS). |
| `Encryption`             | {% octicon "check" aria-label="Required" %} | The encryption method used to secure communications to the LDAP server. Examples include plain (no encryption), SSL/LDAPS (encrypted from the start), and StartTLS (upgrade to encrypted communication once connected). |
| `Domain search user`     | {% octicon "x" aria-label="Optional" %} | The LDAP user that looks up other users that sign in, to allow authentication. This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com`. With Active Directory, you can also use the `[DOMAIN]\[USERNAME]` syntax (e.g. `WINDOWS\Administrator`) for the domain search user with Active Directory. |
| `Domain search password` | {% octicon "x" aria-label="Optional" %} | The password for the domain search user. |
| `Administrators group`   | {% octicon "x" aria-label="Optional" %} | Users in this group are promoted to site administrators when signing into your appliance. If you don't configure an LDAP Administrators group, the first LDAP user account that signs into your appliance will be automatically promoted to a site administrator. |
| `Domain base`            | {% octicon "check" aria-label="Required" %} | The fully qualified `Distinguished Name` (DN) of an LDAP subtree you want to search for users and groups. You can add as many as you like; however, each group must be defined in the same domain base as the users that belong to it. If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you specify the top level of your LDAP directory tree as your domain base and use restricted user groups to control access. |
| `Restricted user groups` | {% octicon "x" aria-label="Optional" %} | If specified, only users in these groups will be allowed to log in. You only need to specify the common names (CNs) of the groups, and you can add as many groups as you like. If no groups are specified, *all* users within the scope of the specified domain base will be able to sign in to your {% data variables.product.prodname_ghe_server %} instance. |
| `User ID`                | {% octicon "check" aria-label="Required" %} | The LDAP attribute that identifies the LDAP user who attempts authentication. Once a mapping is established, users may change their {% data variables.product.prodname_ghe_server %} usernames. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. The default value is `uid`. |
| `Profile name`           | {% octicon "x" aria-label="Optional" %} | The name that will appear on the user's {% data variables.product.prodname_ghe_server %} profile page. Unless LDAP Sync is enabled, users may change their profile names. |
| `Emails`                 | {% octicon "x" aria-label="Optional" %} | The email addresses for a user's {% data variables.product.prodname_ghe_server %} account. |
| `SSH keys`               | {% octicon "x" aria-label="Optional" %} | The public SSH keys attached to a user's {% data variables.product.prodname_ghe_server %} account. The keys must be in OpenSSH format. |
| `GPG keys`               | {% octicon "x" aria-label="Optional" %} | The GPG keys attached to a user's {% data variables.product.prodname_ghe_server %} account. |
| `Disable LDAP authentication for Git operations` | {% octicon "x" aria-label="Optional" %} |If selected, [turns off](#disabling-password-authentication-for-git-operations) users' ability to use LDAP passwords to authenticate Git operations. |
| `Enable LDAP certificate verification` | {% octicon "x" aria-label="Optional" %} |If selected, [turns on](#enabling-ldap-certificate-verification) LDAP certificate verification. |
| `Synchronization` | {% octicon "x" aria-label="Optional" %} | If selected, [turns on](#enabling-ldap-sync) LDAP Sync. |

### Disabling password authentication for Git operations

To enforce use of {% data variables.product.pat_generic %}s or SSH keys for Git access, which can help prevent your server from being overloaded by LDAP authentication requests, you can disable password authentication for Git operations.

We recommend this setting because a slow-responding LDAP server, especially combined with a large number of requests due to polling, is a frequent source of performance issues and outages.

To disable password authentication for Git operations, select **Disable username and password authentication for Git operations** in your LDAP settings.

When this option is selected, if a user tries to use a password for Git operations via the command line, they will receive an error message that says, `Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`

### Enabling LDAP certificate verification

You can validate the LDAP server certificate you use with TLS by enabling LDAP certificate verification.

To enable LDAP certificate verification, select **Enable LDAP certificate verification** in your LDAP settings.

When this option is selected, the certificate is validated to make sure:
- If the certificate contains at least one Subject Alternative Name (SAN), one of the SANs matches the LDAP hostname. Otherwise, the Common Name (CN) matches the LDAP hostname.
- The certificate is not expired.
- The certificate is signed by a trusted certificate authority (CA).

### Enabling LDAP Sync

{% note %}

**Note:** Teams using LDAP Sync are limited to a maximum 1499 members.

{% endnote %}

You can establish role-based access control for users from your LDAP server by synchronizing {% data variables.product.prodname_ghe_server %} users and team membership against your established LDAP groups. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team#creating-teams-with-ldap-sync-enabled)."

To enable LDAP Sync, in your LDAP settings, select **Synchronize Emails**, **Synchronize SSH Keys**, or **Synchronize GPG Keys** .

After you enable LDAP sync, a synchronization job will run at the specified time interval to perform the following operations on each user account:

- If you've allowed built-in authentication for users outside your identity provider, and the user is using built-in authentication, move on to the next user.
- If no LDAP mapping exists for the user, try to map the user to an LDAP entry in the directory. If the user cannot be mapped to an LDAP entry, suspend the user and move on to the next user.
- If there is an LDAP mapping and the corresponding LDAP entry in the directory is missing, suspend the user and move on to the next user.
- If the corresponding LDAP entry has been marked as disabled and the user is not already suspended, suspend the user and move on to the next user.
- If the corresponding LDAP entry is not marked as disabled, and the user is suspended, and _Reactivate suspended users_ is enabled in the Admin Center, unsuspend the user.
- If one or more restricted user groups are configured on the instance and the corresponding LDAP entry is not in one of these groups, suspend the user.
- If one or more restricted user groups are configured on the instance, the corresponding LDAP entry is in one of these groups, and _Reactivate suspended users_ is enabled in the Admin Center, unsuspend the user.
- If the corresponding LDAP entry includes a `name` attribute, update the user's profile name.
- If the corresponding LDAP entry is in the Administrators group, promote the user to site administrator.
- If the corresponding LDAP entry is not in the Administrators group, demote the user to a normal account, unless the account is suspended. Suspended administrators will not be demoted and will remain listed on the "Site admins" and "Enterprise owners" pages.
- If an LDAP User field is defined for emails, synchronize the user's email settings with the LDAP entry. Set the first LDAP `mail` entry as the primary email.
- If an LDAP User field is defined for SSH public keys, synchronize the user's public SSH keys with the LDAP entry.
- If an LDAP User field is defined for GPG keys, synchronize the user's GPG keys with the LDAP entry.

{% note %}

**Note**: LDAP entries can only be marked as disabled if you use Active Directory and the `userAccountControl` attribute is present and flagged with `ACCOUNTDISABLE`. Some variations of Active Directory, such as AD LDS and ADAM, don't support the `userAccountControl` attribute.

{% endnote %}

A synchronization job will also run at the specified time interval to perform the following operations on each team that has been mapped to an LDAP group:

- If a team's corresponding LDAP group has been removed, remove all members from the team.
- If LDAP member entries have been removed from the LDAP group, remove the corresponding users from the team. If the user is no longer a member of any team in the organization and is not an owner of the organization, remove the user from the organization. If the user loses access to any repositories as a result, delete any private forks the user has of those repositories.

  {% note %}

  **Note:** LDAP Sync will not remove a user from an organization if the user is an owner of that organization. Another organization owner will need to manually remove the user instead.

  {% endnote %}
- If LDAP member entries have been added to the LDAP group, add the corresponding users to the team. If the user regains access to any repositories as a result, restore any private forks of the repositories that were deleted because the user lost access in the past 90 days.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Security Warning:**

When LDAP Sync is enabled, site admins and organization owners can search the LDAP directory for groups to map the team to.

This has the potential to disclose sensitive organizational information to contractors or other unprivileged users, including:

- The existence of specific LDAP Groups visible to the *Domain search user*.
- Members of the LDAP group who have {% data variables.product.prodname_ghe_server %} user accounts, which is disclosed when creating a team synced with that LDAP group.

If disclosing such information is not desired, your company or organization should restrict the permissions of the configured *Domain search user* in the admin console. If such restriction isn't possible, contact {% data variables.contact.contact_ent_support %}.

{% endwarning %}

### Supported LDAP group object classes

{% data variables.product.prodname_ghe_server %} supports these LDAP group object classes. Groups can be nested.

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## Viewing and creating LDAP users

You can view the full list of LDAP users who have access to your instance and provision new users.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
1. In the left sidebar, click **LDAP users**.
1. To search for a user, type a full or partial username and click **Search**. Existing users will be displayed in search results. If a user doesn’t exist, click **Create** to provision the new user account.

## Updating LDAP accounts

Unless [LDAP Sync is enabled](#enabling-ldap-sync), changes to LDAP accounts are not automatically synchronized with {% data variables.product.prodname_ghe_server %}.

* To use a new LDAP admin group, users must be manually promoted and demoted on {% data variables.product.prodname_ghe_server %} to reflect changes in LDAP.
* To add or remove LDAP accounts in LDAP admin groups, [promote or demote the accounts on {% data variables.product.prodname_ghe_server %}](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator).
* To remove LDAP accounts, [suspend the {% data variables.product.prodname_ghe_server %} accounts](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users).

### Manually syncing LDAP accounts

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "LDAP," click **Sync now** to manually update the account with data from your LDAP server.

You can also [use the API to trigger a manual sync](/rest/enterprise-admin#ldap).

## Revoking access to {% data variables.location.product_location %}

If [LDAP Sync is enabled](#enabling-ldap-sync), removing a user's LDAP credentials will suspend their account after the next synchronization run.

If LDAP Sync is **not** enabled, you must manually suspend the {% data variables.product.prodname_ghe_server %} account after you remove the LDAP credentials. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)".
