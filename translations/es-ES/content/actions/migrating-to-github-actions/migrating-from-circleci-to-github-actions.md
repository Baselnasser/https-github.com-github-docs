---
title: Migrar de CircleCI a GitHub Actions
intro: 'GitHub Actions y CircleCi comparten varias configuraciones similares, lo cual hace que migrar a GitHub Actions sea relativamente fácil.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrarse desde Circle Cl
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Tanto CircleCi como {% data variables.product.prodname_actions %} te permiten crear flujos de trabajo que compilan, prueban, publican, lanzan y despliegan código automáticamente. CircleCI y {% data variables.product.prodname_actions %} comparten algunas similaridades en la configuración del flujo de trabajo:

- Los archivos de configuración de flujo de trabajo están escritos en YAML y se almacenan en el repositorio.
- Los flujos de trabajo incluyen uno o más jobs.
- Los jobs incluyen uno o más pasos o comandos individuales.
- Los pasos o tareas pueden reutilizarse y compartirse con la comunidad.

Para obtener más información, consulta la sección "[Conceptos esenciales para {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Diferencias clave

Cuando migres desde CircleCI, considera las siguientes diferencias:

- El paralelismo automático de pruebas de CircleCI agrupa las pruebas automáticamente de acuerdo con las reglas que el usuario haya especificado o el historial de información de tiempos. Esta funcionalidad no se incluye en {% data variables.product.prodname_actions %}.
- Las acciones que se ejecutan en los contenedores de Docker distinguen entre problemas de permisos, ya que los contenedores tienen un mapeo de usuarios diferente. Puedes evitar muchos de estos problemas si no utilizas la instrucción `USER` en tu *Dockerfile*. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}
{% else %}Para obtener más información sobre el sistema de archivos de Docker en los ejecutores hospedados en {% data variables.product.product_name %}, consulta la sección [Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)".
{% endif %}

## Migrar flujos de trabajo y jobs

CircleCi define los `workflows` en el archivo *config.yml*, lo cual te permite configurar más de un flujo de trabajo. {% data variables.product.product_name %} requiere tratar los flujos de trabajo uno por uno y, como consecuencia, no necesita que declares los `workflows`. Necesitarás crear un nuevo archivo de flujo de trabajo para cada flujo que se haya configurado en *config.yml*.

Tanto CircleCI como {% data variables.product.prodname_actions %} configuran `jobs` en el archivo de configuración utilizando una sintaxis similar. Si configurars cualquier dependencia entre jobs utilizando `requires` en tu flujo de trabajo de CircleCI, puedes utilizar la sintaxis de {% data variables.product.prodname_actions %} equivalente "`needs`". Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

## Mirgrar orbes a acciones

Tanto CircleCI como {% data variables.product.prodname_actions %} proporcionan un mecanismo para reutilizar y compartir tareas en un flujo de trabajo. CircleCi utiliza un concepto llamado orbes (orbs), escrito en YAML, que proporciona tareas que las personas pueden reutilizar en un flujo de trabajo. {% data variables.product.prodname_actions %} cuenta con componentes reutilizables poderosos y flexibles llamados acciones (actions), los cuales compilas ya sea con archivos de JavaScript o con imagenes de Docker. Puedes crear acciones si escribes tu código personalizado para que interactúe con tu repositorio en la forma que prefieras, lo cual incluye la integración con las API de {% data variables.product.product_name %} y con cualquier API de terceros disponible públicamente. Por ejemplo, una acción puede publicar módulos npm, enviar alertas por SMS cuando se crean propuestas urgentes o implementar un código listo para producción. Para obtener más información, consulta la sección "[Crear acciones](/actions/creating-actions)".

Circle CI puede reutilizar partes de los flujos de trabajo con anclas y alias. {% data variables.product.prodname_actions %} es compatible con las necesidades más comunes de reutilización utilizando matrices. Para obtener más información sobre las matrices, consulta la sección "[Utilizar una matriz para tus jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)".

## Utilizar imágenes de Docker


Tanto CircleCi como {% data variables.product.prodname_actions %} son compatibles con la ejecución de pasos dentro de una imagen de Docker.

CircleCi proporciona un conjunto de imágenes pre-compiladas con dependencias comunes. Estas imágenes cuentan con el `USER` configurado como `circleci`, lo cual ocasiona que los permisos choquen con {% data variables.product.prodname_actions %}.

Recomendamos que te retires de las imágenes pre-compiladas de CircleCi cuando migres a {% data variables.product.prodname_actions %}. En muchos casos, puedes utilizar acciones para instalar dependencias adicionales que necesites.

{% ifversion ghae %}
Para obtener información sobre el sistema de archivos de Docker, consulta la sección "[Sistema de archivos del contenedor de Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)".

{% data reusables.actions.self-hosted-runners-software %}
{% else %}
Para obtener más información sobre el sistema de archivos de Docker, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)".
Para obtener más información sobre las herramientas y paquetes disponibles en

las imágenes de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Utilizar variables y secretos

CircleCi y {% data variables.product.prodname_actions %} son compatibles con la configuración de variables de ambiente en el archivo de configuración y con la creación de secretos utilizando la IU de CircleCI o de {% data variables.product.product_name %}.

Para obtener más información, consulta la sección "[Utilizar variables de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" y "[Crear y utilizar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

## Almacenamiento en caché

CircleCI y {% data variables.product.prodname_actions %} proporcionan un método para almacenar archivos en cahcé manualmente en el archivo de configuración.

{% ifversion actions-caching %}

Puedes encontrar un ejemplo de la sintaxis para cada sistema.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

{% data variables.product.prodname_actions %} no tiene un equivalente al Almacenamiento en Caché por Capas de Docker (o DLC, por sus siglas en inglés) que tiene CircleCI.

## Datos persistentes entre jobs

Tanto CircleCi como {% data variables.product.prodname_actions %} proporcionan mecanismos para persistir datos entre jobs.

A continuación puedes encontrar un ejemplo de la sintaxis de configuración de CircleCi y de {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Datos de flujo de trabajo persistentes que utilizan artefactos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

## Usar bases de datos y contenedores de servicio

Ambos sistemas te permiten incluir contenedores adicionales para bases de datos, almacenamiento en caché, u otras dependencias.

En CircleCi, la primera imagen listada en el *config.yaml* es la imagen primaria que se utiliza para ejecutar comandos. {% data variables.product.prodname_actions %} utiliza secciones explícitas: utiliza `container` para el contenedor primario, y lista contenedores adicionales en `services`.

A continuación puedes encontrar un ejemplo de la sintaxis de configuración de CircleCi y de {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26:
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows:
  version: 2
  build:
    jobs:
      - ruby-26
...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Acerca de los contenedores de servicio](/actions/configuring-and-managing-workflows/about-service-containers)".

## Ejemplo Completo

A continuación encontrarás un ejemplo real. A la izquierda puedes ver el *config.yml* real de CircleCi para el repositorio [thoughtbot/administrator](https://github.com/thoughtbot/administrate). La derecha muestra el equivalente en {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands:
  shared_steps:
    steps:
      - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job
  working_directory: ~/administrate
  steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs:
  ruby-25:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.5.0-node-browsers
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""

  ruby-26:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""


workflows:
  version: 2
  multiple-rubies:
    jobs:
      - ruby-26
      - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
      - name: Install appraisal
        run: bundle exec appraisal install
      - name: Run appraisal
        run: bundle exec appraisal rake
```
</td>
</tr>
</table>
