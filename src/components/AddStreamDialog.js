import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';

class AddStreamDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.handleDialogTextChange1 = this.handleDialogTextChange1.bind(this);
        this.handleDialogTextChange2 = this.handleDialogTextChange2.bind(this);
        this.handleDialogTextChange3 = this.handleDialogTextChange3.bind(this);

        this.onSubmitDialog = this.onSubmitDialog.bind(this);
        this.state = {
            open: props.open,
            dialogValue1: "",
            dialogValue2: "",
            dialogValue3: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,           
            dialogValue1: "",
            dialogValue2: "",
            dialogValue3: ""
        });
        this.props.openCallback();
    }

    handleDialogTextChange1(event) {
        this.setState({
            dialogValue1: event.target.value
        })
    }

    handleDialogTextChange2(event) {
        this.setState({
            dialogValue2: event.target.value
        })
    }

    handleDialogTextChange3(event) {
        this.setState({
            dialogValue3: event.target.value
        })
    }

    onSubmitDialog() {
        // This prevents ghost click.
        event.preventDefault();

        firebase.database().ref('streams/')
                         .once("value")
                         .then((snapshot) => {
                            this.createDatabaseEntry("Robert", this.state.dialogValue2, this.state.dialogValue3, this.state.dialogValue1, snapshot.numChildren());
                         })

        this.setState({
            open: false
        });
    }

    createDatabaseEntry = (username, title, author, url, identifier) => {
        firebase.database().ref('streams/' + identifier).set({
            username: username,
            title: title,
            author: author,
            url: url
        });
    }

    render() {
        var actions = <RaisedButton onTouchTap={this.onSubmitDialog} primary={true} label="Submit Stream" />;
        return (
            <Dialog id="dialog"
                title="Add Your Stream"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={(this.handleRequestClose)}
                >
                <TextField onChange={this.handleDialogTextChange1} value={this.state.dialogValue1} floatingLabelText="Paste Stream Embed Code" multiLine={true} />
                <TextField onChange={this.handleDialogTextChange2} value={this.state.dialogValue2} floatingLabelText="StreamTitle" multiLine={true} />
                <TextField onChange={this.handleDialogTextChange3} value={this.state.dialogValue3} floatingLabelText="Artist Name" multiLine={true} />

            </Dialog>
        )
    }
}

AddStreamDialog.propTypes = { open: React.PropTypes.any, openCallback: React.PropTypes.func }

export default AddStreamDialog;