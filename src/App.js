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
    inputData: {
      firstname : "",
      lastname: "",
      phonenumber:"",
      role:"Student",
      message:""
    },
    showPopup:false,
    data:[],
  };

  // we call our database here
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
      inputData: {...this.state.inputData, [event.target.name]:event.target.value}
    });
  };
  
  popupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup:true,
    });
  };

  //https://axios-http.com/docs/post_example
  postHandler = () => {
    axios.post('http://localhost:3001/notes', this.state.inputData)
    .then((response) =>{
      console.log(response);
      this.setState({showPopup: false});
      window.location.reload();
    })
    .catch ((error) =>
      console.log(error))};
  
  render() {
    
    // const props = {
    //   firstname : this.state.firstname,
    //   lastname: this.state.lastname,
    //   phonenumber:this.state.phonenumber,
    //   role:this.state.role,
    //   message:this.state.message,
    //   }

    return (
      <div>
        <header>
          <h1>Hello. 📣 SHOW ME THE MONEY! 📣</h1>
        </header>
        <main className="formarea">
        <Form change={this.inputHandler} submit={this.popupHandler}/>
        <View {...this.state.inputData}/>
        {this.state.showPopup && <Popup {...this.state.inputData} post={this.postHandler} />}
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