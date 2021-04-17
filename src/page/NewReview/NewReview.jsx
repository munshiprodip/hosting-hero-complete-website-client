import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const NewReview = () => {
  const { id } = useParams();
  const { LoggedInUserInfo, setShowAlert } = useContext(UserContext);
  const [reviewItem, setReviewItem] = useState({});
  const [formData, setFormData] = useState({});

  const history = useHistory();

  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/package/${id}`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data[0];
        setReviewItem(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    setFormData({
      name: LoggedInUserInfo.displayName,
      email: LoggedInUserInfo.email,
      image: LoggedInUserInfo.photoURL,
      packageName: reviewItem.name,
      packageId: reviewItem._id,
      review: event.target.value,
    });
  };
  console.log(formData);
  const handleSubmit = (event) => {
    event.preventDefault();

    const uri = `https://sheltered-shelf-48745.herokuapp.com/review/`;
    axios
      .post(uri, formData)
      .then(function (response) {
        // handle success
        setShowAlert({
          status: true,
          title: "Success",
          text: "Your review was successfully submitted",
          type: "success",
        });

        history.push("/myReview");
      })
      .catch(function (error) {
        // handle error
        setShowAlert({
          status: true,
          title: "Ops....",
          text: "Somthing wrong please try again",
          type: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="write-review" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Give Review" />
          <div className="col-md-12 p-5">
            <form onSubmit={handleSubmit} className="form">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={LoggedInUserInfo.displayName}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={LoggedInUserInfo.email}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Package</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={reviewItem?.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Review Text</label>
                    <textarea
                      className="form-control"
                      style={{ height: "210px" }}
                      cols="10"
                      name="reviewText"
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReview;
