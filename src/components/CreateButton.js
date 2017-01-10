import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AddStreamDialog from './AddStreamDialog.js';
import CreateAccountDialog from './CreateAccountDialog';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class CreateButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleMenuItem1 = this.handleMenuItem1.bind(this);

    this.state = {
      openMenu: false,
      openMenuItem1: false,
      openMenuItem2: false
    };
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openMenu: true,
      openMenuItem1: false,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      openMenu: false,      
    });
  };

  handleMenuItem1() {
    this.setState({
      openMenuItem1: true,
      openMenuItem2: false,
      openMenu: false
    })
  }

  handleMenuItem2 = () => {
    this.setState({
      openMenuItem1: false,
      openMenuItem2: true,
      openMenu: false
    })
  }

  openCallback = () => {
    this.setState({
      openMenuItem1: false
    })
  }

  render() {
    return (
      <div>
        <FlatButton
          style={this.props.over}
          primary={true}
          onTouchTap={this.handleTouchTap}
          label={"Create New Stream"} />
        <Popover
          open={this.state.openMenu}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          >
          <Menu>
            <MenuItem onTouchTap={this.handleMenuItem1} primaryText="Add Existing Stream" />
            <MenuItem onTouchTap={this.handleMenuItem2} primaryText="Create New User Account" />
          </Menu>
        </Popover>
        <AddStreamDialog openCallback={this.openCallback} open={this.state.openMenuItem1} />
        <CreateAccountDialog open={this.state.openMenuItem2} />
      </div>
    )
  }
}

CreateButton.propTypes = { style: React.PropTypes.object };


export default CreateButton;