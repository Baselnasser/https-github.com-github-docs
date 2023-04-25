You use the following options to specify access settings. Registry settings must contain a `type` and a `url`, and typically either a `username` and `password` combination or a `token`.

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
|:---|:---|
| `type`                     | Identifies the type of registry. See the full list of types below. |
| `url`                      | The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, `https://` is assumed. {% data variables.product.prodname_dependabot %} adds or ignores trailing slashes as required. |
| `username`                 | The username that {% data variables.product.prodname_dependabot %} uses to access the registry. |
| `password`                 | A reference to a {% data variables.product.prodname_dependabot %} secret containing the password for the specified user. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)." |
| `key`                    | A reference to a {% data variables.product.prodname_dependabot %} secret containing an access key for this registry. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)." |
| `token`                    | A reference to a {% data variables.product.prodname_dependabot %} secret containing an access token for this registry. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)." |
| `replaces-base`            | For registries{% ifversion dependabot-private-registries %}, if the boolean value is `true`, {% data variables.product.prodname_dependabot %} will resolve dependencies by using the specified URL rather than the base URL of that specific ecosystem. For example, for registries{% endif %} with `type: python-index`, if the boolean value is `true`, pip resolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default `https://pypi.org/simple`). |

