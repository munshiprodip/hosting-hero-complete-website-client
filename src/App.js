import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import swal from "sweetalert2";
import { withSwalInstance } from "sweetalert2-react";
import "./App.css";
import AdminRoute from "./AuthRoute/AdminRoute";
import AuthRoute from "./AuthRoute/AuthRoute";
import Spinner from "./component/Spinner/Spinner";
import { fireAuth } from "./Firebase/FirebaseAuthentication";
import AccessDenied from "./page/AccessDenied/AccessDenied";
import AddPackage from "./page/AddPackage/AddPackage";
import AdminList from "./page/AdminList/AdminList";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import MakeAdmin from "./page/MakeAdmin/MakeAdmin";
import ManagePackage from "./page/ManagePackage/ManagePackage";
import MyOrder from "./page/MyOrder/MyOrder";
import MyReview from "./page/MyReview/MyReview";
import NewOrder from "./page/NewOrder/NewOrder";
import NewReview from "./page/NewReview/NewReview";
import OrderList from "./page/OrderList/OrderList";

const SweetAlert = withSwalInstance(swal);

export const UserContext = createContext({});

function App() {
  const [LoggedInUserInfo, setLoggedInUserInfo] = useState({});
  const [isAuth, setisAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const [showAlert, setShowAlert] = useState({
    status: false,
    title: "Demo",
    text: "SweetAlert in React",
    type: "success",
  });

  console.log(isAdmin);

  useEffect(() => {
    if (!isAuth) {
      fireAuth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          const uri = `https://sheltered-shelf-48745.herokuapp.com/makeAdmin/${userAuth.email}`;
          axios
            .get(uri)
            .then(function (response) {
              // handle success
              const admin = response.data.data;
              if (admin.length > 0) {
                setIsAdmin(true);
                setLoggedInUserInfo(userAuth);
                setisAuth(true);
                setPageLoading(false);
              } else {
                setIsAdmin(false);
                setLoggedInUserInfo(userAuth);
                setisAuth(true);
                setPageLoading(false);
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        } else {
          setLoggedInUserInfo({});
          setisAuth(false);
          setPageLoading(false);
        }
      });
    }
  }, [isAuth]);
  return (
    <UserContext.Provider
      value={{
        LoggedInUserInfo,
        setLoggedInUserInfo,
        isAuth,
        isAdmin,
        setIsAdmin,
        setisAuth,
        setPageLoading,
        setShowAlert,
      }}
    >
      <SweetAlert
        show={showAlert.status}
        title={showAlert.title}
        text={showAlert.text}
        type={showAlert.type}
        onConfirm={() => setShowAlert({ status: false })}
      />
      <Router>
        {pageLoading ? (
          <Spinner />
        ) : (
          <Switch>
            {/* Normal route */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/accessDenied">
              <AccessDenied />
            </Route>

            {/* Auth route */}
            <AuthRoute path="/newOrder/:id">
              <NewOrder />
            </AuthRoute>
            <AuthRoute path="/order">
              <MyOrder />
            </AuthRoute>
            <AuthRoute path="/review/:id">
              <NewReview />
            </AuthRoute>
            <AuthRoute path="/myReview">
              <MyReview />
            </AuthRoute>

            {/* Admin route */}
            <AdminRoute path="/admin/dashboard">
              <OrderList />
            </AdminRoute>
            <AdminRoute path="/admin/newPackage">
              <AddPackage />
            </AdminRoute>
            <AdminRoute path="/admin/managePackage">
              <ManagePackage />
            </AdminRoute>
            <AdminRoute path="/admin/newAdmin">
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path="/admin/adminList">
              <AdminList />
            </AdminRoute>
          </Switch>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
