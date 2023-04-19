import validator from 'validator';

const inputEmail = document.getElementById('email-input');
const select = document.getElementById('type');
const button = document.getElementById('button-validator');
const pElem = document.getElementById('paragraph');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const campos = {
        email: validator.isEmail(inputEmail.value),
        cpf: validator.isTaxID(inputEmail.value, 'pt-BR'),
        telefone: validator.isMobilePhone(inputEmail.value, 'pt-BR'),
        hexColor: validator.isHexColor(inputEmail.value),
        url: validator.isURL(inputEmail.value),
    };

    pElem.innerHTML = `A validação retornou ${campos[select.value]}`;
});
