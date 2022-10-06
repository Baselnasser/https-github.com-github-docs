---
title: Importing data from third-party version control systems
intro: 'Using the git-import suite of tools, you can import from Subversion, Mercurial and Team Foundation Version Control to Git repositories on {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
  - /admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import from another VCS
---
## Importing projects from Mercurial

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Make a raw clone of the project using the command below, specifying the URL of the source project, and a path to a temporary repository:
  ```shell
  $ git-import-hg-raw HG-CLONE-URL/PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rewrite the authors and branches using the CSV file:
  ```shell
  $ git-import-rewrite --flavor hg --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO-NAME.git
  ```
5. If you haven't yet, [create a new empty repository on {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Push the imported repository to {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Importing projects from Subversion

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Make a raw clone of the project using the command below, specifying the URL of the source project, and a path to a temporary repository:
  ```shell
  $ git-import-svn-raw SVN-CLONE-URL /PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rewrite the authors and branches using the CSV file:
  ```shell
  $ git-import-rewrite --flavor svn --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO-NAME.git
  ```
5. If you haven't yet, [create a new empty repository on {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Push the imported repository to {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Importing projects from Team Foundation Version Control

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Make a raw clone of the project using the command below, specifying the URL of the source project, and a path to a temporary repository:
  ```shell
  $ git-import-tfs-raw TEAM-FOUNDATION-CLONE-URL /PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rewrite the authors and branches using the CSV file:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO_NAME.git
  ```
5. If you haven't yet, [create a new empty repository on {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Push the imported repository to {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Further reading

- "[Command-line-utilities](/enterprise/admin/guides/installation/command-line-utilities/#import-and-export)"
