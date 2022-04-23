---
title: Username considerations for external authentication
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}When you use {% ifversion ghes %}CAS, LDAP, or SAML for authentication{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} follows certain rules to determine the username for each user account {% ifversion ghec or ghae %}in your enterprise{% elsif ghes %}on your instance{% endif %}.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About usernames with external authentication

{% ifversion ghes %}

You can configure external authentication for {% data variables.product.product_name %} using CAS, LDAP, or SAML. For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)."

When you use external authentication, {% data variables.product.product_location %} automatically creates a username for each person when the person signs into {% data variables.product.product_location %} through your external authentication system for the first time.

{% elsif ghec %}

If you use an enterprise with {% data variables.product.prodname_emus %}, members of your enterprise authenticate to access {% data variables.product.prodname_dotcom %} through your SAML identity provider (IdP). For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)."

{% data variables.product.product_name %} automatically creates a username for each person when the person signs in through your IdP for the first time.

{% elsif ghae %}

{% data variables.product.product_name %} uses SAML SSO for authentication, and automatically creates a username for each person when the person signs in through your identity provider (IdP) for the first time.

{% endif %}

## About username normalization

Usernames for user accounts on {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} can only contain alphanumeric characters and dashes (`-`).

{% ifversion ghec or ghes %}When you configure {% ifversion ghes %}CAS, LDAP, or {% endif %}SAML authentication, {% endif %}{% data variables.product.product_name %} uses an identifier from the user account on your {% ifversion ghes %}external authentication provider{% elsif ghec or ghae %}IdP{% endif %} to determine the username for the corresponding user account on {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %}. If the identifier for the account on your provider includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.

1. {% data variables.product.product_name %} will normalize any non-alphanumeric character in your account's username into a dash. For example, a username of `mona.the.octocat` will be normalized to `mona-the-octocat`. 请注意，标准化的用户名也不能以短划线开头或结尾。 它们还不能包含两个连续的短划线。

1. 创建自电子邮件地址的用户名使用前置 `@` 字符的标准化字符创建。

1. If multiple accounts are normalized into the same {% data variables.product.product_name %} username, only the first user account is created. 使用相同用户名的后续用户无法登录。

### Examples of username normalization

| Identifier on provider  | Normalized username for {% data variables.product.product_location %} | 结果                            |
|:----------------------- |:--------------------------------------------------------------------- |:----------------------------- |
| The.Octocat             | `the-octocat`                                                         | 此用户名已成功创建。                    |
| !The.Octocat            | `-the-octocat`                                                        | 此用户名无法创建，因其以短划线开头。            |
| The.Octocat!            | `the-octocat-`                                                        | 此用户名无法创建，因其以短划线结尾。            |
| The!!Octocat            | `the--octocat`                                                        | 此用户名无法创建，因其包含两个连续的短划线。        |
| The!Octocat             | `the-octocat`                                                         | 此用户名无法创建。 虽然标准化的用户名有效，但它已经存在。 |
| The.Octocat@example.com | `the-octocat`                                                         | 此用户名无法创建。 虽然标准化的用户名有效，但它已经存在。 |

### About username normalization with SAML

{% ifversion ghec or ghes %}If you {% ifversion ghec %}use an enterprise with {% data variables.product.prodname_emus %}, you must use SAML authentication. {% else %}configure SAML authentication for {% data variables.product.product_location %}, {% endif %}{% endif %}{% data variables.product.product_name %} determines each person's username by one of the following assertions in the SAML response, ordered by priority.

1. The custom `username` attribute, if defined and present
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` 断言（如果存在）
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` 断言（如果存在）
1. `NameID` 元素

{% data variables.product.product_name %} requires the `NameID` element even if other attributes are present. For more information, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)."

{% data variables.product.product_name %} creates a mapping between the `NameID` from the IdP and the username {% ifversion ghec or ghae %}in{% elsif ghes %}on{% endif %} {% data variables.product.product_location %}, so the `NameID` should be persistent, unique, and not subject to change for the lifecycle of the user.

{% ifversion ghes %}
{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the person will see an error message when {% ifversion ghec %}authenticating through your IdP to access your resources on{% else %}signing into{% endif} {% data variables.product.product_location %}. To restore the person's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)."

{% endnote %}
{% endif %}
