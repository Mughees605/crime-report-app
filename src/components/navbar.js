import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
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
    title={<span style={styles.title}>FBI CRIME REPORTING AGENCY</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight = {
        <div>
        <FlatButton style = {styles.style} href = "/signin" label = "signin"/>
        <FlatButton style = {styles.style} href = "/signup" label = "signup"/>
        <FlatButton style = {styles.style} href = "/home" label = "Crime/Missing report"/>

        </div>
    }
    
  />
  </MuiThemeProvider>
);
export default AppBarNav;