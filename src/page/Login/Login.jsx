import axios from "axios";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import MainNavigation from "../../component/MainNavigation/MainNavigation";
import {
  googleSignIn,
  initializeAppfirebase,
} from "../../Firebase/FirebaseAuthentication";

initializeAppfirebase();

const Login = () => {
  const { setLoggedInUserInfo, isAuth, setIsAdmin } = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (isAuth) {
    history.replace(from);
  }

  const signInWithGoogle = () => {
    googleSignIn().then((res) => {
      handleResponse(res, res.success);
    });
  };

  const handleResponse = (res, success) => {
    if (success) {
      const uri = `https://sheltered-shelf-48745.herokuapp.com/makeAdmin/${res.email}`;
      axios
        .get(uri)
        .then(function (response) {
          // handle success
          const admin = response.data.data;
          if (admin.length > 0) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      setLoggedInUserInfo(res);
      history.replace(from);
    } else {
      console.log(res.error);
    }
  };
  return (
    <>
      <MainNavigation />
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="col-md-6 text-center">
          <h3>Welcome to Hosting Hero</h3>
          <button onClick={signInWithGoogle} className="btn btn-danger">
            <span>
              <i class="fab fa-google"></i>
            </span>{" "}
            Sign in with Google
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
