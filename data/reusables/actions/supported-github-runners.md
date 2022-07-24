<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Virtual environment</b></th>
    <th style="width:25%"><b>YAML workflow label</b></th>
    <th style="width:40%"><b>Notes</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> or <code>windows-2022</code>
</td>
<td>
The <code>windows-latest</code> label currently uses the Windows Server 2022 runner image.
</td>
</tr>
<tr>
<td>
Windows Server 2019
</td>
<td>
<code>windows-2019</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 22.04
</td>
<td>
<code>ubuntu-22.04</code>
</td>
<td>
Ubuntu 22.04 is currently in public beta.
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> or <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
macOS Monterey 12
</td>
<td>
<code>macos-12</code>
  </td>
</tr>
<tr>
<td>
macOS Big Sur 11
</td>
<td>
<code>macos-latest</code> or <code>macos-11</code>
</td>
<td>
The <code>macos-latest</code> label currently uses the macOS 11 runner image.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[deprecated]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Migrate to <code>macOS-11</code> or <code>macOS-12</code>. For more information, see <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">this GitHub blog post</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Note:** The `-latest` virtual environments are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

<b>Note:</b> Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support. 

{% endwarning %}
