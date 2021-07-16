import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ path, component, ...rest }) => {
    if (Cookies.get("token")) {
        return <Route exact path={path} {...rest} component={component} />;
    } 
        return <Redirect to="/login" />;
    
};

export default PrivateRoute;
