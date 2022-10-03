import { css } from "@emotion/react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useAuth from "../../../hooks/useAuth";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <ClipLoader  css={override} size={100} />
    }
    else if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    
};

export default PrivateRoute;