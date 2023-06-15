---
title: Unlinking your email address from a locked account
intro: 'You can remove the connection between your email address and a locked account. The email address is then available for you to link it to a new or existing account, maintaining your commit history.'
redirect_from:
  - /early-access/account-and-profile/unlinking-your-email-address-from-a-locked-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - 2FA
shortTitle: Unlink your email
---

{% note %}

**Notes:**

- Following these steps will not provide access to the locked account, but instead unlink the associated email address so it may be used for a different account. If you cannot regain access to the locked account, these steps will permanently break the link between the account and the linked email address. Before continuing with this article, be sure you have lost all access to your account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)."

- If you recover access to your locked account, you can re-link an unlinked email address. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

{% endnote %}

## About unlinking your email address

Since an email address can only be associated with a single {% data variables.product.prodname_dotcom %} account, unlinking your email address from a locked account allows you to link that email address to a new or existing account. Additionally, linking a previously used commit email address to a new account will connect your commit history to that account. Unless you have chosen to keep your email address private, your account's commit email address is the same as your account's primary email address. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)." Be aware that nothing else associated with your locked account, including your repositories, permissions, and profile, will transfer to your new account.

{% note %}

**Note:** Backup email addresses are not associated with your commits. Unlinking a backup email address and linking the email address to a different account will not connect your commit history to that account.

{% endnote %}

## Unlinking your email address

1. Navigate to [https://github.com/login](https://github.com/login).
1. To prompt two-factor authentication, type your username and password, then click **Sign in**.
1. Under "Unable to verify with your security key?", click **Use a recovery code or request a reset**.
{% ifversion 2fa-reconfiguration-inline-update %}
1. Under "Locked out?", click **Recover your account or unlink an email address**.
{% else %}
1. On the "Two-factor recovery" screen, click **Try recovering your account**.
{% endif %}
   In the modal that appears, click **I understand, get started**.
1. To send an email containing a one-time password to each email address associated with your account, click **Send one-time password**.
1. To verify your identity, type the one-time password from your email in the "One-time password" text field, then click **Verify email address**.
1. To begin unlinking an email address from the locked account, click **Start unlinking email**.
1. On the "Unlink Email" screen, click **Continue**.
1. In the inbox of the email account you want to unlink, open the email with the subject "[{% data variables.product.company_short %}] Unlink this email."
   - Optionally, to unlink multiple email accounts, in the inbox of each account you want to unlink, open the email with the subject "[{% data variables.product.company_short %}] Unlink this email," then complete the following steps.

1. In the email, click **Unlink this email**.

   ![Screenshot of an email from {% data variables.product.prodname_dotcom %} to unlink an email address from a {% data variables.product.prodname_dotcom %} account. A link with the text "Unlink this email" is outlined in orange.](/assets/images/help/2fa/unlink-this-email.png)

1. To finish unlinking your email, on {% data variables.product.prodname_dotcom_the_website %}, click **Unlink**.
1. Optionally, to create a new account and link your newly unlinked email, click **Create a new account**.

   {% note %}

   **Note:** You can also link your unlinked email to an existing {% data variables.product.prodname_dotcom %} account. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

   {% endnote %}

1. Optionally, if you have any form of payment set up on the locked account, contact [{% data variables.contact.github_support %}](https://support.github.com/contact) to cancel future payments. For example, you might have a paid subscription or sponsor developers through {% data variables.product.prodname_sponsors %}. If you are sponsored through {% data variables.product.prodname_sponsors %}, please mention this so that the team can help you migrate your sponsorships.
