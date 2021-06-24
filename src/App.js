//DEPENDENCIES
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { apiURL } from "./util/apiURL";
import axios from "axios";
import "./App.css";


//COMPONENTS
import NavBar from './Components/NavBar';
import FootBar from './Components/FootBar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>

        </main>
        <FootBar />
      </div>
    )
  }
}