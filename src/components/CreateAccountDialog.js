import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';

class CreateAccountDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
            passwordMatch: true,
            dialogValueEmail: "",
            dialogValuePassword: "",
            dialogValueConfirmPassword: "",
            dialogValueArtistName: "",
            dialogValueSoundCloud: "",
            handleDialogAboutMe: ""
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

    handleDialogEmail = (event) => {
        this.setState({
            dialogValueEmail: event.target.value
        })
    }

    handleDialogPassword = (event) => {
        this.setState({
            dialogValuePassword: event.target.value
        })
    }

    handleDialogConfirmPassword = (event) => {
        this.setState({
            dialogValueConfirmPassword: event.target.value
        })
    }

    handleDialogArtistName = (event) => {
        this.setState({
            dialogValueArtistName: event.target.value
        })
    }

    handleDialogSoundCloud = (event) => {
        this.setState({
            dialogValueSoundCloud: event.target.value
        })
    }

    handleDialogAboutMe = (event) => {
        this.setState({
            dialogValueAboutMe: event.target.value
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
            dialogValueEmail: "",
            dialogValuePassword: "",
            dialogValueConfirmPassword: "",
            dialogValueArtistName: "",
            dialogValueSoundCloud: "",
            handleDialogAboutMe: ""
        });
        this.setProps({
            open: false
        });
    }

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

        var _this = this;
        firebase.database().ref('users/' + this.state.dialogValueArtistName).set({
            email: this.state.dialogValueEmail,
            password: this.state.dialogValuePassword,
            artistName: this.state.dialogValueArtistName,
            soundcloud: this.state.dialogValueSoundCloud,
            aboutMe: this.state.dialogValueAboutMe
        });
        this.setState({
            open: false
        });

    }

    render() {
        var actions = <RaisedButton onTouchTap={this.onSubmitDialog} primary={true} label="Create Account" />;
        var errorText = !this.state.passwordMatch ? "Password does not match" : null; 
        return (
            <Dialog
                title="Create your account"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={(this.handleRequestClose)}
                >
                <TextField onChange={this.handleDialogEmail} value={this.state.dialogValueEmail} floatingLabelText="Email" multiLine={true} />
                <TextField onChange={this.handleDialogPassword} value={this.state.dialogValuePassword} floatingLabelText="Password" multiLine={true} />
                <TextField onChange={this.handleDialogConfirmPassword} value={this.state.dialogValueConfirmPassword} floatingLabelText="Confrim Password" errorText={errorText} multiLine={true} />
                <TextField onChange={this.handleDialogArtistName} value={this.state.dialogValueArtistName} floatingLabelText="Artist Name" multiLine={true} />
                <TextField onChange={this.handleDialogSoundCloud} value={this.state.dialogValueSoundCloud} floatingLabelText="Link to soundcloud" multiLine={true} />
                <TextField onChange={this.handleDialogAboutMe} value={this.state.dialogValueAboutMe} floatingLabelText="About Me" multiLine={true} />
            </Dialog>
        )
    }
}

CreateAccountDialog.propTypes = { open: React.PropTypes.any }

export default CreateAccountDialog;