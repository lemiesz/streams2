import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainView from '../views/MainView';

class MuiProviderContainer extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <MainView children={this.props.children}/>
            </MuiThemeProvider>);
    }

}

export default MuiProviderContainer;