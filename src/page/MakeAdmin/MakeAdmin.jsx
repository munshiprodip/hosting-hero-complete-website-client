import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const MakeAdmin = () => {
  const [inputEmail, setInputEmail] = useState({});
  const { LoggedInUserInfo, setShowAlert } = useContext(UserContext);
  const handleInputChange = (event) => {
    setInputEmail({
      author: LoggedInUserInfo.displayName,
      email: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const uri = `https://sheltered-shelf-48745.herokuapp.com/makeAdmin/`;
    axios
      .post(uri, inputEmail)
      .then(function (response) {
        // handle success
        setShowAlert({
          status: true,
          title: "Success",
          text: "New admin created successfully",
          type: "success",
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setShowAlert({
          status: true,
          title: "Ops....",
          text: "Something wrong",
          type: "error",
        });
        console.log(error);
      });
  };
  console.log(inputEmail);
  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="new-admin" navType="admin" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Make Admin" />
          <div className="col-md-12 p-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <form onSubmit={handleSubmit} className="form">
                <input
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email address"
                />
                <button className="btn btn-success m-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
