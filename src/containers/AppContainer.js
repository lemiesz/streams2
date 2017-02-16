import {Container} from 'flux/utils';
import StreamsStore from "../data/StreamsStore";
import App from "./App";

const getState = () => {
    return {
        streams: StreamsStore.getState(),
    }
};

const getStores = () => {
    return [
        StreamsStore,
    ];
};

export default Container.createFunctional(App, getStores, getState)''