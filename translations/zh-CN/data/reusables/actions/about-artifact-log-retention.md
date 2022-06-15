默认情况下，工作流程生成的构件和日志文件将保留 90 天，然后自动删除。

{%- ifversion fpt or ghec %}
您可以根据仓库类型调整保留期：

- 对于公共仓库：您可以将此保留期更改为 1 至 90 天。
- 对于私有{% ifversion ghec %} 和内部{% endif %} 存储库：您可以将此保留期更改为 1 天或 400 天之间的任何保留期。
{%- else %}
You can change this retention period to anywhere between 1 day or 400 days.
{%- endif %}

自定义保留期时，它仅适用于新构件和日志文件，并且不追溯性地应用于现有对象。 对于托管的仓库和组织，最长保留期不能超过管理组织或企业设置的限制。
