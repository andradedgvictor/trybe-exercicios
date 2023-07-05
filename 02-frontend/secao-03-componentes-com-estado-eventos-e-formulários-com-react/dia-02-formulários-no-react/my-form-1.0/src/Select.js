import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render () {
    const { times, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor='times'>Qual seu time do coração?</label>
        <select name='times' onChange={ handleChange } value={ times }>
          <option value="Cruzeiro">Cruzeiro</option>
          <option value="Atlético">Atlético</option>
          <option value="América">América</option>
        </select>
      </fieldset>
    );
  }
}

Select.propTypes = {
  times: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;