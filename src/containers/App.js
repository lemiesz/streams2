import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import StreamPage from "../views/StreamPage";
import UserProfile from "../views/UserProfile";
import AllUsers from "../views/Users/AllUsers";
import SignInPage from "../views/Login/SignInPage";
import SignUpPage from "../views/Login/SignUpPage";
import MuiProviderContainer from "./MuiProviderContainer";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/users"/>
                <Route path="/" component={MuiProviderContainer}>
                    <Route path="/streams/:streamId" component={StreamPage}/>
                    <Route path="/user" component={UserProfile}/>
                    <Route path="/users" component={AllUsers}/>
                    <Route path="/signin" component={SignInPage}/>
                    <Route path="/signup" component={SignUpPage}/>
                </Route>
            </Router>
        );
    }
}


export default App;
