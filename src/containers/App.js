import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import StreamPage from "../views/StreamPage";
import UserProfile from "../views/UserProfile";
import AllUsers from "../views/Users/AllUsers";
import SignInPage from "../views/Login/SignInPage";
import SignUpPage from "../views/Login/SignUpPage";
import MuiProviderContainer from "./MuiProviderContainer";
import UsersActions from "../data/Users/UsersActions";
import firebase from 'firebase';

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(this.onAuthChange);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/users"/>
                <Route path="/" component={MuiProviderContainer}>
                    <Route path="/streams/:streamId" component={StreamPage}/>
                    <Route path="/user" component={UserProfile}/>
                    <Route path="/users" component={AllUsers}/>
                    <Route path="/signin" component={SignInPage} onEnter={this.redirectIfLoggedIn}/>
                    <Route path="/signup" component={SignUpPage}/>
                </Route>
            </Router>
        );
    }

    redirectIfLoggedIn = (nextState, replaceState) => {
        if(this.state.user) {
            replaceState({nextPathname: nextState.location.pathname}, "/users");
        }
    };

    onAuthChange = (user) => {
        console.log(user);
        UsersActions.userChange(user);
        this.setState({user: user});
    }
}

export default App;
