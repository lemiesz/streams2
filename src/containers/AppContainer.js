import {Container} from 'flux/utils';
import React from 'react';
import StreamsStore from "../data/Streams/StreamsStore";
import App from "./App";

class AppContainer extends React.Component {

    static getStores() {
        return [StreamsStore]
    }

    static calculateState(prevState) {
        return {
            streams: StreamsStore.getState()
        }
    }

    render() {
        return <App {...this.state}/>
    }

}

export default Container.create(AppContainer);