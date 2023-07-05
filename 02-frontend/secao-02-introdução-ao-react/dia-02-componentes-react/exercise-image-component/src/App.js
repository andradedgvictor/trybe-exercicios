import './App.css';
import React from 'react';
import Image from './Image';

class App extends React.Component {
  render() {
    return (
      <div>
        <Image source="/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
      </div>
    );
  }
}

export default App;
