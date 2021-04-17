import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { signOut } from "../../Firebase/FirebaseAuthentication";

const MainNavigation = () => {
  const { LoggedInUserInfo, isAuth } = useContext(UserContext);
  const history = useHistory();
  console.log(isAuth);
  // const login = () => {
  //   history.push("/login");
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          HOSTING HERO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/order">
              Order
            </Link>
            <Link className="nav-link" to="/admin/dashboard">
              Admin
            </Link>
            {isAuth ? (
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {LoggedInUserInfo.displayName}
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button className="dropdown-item" onClick={() => signOut()}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
