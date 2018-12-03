import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './Menu'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authenticated : true 
    }
  }

  render() {
    return (
      <div>
        <Menu isAuthenticated = {this.state.authenticated} />
      </div>
    );
  }
}

export default App;
