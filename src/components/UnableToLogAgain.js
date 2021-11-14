import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../contexts/Auth";


const UnableToLogAgain = ({ path, component }) => {
    const { isAuthenticated } = useContext(Auth);
    return isAuthenticated ? (
        <Redirect to="/" />
    ) : (
        <Route exact path={path} component={component} />
    )
}

export default UnableToLogAgain;