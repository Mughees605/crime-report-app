import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, Router, browserHistory, Route } from 'react-router';
import AppBarNav from "./components/navbar.js"
import * as firebase from 'firebase';
import Home from "./components/home"
import "./index.css"
import Signin from './components/signin';
import SignUp from './components/signup';
import Main from './components/main';
import Thanks from './components/thanks';
import CrimeForm from './components/crimeform';
import Complaints from './components/complaints';
import ComplaintForm from './components/complaintform';
import MissingReportForm from './components/missingreportform';



  // Initialize Firebase
   var config = {
    apiKey: "AIzaSyCbJ4MXdP0GbCXbhowrnAqIvTBBfcKd4yU",
    authDomain: "saylaniproject-19679.firebaseapp.com",
    databaseURL: "https://saylaniproject-19679.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "355514468324"
  };
  firebase.initializeApp(config);


  
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppBarNav}></Route>
    <Route path ="home" component = {Home}/>
    <Route path="/signin" component={Signin}></Route>
    <Route path="/signup" component={SignUp}></Route>
    <Route path="/main" component={Main}></Route>
    <Route path="/crimeform" component={CrimeForm}></Route>
    <Route path="/complaintform" component={ComplaintForm}></Route>
    <Route path="/missingreportform" component={MissingReportForm}></Route>
    <Route path="/thanks" component={Thanks}></Route>
    <Route path="/complaints" component={Complaints}></Route>

  </Router>
,
  document.getElementById('root')
);
