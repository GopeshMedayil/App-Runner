import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const electron = window.require('electron');
const fs = electron
  .remote
  .require('fs');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {

  constructor() {
    super();
    this.state = {
      projectPath: ""
    }
  }


  addProject = () => {
    alert("projectPath", this.state.projectPath);

    var data = fs.readFileSync('./package.json', 'utf8');
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" value={this.state.projectPath} className="project" />
        <button onClick={this.addProject}>Add</button>
      </div>
    )
  }
};
export default App;