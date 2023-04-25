---
title: Tool switching Liquid tags 
intro: Demonstrates the HTML that becomes of a the different tool Liquid tags like `webui`, `cli`, and `codespaces`
defaultTool: desktop
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
---

## Running a workflow

This page has a tool switcher

{% webui %}

1. this is webui content

{% endwebui %}

{% cli %}

this is cli content

```shell
cli content
```

{% endcli %}

{% desktop %}
  this is desktop content
{% enddesktop %}