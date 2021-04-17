import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";
import SplitForm from "../../component/PaymentForm/SplitForm";
const stripePromise = loadStripe(
  "pk_test_51IgqeqACLO5jWTmdLrw94VLStLYjQAlLCJe2CjM8PizJHRy8R8Fgbh1C5t82eaRiVpvS6AfDULchiKw0pqvFVeNM002BdGT5n9"
);

const NewOrder = () => {
  const { id } = useParams();
  const [orderPackage, setOrderPackage] = useState();
  const [formData, setFormData] = useState({});
  const [paymentStatus, setPaymentStatus] = useState({});

  const { LoggedInUserInfo, setShowAlert } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (paymentStatus?.status === true) {
      setShowAlert({
        status: paymentStatus.status,
        title: "Success",
        text: paymentStatus.message,
        type: "success",
      });
    } else if (paymentStatus?.status === false) {
      setShowAlert({
        status: true,
        title: "Ops....",
        text: paymentStatus.message,
        type: "error",
      });
    }
  }, [paymentStatus, setShowAlert]);

  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/package/${id}`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data[0];
        setOrderPackage(data);
        setFormData({
          name: LoggedInUserInfo.displayName,
          email: LoggedInUserInfo.email,
          packageName: data.name,
          packageDescription: data.description,
          packageId: data._id,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id, LoggedInUserInfo]);

  useEffect(() => {
    if (paymentStatus?.status === true) {
      const uri = `https://sheltered-shelf-48745.herokuapp.com/order/`;
      axios
        .post(uri, formData)
        .then(function (response) {
          console.log(response);
          history.push("/order");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [paymentStatus, formData, history]);

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="new-order" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav pageTitle="Buy Package" />
          <div className="col-md-12 p-5">
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
                    defaultValue={orderPackage?.name}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={orderPackage?.price}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <Elements stripe={stripePromise}>
                  <SplitForm setPaymentStatus={setPaymentStatus} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
