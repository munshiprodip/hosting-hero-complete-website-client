import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="col-md-12 d-flex justify-content-center align-items-center"
    >
      <div className="col-md-6 text-center">
        <h3 className="text-danger">
          You don't have permission to access this page
        </h3>
        <Link className="btn btn-primary" to="/">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;
