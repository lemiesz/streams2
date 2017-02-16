import React from 'react';
import MyToolBar from "./NavBarToo";
import "../css/mainContainer.css";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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