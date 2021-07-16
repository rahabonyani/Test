import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import requestLoginReducer from "../../../actions/auth/login";
import requestRegisterReducer from "../../../actions/auth/register";
import requestListOfUsersReducer from "../../../actions/users/listOfUsers";
import requestUserDetailsReducer from "../../../actions/users/userDetails";

const auth = {
    loginReducer: requestLoginReducer,
    registerReducer: requestRegisterReducer,
};
const user = {
    ListOfUsersReducer: requestListOfUsersReducer,
    UserDetailsReducer: requestUserDetailsReducer,
};

const rootReducer = () =>
    combineReducers({
        ...auth,
        ...user,
    });

const store = createStore(
    rootReducer(),
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(thunk))
        : compose(applyMiddleware(thunk))
);

export default store;
