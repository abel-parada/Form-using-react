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
    role:"Student",
    message:"",
    showPopup:false,
  };
  
  inputHandler = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]:event.target.value,
    });
  };
  
  popupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup:true,
    });
  };
  
  render() {
    
    const props = {
      firstname : this.state.firstname,
      lastname: this.state.lastname,
      phonenumber:this.state.phonenumber,
      role:this.state.role,
      message:this.state.message,
      }

    return (
      <div>
        <header>
          <h1>Hello. 📣 SHOW ME THE MONEY! 📣</h1>
        </header>
        <main>
        <Form change={this.inputHandler} submit={this.popupHandler}/>
        <View {...props}/>
        {this.state.showPopup && <Popup {...props} />}
        </main>
      </div>
    );
  }
}

export default App;