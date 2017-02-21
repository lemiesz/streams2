import React from "react"
import _ from "underscore";
import {
    Step,
    Stepper,
    StepButton,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';

import "../../css/Login/LoginFlow.css";


class LoginFlow extends React.Component {
    state = {
        stepIndex: 0,
        textMap: {
            artistName: "",
            email: "",
            password: "",
            confirmPassword: "",
            soundcloud: "",
            facebook: "",
            bio: ""
        },
        imageFile: {}
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div className="LoginFlow-step">
                        <TextField onChange={this.handleInputChange.bind(this, "email")}
                                   value={this.state.textMap.email} hintText="Email"/>
                        <TextField onChange={this.handleInputChange.bind(this, "password")}
                                   value={this.state.textMap.password} hintText="Password"/>
                        <TextField onChange={this.handleInputChange.bind(this, "confirmPassword")}
                                   value={this.state.textMap.confirmPassword} hintText="Confirm Password"/>
                    </div>
                );
            case 1:
                const inputStyle = {
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0,
                };
                return (
                    <div className="LoginFlow-step">
                        <div>
                            We need some info about you so we can generate your profile.
                            Dont worry you can edit this later
                        </div>
                        <div className="LoginFlow-step-step2">
                            <div className="LoginFlow-step-step2-text">
                                <TextField onChange={this.handleInputChange.bind(this, "artistName")}
                                           value={this.state.textMap.artistName} hintText="Artist Name"/>
                                <TextField onChange={this.handleInputChange.bind(this, "soundcloud")}
                                           value={this.state.textMap.soundcloud} hintText="SoundCloud url"/>
                                <TextField onChange={this.handleInputChange.bind(this, "facebook")}
                                           value={this.state.textMap.facebook} hintText="Facebook url"/>
                            </div>
                            <div>
                                <FlatButton onChange={this.handleImageChoice} labelPosition="before"
                                            label="Upload Photo" primary={true}>
                                    <input type="file" style={inputStyle}/>
                                </FlatButton>
                            </div>
                        </div>
                    </div>);
            case 2:
                return (
                    <div className="LoginFlow-step">
                        <div>
                            Gives us a short description of you as an artist
                        </div>
                        <TextField onChange={this.handleInputChange.bind(this, "bio")} value={this.state.textMap.bio}
                                   fullWidth={true} multiLine={true} hintText="Bio"/>
                    </div>
                );
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    };


    render() {
        const {stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        return (
            <div className="LoginFlow-main">
                <Stepper linear={false} activeStep={stepIndex}>
                    <Step>
                        <StepButton onClick={() => this.setState({stepIndex: 0})}>
                            Account Info
                        </StepButton>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.setState({stepIndex: 1})}>
                            Info
                        </StepButton>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.setState({stepIndex: 2})}>
                            Artist Info
                        </StepButton>
                    </Step>
                </Stepper>
                {this.getStepContent(stepIndex)}
                <div style={contentStyle}>
                    <div style={{marginTop: 12}}>
                        <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            onTouchTap={this.handlePrev}
                            style={{marginRight: 12}}
                        />
                        <RaisedButton
                            label="Next"
                            disabled={stepIndex === 2}
                            primary={true}
                            onTouchTap={this.handleNext}
                        />
                        <RaisedButton label="Complete"
                                      disabled={stepIndex !== 2}
                                      primary={true}
                                      onTouchTap={this.submitLoginForm}
                        />
                    </div>
                </div>
            </div>
        )
    }

    submitLoginForm = () => {
        var fileToSubmit = this.state.imageFile;
        var storageRef = firebase.storage().ref();
        console.log(storageRef);
        var fileRef = storageRef.child("artistImage:" + this.state.textMap.artistName);
        fileRef.put(fileToSubmit).then(() => {
            console.log("uploaded an image");
        }).catch((error) => {
            console.log(error);
        });

        firebase.database().ref('users/').once("value").then(
            (snapshot) => {
                this.createDatabaseEntry(this.state.textMap.artistName, this.state.textMap.email, this.state.textMap.password, this.state.textMap.soundcloud, this.state.textMap.facebook, snapshot.numChildren());
            })

    };

    createDatabaseEntry = (artistName, email, password, soundcloud, facebook, identifier) => {
        firebase.database().ref('users/' + identifier)
            .set({
                artistName: artistName,
                email: email,
                password: password,
                soundcloud: soundcloud,
                facebook: facebook,
                imageFileName: "artistImage:" + artistName
            });
    };

    handleImageChoice = (event) => {
        var files = event.target.files;
        var fileToSubmit = _.first(files);
        console.log(fileToSubmit);
        this.setState({imageFile: fileToSubmit});
    };

    handleInputChange = (type, event) => {
        const extensionObject = {};
        extensionObject[type] = event.target.value;
        this.setState({textMap: _.extend(this.state.textMap, extensionObject)});
    }

}

export default LoginFlow;