import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import StreamPage from "../views/StreamPage";
import UserProfile from "../views/UserProfile";
import AllUsers from "../views/Users/AllUsers";
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
                </Route>
            </Router>
        );
    }
}


export default App;
