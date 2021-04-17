import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const AddPackage = () => {
  const { setShowAlert } = useContext(UserContext);
  const [inputData, setInputData] = useState({});
  const [imageUploaded, setImageUploaded] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = async (event) => {
    setImageUploaded(false);
    const data = new FormData();
    data.set("key", "63f2804086b7322081c1e1738bf19965");
    data.append("image", event.target.files[0]);

    try {
      const response = await axios.post("https://api.imgbb.com/1/upload", data);

      const imageUri = response.data.data.display_url;
      setInputData({
        ...inputData,
        image: imageUri,
      });
      setImageUploaded(true);
    } catch (error) {
      setImageUploaded(false);
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // submit
    const uri = `https://sheltered-shelf-48745.herokuapp.com/package/`;
    axios
      .post(uri, inputData)
      .then(function (response) {
        // handle success
        setShowAlert({
          status: true,
          title: "Success",
          text: "New Package added successfully",
          type: "success",
        });
        history.push("./managePackage");
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
    // end
  };
  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="add-package" navType="admin" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Add New Package" />
          <div className="col-md-12 p-5">
            <form onSubmit={handleSubmit} className="form">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      name="price"
                      type="number"
                      className="form-control"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                      name="image"
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <textarea
                      name="description"
                      type="text"
                      className="form-control"
                      onChange={handleInputChange}
                      style={{ height: "210px" }}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <button
                    type="submit"
                    className={`btn btn-primary ${
                      imageUploaded ? "" : "disabled"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
