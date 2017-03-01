import React from 'react';
import NavbarContainer from "../containers/NavBarContainer";
import firebase from "firebase";

import "../css/mainContainer.css";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MainView extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(this.updateLoginStateChange);
    }

    render() {
        return (
            <div className="mainContainer">
                <NavbarContainer />
                {this.props.children && React.cloneElement(this.props.children, {
                    testProp: "testProp"
                })};
            </div>
        );
    }

    updateLoginStateChange = (user) => {
        console.log(user);
        this.setState({user: user});
    }
}

export default MainView;