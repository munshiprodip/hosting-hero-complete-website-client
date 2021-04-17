import React from "react";

const Footer = () => {
  return (
    <section className="bg-dark text-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="">HOSTING HERO</h3>
            <p className="">
              Khwaja Yunus Ali Medical College &amp; Hospital <br /> Enayetpur,
              Sirajgonj.{" "}
            </p>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" type="email"></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-danger">SEND</button>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              title="myPlace"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.410381852472!2d89.70117571499048!3d24.227421484356423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fde0a604c0a259%3A0xc3f1901ce95b20ad!2sKhwaja%20Yunus%20Ali%20Medical%20College%20and%20Hospital!5e0!3m2!1sen!2sbd!4v1618690386256!5m2!1sen!2sbd"
              style={{ border: 0, height: "100%", width: "100%" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
