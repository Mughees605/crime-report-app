import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';



export default class MissingReportForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            crime: '',

        };
    }



    submit(e) {
        e.preventDefault();

        const newMissingReport = {
            namemp: this.refs.namemp.getValue(),
            agemp: this.refs.agemp.getValue(),
            heightmp: this.refs.heightmp.getValue(),
            usmp: this.refs.usmp.getValue(),
        }
        console.log(newMissingReport);

        let currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid);
        firebase.database().ref('crimesystem/' + 'missingreport' + '/').push({ newMissingReport })

        browserHistory.push('/thanks');
    }



    render() {
        return (
            <div>
                <MuiThemeProvider>
                    
                    <center>
                        <div>
                          <Card style = {{width:"500px"}}>
                            <h1>Missing Person Report</h1>
                            <br />
                            <form onSubmit={this.submit.bind(this)}>
                                <TextField hintText="Name of missing person" floatingLabelText="Name" ref="namemp" required="required" />
                                <br />
                                <TextField hintText="Age of missing person" floatingLabelText="Age" type='number' ref="agemp" required="required" />
                                <br />
                                <TextField hintText="Address of missing person" floatingLabelText="Address" ref="Address" required="required" />
                                <br />
                                <TextField hintText="Height of missing person" floatingLabelText="Height" type='number' ref="heightmp" required="required" />
                                <br />
                                <TextField hintText="Unique sign of missing person" floatingLabelText="Unique sign" ref="usmp" required="required" />
                                <br />
                                <RaisedButton type="submit">Submit</RaisedButton>
                                <RaisedButton label = "GO Back" href = "/main"/>

                            </form>
                            </Card>
                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}