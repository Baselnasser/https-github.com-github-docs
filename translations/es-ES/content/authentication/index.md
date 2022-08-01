---
title: Autenticación
intro: 'Manten tu cuenta y datos seguros con características como {% ifversion not ghae %}la autenticación bifactoria, {% endif %}SSH{% ifversion not ghae %},{% endif %} y la verificación de firmas de las confirmaciones.'
redirect_from:
  - /categories/56/articles
  - /categories/ssh
  - /mac-verify-ssh
  - /ssh-issues
  - /verify-ssh-redirect
  - /win-verify-ssh
  - /categories/92/articles
  - /categories/gpg
  - /categories/security
  - /categories/authenticating-to-github
  - /github/authenticating-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
introLinks:
  overview: /authentication/keeping-your-account-and-data-secure/about-authentication-to-github
featuredLinks:
  guides:
    - /authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
    - /authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
    - /authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
    - '{% ifversion ghae %}/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials{% endif %}'
  popular:
    - /authentication/troubleshooting-ssh
    - /authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
    - /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
    - '{% ifversion ghae %}/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection{% endif %}'
    - /authentication/authenticating-with-saml-single-sign-on
    - /authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
  guideCards:
    - /authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
    - /authentication/troubleshooting-ssh/error-permission-denied-publickey
    - /authentication/keeping-your-account-and-data-secure/creating-a-strong-password
    - '{% ifversion ghae %}/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials{% endif %}'
    - '{% ifversion ghae %}/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on{% endif %}'
changelog:
  label: '2FA,authentication,security keys,SSH,token authentication'
layout: product-landing
topics:
  - 2FA
  - Identity
  - Access management
  - Usernames
  - Device verification
children:
  - /keeping-your-account-and-data-secure
  - /securing-your-account-with-two-factor-authentication-2fa
  - /authenticating-with-saml-single-sign-on
  - /connecting-to-github-with-ssh
  - /troubleshooting-ssh
  - /managing-commit-signature-verification
  - /troubleshooting-commit-signature-verification
---

