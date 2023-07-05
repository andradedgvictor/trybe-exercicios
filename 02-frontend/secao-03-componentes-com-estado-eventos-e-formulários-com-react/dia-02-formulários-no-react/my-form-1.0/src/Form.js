import React, { Component } from 'react';
import Select from './Select';
import TextArea from './TextArea';

class Form extends Component {
  state = {
    formInfo: {
      times: '',
      userName: '',
      email: '',
      porque: '',
      agreement: false,
    }
  }

  handleChange = (event) => {
    const { name, value, type, checked} = event.target;
    const valueField = type === 'checkbox' ? checked : value; 

    this.setState((prev) => ({ 
      formInfo: {
        ...prev.formInfo,
        [name]: valueField,
      }
     }));
  }

  render () {
    const { formInfo: { userName, times, email, porque, agreement } } = this.state;
    return (
      <form>
        <Select times={ times } handleChange={ this.handleChange }/>
        <fieldset>
          <label htmlFor='userName'>Nome:</label>
          <input name='userName' type='text' onChange={ this.handleChange } value={ userName }/>
        </fieldset>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input name='email' onChange={ this.handleChange } value={ email } type='email' />
        </fieldset>
        <TextArea porque={ porque } handleChange={ this.handleChange } />
        <fieldset>
          <label htmlFor='photo'>Adicione uma foto torcendo para o seu time.</label>
          <input name='photo' type='file'></input>
        </fieldset>
        <fieldset>
          <input name='agreement' type='checkbox' onChange={ this.handleChange } checked={ agreement } />
          <label htmlFor='agreement'>Aceito passar minhas informações.</label>
        </fieldset>
      </form>
    );
  }
}

export default Form;