---
title: Escrevendo expressões matemáticas
intro: 'Use o Markdown para exibir expressões matemáticas em {% data variables.product.company_short %}.'
versions:
  feature: math
shortTitle: Expressões matemáticas
---

Para habilitar uma comunicação clara de expressões matemáticas, {% data variables.product.product_name %} é compatível com a matemática formatada LaTeX dentro do Markdown. Para obter mais informações, consulte [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) no Wikibooks.

A capacidade de renderização matemática de {% data variables.product.company_short %} usa MathJax; um motor de exibição baseado em JavaScript. O MathJax é compatível com uma ampla variedade de macros de LaTeX e várias extensões de acessibilidade úteis. Para obter mais informações, consulte [a documentação do MathJax](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) e [a documentação de extensões de acessibilidade do MathJax](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

## Writing inline expressions

To include a math expression inline with your text, delimit the expression with a dollar symbol `$`.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Inline math markdown rendering](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Writing expressions as blocks

To add a math expression as a block, start a new line and delimit the expression with two dollar symbols `$$`.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Expressão matemática como uma renderização de bloco](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

## Como escrever sinais de dólar de acordo com e dentro de expressões matemáticas

Para exibir um sinal de dólar como um caractere na mesma linha que uma expressão matemática, você deve escapar do não delimitador `$` para garantir que a linha seja renderizada corretamente.

  - Dentro de uma expressão matemática, adicione um símbolo `\` antes do símbolo explícito `$`.

  ```
  Essa expressão usa `\$` para mostrar um sinal do dólar: $\sqrt{\$4}$
  ```

  ![Sinal do dólar com expressão matemática](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - Fora de uma expressão matemática, mas na mesma linha, use tags de span em torno do `$ ` explícito.

  ```
  Para dividir <span>$</span>100 pela metade, calculamos $100/2$
  ```

  ![Dollar sign inline math expression](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Leia mais

* [Site do MathJax](http://mathjax.org)
* [Introdução à escrita e formatação no GitHub](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
