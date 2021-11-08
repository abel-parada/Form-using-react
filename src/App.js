import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js'
import View from './Components/View.js'
import Popup from './Components/Popup.js'


class App extends Component {

  state = {
    firstname : "",
    lastname: "",
    phonenumber:"",
    role:"",
    message:"",
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Hello Abel. SHOW ME THE MONEY!</h1>
        </header>
        <main>
        <Form change={this.inputHandler}/>
        <View 
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        />
        <Popup />
        </main>
      </div>
    );
  }
}

export default App;