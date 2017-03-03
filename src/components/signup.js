import React from 'react';
import * as firebase from 'firebase';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import { browserHistory } from 'react-router';
import AppBar from "./navbar.js"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.state = {
      userPass: "",
      userEmail: "",
      error: ""
    }
  }

  signUp(ev) {
    ev.preventDefault();

    var userPass = this.refs.pass.getValue();
    var userEmail = this.refs.email.getValue();
    var error = this.refs.demo;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(userEmail, userPass);
    promise.then((user) => {
    console.log("Signup succesfully");
    browserHistory.push('/signin');
    })
    promise.catch(e => error.innerHTML = e.message);

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      }
      else {
        console.log('not logged in');
      }
    });
  }

  render() {
    return (
      
          <MuiThemeProvider>
      <center>
          <div>
            <AppBar />
        <h1>Sign Up</h1>
        <p ref="demo" ></p>
        <form onSubmit={this.signUp}>
          <Card style = {{width:"500px"}}>
           <TextField hintText="Email" floatingLabelText="Email" ref="email" />
          <br />
          <TextField hintText="Password Field" floatingLabelText="Password" type="password"  ref="pass" />
          <br /><br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>
          </Card>
        </form>
      </div>
      </center>
          </MuiThemeProvider>

      
    )
  }
}
