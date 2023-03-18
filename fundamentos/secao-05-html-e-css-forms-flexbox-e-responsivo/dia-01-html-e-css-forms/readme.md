# Para fixar

## Vamos praticar um pouco, criando uma tela de login? 🔥

1. Adicione os campos de entrada para email e senha.

2. Adicione um checkbox com o texto Lembre-me.

3. Adicione um botão com o texto Entrar; crie o botão através da tag <input>.

4. Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.

5. Adicione o atributo required para os campos de email e senha.

6. Adicione o atributo autocomplete="off" para o campo de email.

7. Adicione o atributo autofocus para o campo de email.

8. Crie um arquivo HTML index.html.

9. Crie um arquivo Javascript script.js.

10. Em seu arquivo HTML:
    Adicione o <script src="script.js"></script> no final do body do HTML.
    Copie os três elementos abaixo (a, input type="text", checkbox) em sua página

12. Em seu arquivo Javascript.
    Adicione os seletores abaixo no começo do arquivo.

    ```HTML
        <!-- elemento para copiar -->
    <a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
    <input type="text" id="input-text"/>
    <input type="checkbox" id="input-checkbox" />
    ```

    ```javascript
    const INPUT_TEXT = document.querySelector("#input-text");
    const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
    const HREF_LINK = document.querySelector("#href");
    ```

13. Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

14. Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

15. Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)


