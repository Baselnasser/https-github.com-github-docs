---
title: Автоматическое создание заметок о выпуске
intro: Вы можете автоматически создавать заметки о выпуске для своих выпусков GitHub.
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: aee951e6f57492240b5baf8870578409945aefdc
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185197'
---
## Сведения об автоматическом создании заметок о выпуске

Автоматическое создание заметок о выпуске — это альтернатива написанию заметок о выпуске на {% data variables.product.prodname_dotcom %} вручную. С помощью этой функции можно быстро создавать обзор содержимого выпуска. Автоматически созданные заметки о выпуске включают список объединенных запросов на вытягивание, список участников выпуска и ссылку на полный журнал изменений.

Автоматические заметки о выпуске можно также настроить с помощью меток, который позволяют создать пользовательские категории для упорядочения включаемых запросов на вытягивание. Кроме того, можно исключить определенные метки и пользователей из выходных данных.

## Автоматическое создание заметок о выпуске для нового выпуска

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Нажмите кнопку **Создать черновик нового выпуска**.
   ![Кнопка для создания черновика выпуска](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Щелкните **Выбрать тег** и введите{% else %}Введите{% endif %} номер версии для выпуска. Можно также выбрать существующий тег.
  {% ifversion fpt or ghec %} ![Ввод тега](/assets/images/help/releases/releases-tag-create.png)
5. Если вы создаете тег, нажмите кнопку **Создать тег**.
![Подтверждение создания тега](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![Версия выпуска с тегом](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
6. Если вы создали новый тег, в раскрывающемся меню выберите ветвь с проектом, который необходимо выпустить.
  {% ifversion fpt or ghec %}![Выбор ветви](/assets/images/help/releases/releases-choose-branch.png) {% else %}![Ветви с тегом](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. В правом верхнем углу текстового поля описания щелкните {% ifversion previous-release-tag %}**Создать заметки о выпуске**{% else %}**Автоматически создать заметки о выпуске**{% endif %}.{% ifversion previous-release-tag %} ![Создать заметки о выпуске](/assets/images/help/releases/generate-release-notes.png){% else %} ![Автоматически создать заметки о выпуске](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Проверьте созданные заметки, чтобы убедиться в том, что они содержат все сведения, которые необходимо включить, и ничего лишнего.
9. Если в выпуск необходимо включить двоичные файлы, например скомпилированные программы, перетащите или вручную выберите файлы в области двоичных файлов.
   ![Предоставление DMG с выпуском](/assets/images/help/releases/releases_adding_binary.gif)
10. Чтобы уведомить пользователей о том, что выпуск не готов к использованию в рабочей среде и может быть нестабильным, установите флажок **Это предварительный выпуск**.
   ![Флажок, помечающий выпуск как предварительный](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion fpt or ghec %}
11. При необходимости установите флажок **Создать обсуждение для этого выпуска**, а затем в раскрывающемся меню **Категория** выберите категорию для обсуждения выпуска.
  ![Флажок для создания обсуждения выпуска и раскрывающееся меню для выбора категории](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
12. Если вы готовы опубликовать выпуск, нажмите кнопку **Опубликовать выпуск**. Чтобы продолжить работу с выпуском позже, нажмите кнопку **Сохранить черновик**.
   ![Кнопки "Опубликовать выпуск" и "Сохранить черновик"](/assets/images/help/releases/release_buttons.png)


## Настройка автоматически созданных заметок о выпуске

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите `.github/release.yml`, чтобы создать файл `release.yml` в каталоге `.github`.
  ![Создание файла](/assets/images/help/releases/release-yml.png)
4. Используя приведенные ниже параметры конфигурации, укажите в коде YAML файла метки запросов на вытягивание и авторов, которых следует исключить из этого выпуска. Вы также можете создать новые категории и перечислить метки запросов на вытягивание, которые должны быть включены в каждую из них.

### Варианты настройки

| Параметр | Описание |
| :- | :- |
| `changelog.exclude.labels` | Список меток, исключающих запрос на вытягивание из заметок о выпуске. |
| `changelog.exclude.authors` | Список дескрипторов входа пользователей или ботов, запросы на вытягивание которых должны быть исключены из заметок о выпуске. |
| `changelog.categories[*].title` | **Обязательный.** Название категории изменений в заметках о выпуске. |
| `changelog.categories[*].labels`| **Обязательный.** Метки, которые относят запрос на вытягивание к этой категории. Символу `*` будут соответствовать все запросы на вытягивание, которые не относятся ни к одной из предыдущих категорий. |
| `changelog.categories[*].exclude.labels` | Список меток, исключающих запрос на вытягивание из данной категории. |
| `changelog.categories[*].exclude.authors` | Список дескрипторов входа пользователей или ботов, запросы на вытягивание которых должны быть исключены из данной категории. |

### Примеры конфигураций

Конфигурация для репозитория, который помечает выпуски semver

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

Конфигурация для репозитория, который не помечает запросы на вытягивание, но в котором мы хотим разделить {% data variables.product.prodname_dependabot %} автоматические запросы на вытягивание в заметках о выпуске (`labels: '*'` требуется для отображения категории catchall).

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```
{% endraw %}

## Дополнительные материалы

- [Управление метками](/issues/using-labels-and-milestones-to-track-work/managing-labels) 
