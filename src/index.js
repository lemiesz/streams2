import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProfile from './components/UserProfile';
import StreamPage from './components/StreamPage';
import firebase from 'firebase';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import AllUsers from "./components/Users/AllUsers";

import './index.css';

var config = {
      apiKey: "AIzaSyC_3CzhKqkD8q25r6SgjKvZzdDVxmzAl5s",
      authDomain: "seattlestreams.firebaseapp.com",
      databaseURL: "https://seattlestreams.firebaseio.com",
      storageBucket: "seattlestreams.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory}>
    <Redirect from="/" to="/streams/6"/>
    <Route path="/" component={App}>
        <Route path="/streams/:streamId" component={StreamPage} />
        <Route path="/user" component={UserProfile} />
        <Route path="/users" component={AllUsers} />
    </Route>
  </Router>,
  document.getElementById('root')
);
