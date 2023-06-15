---
title: Troubleshooting firewall settings for GitHub Copilot
intro: Troubleshooting help for firewall-related errors.
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Troubleshooting
  - Networking
versions:
  feature: copilot
shortTitle: Firewall settings
---

If you or your organization employs security measures like a firewall or proxy server, it may be beneficial to include certain domain URLs in an "allowlist" and open specific ports and protocols. Doing so will enhance your installation and usage of GitHub Copilot for an optimal experience.

## URLs to add to an allowlist

Due to GitHub Copilot's interaction with a remote machine learning model and its update checking functionality, it is recommended to include the following domain URLs in the allowlist, marking them as trusted either in the user interface or within your deployment scripts.

| Domain and/or URL                      | Purpose |
| :------------------------------------- | :--------------------------------- |
| `https://github.com/login/*`             | Authentication |
| `https://api.github.com/user`             | User Management |
| `https://api.github.com/copilot_internal/*` | User Management |
| `https://copilot-telemetry.githubusercontent.com/telemetry` | Telemetry |
| `https://default.exp-tas.com/` | Telemetry |
| `https://copilot-proxy.githubusercontent.com/` | API service for Copilot suggestions |
| `https://origin-tracker.githubusercontent.com` | API service for Copilot suggestions |

Additional domains and URLs may require allowlisting, depending on your organization's security policies and the editors in use. For more information about specific editors, see [Further reading](#further-reading).

## Further reading

- [Network Connections in Visual Studio Code](https://code.visualstudio.com/docs/setup/network)
- [Install and use Visual Studio and Azure Services behind a firewall or proxy server](https://learn.microsoft.com/en-us/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server)
- [AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)
