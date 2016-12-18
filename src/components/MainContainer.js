import React from 'react';
import StreamGrid from './StreamGrid.js';
import CreateButton from './CreateButton';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"mainContainer"}>
                <CreateButton />
                {this.props.children}
            </div>  
        );
    }
}

export default MainContainer;