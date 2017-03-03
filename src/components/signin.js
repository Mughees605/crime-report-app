import React from 'react';
import * as firebase from 'firebase';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from "./navbar.js"



class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.state = {
      userPass: "",
      userEmail: ""
    }
  }

  signIn(ev) {
    ev.preventDefault();

    var userPass = this.refs.pass.getValue();
    var userEmail = this.refs.email.getValue();
    console.log(userEmail);
    console.log(userPass);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(userEmail, userPass);
    promise.then((user) => {
console.log("Signin succesfully");
    browserHistory.push('/main');
    })
    promise.catch(e => console.log("ERROR: ",e.message));
  }









  render() {
    return (
<MuiThemeProvider>
  <center>
    
      <div>
        <AppBar />
        
        <h1>Sign In</h1>
        
        <form onSubmit={this.signIn}>
          <Card style = {{width :"500px"}}>
           <TextField hintText="Email" type="email" floatingLabelText="Email" ref="email" />
          <br />
          <TextField hintText="Password Field" floatingLabelText="Password" type="password"  ref="pass"/>
          <br /><br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>

         </Card>
        </form>
        
      </div>
    
      
      </center>
</MuiThemeProvider>

    );
  }
}


export default Signin;
