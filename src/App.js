import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js';
import View from './Components/View.js';
import Popup from './Components/Popup.js';
import Notes from './Components/Notes.js';
import Footer from './Components/Footer.js';
import axios from 'axios';

class App extends Component {

  state = {
    firstname : "",
    lastname: "",
    phonenumber:"",
    role:"Student",
    message:"",
    showPopup:false,
    data:[],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/notes").then((res)=> {
      this.setState({data: res.data})
      console.log(res);
      console.log(res.data);
    });
  }
  
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
        <main className="formarea">
        <Form change={this.inputHandler} submit={this.popupHandler}/>
        <View {...props}/>
        {this.state.showPopup && <Popup {...props} />}
        </main>
        {this.state.data.map( note => (
          <Notes {...note}/>// the ... are the spread operator. it literately opens the array and maps the whole thing inside
          ))}
        <Footer />
      </div>
    );
  }
}

export default App;