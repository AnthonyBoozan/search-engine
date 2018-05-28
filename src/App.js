import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
        super();
        this.state = {
            user_input: "",
            list: {}
        };
    }
  handleServer(){
        jsonResponse = {};
        var url = "ec2-54-67-39-41.us-west-1.compute.amazonaws.com:3000";
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:this.state.userInput})
            
        }).then((response) => response.json())
        .then((responseJson) => {
            const ordered = {};
            Object.keys(responseJson).sort().forEach(function(key) {
              ordered[key] = unordered[key];
            });
            this.setState({
                    list = ordered,
                });
            
        });
  } 
  handleUserInput(e) {
        this.setState({userInput: e.target.value});
    }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
