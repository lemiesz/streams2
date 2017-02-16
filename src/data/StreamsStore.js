import {ReduceStore} from 'flux/utils';
import StreamsActionTypes from './StreamsActionsTypes';
import StreamsDispatcher from './StreamsDispatcher';
import Immutable from 'immutable';

class StreamsStore extends ReduceStore {

    constructor() {
        super(StreamsDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case StreamsActionTypes.USER_CREATE_TOGGLE:
                return state;
            default:
                return state;
        }
    }

}

export default new StreamsStore();

