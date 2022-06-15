---
title: 仓库邀请
allowTitleToDifferFromFilename: true
shortTitle: 邀请
intro: 存储库邀请 API 允许您查看和管理在存储库上进行协作的邀请。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于存储库邀请 API

存储库邀请 API 允许您查看和管理在存储库上进行协作的邀请。 受邀用户（或代表受邀用户的外部服务）可以选择接受或拒绝邀请。

要将用户添加为协作者，请改用协作者 API。 更多信息请参阅“[添加仓库协作者](/rest/collaborators/collaborators#add-a-repository-collaborator)”。

请注意，`repo:invite` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps)授予对邀请的定向访问权限，但**不**授予对仓库代码的访问权限，而 `repo` 作用域同时授予对代码和邀请的权限。
