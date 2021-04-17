import axios from "axios";
import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/review`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setReviewData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(reviewData);
  return (
    <section
      style={{
        backgroundImage: "url(./images/blur.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className=" p-5"
    >
      <section className=" container">
        <h1 className="text-light text-center">OUR HAPPY CLIENTS</h1>
        <p className="text-light text-center">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          quidem est aliquam quisquam quo? Numquam dicta neque quis cumque modi
          labore, sit inventore sapiente quas commodi laudantium voluptates
          veritatis ad possimus explicabo officia suscipit, dolores rerum
          quaerat perspiciatis ab harum unde non? Repudiandae voluptates illo
          non eum. Eveniet soluta culpa reiciendis repellendus.
        </p>
        <div className="row">
          {reviewData.map((row, i) => (
            <div key={i} className="col-md-6">
              <div className="card mb-3 bg-transparent  border-0 text-light">
                <div className="row g-0">
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img
                      className="m-3 rounded-circle"
                      src={row.image}
                      alt="..."
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <p className="card-title text-warning">
                        <span>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                        </span>
                      </p>
                      <p
                        className="card-text fst-italic pb-0 mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        {row.review}
                      </p>
                      <small className="text-bold ">{row.name}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
