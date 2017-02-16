import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from "material-ui/FlatButton";
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CreateButton from './CreateButton';
import {withRouter, browserHistory } from 'react-router';

import "../css/NavBarToo.css";

const SEARCH_TEXT = "What Would You Like To Listen To?";
const VIEW_DJS = "View All DJs";

class NavBarToo extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
        value: 1,
        };
    }

    handleChange = (event, index, value) => {
        switch(value) {
            case 1:
                browserHistory.push("/streams/6");
                break;
            case 2:
                browserHistory.push("/user");
                break;
        }
        this.setState({value});
    };

    clickViewAll = () => {
        browserHistory.push("/users");
    };

    render() {
        return (
            <Toolbar className="NavBarToo">
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle className="NavBarToo-title" text="Seattle Streams" />
                </ToolbarGroup>
                <AutoComplete hintText={SEARCH_TEXT} fullWidth={false} dataSource={[]} />
                <ToolbarGroup>
                    <FlatButton onClick={this.clickViewAll} label={VIEW_DJS} />
                    <CreateButton />
                    <ToolbarSeparator />
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem data-route="streams/6" value={1} primaryText="Streams" />
                        <MenuItem data-route="users" value={2} primaryText="Users" />
                    </DropDownMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }

}

export default withRouter(NavBarToo)