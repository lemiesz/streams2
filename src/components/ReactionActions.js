import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Heat from "material-ui/svg-icons/social/whatshot";
import Happy from "material-ui/svg-icons/social/mood";
import Sad from "material-ui/svg-icons/social/mood-bad";

import '../css/ReactionActions.css';

const style = {
  marginRight: 10,
  marginTop: 10
};

class ReactionActions extends React.Component {

    render() {
        return (
            <div className="ReactionActions-container">
                <FloatingActionButton backgroundColor="#ff2323" style={style} >
                    <Sad/>
                </FloatingActionButton >
                <FloatingActionButton backgroundColor="#1ea839" style={style}>
                    <Happy/>
                </FloatingActionButton>
                <FloatingActionButton backgroundColor="#ffbb28" style={style} >
                    <Heat/>
                </FloatingActionButton >
            </div>
        )
    }

} 

export default ReactionActions;