import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './components/MainContainer.js';


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <MainContainer children={this.props.children} />
            </MuiThemeProvider>
        );
    }
}

export default App;

App.propTypes = {

};