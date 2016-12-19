import React from 'react';
import StreamGrid from './StreamGrid.js';
import CreateButton from './CreateButton';
import NavBar from "./NavBar";
import "../css/mainContainer.css";

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainContainer">
                <NavBar/>
                {this.props.children}
            </div>  
        );
    }
}

export default MainContainer;