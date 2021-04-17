import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../App";

const AdminRoute = ({ children, ...rest }) => {
  const { LoggedInUserInfo, isAdmin } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        LoggedInUserInfo?.displayName ? (
          isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/accessDenied",
                state: { from: location },
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
