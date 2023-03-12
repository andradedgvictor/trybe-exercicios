// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function subCustomer(nomeCliente) {
    if (typeof nomeCliente === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (nomeCliente === clientesTrybeBank[index]) {
                clientesTrybeBank.slice(index, 1)
                return 'Cliente excluída(o) com sucesso.';
            }
        }
    }
    else {
        return 'Erro cliente não encontrado ou valor diferente de String!'
    }
}

console.log(subCustomer('Pedro'))
console.log(clientesTrybeBank)