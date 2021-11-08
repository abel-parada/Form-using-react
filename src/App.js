import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js'
import View from './Components/View.js'


class App extends Component {

  state = {
    firstname,
    lastname,
    phoneNumber,
    role,
    message
  }

  render() {
    return (
      <div>
        <header>
          <h1>Hello Abel. SHOW ME THE MONEY!</h1>
        </header>
        <main>
        <Form />
        </main>
      </div>
    );
  }
}

export default App;