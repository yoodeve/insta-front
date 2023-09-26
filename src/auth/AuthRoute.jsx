import React, { useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

function AuthRoute({ element }) {
  const { pathname } = useLocation();
  const permitAllPath = ["/accounts"];
  const [authenticated, setAuthenticated] = useState(false);

  for (let path of permitAllPath) {
    if (pathname.startsWith(path)) {
      if (authenticated) {
        return <Navigate to="/" />;
      }
      return element;
    }
  }

  if (!authenticated) {
    <Navigate to="/accounts/login" />;
  }

  return element;
}

export default AuthRoute;
