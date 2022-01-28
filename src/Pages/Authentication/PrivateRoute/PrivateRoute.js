import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
      </div>
    }
    else if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    
};

export default PrivateRoute;