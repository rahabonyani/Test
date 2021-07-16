import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import PrivateRoute from "./Private";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/users" component={Users} />
            </Switch>
        </Router>
    );
};

export default Routes;
