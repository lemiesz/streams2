import React from "react";
import UserTile from "./UserTile";
import {browserHistory, withRouter} from "react-router";

import "../../css/AllUsers.css";

class AllUsers extends React.Component {


    handleTileClick = () => {
        console.log("going to page");
        browserHistory.push("/user");
    };

    createTestGrid = () => {
        var testGrid = [];
        for(let i = 0; i<1000; i++) {
            testGrid.push(<UserTile onClick={this.handleTileClick} />);
        }
        return testGrid;
    };

    render() {
        return (
            <div className="AllUsers-container">
                {this.createTestGrid()}
            </div>
        )
    }

}
export default withRouter(AllUsers);