---
title: 세분화된 개인용 액세스 토큰에 필요한 권한
intro: '각 {% data variables.product.pat_v2 %}호환 엔드포인트에 필요한 권한을 찾을 수 있습니다.'
versions:
  feature: pat-v2
miniTocMaxHeadingLevel: 3
shortTitle: '{% data variables.product.pat_v2_caps %} permissions'
ms.openlocfilehash: 46a82b0212d4cda2b6883c0b33ba2acb2e50b9d0
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184214'
---
## {% data variables.product.pat_v2 %}에 필요한 권한 정보

{% data variables.product.pat_v2 %}을(를) 만들 때 사용 권한 집합을 부여합니다. 권한은 {% data variables.product.prodname_github_app %}이(가) API를 통해 액세스할 수 있는 리소스를 정의합니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.

## 작업

- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository) (읽기)
- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key) (쓰기)
- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#get-an-artifact) (읽기)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#delete-an-artifact) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (읽기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#get-pending-deployments-for-a-workflow-run) (읽기)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (읽기)
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments) (읽기)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/reference/actions#get-a-job-for-a-workflow-run) (읽기)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (읽기)
- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/reference/actions#re-run-job-for-workflow-run) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run-attempt) (읽기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (읽기)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#get-a-workflow-run) (읽기)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#delete-a-workflow-run) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/reference/actions#get-the-review-history-for-a-workflow-run) (읽기)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/reference/actions#get-a-workflow-run-attempt) (읽기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/reference/actions#download-workflow-run-attempt-logs) (읽기)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/reference/actions#cancel-a-workflow-run) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#download-workflow-run-logs) (읽기)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#delete-workflow-run-logs) (쓰기)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/reference/actions#re-run-a-workflow) (쓰기)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/reference/actions#re-run-workflow-failed-jobs) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/reference/actions#get-workflow-run-usage) (읽기)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/reference/actions#list-workflow-runs) (읽기)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/reference/actions#list-repository-workflows) (읽기)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/reference/actions#get-a-workflow) (읽기)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/reference/actions#disable-a-workflow) (쓰기)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/reference/actions#create-a-workflow-dispatch-event) (쓰기)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/reference/actions#enable-a-workflow) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/reference/actions#get-workflow-usage) (읽기)

## 관리

- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (쓰기)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (쓰기)
- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository) (읽기)
- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository) (쓰기)
- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository) (쓰기)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (쓰기)
- [`POST /orgs/{org}/repos`](/rest/reference/repos#create-an-organization-repository) (쓰기)
- [`PATCH /repos/{owner}/{repo}`](/rest/repos/repos#update-a-repository) (쓰기)
- [`DELETE /repos/{owner}/{repo}`](/rest/reference/repos#delete-a-repository) (쓰기)
- [`POST /repos/{owner}/{repo}/forks`](/rest/reference/repos#create-a-fork) (쓰기)
- [`GET /repos/{owner}/{repo}/teams`](/rest/reference/repos#list-repository-teams) (읽기)
- [`POST /user/repos`](/rest/reference/repos#create-a-repository-for-the-authenticated-user) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-a-repository) (읽기)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#get-workflow-access-level-to-a-repository) (읽기)
- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#set-workflow-access-to-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-a-repository) (읽기)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions-for-a-repository) (읽기)
- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/autolinks`](/v3/repos#list-autolinks) (읽기)
- [`POST /repos/{owner}/{repo}/autolinks`](/v3/repos#create-an-autolink) (쓰기)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#get-autolink) (읽기)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#delete-autolink) (쓰기)
- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes) (쓰기)
- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes) (쓰기)
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator) (쓰기)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator) (쓰기)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations) (읽기)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation) (쓰기)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation) (쓰기)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user) (읽기)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation) (쓰기)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation) (쓰기)
- [`GET /repos/{owner}/{repo}/keys`](/rest/reference/repos#list-deploy-keys) (읽기)
- [`POST /repos/{owner}/{repo}/keys`](/rest/reference/repos#create-a-deploy-key) (쓰기)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#get-a-deploy-key) (읽기)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#delete-a-deploy-key) (쓰기)
- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository) (읽기)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository) (읽기)
- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository) (쓰기)
- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository) (쓰기)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository) (쓰기)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository) (읽기)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository) (쓰기)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#list-tag-protection-state-of-a-repository) (읽기)
- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#create-tag-protection-state-for-a-repository) (쓰기)
- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/reference/repos#delete-tag-protection-state-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository) (읽기)
- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (쓰기)
- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts) (쓰기)
- [`PUT /repos/{owner}/{repo}/topics`](/rest/reference/repos#replace-all-repository-topics) (쓰기)
- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones) (읽기)
- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths) (읽기)
- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources) (읽기)
- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views) (읽기)

## 차단

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user) (읽기)
- [`GET /user/blocks/{username}`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user) (읽기)
- [`PUT /user/blocks/{username}`](/rest/reference/users#block-a-user) (쓰기)
- [`DELETE /user/blocks/{username}`](/rest/reference/users#unblock-a-user) (쓰기)

## 확인

- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (읽기)

## Codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (읽기)
- [`GET /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user) (읽기)
- [`POST /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#create-a-codespace-in-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/reference/codespaces#preview-attributes-for-a-new-codespace) (쓰기)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/reference/codespaces#create-a-codespace-from-a-pull-request) (쓰기)
- [`GET /user/codespaces`](/rest/reference/codespaces#list-codespaces-for-the-authenticated-user) (읽기)
- [`POST /user/codespaces`](/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user) (쓰기)
- [`GET /user/codespaces/{codespace_name}`](/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user) (읽기)
- [`PATCH /user/codespaces/{codespace_name}`](/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user) (쓰기)
- [`DELETE /user/codespaces/{codespace_name}`](/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user) (쓰기)

## Codespaces 수명 주기 관리자

- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user) (쓰기)
- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export) (읽기)
- [`POST /user/codespaces/{codespace_name}/start`](/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user) (쓰기)
- [`POST /user/codespaces/{codespace_name}/stop`](/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user) (쓰기)

## Codespaces 메타데이터

- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user) (읽기)
- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/reference/codespaces#list-available-machine-types-for-a-repository) (읽기)
- [`GET /user/codespaces/{codespace_name}/machines`](/rest/reference/codespaces#list-machine-types-for-a-codespace) (읽기)

## Codespaces 비밀

- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/reference/codespaces#list-repository-secrets) (쓰기)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-repository-secret) (쓰기)
- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (쓰기)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (쓰기)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-a-repository-public-key) (쓰기)

## Codespaces 사용자 비밀

- [`GET /user/codespaces/secrets`](/rest/reference/codespaces#list-secrets-for-the-authenticated-user) (읽기)
- [`GET /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-secret-for-the-authenticated-user) (읽기)
- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user) (쓰기)
- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user) (쓰기)
- [`GET /user/codespaces/secrets/public-key`](/rest/reference/codespaces#get-public-key-for-the-authenticated-user) (읽기)
- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (읽기)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (쓰기)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (쓰기)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (쓰기)

## 콘텐츠

- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/reference/repos#list-codeowners-errors) (읽기)
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/reference/git#create-a-blob) (쓰기)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/reference/git#create-a-commit) (쓰기)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/reference/git#create-a-reference) (쓰기)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/reference/git#create-a-tag-object) (쓰기)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/reference/git#create-a-tree) (쓰기)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#merge-a-pull-request) (쓰기)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment) (쓰기)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-commit-comment-reaction) (쓰기)
- [`GET /repos/{owner}/{repo}/branches`](/rest/branches/branches#list-branches) (읽기)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository) (쓰기)
- [`POST /repos/{owner}/{repo}/merges`](/rest/branches/branches#merge-a-branch) (쓰기)
- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/reference/code-scanning#list-codeql-databases) (읽기)
- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/reference/code-scanning#get-codeql-database) (읽기)
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment) (쓰기)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment) (쓰기)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits) (읽기)
- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics) (읽기)
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (읽기)
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event) (쓰기)
- [`GET /repos/{owner}/{repo}/releases`](/rest/reference/repos#list-releases) (읽기)
- [`POST /repos/{owner}/{repo}/releases`](/rest/reference/repos#create-a-release) (쓰기)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#get-a-release) (읽기)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#update-a-release) (쓰기)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#delete-a-release) (쓰기)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/reference/repos#list-release-assets) (읽기)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#get-a-release-asset) (읽기)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#update-a-release-asset) (쓰기)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#delete-a-release-asset) (쓰기)
- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/reference/repos#generate-release-notes) (쓰기)
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/reference/repos#get-the-latest-release) (읽기)

## Dependabot 비밀

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/reference/dependabot#list-repository-secrets) (읽기)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-a-repository-secret) (읽기)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-a-repository-secret) (쓰기)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-a-repository-secret) (쓰기)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-a-repository-public-key) (읽기)

## 배포

- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (읽기)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#list-deployment-statuses) (읽기)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#create-a-deployment-status) (쓰기)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/reference/repos#get-a-deployment-status) (읽기)
- [`GET /repos/{owner}/{repo}/deployments`](/rest/reference/repos#list-deployments) (읽기)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/reference/repos#create-a-deployment) (쓰기)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#get-a-deployment) (읽기)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#delete-a-deployment) (쓰기)

## 전자 메일

- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) (쓰기)
- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user) (읽기)
- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user) (쓰기)
- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user) (쓰기)
- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user) (읽기)

