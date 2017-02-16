import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import firebase from 'firebase';


import './index.css';

var config = {
    apiKey: "AIzaSyC_3CzhKqkD8q25r6SgjKvZzdDVxmzAl5s",
    authDomain: "seattlestreams.firebaseapp.com",
    databaseURL: "https://seattlestreams.firebaseio.com",
    storageBucket: "seattlestreams.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
