import React from "react";

const FeatureSection = () => {
  return (
    <section className="bg-dark p-5">
      <section className=" container">
        <h1 className="text-light text-center small-heading">WHY CHOOSE US</h1>
        <p className="text-light text-center p-3 fw-light">
          If storage devices were cars, in the amount of time it would take for
          a 15K HDD to travel from kawran bazar to farmgat (100 meter), a NAND
          Flash SSD could traverse the length of a Dhaka to Gazipur (26.2
          miles). NVMe could travel 200 times from Dhaka to Chittagong (9000
          miles) in the same amount of time.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-0">
              <img
                src="./images/feature1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">FIRST BYTE Everything is good!</h5>
                <p className="card-text">
                  First byte Time of pagespeed is very important for SEO. Google
                  gives high priority for better first byte time. SEE OUR SERVER
                  FIRST BYTE
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img
                src="./images/feature2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">PERFORMANCE.. 96/100!</h5>
                <p className="card-text">
                  Our servers are 100% NVMe SSD – which is 5 times faster than
                  normal SSD . Plenty of RAM with vigorous CPU made it
                  incredible
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img
                src="./images/feature3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">EMAIL SCORE.. 10/10!</h5>
                <p className="card-text">
                  Blacklisted IP is a common problem for email. A server should
                  be maintained properly. No propaganda, check our IP health
                  yourself
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureSection;
