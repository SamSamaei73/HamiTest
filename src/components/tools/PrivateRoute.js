import React, { useContext } from "react";
import AuthContext from "../../Context/Auth/authContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  //console.log(location.pathname);
  const authContext = useContext(AuthContext);
  const redirectPath = "/login";
  // isAllowed={
  //!!user && user.permissions.includes('analyze')
  //}
  //isAllowed={!!user && user.roles.includes('admin')}

  const { user } = authContext;
  if (!user) {
    return <Navigate to={redirectPath} state={{ from: location.pathname }} />;
  }

  return children ? children : <Outlet />;
};

// const ProtectedRoute = ({
//   isAllowed,
//   redirectPath = "/NewLogin",
//   children,
// }) => {
//   const authContext = useContext(AuthContext);

//   //console.log("from", children);
//   const { user } = authContext;
//   if (!user) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return children ? children : <Outlet />;
// };

export default ProtectedRoute;
