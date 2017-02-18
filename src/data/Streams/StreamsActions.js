import StreamsDispatcher from '../StreamsDispatcher';
import StreamsActionTypes from './StreamsActionsTypes';

const Actions = {
    toggleUserCreate(value) {
        StreamsDispatcher.dispatch({
            type: StreamsActionTypes.USER_CREATE_TOGGLE,
            value: value,
        });
    },
};

export default Actions;