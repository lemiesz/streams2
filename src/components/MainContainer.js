import React from 'react';
import NavBar from "./NavBar";
import "../css/mainContainer.css";

class MainContainer extends React.Component {

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