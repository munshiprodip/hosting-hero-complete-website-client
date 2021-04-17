import React, { useContext } from "react";
import { UserContext } from "../../App";
import { signOut } from "../../Firebase/FirebaseAuthentication";

const DashboardTopNav = ({ pageTitle }) => {
  const { LoggedInUserInfo, setisAuth } = useContext(UserContext);
  const handleSignOut = () => {
    setisAuth(false);
    signOut();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        <b className="navbar-brand">{pageTitle}</b>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
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
                  <button className="dropdown-item" onClick={handleSignOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardTopNav;
