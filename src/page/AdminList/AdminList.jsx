import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const AdminList = () => {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/makeAdmin/`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setAdminList(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="admin-list" navType="admin" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="My Review List" />
          <div className="col-md-12 p-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {adminList.map((row, i) => (
                  <tr key={i}>
                    <td>{row.email}</td>
                    <td>{row.author}</td>
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

export default AdminList;
