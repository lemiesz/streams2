import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CreateButton from './CreateButton';
import {withRouter, browserHistory } from 'react-router';

class MyToolBar extends React.Component {
   
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
                browserHistory.push("/users");
                break;
        }
        this.setState({value});
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                </ToolbarGroup>
                <ToolbarGroup>
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

export default withRouter(MyToolBar)