import React, { Component } from 'react';
import './App.css';
import Konami from 'react-konami-code'
import Routes from './components/Routes/Routes';


class App extends Component {

  state = {
    animate: '',
    
  };

  easterEgg = () => { 
    this.setState({animate: 'fadeOutLeft'})
    alert("Hey, you typed the Konami Code!")
  }
  render() {
    return (
      <div className="App" style={this.state}>
        <Routes/>
        <Konami action={this.easterEgg} style={this.state}>
      Hey, I'm an Easter Egg! Look at me!
    </Konami>
      </div>
    );
  }
}

export default App;
