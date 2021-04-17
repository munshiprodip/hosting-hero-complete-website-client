import React from "react";

const CommonService = () => {
  return (
    <section className="bg-dark p-5">
      <section className=" container">
        <h1 className="text-light text-center">ALL PLANS ARE INCLUDE</h1>
        <div className="row text-light">
          <div className="col-md-6">
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    className="m-3"
                    src="./images/svg/1.svg"
                    alt="..."
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div className="col-md-10 ">
                  <div className="card-body">
                    <b className="card-title">NVMe SSD storage</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      SSD is 2/3 times faster than HDD. But we are not using
                      SSD. We are using NVMe SSD which is 5/6 times faster than
                      normal SSD. So it is 20x faster than HDD
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    className="m-3 "
                    src="./images/svg/2.svg"
                    alt="..."
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">DDoS protected shared hosting</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      Its life saving security. Our automated system recognizes
                      almost all attack patterns and providing you with
                      first-rate protection against large-scale attacks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    className="m-3"
                    src="./images/svg/3.svg"
                    alt="..."
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">30 Days Remote Daily backups</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      Yes! We allocate 30 times more storage than your package
                      size for keeping backup. No invisible or word of mouth
                      backup. You will see yourself 30 copies of your backup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    className="m-3"
                    src="./images/svg/4.svg"
                    alt="..."
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Professional Support</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      This is our brand. We are always ready to help you. You
                      will get us available during the busy hours, at the
                      evening, even at the midnight. Most of our clients become
                      loyal customer for long
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    className="m-3"
                    src="./images/svg/5.svg"
                    alt="..."
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Higher CPU &amp; RAM per plan</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      We dare to allow plenty of resource in every packages that
                      is almost impossible for other hosting providers. We allow
                      resource more than a vps even in our lowest packages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    className="m-3"
                    src="./images/svg/6.svg"
                    alt="..."
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Litespeed with litecache</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      LiteSpeed Cache for WordPress provides powerful
                      cache-management tools that are simply not possible for
                      other plugins to replicate. This translates into more page
                      requests per second, and superior performance for your
                      WordPress site
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CommonService;
