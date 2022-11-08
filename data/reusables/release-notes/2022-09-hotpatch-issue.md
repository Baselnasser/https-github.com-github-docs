Hotpatch upgrades to GitHub Enterprise Server {% ifversion ghes = 3.4 %}3.4.9{% elsif ghes = 3.5 %}3.5.6{% elsif ghes = 3.6 %}3.6.2{% endif %} may fail. Upgrades with the full `.pkg` are unaffected. If the upgrade fails for your instance, workaround this issue by connecting to the administrative shell (ssh) and running the following non-interactive command:

```
echo "grub-pc grub-pc/install_devices_empty boolean true" | sudo debconf-set-selections
```

If you're unable to upgrade, or if you need further assistance, contact GitHub Support. For more information, see "[Creating a support ticket](/support/contacting-github-support/creating-a-support-ticket)." [Updated: 2022-10-14]