## 엔터프라이즈 관리

- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise) (쓰기)
- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise) (쓰기)

## 팔로워

- [`GET /user/followers`](/rest/reference/users#list-followers-of-the-authenticated-user) (읽기)
- [`GET /user/following`](/rest/reference/users#list-the-people-the-authenticated-user-follows) (읽기)
- [`GET /user/following/{username}`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user) (읽기)
- [`PUT /user/following/{username}`](/rest/reference/users#follow-a-user) (쓰기)
- [`DELETE /user/following/{username}`](/rest/reference/users#unfollow-a-user) (쓰기)

## Gists

- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (쓰기)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (쓰기)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (쓰기)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (쓰기)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (쓰기)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (쓰기)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (쓰기)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (쓰기)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (쓰기)

## Git 서명 ssh 공개 키

- [`GET /user/ssh_signing_keys`](/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user) (읽기)
- [`POST /user/ssh_signing_keys`](/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user) (쓰기)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user) (읽기)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user) (쓰기)

## Gpg 키

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user) (읽기)
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user) (쓰기)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user) (읽기)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user) (쓰기)

## 상호 작용 제한

- [`GET /user/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories) (읽기)
- [`PUT /user/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories) (쓰기)
- [`DELETE /user/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories) (쓰기)

## 문제

- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (쓰기)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#list-issue-comments) (읽기)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#create-an-issue-comment) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#get-an-issue-comment) (읽기)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#update-an-issue-comment) (쓰기)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#delete-an-issue-comment) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/reference/issues#list-issue-events) (읽기)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/reference/issues#list-issue-events-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/reference/issues#get-an-issue-event) (읽기)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (읽기)
- [`GET /repos/{owner}/{repo}/assignees`](/rest/reference/issues#list-assignees) (읽기)
- [`GET /repos/{owner}/{repo}/issues`](/rest/reference/issues#list-repository-issues) (읽기)
- [`POST /repos/{owner}/{repo}/issues`](/rest/reference/issues#create-an-issue) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#get-an-issue) (읽기)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#update-an-issue) (쓰기)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#lock-an-issue) (쓰기)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#unlock-an-issue) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#list-labels-for-an-issue) (읽기)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#add-labels-to-an-issue) (쓰기)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#set-labels-for-an-issue) (쓰기)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (쓰기)
- [`GET /repos/{owner}/{repo}/labels`](/rest/reference/issues#list-labels-for-a-repository) (읽기)
- [`POST /repos/{owner}/{repo}/labels`](/rest/reference/issues#create-a-label) (쓰기)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (읽기)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/reference/issues#list-milestones) (읽기)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/reference/issues#create-a-milestone) (쓰기)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#get-a-milestone) (읽기)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#update-a-milestone) (쓰기)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#delete-a-milestone) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (읽기)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (쓰기)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-reaction) (쓰기)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (읽기)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (쓰기)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-comment-reaction) (쓰기)

## 구성

- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user) (읽기)
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user) (쓰기)
- [`GET /user/keys/{key_id}`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user) (읽기)
- [`DELETE /user/keys/{key_id}`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user) (쓰기)

## 멤버

{% ifversion ghec %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#link-external-idp-group-team-connection) (쓰기){% endif %} {% ifversion ghec %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#unlink-external-idp-group-team-connection) (쓰기){% endif %} {% ifversion ghec %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/reference/teams#external-idp-group-info-for-an-organization) (쓰기){% endif %} {% ifversion ghec %}- [`GET /orgs/{org}/external-groups`](/rest/reference/teams#list-external-idp-groups-for-an-organization) (쓰기){% endif %}
- [`GET /orgs/{org}/failed_invitations`](/rest/reference/orgs#list-failed-organization-invitations) (읽기)
- [`GET /orgs/{org}/invitations`](/rest/reference/orgs#list-pending-organization-invitations) (읽기)
- [`POST /orgs/{org}/invitations`](/rest/reference/orgs#create-an-organization-invitation) (쓰기)
- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/reference/orgs#cancel-an-organization-invitation) (쓰기)
- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/reference/orgs#list-organization-invitation-teams) (읽기)
- [`GET /orgs/{org}/members`](/rest/reference/orgs#list-organization-members) (읽기)
- [`GET /orgs/{org}/members/{username}`](/rest/reference/orgs#check-organization-membership-for-a-user) (읽기)
- [`DELETE /orgs/{org}/members/{username}`](/rest/reference/orgs#remove-an-organization-member) (쓰기)
- [`GET /orgs/{org}/memberships/{username}`](/rest/reference/orgs#get-organization-membership-for-a-user) (읽기)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/reference/orgs#set-organization-membership-for-a-user) (쓰기)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/reference/orgs#remove-organization-membership-for-a-user) (쓰기)
- [`GET /orgs/{org}/public_members`](/rest/reference/orgs#list-public-organization-members) (읽기)
- [`GET /orgs/{org}/public_members/{username}`](/rest/reference/orgs#check-public-organization-membership-for-a-user) (읽기)
- [`PUT /orgs/{org}/public_members/{username}`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user) (쓰기)
- [`DELETE /orgs/{org}/public_members/{username}`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user) (쓰기)
- [`GET /orgs/{org}/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization) (읽기)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator) (쓰기)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/projects`](/rest/reference/teams#list-team-projects) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#check-team-permissions-for-a-project) (읽기)
- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (읽기)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}/repos`](/rest/reference/teams#list-team-repositories) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (읽기)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (읽기)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (읽기)
- [`PATCH /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#update-a-team) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#delete-a-team) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/invitations`](/rest/reference/teams#list-pending-team-invitations) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}/members`](/rest/reference/teams#list-team-members) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#get-team-membership-for-a-user) (읽기)
- [`PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#add-or-update-team-membership-for-a-user) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#remove-team-membership-for-a-user) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/teams`](/rest/reference/teams#list-child-teams) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#get-a-team-by-name) (읽기)
- [`GET /orgs/{org}/teams`](/rest/reference/teams#list-teams) (읽기)
- [`POST /orgs/{org}/teams`](/rest/reference/teams#create-a-team) (쓰기)
- [`GET /user/memberships/orgs/{org}`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user) (읽기)
- [`PATCH /user/memberships/orgs/{org}`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user) (쓰기)

## 메타데이터

- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (읽기)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (읽기)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (읽기)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (읽기)
- [`GET /repos/{owner}/{repo}/events`](/rest/reference/activity#list-repository-events) (읽기)
- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (읽기)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#get-a-gist-comment) (읽기)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (읽기)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (읽기)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (읽기)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (읽기)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (읽기)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (읽기)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (읽기)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (읽기)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (읽기)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (읽기)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (읽기)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment) (읽기)
- [`GET /orgs/{org}/repos`](/rest/reference/repos#list-organization-repositories) (읽기)
- [`GET /repositories`](/rest/reference/repos#list-public-repositories) (읽기)
- [`GET /repos/{owner}/{repo}`](/rest/reference/repos#get-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/reference/repos#list-repository-contributors) (읽기)
- [`GET /repos/{owner}/{repo}/forks`](/rest/reference/repos#list-forks) (읽기)
- [`GET /repos/{owner}/{repo}/languages`](/rest/reference/repos#list-repository-languages) (읽기)
- [`GET /repos/{owner}/{repo}/tags`](/rest/reference/repos#list-repository-tags) (읽기)
- [`GET /users/{username}/repos`](/rest/reference/repos#list-repositories-for-a-user) (읽기)
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user) (읽기)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/reference/activity#list-stargazers) (읽기)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/reference/activity#list-watchers) (읽기)
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators) (읽기)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator) (읽기)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user) (읽기)
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment) (읽기)
- [`GET /repos/{owner}/{repo}/license`](/rest/reference/licenses/#get-the-license-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity) (읽기)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity) (읽기)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity) (읽기)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count) (읽기)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day) (읽기)
- [`GET /search/labels`](/rest/reference/search#search-labels) (읽기)
- [`GET /repos/{owner}/{repo}/topics`](/rest/reference/repos#get-all-repository-topics) (읽기)

## 조직 관리

{% ifversion ghec %}- [`GET /orgs/{org}/audit-log`](/rest/reference/orgs#get-audit-log) (읽기){% endif %}
- [`GET /orgs/{org}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-an-organization) (읽기)
- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) (읽기)
- [`GET /orgs/{org}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-an-organization) (읽기)
- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-an-organization) (읽기)
- [`GET /enterprise-installation/{enterprise_or_org}/server-statistics`](/rest/reference/enterprise-admin#get-github-enterprise-server-statistics) (읽기)
- [`GET /orgs/{org}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization) (읽기)
- [`PUT /orgs/{org}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) (쓰기)
- [`DELETE /orgs/{org}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-organization) (읽기)
- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization) (읽기)
- [`GET /orgs/{org}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-an-organization) (읽기)
- [`PUT /orgs/{org}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization) (읽기)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-an-organization) (읽기)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions) (읽기)
- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions) (쓰기)
- [`GET /orgs/{org}/security-managers`](/rest/reference/orgs#list-security-manager-teams) (읽기)
- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#add-a-security-manager-team) (쓰기)
- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#remove-a-security-manager-team) (쓰기)
- [`PATCH /orgs/{org}`](/rest/reference/orgs#update-an-organization) (쓰기)
- [`GET /orgs/{org}/installations`](/rest/reference/orgs#list-app-installations-for-an-organization) (읽기)

## 조직 codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (읽기)

## 조직 codespaces 비밀

- [`GET /orgs/{org}/codespaces/secrets`](/rest/reference/codespaces#list-organization-secrets) (읽기)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-an-organization-secret) (읽기)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-an-organization-secret) (쓰기)
- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-an-organization-secret) (쓰기)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret) (읽기)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) (쓰기)
- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-an-organization-public-key) (읽기)

## 조직 codespaces 설정

- [`PUT /orgs/{org}/codespaces/billing`](/rest/reference/codespaces#set-codespaces-billing) (쓰기)

## 조직 사용자 지정 역할

- [`GET /organizations/{organization_id}/custom_roles`](/rest/reference/orgs#list-custom-repository-roles-in-an-organization) (읽기)
- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs/#get-a-custom-role) (읽기)
- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#update-a-custom-role) (쓰기)
- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#delete-a-custom-role) (쓰기)
- [`GET /orgs/{org}/fine_grained_permissions`](/rest/reference/orgs#list-fine-grained-permissions-for-an-organization) (읽기)

## 조직 dependabot 비밀

- [`GET /orgs/{org}/dependabot/secrets`](/rest/reference/dependabot#list-organization-secrets) (읽기)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-an-organization-secret) (읽기)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-an-organization-secret) (쓰기)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-an-organization-secret) (쓰기)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret) (읽기)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) (쓰기)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-an-organization-public-key) (읽기)

## 조직 이벤트

- [`GET /users/{username}/events/orgs/{org}`](/rest/reference/activity#list-organization-events-for-the-authenticated-user) (읽기)

## 조직 후크

- [`GET /orgs/{org}/hooks`](/rest/reference/orgs#list-organization-webhooks) (읽기)
- [`POST /orgs/{org}/hooks`](/rest/reference/orgs#create-an-organization-webhook) (쓰기)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#get-an-organization-webhook) (읽기)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#update-an-organization-webhook) (쓰기)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#delete-an-organization-webhook) (쓰기)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization) (읽기)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization) (쓰기)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/reference/orgs#list-deliveries-for-an-organization-webhook) (읽기)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook) (읽기)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook) (쓰기)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/reference/orgs#ping-an-organization-webhook) (쓰기)

## 조직 비밀

- [`GET /orgs/{org}/actions/secrets`](/rest/reference/actions#list-organization-secrets) (읽기)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#get-an-organization-secret) (읽기)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-an-organization-secret) (쓰기)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-an-organization-secret) (쓰기)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret) (읽기)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret) (쓰기)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key) (읽기)

## 조직 자체 호스팅 실행기

- [`GET /orgs/{org}/actions/runner-groups`](/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization) (읽기)
- [`POST /orgs/{org}/actions/runner-groups`](/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization) (읽기)
- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) (쓰기)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization) (읽기)
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization) (읽기)
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) (쓰기)
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization) (쓰기)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization) (읽기)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization) (읽기)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization) (읽기)
- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization) (쓰기)
- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization) (쓰기)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization) (쓰기)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization) (쓰기)
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization) (읽기)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization) (쓰기)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization) (쓰기)

## 조직 사용자 차단

- [`GET /orgs/{org}/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization) (읽기)
- [`GET /orgs/{org}/blocks/{username}`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization) (읽기)
- [`PUT /orgs/{org}/blocks/{username}`](/rest/reference/orgs#block-a-user-from-an-organization) (쓰기)
- [`DELETE /orgs/{org}/blocks/{username}`](/rest/reference/orgs#unblock-a-user-from-an-organization) (쓰기)

## 페이지

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site) (읽기)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (쓰기)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds) (읽기)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build) (쓰기)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build) (읽기)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build) (읽기)
- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment) (쓰기)
- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (쓰기)

## 계획

- [`GET /users/{username}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-a-user) (읽기)
- [`GET /users/{username}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-a-user) (읽기)
- [`GET /users/{username}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-a-user) (읽기)

## 프로필

- [`PATCH /user`](/rest/reference/users/#update-the-authenticated-user) (쓰기)

## 끌어오기 요청

- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request) (읽기)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request) (읽기)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request) (쓰기)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request) (쓰기)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request) (쓰기)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request) (읽기)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request) (쓰기)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request) (읽기)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#get-a-review-for-a-pull-request) (읽기)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#update-a-review-for-a-pull-request) (쓰기)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review) (읽기)
- [`GET /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#list-pull-requests) (읽기)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#create-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) (읽기)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls/#update-a-pull-request) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/reference/pulls#list-commits-on-a-pull-request) (읽기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/reference/pulls#list-pull-requests-files) (읽기)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged) (읽기)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/reference/pulls#update-a-pull-request-branch) (쓰기)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment) (읽기)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment) (쓰기)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (쓰기)
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (읽기)

## 리포지토리 후크

- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks) (읽기)
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook) (쓰기)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook) (읽기)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook) (쓰기)
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook) (쓰기)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository) (읽기)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook) (읽기)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook) (읽기)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook) (쓰기)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook) (읽기)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook) (읽기)

