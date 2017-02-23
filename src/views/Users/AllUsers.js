import React from "react";
import UserTile from "./UserTile";
import firebase from "firebase";
import _ from "underscore";
import {browserHistory, withRouter} from "react-router";

import "../../css/AllUsers.css";
import Killinois from "../../../public/killinois.jpg";
import PlaceHolder from "../../../public/placeholderUser.jpeg";

class AllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userViewModels: []
        };
    }

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

    componentWillMount() {
        var usersRef = firebase.database().ref("/users");
        usersRef.on('value', (snapshot) => {
            var users = [];
            snapshot.forEach((item) => {
                var itemValue = item.val();
                console.log(itemValue);
                var imageUrl = itemValue.imageUrl || PlaceHolder;
                users.push({name: itemValue.artistName, location: itemValue.location, likes: itemValue.likes, imageUrl: imageUrl});
            });
            this.setState({userViewModels: users});
        });
    }


    render() {
        var viewModel = {
            name: "Killiois",
            location: "Chicago, IL",
            likes: "1,000,000",
            imageUrl: Killinois
        };

        console.log(this.state.userViewModels);
        var views = _.map(this.state.userViewModels, (viewModel, index) => {
            return <UserTile key={index} viewModel={viewModel} onTouchTap={this.handleTileClick} /> ;
        });
        return (
            <div className="AllUsers-container">
                <UserTile viewModel={viewModel} onTouchTap={this.handleTileClick} />
                {views}
            </div>
        )
    }

}
export default withRouter(AllUsers);