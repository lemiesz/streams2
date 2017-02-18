import {ReduceStore} from 'flux/utils';
import NavActionTypes from "./NavActionTypes";
import StreamsDispatcher from '../StreamsDispatcher';
import NavBarState from "./NavBarState";

class DropDownStore extends ReduceStore {

    constructor() {
        super(StreamsDispatcher);
    }

    getInitialState() {
        return new NavBarState();
    }

    reduce(state, action) {
        switch (action.type) {
            case NavActionTypes.UPDATE_DROPDOWN_STATE:
                if(!action.value) {
                    return state;
                }
                return new NavBarState({dropDownValue: action.value})
            default:
                return state;
        }
    }

}

export default new DropDownStore();