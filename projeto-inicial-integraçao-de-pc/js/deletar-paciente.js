/* Event Bubbling - é um evento que quando cliclado no filho por exemplo td o pai do pai escuta que seri ano caso  tbody, table, section main e por fim no body. Um evento que acontece na como uma bolha que acontece lá em baixo e sobe até o pai inicial.
 */
let tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});