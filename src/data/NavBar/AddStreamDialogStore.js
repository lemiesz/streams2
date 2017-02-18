import {ReduceStore} from 'flux/utils';
import StreamsDispatcher from '../StreamsDispatcher';
import NavActionTypes from "./NavActionTypes";

class AddStreamDialogStore extends ReduceStore {

    constructor() {
        super(StreamsDispatcher);
    }

    getInitialState() {
        return false;
    }

    reduce(state, action) {
        switch (action.type) {
            case NavActionTypes.USER_CREATE_TOGGLE:
                return !state;
            case NavActionTypes.TOGGLE_ADD_STREAM:
                return !state;
            default:
                return state;
        }
    }

}

export default new AddStreamDialogStore();