## 코드 검사 경고

- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization) (읽기)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) (읽기)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#update-a-secret-scanning-alert) (쓰기)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert) (읽기)

## 비밀

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/reference/actions#list-repository-secrets) (읽기)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#get-a-repository-secret) (읽기)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-a-repository-secret) (쓰기)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-a-repository-secret) (쓰기)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (읽기)

## 보안 이벤트

- [`GET /orgs/{org}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-by-organization) (읽기)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#get-a-code-scanning-alert) (읽기)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#update-a-code-scanning-alert) (쓰기)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert) (읽기)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository) (읽기)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (쓰기)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository) (읽기)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/reference/code-scanning#upload-a-sarif-file) (쓰기)
- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/reference/dependabot#list-dependabot-alerts-for-a-repository) (읽기)
- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#get-a-dependabot-alert) (읽기)
- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#update-a-dependabot-alert) (쓰기)

## 별 지정

- [`GET /users/{username}/starred`](/rest/reference/activity#list-repositories-starred-by-a-user) (읽기)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-the-authenticated-user) (읽기)
- [`GET /user/starred/{owner}/{repo}`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (읽기)
- [`PUT /user/starred/{owner}/{repo}`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (쓰기)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (쓰기)

## 상태

- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status) (쓰기)

## 팀 토론

- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) (읽기)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion) (읽기)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-reaction) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#list-discussions) (읽기)
- [`POST /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#create-a-discussion) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#get-a-discussion) (읽기)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#update-a-discussion) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#delete-a-discussion) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#list-discussion-comments) (읽기)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#create-a-discussion-comment) (쓰기)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#get-a-discussion-comment) (읽기)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#update-a-discussion-comment) (쓰기)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#delete-a-discussion-comment) (쓰기)

## 취약성 경고

- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization) (읽기)

## 감시

- [`GET /users/{username}/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user) (읽기)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-the-authenticated-user) (읽기)
