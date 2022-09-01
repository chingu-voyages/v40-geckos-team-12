import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/slices/userSlice/userSlice";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
