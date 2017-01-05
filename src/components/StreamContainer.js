import React from 'react';
import _ from 'underscore';
import Paper from 'material-ui/Paper';
import firebase from 'firebase';

import "../css/StreamContainer.css";

const paperStyle = {
    width: "100%",
    height: "100%"
}

class StreamContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stream: null
        }
    }
  
    queryFirebaseForStream = (streamId) => {
        var streamsRef = firebase.database().ref('/streams/' + streamId);
        streamsRef.on('value', (snapshot) => {
            this.setState({stream: snapshot.val()});
        });    
    }

    componentWillMount() {
        this.queryFirebaseForStream(this.props.streamId);
    }

    componentWillUpdate(nextProps, nextState) {
        if(!_.isEqual(this.props, nextProps)) {
            this.queryFirebaseForStream(nextProps.streamId);
        }
        window.FB.XFBML.parse();
    }

    componentDidUpdate() {
        window.FB.XFBML.parse();
    }

    render() {
        var innerRender;
        if(this.state.stream === null ) {
            innerRender = "Nothing to display";
            console.log(this.props)
        } 
        else {
          var stream = _.first(this.state.tilesData, 1);
          innerRender =   
          <div
              className="fb-video"
              data-href={this.state.stream.url}
              data-width="500"
              data-allowfullscreen="true"
              data-autoplay="false">
          </div>
        }

        return (
            <Paper style={paperStyle} zDepth={1}>
                <div className="StreamContainer-render">
                    {innerRender}
                </div>
            </Paper>  
        );
    }

} 

StreamContainer.defaultProps = {
    streamId: "false"
}

export default StreamContainer;