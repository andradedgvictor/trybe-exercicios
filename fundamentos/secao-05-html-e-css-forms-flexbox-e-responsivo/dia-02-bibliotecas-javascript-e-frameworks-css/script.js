const clearBtn = document.querySelector('#clear-btn');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const form = document.querySelector('#main-form');

const validateForm = (event) => {
  const fullNameLength = fullName.value.length;
  const emailLength = email.value.length;
  const questionLength = question.value.length;

  if (fullNameLength > 40) {
    alert('O nome completo deve ter no máximo 40 caracteres.');
    event.preventDefault();
  }

  if (emailLength > 50) {
    alert('O e-mail deve ter no máximo 50 caracteres.');
    event.preventDefault();
  }

  if (questionLength > 500) {
    alert('O campo de texto deve ter no máximo 500 caracteres.');
    event.preventDefault();
  }
};

const clearForm = () => {
  form.reset();
};

const enableSubmit = () => {
  submitBtn.disabled = !agreement.checked;
};

agreement.addEventListener('change', enableSubmit);
form.addEventListener('submit', validateForm);
clearBtn.addEventListener('click', clearForm);
