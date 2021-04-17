import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const MyOrder = () => {
  const { LoggedInUserInfo } = useContext(UserContext);
  const [orderedData, setOrderedData] = useState([]);
  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/order/${LoggedInUserInfo.email}`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setOrderedData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [LoggedInUserInfo]);

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="my-order" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Order List" />
          <div className="col-md-12 p-5">
            <div className="row">
              {orderedData?.map((row, i) => (
                <div key={i} className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        {row.packageName}
                        <span
                          className={`badge float-end  ${
                            row.status === "Pending"
                              ? "bg-danger"
                              : row.status === "Processing"
                              ? "bg-info"
                              : "bg-warning"
                          }`}
                        >
                          {row.status}
                        </span>{" "}
                      </h5>
                      <p className="card-text">{row.packageDescription}</p>
                      <p className="card-text">
                        {moment(row.date).format("MMMM Do YYYY, h:mm:ss a")}
                        <span className="float-end">
                          <Link
                            to={`/review/${row.packageId}`}
                            className="btn btn-primary btn-sm"
                          >
                            Review
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
