---
title: Managing releases in a repository
intro: You can create releases to bundle and deliver iterations of a project to users.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
---
## About release management

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases. You can also create, modify, and delete releases by using the Releases API. For more information, see "[Releases](/rest/releases/releases)" in the REST API documentation.

{% ifversion fpt or ghec %}
You can also publish an action from a specific release in {% data variables.product.prodname_marketplace %}. For more information, see "[Publishing an action in the {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace)."

You can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

## Creating a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. Click **Draft a new release**.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}![Releases draft button](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Releases draft button](/assets/images/help/releases/draft_release_button.png){% endif %}
1. Click **Choose a tag**, type a version number for your release, and press **Enter**. Alternatively, select an existing tag.

   ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
1. If you are creating a new tag, click **Create new tag**.

   ![Screenshot of confirming you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.

   
   ![Screenshot of dropdown to choose a branch](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.releases.previous-release-tag %}
1. Type a title and description for your release.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
   If you @mention anyone in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   {% ifversion fpt or ghec or ghes > 3.3 %} Alternatively, you can automatically generate your release notes by clicking {% ifversion previous-release-tag %}**Generate release notes**{% else %}**Auto-generate release notes**{% endif %}.{% endif %}{% ifversion previous-release-tag %}

   ![Screenshot of the releases description](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![Screenshot of the releases description](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.

   ![Animated GIF of Providing a DMG with the Release](/assets/images/help/releases/releases_adding_binary.gif)

1. To notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.

   ![Screenshot of the checkbox to mark a release as prerelease](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion releases-set-latest-release %} 
1. Optionally, you can select **Set as latest release**. If you do not select this option, the latest release label will automatically be assigned based on semantic versioning.

   ![Screenshot of the checkbox to mark a release as the latest release](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- ifversion discussions %}
1. Optionally, if {% data variables.product.prodname_discussions %} are enabled in the repository, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion.

   ![Screenshot of the checkbox to create a release discussion and drop-down menu to choose a category](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.
   ![Publish release and Draft release buttons](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghae > 3.3 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Screenshot of your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
   ![Published release with @mentioned contributors](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
   {% else %}
   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png)
   {% endif %}
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create TAG
   ```

2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.
{% endif %}

{% endcli %}

## Editing a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. On the right side of the page, next to the release you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
  ![Edit a release](/assets/images/help/releases/edit-release-pencil.png)
{% else %}
3. On the right side of the page, next to the release you want to edit, click **Edit release**.
  ![Edit a release](/assets/images/help/releases/edit-release.png)
{% endif %}
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %}
  ![Update a release](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## Deleting a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. On the right side of the page, next to the release you want to delete, click {% octicon "trash" aria-label="The trash icon" %}.
  ![Delete a release](/assets/images/help/releases/delete-release-trash.png)
{% else %}
3. Click the name of the release you wish to delete.
  ![Link to view release](/assets/images/help/releases/release-name-link.png)
4. In the upper-right corner of the page, click **Delete**.
  ![Delete release button](/assets/images/help/releases/delete-release.png)
{% endif %}
5. Click **Delete this release**.
  ![Confirm delete release](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
