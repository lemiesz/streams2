import React from 'react';
import Dialog from 'material-ui/Dialog';
import LoginFlow from './Login/LoginFlow';
import "../css/CreateAccountDialog.css";

class CreateAccountDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open
        })
    }

    handleRequestClose() {
        this.setState({
            open: false,           
        });
        this.setProps({
            open: false
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    onSubmitDialog = () => {
        // This prevents ghost click.
        console.log("creating user account");
        event.preventDefault();

        if(this.state.dialogValuePassword !== this.state.dialogValueConfirmPassword) {
            this.setState({
                passwordMatch: false
            });
            return;
        }

        this.setState({
            open: false
        });

    }

    render() {
        return (
            <Dialog
                title="Create your account"
                modal={false}
                open={this.state.open}
                bodyClassName="CreateAccountDialog-main"
                onRequestClose={(this.handleRequestClose)}
                >
                <LoginFlow />
            </Dialog>
        )
    }
}

CreateAccountDialog.propTypes = { open: React.PropTypes.any }

export default CreateAccountDialog;