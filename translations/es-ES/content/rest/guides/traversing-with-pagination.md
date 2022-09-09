---
title: Desplazarse con la paginación
intro: Explora las formas para utilizar la paginación en la administración de tus respuestas con algunos ejemplos de cómo utilizar la API de Búsqueda.
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Traverse with pagination
ms.openlocfilehash: be0e961847e187b72848eda558636fe3ecb800bd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135906'
---
La API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} proporciona una riqueza informativa vasta para el consumo de los desarrolladores.
La mayoría de las veces, es posible que incluso encuentre que solicita _demasiada_ información y para mantener satisfechos a nuestros servidores, la API [paginará automáticamente los elementos solicitados](/rest/overview/resources-in-the-rest-api#pagination).

En esta guía se realizarán algunas llamadas a Search API y se iterará por los resultados mediante la paginación. Puede encontrar el código fuente completo para este proyecto en el repositorio [platform-samples][platform samples].

{% data reusables.rest-api.dotcom-only-guide-note %}

## Fundamentos de la Paginación

Para empezar, es importante saber algunos hechos acerca de recibir elementos paginados:

1. Las diferentes llamadas a la API responden con predeterminados diferentes también. Por ejemplo, una llamada a [Enumerar repositorios públicos](/rest/reference/repos#list-public-repositories) proporciona elementos paginados en conjuntos de 30, mientras que una llamada a la API Search de GitHub proporciona elementos en conjuntos de 100
2. Puedes especificar cuantos elementos quieres recibir (hasta llegar a 100 como máxmo); pero,
3. Por razones técnicas, no todas las terminales se comportan igual. Por ejemplo, los [eventos](/rest/reference/activity#events) no le permitirán establecer un máximo de elementos para recibir.
Asegúrate de leer la documentación sobre cómo gestionar los resultados paginados para terminales específicas.

La información sobre la paginación se proporciona en [el encabezado Link](https://datatracker.ietf.org/doc/html/rfc5988) de una llamada API. Por ejemplo, ahora se realizará una solicitud de curl a la API Search para saber cuántas veces se usa la frase `addClass` en los proyectos de Mozilla:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla"
```

El parámetro `-I` indica que solo nos interesan los encabezados y no el contenido en sí. Al examinar el resultado, verá información en el encabezado de Link, similar a la siguiente:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

Vamos a explicarlo. `rel="next"` indica que la página siguiente es `page=2`. Esto tiene sentido ya que, de manera predeterminada, todas las consultas paginadas comienzan en la página `1.` y `rel="last"` proporciona más información, lo que indica que la última página de resultados es `34`.
Por tanto, hay 33 páginas más de información sobre `addClass` que se pueden consumir.
¡Perfecto!

**Confíe siempre** en estas relaciones de vínculo que se proporcionan de forma automática. No intentes adivinar o construir tu propia URL.

### Navegar a través de las páginas

Ahora que ya sabe cuántas páginas hay para recibir, puede comenzar a navegar por ellas para consumir los resultados. Para ello, pase un parámetro `page`. De manera predeterminada, `page` siempre comienza en `1`. Ahora se pasará a la página 14 para ver qué sucede:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Aquí está el encabezado de enlace una vez más:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

Como se esperaba, `rel="next"` está en 15 y `rel="last"` sigue siendo 34. Pero ahora hay más información: `rel="first"` indica la dirección URL de la _primera_ página y, lo que es más importante, `rel="prev"` permite conocer el número de página de la página anterior. Con esta información, puede construir una interfaz de usuario que permita a los usuarios saltar entre la lista de resultados principal, previa o siguiente en una llamada API.

### Cambiar la cantidad de elementos recibidos

Al pasar el parámetro `per_page`, puede especificar cuántos elementos quiere que devuelva cada página, hasta un máximo de 100. Ahora se intentará solicitar 50 elementos sobre `addClass`:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Nota lo que hace en la respuesta del encabezado:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Como habrá adivinado, la información de `rel="last"` indica que ahora la última página es la 20. Esto se debe a que se solicita más información por página sobre los resultados.

## Consumir la información

No le interesa realizar llamadas de curl de bajo nivel para poder trabajar con la paginación, por lo que se escribirá un script de Ruby sencillo que haga todo lo que se acaba de describir.

Como siempre, primero se necesitará la biblioteca de Ruby [Octokit.rb de GitHub][octokit.rb] y pasar el [token de acceso personal][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

A continuación, se ejecutará la búsqueda mediante el método `search_code` de Octokit. A diferencia de cuando se usa `curl`, también se puede recuperar inmediatamente el número de resultados, como se hará a continuación:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Ahora, se obtiene el número de la última página, de forma similar a la información de `page=34>; rel="last"` en el encabezado de vínculo. Octokit.rb admite la paginación de información mediante una implementación denominada "[Relaciones de vínculo de Hypermedia][hypermedia-relations]".
No se describirá qué es en detalle, pero basta con decir que cada elemento de la variable `results` tiene un hash denominado `rels`, que puede contener información sobre `:next`, `:last`, `:first` y `:prev`, en función del resultado que se busque. Estas relaciones también contienen información sobre la URL resultante, mediante una llamada a `rels[:last].href`.

Ahora que sabe esto, se obtiene el número de página del último resultado y se presenta toda esta información al usuario:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Por último, vamos a iterar entre los resultados. Puede hacerlo con un bucle `for i in 1..number_of_pages.to_i`, pero en su lugar, se seguirán los encabezados `rels[:next]` para recuperar información de cada página. Para mantener la simplicidad, solo se obtendrá la ruta de archivo del primer resultado de cada página. Para ello, se necesitará un bucle y, al final de cada bucle, se recuperará el conjunto de datos para la página siguiente siguiendo la información de `rels[:next]`.
El bucle finalizará cuando no haya información de `rels[:next]` que consumir (es decir, cuando esté en `rels[:last]`). Es posible que tenga un aspecto similar a este:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Cambiar la cantidad de elementos por página es extremadamente simple con Octokit.rb. Simplemente pasa un hash de opciones `per_page` a la construcción del cliente inicial. Después de eso, el código debería permanecer intacto:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## Construir enlaces de paginación

Habitualmente, con la paginación, el objetivo no es concentrar todos los resultados posibles, sino más bien crear un conjunto de navegación, como este:

![Muestra de los enlaces de paginación](/assets/images/pagination_sample.png)

Vamos a modelar una micro versión de lo que esto podría implicar.

En el código anterior, ya se sabe que se puede obtener el valor `number_of_pages` en los resultados paginados de la primera llamada:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Desde aquí, podemos construir una hermosa representación en ASCII de las cajas de número:
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Ahora se simulará que un usuario hace clic en alguna de estas casillas mediante la construcción de un número aleatorio:

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Ahora que tiene un número de página, puede usar Octokit para recuperar de forma explícita esa página individual si pasa la opción `:page`:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Para ser más elegante, también se podría tomar la página anterior y posterior para generar los vínculos de los elementos posterior (`<<`) y anterior (`>>`):

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
