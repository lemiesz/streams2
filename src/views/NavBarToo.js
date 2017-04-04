import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CreateButton from './CreateButton';
import {withRouter, browserHistory} from 'react-router';
import firebase from 'firebase';

import "../css/NavBarToo.css";

const SEARCH_TEXT = "What Would You Like To Listen To?";
const VIEW_DJS = "View All DJs";

class NavBarToo extends React.Component {

    handleChange = (event, index, value) => {
        switch (value) {
            case 1:
                browserHistory.push("/streams/6");
                break;
            case 2:
                browserHistory.push("/user");
                break;
        }
        this.props.updateDropDown(value);
    };

    clickViewAll = () => {
        browserHistory.push("/users");
    };

    clickSignIn = () => {
        browserHistory.push("/signin");
    };

    clickSignUp = () => {
        browserHistory.push("/signUp");
    };

    clickSignOut = () => {
        firebase.auth().signOut()
            .then(() => {

            })
            .catch((error) => {
                console.log("error signout");
            });
    };

    render() {
        var viewModel = this.props.viewModel;
        console.log("user is");
        console.log(this.props.user);

        var signOutButton = this.props.user ?
            (<RaisedButton onClick={this.clickSignOut}>
                Sign Out
            </RaisedButton>) : null;

        var signInButton = !this.props.user ?
            (<RaisedButton onClick={this.clickSignIn}>
                Sign In
            </RaisedButton>) : null;

        return (
            <Toolbar className="NavBarToo">
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle className="NavBarToo-title" text="Seattle Streams"/>
                </ToolbarGroup>
                <AutoComplete hintText={SEARCH_TEXT} fullWidth={false} dataSource={[]}/>
                <ToolbarGroup>
                    <FlatButton onClick={this.clickViewAll} label={VIEW_DJS}/>
                    <CreateButton {...this.props} />
                    <ToolbarSeparator />
                    <DropDownMenu value={viewModel.get("dropDownValue")} onChange={this.handleChange}>
                        <MenuItem data-route="streams/6" value={1} primaryText="Streams"/>
                        <MenuItem data-route="users" value={2} primaryText="Users"/>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    {signInButton}
                    {signOutButton}
                </ToolbarGroup>
            </Toolbar>
        );
    }


}

export default withRouter(NavBarToo)