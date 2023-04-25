---
title: Creating a custom badge for your GitHub App
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
  - /developers/apps/building-github-apps/creating-a-custom-badge-for-your-github-app
  - /apps/creating-github-apps/creating-github-apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badges
---
By default, a new GitHub App will have an automatically generated [identicon](https://github.com/blog/1586-identicons).
An identicon badge looks something like this:

![An identicon, which consists of white pixels in a random pattern on a circular yellow background.](/assets/images/help/apps/identicon.png)

After you create a GitHub App, you can customize your app's badge by uploading a logo and selecting a background color. A badge is a square logo image inside of a circular badge. You can choose a background color for the badge, which can visually distinguish your app.

Your logo should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend an image size of at least 200px x 200px. {% ifversion fpt or ghec %}See "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app#guidelines-for-logos)" for more guidance on customizing badges.{% endif %}

{% ifversion fpt or ghec %}

You can change a custom badge for a GitHub App that already has an approved Marketplace listing by navigating to https://github.com/marketplace/manage.

{% endif %}

To create a custom badge:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
1. Under "Display information," drag and drop an image from a local folder or click **Upload a logo** to select an image from your computer.
1. Optionally, crop your image. When you're done, click **Set new avatar**.
1. Under "Badge background color," type the [hexadecimal color code](http://www.color-hex.com/) of the background color for your badge.

{% ifversion fpt or ghec %}
   {% note %}

   **Note:** The "Badge background color" input field will only appear after you upload an application logo.

   {% endnote %}
{% endif %}
{% ifversion fpt or ghec %}

## Next steps

For more information about creating a Marketplace listing for this app, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace)".

{% endif %}
