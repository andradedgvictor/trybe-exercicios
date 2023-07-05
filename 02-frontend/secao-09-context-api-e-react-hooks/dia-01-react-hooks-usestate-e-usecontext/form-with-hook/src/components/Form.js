import React, { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    location: '',
    module: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            name="name"
            value={ form.name }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <label htmlFor="age">
          Idade
          <input
            type="number"
            id="age"
            name="age"
            value={ form.age }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <label htmlFor="city">
          Cidade/UF
          <input
            type="text"
            id="city"
            name="location"
            value={ form.location }
            onChange={ handleInputChange }
          />
        </label>
        <br />
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={ form.module === 'Fundamentos' }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={ form.module === 'Front-end' }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={ form.module === 'Back-end' }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={ form.module === 'Ciência da computação' }
            onChange={ handleInputChange }
          />
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={ (event) => {
          event.preventDefault();
          console.log('Click!');
        } }
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
