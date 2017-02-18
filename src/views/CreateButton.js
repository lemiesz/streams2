import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AddStreamDialog from './AddStreamDialog.js';
import CreateAccountDialog from './CreateAccountDialog';

class CreateButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    toggleAndAnchor = (event) => {
        this.props.toggleCreateButton();
        this.setState({anchorEl: event.currentTarget});
    };

    render() {
        return (
            <div>
                <FlatButton
                    style={this.props.over}
                    primary={true}
                    onTouchTap={this.toggleAndAnchor}
                    label={"Create New Stream"}/>
                <Popover
                    open={this.props.createButtonShow}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.toggleAndAnchor}>
                    <Menu>
                        <MenuItem onTouchTap={() => {
                        }} primaryText="Add Existing Stream"/>
                        <MenuItem onTouchTap={() => {
                        }} primaryText="Create New User Account"/>
                    </Menu>
                </Popover>
                <AddStreamDialog open={this.props.addStreamDialogShow}/>
                <CreateAccountDialog open={this.props.createUserDialogShow}/>
            </div>
        )
    }
}

CreateButton.propTypes = {style: React.PropTypes.object};


export default CreateButton;