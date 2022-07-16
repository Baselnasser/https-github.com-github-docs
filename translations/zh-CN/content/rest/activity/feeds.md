---
title: 馈送
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于馈送 API

要查看哪些源可供您使用，请使用[获取馈送](#get-feeds)操作。 然后，您可以通过向其中一个馈送 URL 发送请求来获取馈送。

### 获取 Atom 馈送的示例

要获取 Atom 格式的馈送，您必须在 `Accept` 标头中指定 `application/atom+xml` 类型。 例如，要获取 GitHub 安全通告的 Atom 馈送：

    curl -H "Accept: application/atom+xml" https://github.com/security-advisories

#### 响应

```shell
HTTP/2 200
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" 
xmlns:media="http://search.yahoo.com/mrss/" 
xml:lang="en-US">
  <id>tag:github.com,2008:/security-advisories</id>
  <link rel="self" type="application/atom+xml" 
  href="https://github.com/security-advisories.atom"/>
  <title>GitHub Security Advisory Feed</title>
  <author>
    <name>GitHub</name>
  </author>
  <updated>2019-01-14T19:34:52Z</updated>
     <entry>
      <id>tag:github.com,2008:GHSA-abcd-12ab-23cd</id>
      <published>2018-07-26T15:14:52Z</published>
      <updated>2019-01-14T19:34:52Z</updated>
      <title type="html">[GHSA-abcd-12ab-23cd] Moderate 
      severity vulnerability that affects Octoapp</title>
        <category term="NPM"/>
      <content type="html">
        &lt;p&gt;Octoapp node module before 4.17.5 suffers 
        from a Modification of Assumed-Immutable Data (MAID) 
        vulnerability via defaultsDeep, merge, and mergeWith 
        functions, which allows a malicious user to modify 
        the prototype of &quot;Object&quot; via 
        &lt;strong&gt;proto&lt;/strong&gt;, causing the 
        addition or modification of an existing property 
        that will exist on all objects.&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Affected Packages&lt;/strong&gt;&lt;/p&gt;

  &lt;dl&gt;
      &lt;dt&gt;Octoapp&lt;/dt&gt;
      &lt;dd&gt;Ecosystem: npm&lt;/dd&gt;
      &lt;dd&gt;Severity: moderate&lt;/dd&gt;
      &lt;dd&gt;Versions: &amp;lt; 4.17.5&lt;/dd&gt;
        &lt;dd&gt;Fixed in: 4.17.5&lt;/dd&gt;
  &lt;/dl&gt;

          &lt;p&gt;&lt;strong&gt;References&lt;/strong&gt;&lt;/p&gt;

  &lt;ul&gt;
      &lt;li&gt;https://nvd.nist.gov/vuln/detail/CVE-2018-123&lt;/li&gt;
  &lt;/ul&gt;

      </content>
    </entry>
</feed>
```
