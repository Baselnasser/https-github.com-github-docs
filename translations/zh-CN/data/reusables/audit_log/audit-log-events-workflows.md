| 操作 | 描述 |
| -- | -- |
|    |    |
{%- ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `workflows.approve_workflow_job` | A workflow job was approved. 更多信息请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。 | `workflows.cancel_workflow_run` | A workflow run was cancelled. 更多信息请参阅“[取消工作流程](/actions/managing-workflow-runs/canceling-a-workflow)。 | `workflows.delete_workflow_run` | A workflow run was deleted. 更多信息请参阅“[删除工作流程运行](/actions/managing-workflow-runs/deleting-a-workflow-run)”。 | `workflows.disable_workflow` | A workflow was disabled. | `workflows.enable_workflow` | A workflow was enabled, after previously being disabled by `disable_workflow`. | `workflows.reject_workflow_job` | A workflow job was rejected. 更多信息请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。 | `workflows.rerun_workflow_run` | A workflow run was re-run. 更多信息请参阅“[重新运行工作流程](/actions/managing-workflow-runs/re-running-a-workflow)。
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `workflows.completed_workflow_run` | A workflow status changed to `completed`. 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history). | `workflows.created_workflow_run` | A workflow run was created. 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[创建示例工作流程](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”。 | `workflows.prepared_workflow_job` | A workflow job was started. 包括提供给作业的机密列表。 只能使用 REST API 查看。 它在 {% data variables.product.prodname_dotcom %} Web 界面中不可见，也不包含在 JSON/CSV 导出中。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。
{%- endif %}
