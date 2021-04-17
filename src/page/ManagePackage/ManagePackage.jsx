import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const ManagePackage = () => {
  const { setShowAlert } = useContext(UserContext);
  const [packageData, setPackageData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/package/`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setPackageData(data);
        setReload(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [reload]);
  console.log(packageData);

  const deletePackage = (id) => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/package/${id}`;
    axios
      .delete(uri)
      .then(function (response) {
        // handle success
        setShowAlert({
          status: true,
          title: "Success",
          text: "Package deleted successfully",
          type: "success",
        });
        setReload(true);
      })
      .catch(function (error) {
        // handle error
        setShowAlert({
          status: true,
          title: "Ops....",
          text: "Something else successfully",
          type: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="manage-package" navType="admin" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Manage Package" />
          <div className="col-md-12 p-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th width="50%" scope="col">
                    Description
                  </th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {packageData.map((row, i) => (
                  <tr>
                    <td>
                      <img
                        style={{ width: "70px", height: "70px" }}
                        src={row.image}
                        alt="package"
                      />
                    </td>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                    <td>{row.price}</td>
                    <td>
                      <button class="btn btn-primary btn-sm mx-1">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button
                        onClick={() => deletePackage(row._id)}
                        class="btn btn-danger btn-sm mx-1"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
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

export default ManagePackage;
