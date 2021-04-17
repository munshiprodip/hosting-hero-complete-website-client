import React from "react";
import DashboardSideNav from "../../component/DashboardSidNav/DashboardSideNav";
import DashboardTopNav from "../../component/DashboardTopNav/DashboardTopNav";

const Dashboard = () => {
  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <DashboardSideNav active="home" />
        </div>
        <div className="col-md-9">
          <DashboardTopNav />
          <div className="col-md-12 p-5">
            <form className="form">
              <div className="row">
                <div className="col-md-6">
                  {/* Form field */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  {/* Form field  */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  {/* Form field  */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Form field  */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <textarea
                      className="form-control"
                      style={{ height: "124px" }}
                    ></textarea>
                  </div>
                  {/* Form field  */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                  <button className="btn btn-danger" type="reset">
                    CLEAR
                  </button>
                </div>
                <div className="col-md-6 ">
                  <button className="btn btn-primary" type="submit">
                    SUBMIT
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

export default Dashboard;
