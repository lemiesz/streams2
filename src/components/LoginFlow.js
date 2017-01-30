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


import "../css/LoginFlow.css";



class LoginFlow extends React.Component {
    state = {
        stepIndex: 0,
        textMap: {
            textMap: "",
            password: "",
            confirmPassword: "",
            artistName: "",
            soundcloud: "",
            facebook: "",
            bio: ""
        }
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
                                <FlatButton onChange={this.handleImageChoice} labelPosition="before" label="Upload Photo" primary={true}>
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
                    </div>
                </div>
            </div>
        )
    }

    handleImageChoice = (event) => {
        console.log(event.target.files);
    };

    handleInputChange = (type, event) => {
        const extensionObject = {};
        extensionObject[type] = event.target.value;
        this.setState({textMap: _.extend(this.state.textMap, extensionObject)});
    }

}

export default LoginFlow;