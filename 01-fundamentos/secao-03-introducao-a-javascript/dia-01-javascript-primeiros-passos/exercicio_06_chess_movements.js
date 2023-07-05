// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// * Exemplo: bishop -> diagonals

let peca = 'Bispo';
let lowerCasePeca = peca.toLowerCase();

if (lowerCasePeca == 'rei') {
    console.log(peca + ' -> Uma casa em qualquer direção')
}
else if (lowerCasePeca == 'rainha') {
    console.log(peca + ' -> Qualquer número de casas em linha reta ou diagonal')
}
else if (lowerCasePeca == 'bispo') {
    console.log(peca + ' -> Qualquer número de casas em diagonal')
}
else if (lowerCasePeca == 'cavalo') {
    console.log(peca + ' -> Movimento em forma de "L"')
}
else if (lowerCasePeca == 'torre') {
    console.log(peca + ' -> Qualquer número de casas em linha reta vertical ou horizontal')
}
else if (lowerCasePeca == 'peão') {
    console.log(peca + ' -> Avança uma casa para frente e captura diagonalmente uma casa à sua frente e para o lado')
}
else {
    console.log('O programa não encontrou essa peça')
}