import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render () {
    const { porque, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor='porque'>Qual sua principal motivação para torcer para o seu time?</label>
        <br />
        <textarea name='porque' onChange={ handleChange } value={ porque }/>
      </fieldset>
    );
  }
}

TextArea.propTypes = {
  porque: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;