import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            crime: '',
            crimeReports: [],
            missingReports: []

        };



    }

    componentWillMount() {
        var crimereports = [];
        var missingreports = [];
        console.log(crimereports);
        firebase.database().ref('/crimesystem/crimereport' + '/').on('value', (data) => {
            let obj = data.val();
            // console.log(obj);
            for (var prop in obj) {
                crimereports.push(obj[prop].newCrimeReport);
                //   console.log(reports);
                this.setState({
                    crimeReports: crimereports
                })
            }
        })
        firebase.database().ref('/crimesystem/missingreport' + '/').on('value', (data) => {
            let obj = data.val();
            // console.log(obj);
            for (var prop in obj) {
                missingreports.push(obj[prop].newMissingReport);
                //   console.log(reports);
                this.setState({
                    missingReports: missingreports
                })
            }
        })
    }








    signout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful.");
            browserHistory.push('/');
        }, function (error) {
            console.log("An error happened.");
        });
    }




    crimeReportForm(ev) {
        ev.preventDefault();
        browserHistory.push('/crimeform');
    }
    missingReportForm(ev) {
        ev.preventDefault();
        browserHistory.push('/missingreportform');
    }
    complaintForm(ev) {
        ev.preventDefault();
        browserHistory.push('/complaintform');
    }
    complaint(ev) {
        ev.preventDefault();
        browserHistory.push('/complaints');
    }

    render() {
        function handleTouchTap() {
            alert('onTouchTap triggered on the title component');
        }
        const styles = {
            title: {
                cursor: 'pointer',
            },
        };
        const AppBarNav = () => (
            <MuiThemeProvider>
                <AppBar
                    title={<span style={styles.title}></span>}
                    onTitleTouchTap={handleTouchTap}
                    iconElementLeft={
                        <div>
                            <FlatButton style={styles.style} href="/crimeform" label="Crime Form" />
                            <FlatButton style={styles.style} href="/missingreportform" label="Missing Persons Form" />
                            <FlatButton style={styles.style} href="/complaintform" label="Complain Form" />
                            <FlatButton style = {styles.style} href = "/complaints" label="Your Complain"/>

                        </div>
                    }
                    iconElementRight = {
                        <div>
                            <FlatButton style = "styles.style" label = "signout" onClick = {this.signout}/>
                        </div>
                    }


                />
            </MuiThemeProvider>
        );

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBarNav />
                         <h1 style={{ textAlign: "center" }}> Crime Reports </h1>
                         <div class="container">
                    <table>

                    </table>
                    <table style={{ border: "1px solid black", width:"500px;" }}>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Crime</th>
                            <th>Date</th>
                            <th>Description</th>
                            
                        </tr>

                        {this.state.crimeReports.map((val, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.city}</td>
                                <td>{val.crime}</td>
                                <td>Date: {}</td>
                                <td>{val.description}</td>
                            </tr>
                        )}
                    </table>

                </div>

                 {/*crime complete */}


                <h1 style = {{textAlign:"center"}}>Missing Persons</h1>
                <table>

                    </table>
                    <table style={{ border: "1px solid black", width:"500px;" }}>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Sign</th>
                            <th>Unique sing</th>
                            
                        </tr>

                        {this.state.missingReports.map((val, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.namemp}</td>
                                <td>{val.agemp}</td>
                                <td>{val.heightmp}</td>
                                <td>Date: {}</td>
                                <td>{val.usmp}</td>
                            </tr>
                        )}
                    </table>

                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}