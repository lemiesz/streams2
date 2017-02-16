import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from '../views/MainContainer';

class MuiProviderContainer extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <MainContainer children={this.props.children}/>
            </MuiThemeProvider>);
    }

}

export default MuiProviderContainer;