# React

## O que é o React?

React é, simplesmente, uma lib de JavaScript (ou Typescript) que permite você escrever funções que não apenas podem criar HTML na tela de uma forma mais fácil, como elas podem ser usadas como HTML mesmo.

Exemplo:

```js
export function TituloDaPagina() {
  return <h1>Título da página<h1>
}
```

Como podemos ver, isto é uma simples função de JavaScript que tem único diferencial de retornar HTML, este HTML retornado é o que é renderizado na nossa página ao chamarmos a função. O que seria chamar a função? Seria simplesmente isto:

```jsx
<head>
    <title>Ambisis</title>
    <meta>
    ....

    <body>
      <TituloDaPagina />
    </body>
<head>
```

Perceba que no lugar de precisarmos escrever a tag HTML `<h1>`, nós simplesmente invocamos a função como se fosse um HTML próprio. Parabéns, você acaba de criar seu primeiro componente React

## Concluindo

React é uma lib de javascript que nos permite escrever funções com diferenciais nelas que facilitam o desenvolvimento de UIs
