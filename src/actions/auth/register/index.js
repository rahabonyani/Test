import { createAction, handleActions } from "redux-actions";

import { registerUser } from "../../../api/auth";
import { setCookies } from "../../../core/Cookie";

const postRegisterEmail = createAction("REQUEST_REGISTER_EMAIL");
const loadingRegister = createAction("REQUEST_LOADING");

export const requestRegisterAction =
    (formData) => async (dispatch, getState) => {
        try {
            dispatch(loadingRegister());

            const { data } = await registerUser({
                ...formData,
            });
            setCookies("token", data?.token);

            dispatch(loadingRegister());
            dispatch(postRegisterEmail(data));
        } catch (error) {
            console.log(error);
        }
    };

const initialState = {
    response: [],
    loading: false,
};

const requestRegisterReducer = handleActions(
    {
        [postRegisterEmail.toString()]: (state, { payload }) => ({
            ...state,
            response: payload,
        }),
        [loadingRegister.toString()]: (state) => ({
            ...state,
            loading: !state.loading,
        }),
    },
    initialState
);

export default requestRegisterReducer;
