import { createAction, handleActions } from "redux-actions";

import { getUserDetails } from "../../../api/users";

const getUserDetailsAction = createAction("REQUEST_USER_DETAILS");

export const requestUserDetailsActions = (id) => async (dispatch) => {
    try {
        const { data } = await getUserDetails({
            id,
        });
        dispatch(getUserDetailsAction(data.data));
    } catch (error) {
        console.log(error);
    }
};

const initialState = {
    response: [],
};

const requestUserDetailsReducer = handleActions(
    {
        [getUserDetailsAction.toString()]: (state, { payload }) => ({
            ...state,
            response: payload,
        }),
    },
    initialState
);

export default requestUserDetailsReducer;
