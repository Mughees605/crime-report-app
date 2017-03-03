import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "./navbar.js"
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router"
import * as firebase from "firebase"
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            crime: '',
            crimeReports: [],
            missingReports: []

        };



    }

    componentDidMount() {
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

    render() {
        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white'
        };
        return (
            // crime and missing report
            <div>
                <AppBar />
                <h1 style={{ textAlign: "center" }}> Crime Reports </h1>


                <div class="container">
                    <table>

                    </table>
                    <table style={{ border: "1px solid black", width: "500px;" }}>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Crime</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Unique sing</th>
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


                <h1 style={{ textAlign: "center" }}>Recent Missing Persons</h1>
                <table>

                </table>
                <table style={{ border: "1px solid black", width: "500px;" }}>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Height</th>
                        <th>Sign</th>

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
        )
    }
}
export default Home