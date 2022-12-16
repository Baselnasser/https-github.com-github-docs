---
title: GitHub 앱을 만들기 위한 개발 환경 설정
intro: '새 {% data variables.product.prodname_github_apps %}를 확장하고 빌드하기 위한 기초를 알아봅니다.'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 77cf8ca936bc6bf4b39e882c9bb2126714117d42
ms.sourcegitcommit: be0ccdb85c412a3bf2f328b62157835f927948d6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012170'
---
## 소개

이 가이드에서는 GitHub 앱을 구성하고 서버에서 실행하는 데 필요한 단계를 안내합니다. GitHub 앱에는 웹후크 이벤트를 관리하고 GitHub 앱 등록을 코드에 연결하기 위한 몇 가지 설정 단계가 필요합니다. 이 가이드의 앱은 새 GitHub 앱을 확장하고 빌드하는 데 사용할 수 있는 기초 역할을 합니다.

이 가이드의 끝부분에서는 GitHub 앱을 등록하고, 웹후크 이벤트를 수신하도록 웹 서버를 설정합니다. Smee라는 도구를 사용하여 웹후크 페이로드를 캡처하고 로컬 개발 환경으로 전달하는 방법을 알아봅니다. 이 섹션에서 구성할 템플릿 앱은 아직 특별한 작업을 수행하지 않지만 API를 사용하여 앱 코드 작성을 시작하거나 다른 [빠른 시작 가이드](/apps/quickstart-guides/)를 완료하는 데 사용할 수 있는 프레임워크 역할을 합니다. {% ifversion fpt or ghec %}[GitHub 마켓플레이스](https://github.com/marketplace) 및 [GitHub 사용](https://github.com/works-with)에서 성공적인 예제를 확인할 수 있습니다.{% endif %}

이 프로젝트를 완료한 후에는 GitHub 앱 및 설치로 인증하는 방법과 해당 인증 방법이 서로 어떻게 다른지 이해할 수 있습니다.

템플릿 GitHub 앱을 구성하기 위해 수행할 단계는 다음과 같습니다.

1. [새 Smee 채널 시작](#step-1-start-a-new-smee-channel)
1. [새 GitHub 앱 등록](#step-2-register-a-new-github-app)
1. [프라이빗 키 및 앱 ID 저장](#step-3-save-your-private-key-and-app-id)
1. [런타임 환경 준비](#step-4-prepare-the-runtime-environment)
1. [GitHub 앱 템플릿 코드 검토](#step-5-review-the-github-app-template-code)
1. [서버 시작](#step-6-start-the-server)
1. [계정에 앱 설치](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## 필수 조건

다음 사항을 기본적으로 이해하는 것이 좋습니다.

* [GitHub 앱](/apps/about-apps)
* [Webhook](/webhooks)
* [Ruby 프로그래밍 언어](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

자신의 경험 수준에 맞춰 따라갈 수 있으며 설정에 필요한 정보를 제공해 드립니다.

시작하기 전에 이 빠른 시작에서 사용된 템플릿 코드를 사용하여 리포지토리를 복제해야 합니다. 터미널 앱을 열고 코드를 저장할 디렉터리를 찾습니다. [GitHub 앱 템플릿](https://github.com/github-developer/github-app-template) 리포지토리를 복제하려면 다음 명령을 실행합니다.

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## 1단계. 새 Smee 채널 시작

웹후크를 인터넷에 노출하지 않고 GitHub 로컬 컴퓨터에 보낼 수 있도록 Smee라는 도구를 사용할 수 있습니다. 먼저 https://smee.io 로 이동하여 **Start a new channel**(새 채널 시작)을 클릭합니다. [`ngrok`](https://dashboard.ngrok.com/get-started) 또는 [`localtunnel`](https://localtunnel.github.io/www/)과 같이 로컬 컴퓨터를 인터넷에 노출하는 다른 도구에 이미 익숙하다면 이를 자유롭게 사용하면 됩니다.

![Smee 새 채널 단추](/assets/images/smee-new-channel.png)

새 Smee 채널을 시작하면 GitHub에서 웹후크 페이로드를 보낼 수 있는 고유 도메인이 만들어집니다. 다음 단계를 위해 이 도메인을 알고 있어야 합니다. 다음은 `https://smee.io/qrfeVRbFbffd6vD`의 고유 도메인의 예입니다.

![Smee 고유 채널](/assets/images/smee-unique-domain.png)

다음으로 터미널로 돌아가서 다음 단계에 따라 Smee CLI(명령줄 인터페이스) 클라이언트를 실행합니다.

{% note %}

**참고:** 다음 단계는 Smee 채널 페이지에 표시되는 “CLI 사용” 지침과 약간 다릅니다. “Node.js 클라이언트 사용” 또는 “Probot의 기본 제공 지원 사용” 지침을 따를 필요가 **없습니다**.

{% endnote %}

1. 클라이언트를 설치합니다.

    ```shell
    $ npm install --global smee-client
    ```

2. 클라이언트를 실행합니다(`https://smee.io/qrfeVRbFbffd6vD`를 사용자 고유의 도메인으로 대체).

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    다음과 유사한 출력이 표시됩니다.

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

`smee --url <unique_channel>` 명령은 Smee 채널에서 받은 모든 웹후크 이벤트를 컴퓨터에서 실행되는 Smee 클라이언트로 전달하도록 Smee에 지시합니다. `--path /event_handler` 옵션은 이벤트를 `/event_handler` 경로로 전달하며, 이에 대해서는 [이후 섹션](#step-5-review-the-github-app-template-code)에서 설명합니다. `--port 3000` 옵션은 서버가 수신 대기할 포트인 포트 3000을 지정합니다. Smee를 사용하면 컴퓨터가 공용 인터넷에 열려 있지 않아도 GitHub 웹후크를 받을 수 있습니다. 브라우저에서 해당 Smee URL을 열어 들어오는 웹후크 페이로드를 검사할 수도 있습니다.

이 가이드의 나머지 단계를 완료하는 동안 이 터미널 창을 열어 두고 Smee를 연결 상태로 유지하는 것이 좋습니다. `ngrok`와 달리 고유 도메인을 잃지 않고도 Smee 클라이언트의 연결을 끊고 다시 연결할 수 있지만, 다른 터미널 창에서 연결된 상태로 두고 다른 명령줄 작업을 수행하는 것이 더 쉬울 수 있습니다.

## 2단계. 새 GitHub 앱 등록

아직 GitHub 계정이 없는 경우 지금이 [가입하기에 좋은 시기](https://github.com/join)입니다. 계속하기 전에 메일을 확인하는 것을 잊지 마세요. 새 앱을 등록하려면 GitHub 프로필의 [앱 설정 페이지](https://github.com/settings/apps)를 방문하여 **New GitHub App**(새 GitHub 앱)을 클릭합니다.

![**새 앱**을 보여 주는 GitHub 웹 사이트](/assets/images/new-app.png)

앱에 대한 세부 정보를 입력할 수 있는 양식이 표시됩니다. 이 페이지의 필드에 대한 일반적인 정보는 “[GitHub 앱 만들기](/apps/building-github-apps/creating-a-github-app/)”를 참조하세요. 이 가이드의 목적을 위해 몇 가지 필드에 특정 데이터를 입력해야 합니다.

{% note %}

**참고:** 나중에 호스트된 서버를 가리키도록 설정을 언제든지 업데이트할 수 있습니다.

{% endnote %}

* “홈페이지 URL”의 경우 Smee에서 발급한 도메인을 사용합니다. 예를 들면 다음과 같습니다.

    ![홈페이지 URL에 Smee 도메인이 채워진 양식](/assets/images/homepage-url.png)

* “웹후크 URL”의 경우 Smee에서 발급한 도메인을 다시 사용합니다. 예를 들면 다음과 같습니다.

    ![웹후크 URL에 Smee 도메인이 채워진 양식](/assets/images/webhook-url.png)

* “웹후크 비밀”의 경우 암호를 만들어 웹후크 엔드포인트를 보호합니다. 이는 사용자(그리고 이 양식을 통해 GitHub)만 알고 있는 것이어야 합니다. 비밀은 공용 인터넷에서 페이로드를 수신하고 이 비밀을 사용하여 웹후크 발신자를 확인하므로 중요합니다. GitHub 앱 설정에 따르면 대부분의 경우 웹후크 비밀은 선택 사항이지만 템플릿 앱 코드가 작동하려면 웹후크 비밀을 설정해야 합니다.

    ![웹후크 비밀이 채워진 양식](/assets/images/webhook-secret.png)

* 사용 권한 및 웹후크 페이지에서 앱이 액세스할 수 있는 데이터의 양을 결정하는, 앱에 대한 권한 집합을 지정할 수 있습니다. “Repository permissions”(리포지토리 권한) 섹션에서 “Metadata”(메타데이터)로 스크롤하여 `Access: Read-only`를 선택합니다. 이 템플릿 앱을 확장하려면 나중에 권한을 업데이트하면 됩니다.

* 사용 권한 및 웹후크 페이지의 맨 아래에서 프라이빗 앱인지 아니면 퍼블릭 앱인지 지정합니다. 이는 설치할 수 있는 사람을 의미합니다(자신만 또는 누구나). 지금은 **Only on this account**(이 계정에서만)를 선택하여 앱을 비공개로 둡니다.

    ![GitHub 앱 개인정보 보호](/assets/images/create_app.png)

**Create GitHub App**(GitHub 앱 만들기)을 클릭하여 앱을 만듭니다.

## 3단계: 프라이빗 키 및 앱 ID 저장

앱을 만든 후에는 [앱 설정 페이지](https://github.com/settings/apps)로 돌아갑니다. 다음 두 가지 작업을 더 수행할 수 있습니다.

* **앱에 대한 프라이빗 키를 생성합니다.** 이는 나중에 앱을 인증하는 데 필요합니다. 페이지 아래로 스크롤하고 **Generate a private key**(프라이빗 키 생성)를 클릭합니다. 다시 찾을 수 있는 디렉터리에 결과 `PEM` 파일을 저장합니다(예: _`app-name`_ - _`date`_ -`private-key.pem`).

    ![프라이빗 키 생성 대화 상자](/assets/images/private_key.png)

* **GitHub에서 앱에 할당한 앱 ID입니다.** 런타임 환경을 준비하려면 이 ID가 필요합니다.

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## 4단계. 런타임 환경 준비

정보를 안전하게 유지하려면 코드에 직접 배치하지 말고 앱에서 찾을 수 있는 컴퓨터 메모리에 모든 앱 관련 비밀을 배치하는 것이 좋습니다. [dotenv](https://github.com/bkeepers/dotenv)라는 편리한 개발 도구는 `.env` 파일에서 `ENV`로 프로젝트별 환경 변수를 로드합니다. `.env` 파일을 GitHub로 체크인해서는 안 됩니다. 공용 인터넷에 있어서는 안 되는 중요한 정보를 저장하는 로컬 파일입니다. 이를 방지하기 위해 `.env` 파일이 리포지토리의 [`.gitignore`](/github/getting-started-with-github/ignoring-files/) 파일에 이미 포함되어 있습니다.

[사전 요구 사항 섹션](#prerequisites)에서 다운로드한 템플릿 코드에는 이미 `.env-example`이라는 예제 파일이 있습니다. 예제 파일의 이름을 `.env-example`에서 `.env`로 바꾸거나 `.env`라고 하는 `.env-example` 파일의 복사본을 만듭니다. 아직은 dotenv를 설치하지 않았지만 이 빠른 시작에 안내된 뒷부분에서 `bundle install`을 실행하여 설치합니다. **참고:** 이 가이드의 단계를 참조하는 빠른 시작에는 `.env-example` 파일에 추가 환경 변수가 포함될 수 있습니다. 추가 환경 변수를 설정하는 지침은 GitHub에서 복제한 프로젝트에 대한 빠른 시작 가이드를 참조하세요.

다음 변수를 `.env` 파일에 추가해야 합니다.

* _`GITHUB_PRIVATE_KEY`_ : [이전에 생성하고 저장한](#step-3-save-your-private-key-and-app-id) 프라이빗 키를 추가합니다. 텍스트 편집기를 사용하여 `.pem` 파일을 열거나 명령줄을 사용하여 다음과 같은 파일 내용을 표시합니다. `cat path/to/your/private-key.pem`. 파일의 전체 내용을 `.env` 파일의 `GITHUB_PRIVATE_KEY` 값으로 복사합니다. **참고:** PEM 파일은 두 줄 이상이므로 아래 예제와 같이 값 주위에 따옴표를 추가해야 합니다.
* _`GITHUB_APP_IDENTIFIER`_ : 이전 섹션에서 기록한 앱 ID를 사용합니다.
* _`GITHUB_WEBHOOK_SECRET`_ : 웹후크 비밀을 추가합니다.

예제 `.env` 파일은 다음과 같습니다.

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## 5단계. GitHub 앱 템플릿 코드 검토

템플릿 앱 코드에는 모든 GitHub 앱에 필요한 일부 코드가 이미 포함되어 있습니다. 이 섹션에서는 GitHub 앱 템플릿에 이미 있는 코드에 대해 설명합니다. 이 섹션에서 완료해야 하는 단계는 없습니다. 템플릿 코드에 이미 익숙한 경우 “[6단계. 서버 시작](#step-6-start-the-server)”으로 건너뛸 수 있습니다.

즐겨찾는 텍스트 편집기에서 `template_server.rb` 파일을 엽니다. 템플릿 코드에 대한 추가 컨텍스트를 제공하는 주석이 이 파일 전체에 표시됩니다. 주석을 주의 깊게 읽고, 새 코드를 작성하면서 직접 메모를 추가하는 것이 좋습니다.

파일 맨 위에 웹 서버를 시작할 때 사용되는 포트를 “[1단계. 새 Smee 채널 시작](#step-1-start-a-new-smee-channel)”에서 웹후크 페이로드가 리디렉션되는 포트와 일치하도록 설정하는 `set :port 3000`이 표시됩니다.

다음으로 표시되는 코드는 `class GHApp < Sinatra::Application` 선언입니다. 이 클래스 내에서 GitHub 앱에 대한 모든 코드를 작성합니다.

기본적으로, 템플릿의 클래스는 다음과 같은 작업을 수행합니다.
* [환경 변수 읽기](#read-the-environment-variables)
* [로깅 켜기](#turn-on-logging)
* [이전 필터 정의](#define-a-before-filter)
* [경로 처리기 정의](#define-a-route-handler)
* [도우미 메서드 정의](#define-the-helper-methods)

### 환경 변수 읽기

이 클래스에서 가장 먼저 수행하는 작업은 “[4단계. 런타임 환경 준비](#step-4-prepare-the-runtime-environment)”에서 설정한 3개의 환경 변수를 읽고 나중에 사용할 변수에 이를 저장하는 것입니다.

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### 로깅 켜기

다음은 개발 중에 로깅을 사용하도록 설정하는 코드 블록이며, 이는 Sinatra의 기본 환경입니다. 이 코드는 앱을 개발하는 동안 터미널에 유용한 출력을 표시하도록 `DEBUG` 수준에서 로깅을 사용합니다.

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### 이전 필터 정의

Sinatra는 경로 처리기 전에 코드를 실행할 수 있는 [이전 필터](https://github.com/sinatra/sinatra#filters)를 사용합니다. 템플릿의 `before` 블록은 4개의 [도우미 메서드](https://github.com/sinatra/sinatra#helpers)를 호출합니다. 템플릿 앱은 [이후 섹션](#define-the-helper-methods)에서 도우미 메서드를 정의합니다.

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### 경로 처리기 정의

빈 경로가 템플릿 코드에 포함됩니다. 이 코드는 `/event_handler` 경로에 대한 모든 `POST` 요청을 처리합니다. 이 빠른 시작에서는 해당 이벤트 처리기를 작성하지 않지만 이 템플릿 앱을 확장하는 방법에 대한 예제는 다른 [빠른 시작 가이드](/apps/quickstart-guides/)를 참조하세요.

``` ruby
post '/event_handler' do

end
```

### 도우미 메서드 정의

이 템플릿의 도우미 메서드는 대부분의 무거운 작업을 수행합니다. 4개의 도우미 메서드가 코드의 이 섹션에 정의되어 있습니다.

#### 웹후크 페이로드 처리

첫 번째 메서드 `get_payload_request`는 웹후크 페이로드를 캡처하고 JSON 형식으로 변환하므로 페이로드의 데이터에 훨씬 쉽게 액세스할 수 있습니다.

#### 웹후크 서명 확인

두 번째 메서드 `verify_webhook_signature`는 웹후크 서명을 확인하여 GitHub 이벤트를 생성했는지 확인합니다. `verify_webhook_signature` 도우미 메서드의 코드에 대한 자세한 내용은 “[웹후크 보안](/webhooks/securing/)”을 참조하세요. 웹후크가 안전한 경우 이 메서드는 들어오는 모든 페이로드를 터미널에 기록합니다. 로거 코드는 웹 서버가 작동하는지 확인하는 데 유용하지만 나중에 언제든지 제거할 수 있습니다.

#### GitHub 앱으로 인증

API를 호출하려면 [Octokit 라이브러리](http://octokit.github.io/octokit.rb/)를 사용합니다. 이 라이브러리를 사용하여 흥미로운 작업을 수행하려면 사용자 또는 앱을 인증해야 합니다. GitHub 앱에는 두 가지 인증 방법이 있습니다.

- [JWT(JSON Web Token)](https://jwt.io/introduction)를 사용하여 GitHub 앱으로 인증합니다.
- 설치 액세스 토큰을 사용하여 GitHub 앱의 특정 설치로 인증합니다.

[다음 섹션](#authenticating-as-an-installation)에서 설치로 인증하는 방법에 대해 알아봅니다.

[GitHub 앱으로 인증](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)하면 다음과 같은 몇 가지 작업을 수행할 수 있습니다.

 * GitHub 앱에 대한 대략적인 관리 정보를 검색할 수 있습니다.
 * 앱 설치에 대한 액세스 토큰을 요청할 수 있습니다.

예를 들어 GitHub 앱으로 인증하여 앱을 설치한 계정(조직 및 개인)의 목록을 검색합니다. 그러나 이 인증 방법을 사용하면 API로 많은 작업을 수행할 수 없습니다. 설치를 대신하여 리포지토리의 데이터에 액세스하고 작업을 수행하려면 설치로 인증해야 합니다. 이렇게 하려면 먼저 GitHub 앱으로 인증하여 설치 액세스 토큰을 요청해야 합니다.

Octokit.rb 라이브러리를 사용하여 API를 호출하려면 먼저 GitHub 앱으로 인증된 [Octokit 클라이언트](http://octokit.github.io/octokit.rb/Octokit/Client.html)를 초기화해야 합니다. `authenticate_app` 도우미 메서드가 해당 작업을 수행합니다.

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

위 코드는 [JWT(JSON 웹 토큰)](https://jwt.io/introduction)를 생성하고 이를 앱의 프라이빗 키와 함께 사용하여 Octokit 클라이언트를 초기화합니다. GitHub 앱의 저장된 퍼블릭 키를 사용하여 토큰을 확인해 요청의 인증을 확인합니다. 해당 코드의 작동 방식에 대한 자세한 내용은 “[GitHub 앱으로 인증](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”을 참조하세요.

#### 설치로 인증

설치는 앱을 설치한 모든 사용자 또는 조직 계정을 나타냅니다. 누군가가 둘 이상의 리포지토리에 앱을 설치하더라도 동일한 계정 내에 있기 때문에 하나의 설치로만 집계됩니다. 마지막 도우미 메서드 `authenticate_installation`은 설치로 인증된 [Octokit 클라이언트](http://octokit.github.io/octokit.rb/Octokit/Client.html)를 초기화합니다. 이 Octokit 클라이언트를 인증된 API 호출을 만드는 데 사용할 수 있습니다.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

[`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) Octokit 메서드는 설치 토큰을 만듭니다. 해당 메서드는 두 개의 인수를 허용합니다.

* 설치(정수): GitHub 앱 설치 ID
* 옵션(해시, 기본값: `{}`): 사용자 지정 가능한 옵션의 집합

GitHub 앱이 웹후크를 받으면 앱에 `id`가 있는 `installation`이 포함됩니다. GitHub 앱으로 인증된 클라이언트를 사용하여 이 ID를 `create_app_installation_access_token` 메서드에 전달하여 각 설치에 대한 액세스 토큰을 생성합니다. 메서드에 옵션을 전달하지 않으므로 옵션은 기본적으로 빈 해시로 설정됩니다. [문서](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)를 다시 살펴보면 `create_app_installation_access_token`에 대한 응답에 두 필드(`token` 및 `expired_at`)가 포함된 것을 확인할 수 있습니다. 템플릿 코드는 응답에서 토큰을 선택하고 설치 클라이언트를 초기화합니다.

이 메서드를 사용하면 앱이 새 웹후크 페이로드를 받을 때마다 이벤트를 트리거한 설치에 대한 클라이언트를 만듭니다. 이 인증 프로세스를 사용하면 GitHub 앱이 모든 계정의 모든 설치에서 작동할 수 있습니다.

이제 API 호출을 시작할 준비가 되었습니다.

## 6단계. 서버 시작하기

앱은 아직 아무 작업도 수행하지 않지만 이 시점에서 서버에서 앱을 실행할 수 있습니다.

터미널의 현재 탭에서 Smee를 계속 실행합니다. 새 탭을 열고 [템플릿 앱 코드를 복제한](#prerequisites) 디렉터리로 `cd`를 실행합니다. 이 리포지토리의 Ruby 코드는 [Sinatra](http://sinatrarb.com/) 웹 서버를 시작합니다. 이 코드에는 몇 가지 종속성이 있습니다. 다음을 실행하여 설치할 수 있습니다.

```shell
$ gem install bundler
```

이 뒤에는 다음과 같은 내용이 있습니다.

```shell
$ bundle install
```

종속성이 설치되면 서버를 시작할 수 있습니다.

```shell
$ bundle exec ruby template_server.rb
```

다음과 같은 응답이 표시됩니다.

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

오류가 표시되면 `template_server.rb`가 포함된 디렉터리에 `.env` 파일을 만들었는지 확인합니다.

서버가 실행되면 브라우저에서 `http://localhost:3000`으로 이동하여 테스트할 수 있습니다. 앱이 예상대로 작동하면 유용한 오류 페이지가 표시됩니다.

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

정상입니다. 오류 페이지임에도 불구하고 _Sinatra_ 오류 페이지입니다. 즉, 앱이 예상대로 서버에 연결되어 있습니다. 앱에 표시할 다른 내용이 없으므로 이 메시지가 표시됩니다.

## 7단계. 계정에 앱 설치

서버가 수신할 이벤트를 트리거하여 앱을 수신 대기하고 있는지 테스트할 수 있습니다. 테스트할 수 있는 간단한 이벤트는 [`installation`](/webhooks/event-payloads/#installation) 이벤트를 보낼 GitHub 계정에 앱을 설치하는 것입니다. 앱이 이를 수신하는 경우 `template_server.rb`를 시작한 터미널 탭에 일부 출력이 표시됩니다.

해당 앱을 설치하려면 [앱 설정 페이지](https://github.com/settings/apps)를 방문하여 앱을 선택하고 사이드바에서 **앱 설치** 를 클릭합니다. 사용자 이름 옆에 있는 **설치** 를 클릭합니다.

모든 리포지토리 또는 선택한 리포지토리에 앱을 설치할지 묻는 메시지가 표시됩니다. 모든 리포지토리에 앱을 설치하지 않아도 됩니다. 테스트를 위해 샌드박스 리포지토리를 만들고 거기에 앱을 설치하는 것이 좋을 수 있습니다.

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

**설치** 를 클릭한 후 터미널의 출력을 확인합니다. 다음과 비슷한 결과가 표시됩니다.

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

이는 좋은 소식입니다. 앱이 GitHub 계정에 설치되었다는 알림을 앱이 받았다는 의미입니다. 이와 같이 표시되면 앱이 예상대로 서버에서 실행되고 있는 것입니다. 🙌

출력이 표시되지 않으면 다른 터미널 탭에서 Smee가 올바르게 실행되고 있는지 확인합니다. Smee를 다시 시작해야 하는 경우 앱을 제거하고 다시 설치하여 `installation` 이벤트를 앱에 다시 보낸 후 터미널에서 출력을 확인해야 합니다.  Smee가 아닌 다른 문제가 있는 경우 “[문제 해결](#troubleshooting)” 섹션을 참조하세요.

위의 터미널 출력이 어디에서 나오는지 궁금하다면 이는 `template_server.rb`에서 [앱 템플릿 코드](#prerequisites)로 작성됩니다.

## 문제 해결

다음은 몇 가지 일반적인 문제와 제안된 해결 방법입니다. 다른 문제가 발생하면 {% 데이터 reusables.support.prodname_support_forum_with_url %}에서 도움말이나 조언을 요청할 수 있습니다.

* **Q:** Smee 명령줄 클라이언트를 설치하려고 하면 다음 오류가 발생합니다.

    ```shell
    > npm: command not found
    ```

    **A:** npm이 설치되지 않은 것 같습니다. 이를 설치하는 가장 좋은 방법은 https://nodejs.org 에서 Node.js 패키지를 다운로드하고 시스템의 설치 지침을 따르는 것입니다. npm은 Node.js와 함께 설치됩니다.

* **Q:** 서버를 실행하면 다음 오류가 발생합니다.

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **A:** 프라이빗 키 환경 변수를 제대로 설정하지 않았을 수 있습니다. `GITHUB_PRIVATE_KEY` 변수가 다음과 같아야 합니다.

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    올바른 퍼블릭 키를 `.env` 파일에 복사했는지 다시 확인하세요.

* **Q:** 서버를 실행하면 다음 오류가 발생합니다.

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **A:** GitHub 앱으로 인증되었지만 설치로 인증되지 않았을 수 있습니다. “[설치로 인증](#authenticating-as-an-installation)”의 모든 단계를 수행하고, API 작업에 `@app_client` 인스턴스 변수(JWT로 인증됨)가 아닌 `@installation_client` 인스턴스 변수(설치 액세스 토큰으로 인증됨)를 사용해야 합니다. `@app_client`는 앱에 대한 대략적인 정보만 검색하고 설치 액세스 토큰을 가져올 수 있으며 그 외에는 API를 통해 많은 작업을 수행할 수 없습니다.

* **Q:** 서버가 이벤트를 수신 대기하지 않습니다. Smee 클라이언트가 터미널 창에서 실행 중이고 GitHub 리포지토리에 앱을 설치하고 있지만 서버를 실행하는 터미널 창에 출력이 표시되지 않습니다.

    **A:** Smee 클라이언트가 실행 중이 아니거나, 잘못된 매개 변수를 사용하여 Smee 명령을 실행하거나, GitHub 앱 설정에 올바른 Smee 도메인이 없을 수 있습니다. 먼저 터미널 탭에서 Smee 클라이언트가 실행되고 있는지 확인합니다. 문제가 없는 경우 [앱 설정 페이지](https://github.com/settings/apps)를 방문하여 “[2단계. 새 GitHub 앱 등록](#step-2-register-a-new-github-app)”에 나와 있는 필드를 확인합니다. 해당 필드의 도메인은 “[1단계. 새 Smee 채널 시작](#step-1-start-a-new-smee-channel)”에서 `smee -u <unique_channel>` 명령에 사용한 도메인과 일치해야 합니다. 위의 해결 방법 중 어떤 것도 효과가 없는 경우 `--path` 및 `--port` 옵션을 포함하여 완전한 Smee 명령을 실행하고 있는지 확인합니다(예: `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000`(`https://smee.io/qrfeVRbFbffd6vD`를 자신의 Smee 도메인으로 대체)).

* **Q:** 디버그 출력에서 `Octokit::NotFound` 404 오류가 발생합니다.
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **A:** `.env` 파일의 변수가 올바른지 확인합니다. `bash_profile`과 같은 다른 환경 변수 파일에서 동일한 변수를 설정하지 않았는지 확인합니다. 앱 코드에 `puts` 문을 추가하고 코드를 다시 실행하여 앱에서 사용하는 환경 변수를 확인할 수 있습니다. 예를 들어 올바른 프라이빗 키 집합이 있는지 확인하기 위해 `puts PRIVATE_KEY`를 앱 코드에 추가할 수 있습니다.

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## 결론

이 가이드를 통해 GitHub 앱을 개발하기 위한 기본 구성 요소를 배웠습니다. 다시 알아보자면 다음을 수행했습니다.

* 새 GitHub 앱 등록
* Smee를 사용하여 웹후크 페이로드 수신
* Sinatra를 통해 간단한 웹 서버 실행
* GitHub 앱으로 인증
* 설치로 인증

## 다음 단계

이제 서버에서 실행 중인 GitHub 앱이 있습니다. 앱이 아직 특별한 작업은 수행하지 않지만 다른 [빠른 시작 가이드](/apps/quickstart-guides/)에서 GitHub 앱 템플릿을 사용자 지정할 수 있는 몇 가지 방법을 확인하세요.
