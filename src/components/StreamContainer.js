import React from 'react';
import Paper from 'material-ui/Paper';
import firebase from 'firebase';

const paperStyle = {
    width: "100%",
    height: "100%"
}

class StreamContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tilesData: []
        }
    }

    componentDidMount = () => {
        var streamsRef = firebase.database().ref('/streams/');
        streamsRef.on('value', (snapshot) => {
        var tilesData = [];

        snapshot.forEach((item) => {
            tilesData.push(item.val());
        });
        if (!tilesData) {
            tilesData = [];
        }
        console.log(tilesData);
        this.setState({
            tilesData: tilesData
        });
        })
    }

    render() {
        var innerRender;
        if(this.state.tilesData.length === 0 ) {
            var innerRender = "Nothing to display";
        } 
        console.log(this.state.tilesData);

        return (
            <Paper style={paperStyle} zDepth={2}>
                <div>
                    {innerRender};
                </div>
            </Paper>  
        );
    }

} 

export default StreamContainer;