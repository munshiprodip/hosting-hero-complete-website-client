import React from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div style={{ maxHeight: "90vh" }} className="carousel-item active">
          <img
            style={{ filter: "brightness(40%)" }}
            src="./images/slider1.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption  d-md-block slider-content">
            <h1 className="border p-3 d-inline-block">HOSTING HERO</h1>
            <p>Welcome to Hosting Hero, No 1 hosting service provider.</p>
            <div>
              <button className="btn btn-outline-light rounded-0 m-2">
                OUR SERVICES
              </button>
              <button className="btn btn-info rounded-0 m-2 text-light">
                OUR PRICEING
              </button>
            </div>
          </div>
        </div>
        <div style={{ maxHeight: "90vh" }} className="carousel-item">
          <img
            style={{ filter: "brightness(40%)" }}
            src="./images/slider2.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption slider-content  d-md-block">
            <h1 className="border p-3 d-inline-block">WHAT YOU WANT</h1>
            <p>Cloud Computing - Virtual Server - Domain Name</p>
            <div>
              <button className="btn btn-outline-light rounded-0 m-2">
                OUR SERVICES
              </button>
              <button className="btn btn-info rounded-0 m-2 text-light">
                OUR PRICEING
              </button>
            </div>
          </div>
        </div>
        <div style={{ maxHeight: "90vh" }} className="carousel-item">
          <img
            style={{ filter: "brightness(40%)" }}
            src="./images/slider3.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption slider-content  d-md-block">
            <h1 className="border p-3 d-inline-block slider-heading">
              SUPPORT ANY TIME
            </h1>
            <p className="slider-description">
              Our Most Helpfull Support Staff Ever 24/7. Contact Us Now!
            </p>
            <div>
              <button className="btn btn-outline-light rounded-0 m-2">
                OUR SERVICES
              </button>
              <button className="btn btn-info rounded-0 m-2 text-light">
                OUR PRICEING
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeSlider;
