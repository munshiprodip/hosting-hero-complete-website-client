import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const MyReview = () => {
  const { LoggedInUserInfo } = useContext(UserContext);
  const [myReviewed, setMyReviewed] = useState([]);

  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/review/${LoggedInUserInfo.email}`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setMyReviewed(data);
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
          <DashboardSideNav active="my-review" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="My Review List" />
          <div className="col-md-12 p-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th width="50%">My Review</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {myReviewed.map((row, i) => (
                  <tr key={i}>
                    <td>{row.packageName}</td>
                    <td>{row.review}</td>
                    <td>
                      {moment(row.date).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
