import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddStreamDialog from './AddStreamDialog.js';

class CreateButton extends React.Component {

    render() {
        return (
            <div>
                <FlatButton
                    style={this.props.over}
                    primary={true}
                    onTouchTap={() => this.props.toggleAddStreamDialog()}
                    label={"Create New Stream"}/>
                <AddStreamDialog {...this.props}/>
            </div>
        )
    }
}

CreateButton.propTypes = {style: React.PropTypes.object};


export default CreateButton;