import { createAction, handleActions } from "redux-actions";

import { getUserList } from "../../../api/users";

const getListOfUsers = createAction("REQUEST_LIST_OF_USERS");
const loadingGetList = createAction("REQUEST_LIST_LOADING");

export const getListOfUsersActions = (page) => async (dispatch, getState) => {
    try {
        dispatch(loadingGetList());
        const { data } = await getUserList({
            page,
        });
        dispatch(loadingGetList());
        dispatch(getListOfUsers(data.data));
    } catch (error) {
        console.log(error);
    }
};

const initialState = {
    response: [],
    loading: false,
};

const requestListOfUsersReducer = handleActions(
    {
        [getListOfUsers.toString()]: (state, { payload }) => ({
            ...state,
            response: payload,
        }),
        [loadingGetList.toString()]: (state) => ({
            ...state,
            loading: !state.loading,
        }),
    },
    initialState
);

export default requestListOfUsersReducer;
