import React from "react";
import { Outlet } from "react-router-dom";
import { LoggedInUser } from "../Login/LoggedInUser";
import Login from "../Login/Login";


const ProtectedRoutes = ({ isAuth }) => {
  isAuth = LoggedInUser()? true : false;
  return isAuth ? <Outlet /> : <Login/>;
};

export default ProtectedRoutes;