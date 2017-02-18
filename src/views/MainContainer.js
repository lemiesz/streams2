import React from 'react';
import NavbarContainer from "../containers/NavBarContainer";
import "../css/mainContainer.css";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MainContainer extends React.Component {

    render() {
        return (
            <div className="mainContainer">
                <NavbarContainer />
                {this.props.children}
            </div>  
        );
    }
}

export default MainContainer;