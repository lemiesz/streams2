import React from 'react';
import ReactionActions from "./ReactionActions.js";
import StreamContainer from "./StreamContainer";
import ArrowLeft from "material-ui/svg-icons/hardware/keyboard-arrow-left";
import ArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";
import CreateButton from "./CreateButton";

import {withRouter, Link, browserHistory} from "react-router";

import "../css/StreamPage.css";

const arrowStyle = {
    width: "45px",
    height: "45px"
}

class StreamPage extends React.Component {

    componentWillMount() {
       
    }

    onClickRight = () => {
        var route = "/streams/" + (parseInt(this.props.params.streamId) + 1).toString();
        browserHistory.push(route);
    }

    onClickLeft = () => {
        var route = "/streams/" + (parseInt(this.props.params.streamId) - 1).toString();
        browserHistory.push(route);
    }

    render() {
        var identifer = "nothing"
        if(this.props.params) {
            identifer = this.props.params.streamId;
        }
        return (
            <div className="StreamPage-full-container">
                <div className="StreamPage-top-container">
                    <div onClick={this.onClickLeft} className="StreamPage-top-arrowcontainer-left">
                        <ArrowLeft style={arrowStyle} />
                    </div>
                    <div className="StreamPage-top-streamcontainer">
                        <StreamContainer streamId={this.props.params.streamId} />
                    </div>
                    <div onClick={this.onClickRight} className="StreamPage-top-arrowcontainer-right">
                        <ArrowRight style={arrowStyle}/>
                     </div>
                </div>
                <div className="StreamPage-bottom-container">
                    <div className="StreamPage-bottom-sides">
                        { /* <FlatButton backgroundColor="#FF6A00">
                             <FontIcon className="fa fa-soundcloud" />
                        </FlatButton> */}
                    </div>
                    <div className="StreamPage-bottom-middle">
                        <ReactionActions/>
                    </div>
                    <div className="StreamPage-bottom-sides">
                    </div>
                </div>
            </div>
        )
    }

} 

export default withRouter(StreamPage);