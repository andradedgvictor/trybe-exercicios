const clearBtn = document.querySelector('#clear-btn');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const form = document.querySelector('.form-trip');

const clearForm = () => {
  form.reset();
};

const enableSubmit = () => {
  submitBtn.disabled = !agreement.checked;
};

const validateForm = (event) => {
  const fullNameLength = fullName.value.length;
  const emailLength = email.value.length;
  const whyLength = why.value.length;

  if (fullNameLength > 40) {
    alert('O nome completo deve ter no máximo 40 caracteres.');
    event.preventDefault();
  }

  if (emailLength > 50) {
    alert('O e-mail deve ter no máximo 50 caracteres.');
    event.preventDefault();
  }

  if (whyLength > 500) {
    alert('O campo "Por que você deveria ser a pessoa desenvolvedora escolhida pelo concurso TrybeTrip?" deve ter no máximo 500 caracteres.');
    event.preventDefault();
  }
};

clearBtn.addEventListener('click', clearForm);
agreement.addEventListener('change', enableSubmit);
