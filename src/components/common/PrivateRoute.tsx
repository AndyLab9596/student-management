import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { ApiConstants } from "../../constants";

export const PrivateRoute = (props: RouteProps) => {
  // Check user is logged in
  const isLoggedIn = Boolean(localStorage.getItem(ApiConstants.ACCESS_TOKEN));
  // If user haven't logged yet, redirect to login page
  if (!isLoggedIn) return <Redirect to="/login" />;
  // If user is already there then
  return <Route {...props} />;
};
