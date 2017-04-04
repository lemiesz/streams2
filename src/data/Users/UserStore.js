import {ReduceStore} from 'flux/utils';
import UsersActionsTypes from "./UsersActionTypes";
import StreamsDispatcher from "../StreamsDispatcher";

class UserStore extends ReduceStore {

    constructor() {
        super(StreamsDispatcher);
    }

    getInitialState() {
        return null;
    }

    reduce(state, action) {
        switch (action.type) {
            case UsersActionsTypes.USER_CHANGE:
                return action.value;
            default:
                return state;
        }
    }

}

export default new UserStore();
