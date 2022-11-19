import { css } from "@emotion/react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useAuth from "../../hooks/useAuth";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const AdminRoute = ({ children , ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    
    let location = useLocation();

    if (isLoading) {
        return <ClipLoader  css={override} size={100} />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
    
};

export default AdminRoute;