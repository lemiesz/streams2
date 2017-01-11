import React from "react";
import UserTile from "./UserTile";
import {browserHistory, withRouter} from "react-router";

import "../../css/AllUsers.css";
import Killinois from "../../../public/killinois.jpg";

class AllUsers extends React.Component {


    handleTileClick = () => {
        console.log("going to page");
        browserHistory.push("/user");
    };

    createTestGrid = () => {
        var testGrid = [];
        for(let i = 0; i<100; i++) {
            testGrid.push(<UserTile key={i} onClick={this.handleTileClick} />);
        }
        return testGrid;
    };

    render() {
        var viewModel = {
            name: "Killiois",
            location: "Chicago, IL",
            likes: "1,000,000",
            imageUrl: Killinois
        }
        return (
            <div className="AllUsers-container">
                <UserTile viewModel={viewModel} onTouchTap={this.handleTileClick} />
                {this.createTestGrid()}
            </div>
        )
    }

}
export default withRouter(AllUsers);