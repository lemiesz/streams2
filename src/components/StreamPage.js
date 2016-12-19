import React from 'react';
import ReactionActions from "./ReactionActions.js";
import StreamContainer from "./StreamContainer";
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import ArrowLeft from "material-ui/svg-icons/hardware/keyboard-arrow-left";
import ArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";

import "../css/StreamPage.css";

const arrowStyle = {
    width: "45px",
    height: "45px"
}

class StreamPage extends React.Component {

    render() {
        return (
            <div className="StreamPage-full-container">
                <div className="StreamPage-top-container">
                    <div className="StreamPage-top-arrowcontainer-left">
                        <ArrowLeft style={arrowStyle} />
                    </div>
                    <div className="StreamPage-top-streamcontainer">
                        <StreamContainer />
                    </div>
                    <div className="StreamPage-top-arrowcontainer-right">
                        <ArrowRight style={arrowStyle}/>
                    </div>
                </div>
                <div className="StreamPage-bottom-container">
                    <div className="StreamPage-bottom-sides">
                        <FlatButton backgroundColor="#FF6A00">
                            <FontIcon className="fa fa-soundcloud" />
                        </FlatButton>
                    </div>
                    <div className="StreamPage-bottom-middle">
                        <ReactionActions/>
                    </div>
                    <div className="StreamPage-bottom-sides">
                        Create New Stream
                    </div>
                </div>
            </div>
        )
    }

} 

export default StreamPage;