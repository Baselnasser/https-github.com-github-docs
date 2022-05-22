---
title: Exporting audit log activity for your enterprise
intro: You can export audit and Git events data to a file for offline analysis.
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
---

## About exports of audit log and Git events data

You can export the audit log by downloading a JSON or CSV file from your enterprise on {% data variables.product.product_name %}. When you export audit log events, you can query by one or more of these supported qualifiers to filter for specific log events to export. For more information about search qualifiers, see "[Search based on the action performed](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)."

You can export Git events data by downloading a JSON file from your enterprise audit log. Unlike audit log data, you cannot query for specific Git events to filter and export in the audit log user interface.

{% data reusables.audit_log.exported-log-keys-and-values %}

As an alternative to exporting log events, you can use the API to retrieve audit log events, or set up {% data variables.product.product_name %} to stream audit data as events are logged. Para obtener más información, consulta las secciones "[Utilizar la API de bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)" y "[Transmitir la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".

## Exporting audit log data

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Optionally, to only export filtered results, search by one or more supported qualifiers or log filters.
2. Select the {% octicon "download" aria-label="The Download icon" %} **Export** dropdown menu, and choose the file format (JSON or CSV) to export log events in.

    ![Botón de exportar](/assets/images/help/organizations/org-audit-log-export.png)

## Exporting Git events data

You can also export Git events data by date range.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Select the {% octicon "download" aria-label="The Download icon" %} **Export Git Events** dropdown menu and choose a date range to export log events for.

    ![Export Git events button](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Click {% octicon "file-zip" aria-label="The File-zip icon" %} **Download Results** to download the file.
1. The data is exported as a compressed JSON file. To extract the JSON data, uncompress the file using an archive utility client or command. Por ejemplo:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
