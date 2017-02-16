import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {withRouter, browserHistory } from 'react-router';

class NavBar extends React.Component {

    handleActive = (tab) => {
        browserHistory.push(tab.props["data-route"]);
    }

    render() {
        return(
            <Tabs>
                <Tab data-route="/streams/6" onActive={this.handleActive} label="Streams" />
                <Tab data-route="/users" onActive={this.handleActive} label="User Profiles" />
                <Tab data-route="/createStream" onActive={this.handleActive} label="Create Stream" />
                <Tab data-route="/randomStream" onActive={this.handleActive} label="Random Stream" />
            </Tabs>
        )
    }

} 

withRouter(NavBar)

export default NavBar;