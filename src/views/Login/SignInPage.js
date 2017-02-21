import React from 'react';
import {withRouter, browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import "../../css/Login/SignInPage.css";

class SignInPage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="SignInPage">
                <div> Seattle Streams</div>
                <Paper className="SignInPage-box" zDepth={2}>
                    <div className="SignInPage-box-text">
                        <TextField hintText={"User Name"}/>
                        <TextField hintText={"Password"}/>
                    </div>
                    <RaisedButton primary={true} label="Login" />
                    <RaisedButton secondary={true} label="Signup" />
                </Paper>
            </div>
        )
    }

}

export default withRouter(SignInPage);