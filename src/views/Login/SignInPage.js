import React from 'react';
import {withRouter, browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';

import "../../css/Login/SignInPage.css";

class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            invalid: false
        }
    }

    render() {

        var errorText = this.state.invalid ? <div className="SignInPage-errorText">Please Try Again</div> : null;
        return (
            <div className="SignInPage">
                <div> Seattle Streams</div>
                <Paper className="SignInPage-box" zDepth={2}>
                    <div className="SignInPage-box-text">
                        <TextField onChange={this.setUserName} hintText={"User Name"}/>
                        <TextField type="password" onChange={this.setPassword} hintText={"Password"}/>
                        {errorText}
                    </div>
                    <RaisedButton onTouchTap={this.onLogin.bind(this, this.state.username, this.state.password)} primary={true} label="Login" />
                    <RaisedButton secondary={true} label="Signup" />
                </Paper>
            </div>
        )
    }

    setUserName = (event) => {
        this.setState({username: event.target.value});
    };

    setPassword = (event) => {
        this.setState({password: event.target.value});
    };


    onLogin = (user, password) => {
        firebase.auth().signInWithEmailAndPassword(user, password).then(()=>{
            browserHistory.push("/users");
        }).catch((error) => {
            this.setState({invalid: true});
        })
    }

}

export default withRouter(SignInPage);