---
title: Управление категориями для обсуждений
intro: 'Вы можете категоризировать обсуждения, чтобы упорядочить беседы для участников сообщества; кроме того, можно выбрать формат для каждой категории.'
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: 5579b1e03b29ad37d394caf24745353025fd9e61
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099095'
---
## Сведения о категориях для обсуждений

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Каждой категории необходимо присвоить уникальное имя и пару эмодзи, а также можно добавить подробное описание, указав ее цель. Категории помогают разработчикам организовывать хранение и настройку бесед, чтобы разграничить категории, содержащие вопросы и ответы и более открытые беседы. {% data reusables.discussions.repository-category-limit %} Дополнительные сведения см. в статье [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions).

## Категории по умолчанию

| Категория | Цель | Формат |
| :- | :- | :- |
| 📣 Объявления | Обновления и новости от разработчиков проекта | Объявление |
| #️⃣ Общее | Все, что имеет отношение к проекту | Открытое обсуждение |
|💡 Идеи | Идеи по изменению или улучшению проекта | Открытое обсуждение |
| 🗳 Опросы | Опросы с несколькими вариантами для голосования и обсуждения в сообществе | Опросы |
| 🙏 Вопросы и ответы | Вопросы для сообщества, на которые нужно дать ответ, в формате "вопрос/ответ" | Вопросы и ответы |
| 🙌 Показывайте и рассказывайте | Любые создания, эксперименты или тесты, относящиеся к проекту | Открытое обсуждение |

## Создание категории

1. На {% данных variables.location.product_location %}перейдите на главную страницу репозитория или организации, где требуется создать категорию.
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. Щелкните **Новая категория**.
  ![Кнопка "Новая категория" над списком категорий обсуждений для репозитория](/assets/images/help/discussions/click-new-category-button.png)
1. Измените эмодзи, название, описание и формат обсуждения для категории. Дополнительные сведения о форматах обсуждений см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions).
  ![Эмодзи, название, описание и формат обсуждения для новой категории](/assets/images/help/discussions/edit-category-details.png)
1. Нажмите кнопку **Создать**.
  ![Кнопка "Создать" для новой категории](/assets/images/help/discussions/new-category-click-create-button.png)

## Редактирование категории

Вы можете отредактировать категорию, чтобы изменить эмодзи, название, описание и формат обсуждения категории.

1. На {% данных variables.location.product_location %}перейдите на главную страницу репозитория или организации, где требуется изменить категорию.
{% data reusables.discussions.discussions-tab %}
1. Справа от категории в списке щелкните {% octicon "pencil" aria-label="The pencil icon" %}.
  ![Кнопка редактирования справа от категории в списке категорий репозитория](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![Редактирование эмодзи, заголовка, описания и формата обсуждения для существующей категории](/assets/images/help/discussions/edit-existing-category-details.png)
1. Нажмите кнопку **Сохранить изменения**.
  ![Кнопка "Сохранить изменения" для существующей категории](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## Удаление категории

Когда вы удаляете категорию, {% data variables.product.product_name %} перемещает все обсуждения из удаляемой категории в существующую выбранную вами категорию.

1. На {% данных variables.location.product_location %}перейдите на главную страницу репозитория или организации, где требуется удалить категорию.
{% data reusables.discussions.discussions-tab %}
1. Справа от категории в списке щелкните {% octicon "trash" aria-label="The trash icon" %}.
  ![Кнопка корзины справа от категории в списке категорий репозитория](/assets/images/help/discussions/click-delete-for-category.png)
1. Откройте раскрывающееся меню и выберите новую категорию для любых обсуждений из удаляемой категории.
  ![Раскрывающееся меню для выбора новой категории при удалении существующей](/assets/images/help/discussions/choose-new-category.png)
1. Щелкните **Удалить и переместить**.
  ![Раскрывающееся меню для выбора новой категории при удалении существующей](/assets/images/help/discussions/click-delete-and-move-button.png)
