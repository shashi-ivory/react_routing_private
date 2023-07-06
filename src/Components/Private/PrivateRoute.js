import React from "react";
import { Navigate, Route } from "react-router-dom";
import Login from "../Authpage/Login/Login";

function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default PrivateRoute;
