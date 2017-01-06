import React from 'react';
import MyToolBar from "./MyToolBar";
import "../css/mainContainer.css";

class MainContainer extends React.Component {

    render() {
        return (
            <div className="mainContainer">
                <MyToolBar />
                {this.props.children}
            </div>  
        );
    }
}

export default MainContainer;