import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const OrderList = () => {
  const { setShowAlert } = useContext(UserContext);
  const [orderedData, setOrderedData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/order/`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setOrderedData(data);
        setReload(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [reload]);

  const handleStatusChange = (id, event) => {
    const status = { status: event.target.value };

    const uri = `https://sheltered-shelf-48745.herokuapp.com/order/${id}`;
    axios
      .put(uri, status)
      .then(function (response) {
        // handle success
        setShowAlert({
          status: true,
          title: "Success",
          text: "Order status changed successfully",
          type: "success",
        });
        setReload(true);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setShowAlert({
          status: true,
          title: "Ops....",
          text: "Something was wrong",
          type: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="all-order" navType="admin" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Manage Order" />
          <div className="col-md-12 p-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Pay With</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderedData.map((row, i) => (
                  <tr key={i}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.packageName}</td>
                    <td>{row.payWith}</td>
                    <td>
                      <select
                        className={`form-control  ${
                          row.status === "Pending"
                            ? "text-danger"
                            : row.status === "Processing"
                            ? "text-info"
                            : "text-warning"
                        }`}
                        name="status"
                        onChange={(e) => handleStatusChange(row._id, e)}
                      >
                        <option
                          value="Pending"
                          selected={row.status === "Pending" ? "selected" : ""}
                        >
                          Pending
                        </option>
                        <option
                          value="Processing"
                          selected={
                            row.status === "Processing" ? "selected" : ""
                          }
                        >
                          Processing
                        </option>
                        <option
                          value="Complete"
                          selected={row.status === "Complete" ? "selected" : ""}
                        >
                          Complete
                        </option>
                      </select>
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

export default OrderList;
