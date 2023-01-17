---
title: Timeline events
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: Use the REST API to receive events triggered by timeline activity in issues and pull requests.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About timeline events

You can use the REST API to view different types of events triggered by timeline activity in issues and pull requests. For more information about the specific events that you can receive, see "[Issue event types](/developers/webhooks-and-events/issue-event-types)." To view GitHub activity outside of issues and pull requests, see "[GitHub Events Types](/developers/webhooks-and-events/github-event-types)."

You can use timeline events to display information about issues and pull requests or determine who should be notified of issue comments.

{% data reusables.pull_requests.issues-pr-shared-api %}
