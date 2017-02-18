import {ReduceStore} from 'flux/utils';
import StreamsDispatcher from '../StreamsDispatcher';
import NavActionTypes from "./NavActionTypes";


class CreateButtonStore extends ReduceStore {

    constructor() {
        super(StreamsDispatcher);
    }

    getInitialState() {
        return false;
    }

    reduce(state, action) {
        switch (action.type) {
            case NavActionTypes.TOGGLE_CREATE_ACCOUNT:
                return !state;
            case NavActionTypes.TOGGLE_ADD_STREAM:
                return !state;
            case NavActionTypes.TOGGLE_CREATE_BUTTON:
                return !state;
            default:
                return state;
        }
    }

}

export default new CreateButtonStore();