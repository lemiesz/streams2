import StreamsDispatcher from "../StreamsDispatcher";
import UserActionTypes from "./UsersActionTypes";

const UsersActions = {
    userChange(user) {
        StreamsDispatcher.dispatch({
            type: UserActionTypes.USER_CHANGE,
            value: user
        });
    }
};

export default UsersActions;