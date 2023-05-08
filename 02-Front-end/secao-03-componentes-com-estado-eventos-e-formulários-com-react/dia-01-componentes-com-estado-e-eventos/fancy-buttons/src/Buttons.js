import React from 'react';
import './App.css';

class Buttons extends React.Component {
  state = {
    numeroDeCliques1: 0,
    numeroDeCliques2: 0,
    numeroDeCliques3: 0,
  };

getButtonColor(num) {
  return num % 2 === 0 ? 'green' : 'white';
}

handleClick1 = () => {
  const { numeroDeCliques1 } = this.state;
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
  }), () => {
    console.log(`Botão 1 ${this.getButtonColor(numeroDeCliques1)}`);
  });
}
  
handleClick2 = () => {
  const { numeroDeCliques2 } = this.state;
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques1: estadoAnterior.numeroDeCliques2 + 1,
  }), () => {
    console.log(`Botão 1 ${this.getButtonColor(numeroDeCliques2)}`);
  });
}
  
handleClick3 = () => {
  const { numeroDeCliques3 } = this.state;
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques1: estadoAnterior.numeroDeCliques3 + 1,
  }), () => {
    console.log(`Botão 1 ${this.getButtonColor(numeroDeCliques3)}`);
  });
}

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
        <div>
            <button 
            style={ { backgroundColor: this.getButtonColor(numeroDeCliques1) } } 
            onClick={this.handleClick1}>
              { numeroDeCliques1 }
              </button>
            <button 
            style={ { backgroundColor: this.getButtonColor(numeroDeCliques2) } }
            onClick={this.handleClick2}>
              { numeroDeCliques2 }
              </button>
            <button
            style={ { backgroundColor: this.getButtonColor(numeroDeCliques3) } }
            onClick={this.handleClick3}>
              { numeroDeCliques3 }
              </button>
        </div>
    )
  }
}

export default Buttons;