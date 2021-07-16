import { createAction, handleActions } from "redux-actions";

import { loginUser } from "../../../api/auth";
import { setCookies } from "../../../core/Cookie";

const postLoginEmail = createAction("REQUEST_LOGIN_EMAIL");
const loadingLogin = createAction("REQUEST_LOADING");

export const requestLoginAction = (formData) => async (dispatch, getState) => {
    try {
        dispatch(loadingLogin());
        const { data } = await loginUser({
            ...formData,
        });
        setCookies("token", data?.token);

        dispatch(loadingLogin());
        dispatch(postLoginEmail(data));
    } catch (error) {
        console.log(error);
    }
};

const initialState = {
    token: [],
    loading: false,
};

const requestLoginReducer = handleActions(
    {
        [postLoginEmail.toString()]: (state, { payload }) => ({
            ...state,
            token: payload,
        }),
        [loadingLogin.toString()]: (state) => ({
            ...state,
            loading: !state.loading,
        }),
    },
    initialState
);

export default requestLoginReducer;
