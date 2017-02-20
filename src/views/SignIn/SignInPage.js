import React from 'react';
import {withRouter, browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import "../../css/SignInPage/SignInPage.css";

class SignInPage extends React.Component {

    render() {
        return (
            <div className="SignInPage">
                <div> Seattle Streams</div>
                <Paper className="SignInPage-box" zDepth={2}>
                    <div className="SignInPage-box-text">
                        <TextField hintText={"User Name"}/>
                        <TextField hintText={"Password"}/>
                    </div>
                    <RaisedButton primary={true} label="Login" />
                </Paper>
            </div>
        )
    }

}

export default withRouter(SignInPage);