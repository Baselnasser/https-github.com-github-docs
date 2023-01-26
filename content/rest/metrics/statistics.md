---
title: Repository statistics
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: 'Use the REST API to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About repository statistics

You can use the REST API to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.

### Best practices for caching

Computing repository statistics is an expensive operation, so we try to return cached
data whenever possible.  If the data hasn't been cached when you query a repository's
statistics, you'll receive a `202` response; a background job is also fired to
start compiling these statistics. You should allow the job a short time to complete, and
then submit the request again. If the job has completed, that request will receive a
`200` response with the statistics in the response body.

Repository statistics are cached by the SHA of the repository's default branch; pushing to the default branch resets the statistics cache.

### Statistics exclude some types of commits

The statistics exposed by the API match the statistics shown by [different repository graphs](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

To summarize this:
- All statistics exclude merge commits.
- Contributor statistics also exclude empty commits.
