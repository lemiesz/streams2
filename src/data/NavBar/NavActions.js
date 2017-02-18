import StreamsDispatcher from '../StreamsDispatcher';
import NavActionTypes from './NavActionTypes';

const NavActions = {

    toggleCreateButton() {
        StreamsDispatcher.dispatch({
            type: NavActionTypes.TOGGLE_CREATE_BUTTON
        })
    },

    toggleCreateAccount() {
        StreamsDispatcher.dispatch({
            type: NavActionTypes.TOGGLE_CREATE_ACCOUNT,
        })
    },

    updateDropDown(value) {
        StreamsDispatcher.dispatch({
            type: NavActionTypes.UPDATE_DROPDOWN_STATE,
            value: value,
        })
    },

    toggleAddStreamDialog() {
        StreamsDispatcher.dispatch({
            type: NavActionTypes.TOGGLE_ADD_STREAM
        })
    }

};

export default NavActions;
