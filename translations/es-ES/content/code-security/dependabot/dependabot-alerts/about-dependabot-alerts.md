---
title: Acerca de las alertas del Dependabot
intro: '{% data variables.product.product_name %} envía {% data variables.product.prodname_dependabot_alerts %} cuando detectamos que tu repositorio utiliza una dependencia vulnerabile{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Las alertas del dependabot
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Acerca de {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %}
{% data reusables.advisory-database.beta-malware-advisories %}
{% endif %}

Las {% data variables.product.prodname_dependabot_alerts %} te indican cuando tu código depende de un paquete que no es seguro.

Si tu código depende de un paquete con una vulnerabilidad de seguridad, esto puede ocasionar varios problemas para tu proyecto o para la persona que lo utiliza. Deberás mejorar a una versión segura del paquete tan pronto sea posible.{% ifversion GH-advisory-db-supports-malware %} si tu código utiliza malware, necesitarás reemplazar el paquete con una alternativa segura.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detección de dependencias inseguras

{% data reusables.dependabot.dependabot-alerts-beta %}

El {% data variables.product.prodname_dependabot %} realiza un escaneo para detectar las dependencias inseguras y envía {% data variables.product.prodname_dependabot_alerts %} cuando:

{% ifversion fpt or ghec %}
- Se agrega una asesoría nueva a la {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta la sección "[Buscar asesorías de seguridad en la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)".{% else %}
- Se sincronizan los datos de las asesorías nuevas en {% data variables.product.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  {% note %}

  **Nota:** Solo las asesorías que ha revisado {% data variables.product.company_short %} activarán las {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- La gráfica de dependencias para los cambios a un repositorio. Por ejemplo, cuando un colaborador sube una confirmación para cambiar los paquetes o versiones de los cuales depende{% ifversion fpt or ghec %}, o cuando cambia el código de alguna de las dependencias{% endif %}. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para encontrar una lista de ecosistemas en los cuales {% data variables.product.product_name %} detecta dependencias inseguras, consulta la sección "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Nota:** Es importante mantener actualizados tu manifiesto y tus archivos bloqueados. Si la gráfica de dependencia no refleja tus dependencias y versiones actuales con exactitud, entonces podrías perderte de las alertas para las dependencias inseguras que utilizas. También podrías obtener alertas de las dependencias que ya no utilizas.

{% endnote %}

## Configuración de las {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detecta las dependencias vulnerables y el malware en los repositorios _públicos_ y muestra la gráfica de dependencias, pero no genera {% data variables.product.prodname_dependabot_alerts %} predeterminadamente. Los propietarios de repositorios o las personas con acceso administrativo pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios públicos. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios.

También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan atu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)".

Para obtener más información sobre los requisitos de acceso para las acciones que se relacionan con las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

{% data variables.product.product_name %} comienza a generar la gráfica de dependencias inmediatamente y genera alertas para cualquier dependencia insegura tan pronto como se identifiquen. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Para obtener más información, consulta la sección "[Administrar la configuración de uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Cuando {% data variables.product.product_name %} identifica una dependencia vulnerable{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos {% ifversion fpt or ghec or ghes %} en la pestaña de seguridad del repositorio y{% endif %} en la gráfica de dependencias de este. La alerta incluye {% ifversion fpt or ghec or ghes %}un enlace al archivo afectado en el proyecto e{% endif %}información sobre una versión corregida. {% data variables.product.product_name %} también podría notificar a los mantenedores de los repositorios afectados sobre la nueva alerta de acuerdo con sus preferencias de notificaciones. Para obtener más información, consulta la sección "[Configurar notificaciones para las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

{% ifversion fpt or ghec or ghes > 3.2 %}
Para los repositorios en donde están habilitadas las {% data variables.product.prodname_dependabot_security_updates %}, la alerta también podría contener un enlace a una solicitud de cambios o a una actualización en el archivo de bloqueo o de manifiesto para la versión mínima que resuelva la vulnerabilidad. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% warning %}

**Nota**: Las características de seguridad del {% data variables.product.product_name %} no pretenden detectar todas las vulnerabilidades{% ifversion GH-advisory-db-supports-malware %} y malware{% endif %}. Mantenemos activamente la {% data variables.product.prodname_advisory_database %} y generamos alertas con la información más actualizada. Sin embargo, no podemos detectar o notificarte sobre las vulnerabilidades conocidas dentro de un marco de tiempo garantizado. Las características no son sustitutos de una revisión humana de cada dependencia contra las vulnerabilidades potenciales ni contra cualquier otro problema y te recomendamos consultar con un servicio de seguridad o llevar a cabo una revisión de dependencias exhaustiva cuando sea necesario.

{% endwarning %}

## Acceder a las {% data variables.product.prodname_dependabot_alerts %}

Puedes ver todas las alertas que afectan un proyecto en particular{% ifversion fpt or ghec %} en la pestaña de Seguridad del repositorio o{% endif %} en la gráfica de dependencias del repositorio. Para obtener más información, consulta la sección "[Ver y actualizar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)".

Predeterminadamente, notificamos a las personas con permisos administrativos en los repositorios afectados sobre las {% data variables.product.prodname_dependabot_alerts %} nuevas. {% ifversion fpt or ghec %}{% data variables.product.product_name %} jamás divulga las dependencias inseguras de ningún repositorio al público. También puedes hacer que las personas o los equipos que trabajan con repositorios que te pertenezcan o para los cuales tengas permisos administrativos puedan ver las {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}Para obtener más información, consulta la sección "[Configurar notificaciones para las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

También puedes ver todas las {% data variables.product.prodname_dependabot_alerts %} que corresponden a una asesoría específica en la {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Leer más

- "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Ver y actualizar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %}
{% ifversion fpt or ghec %}- "[Privacidad en {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
