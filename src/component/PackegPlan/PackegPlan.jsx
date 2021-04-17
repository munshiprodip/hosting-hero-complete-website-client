import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PackegPlan = () => {
  const [packageData, setPackageData] = useState([]);
  useEffect(() => {
    const uri = `https://sheltered-shelf-48745.herokuapp.com/package`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setPackageData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <section
      id="priceList"
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
        <h1 className="text-light text-center">OUR PRICEING</h1>
        <p className="text-light text-center">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          quidem est aliquam quisquam quo? Numquam dicta neque quis cumque modi
          labore, sit inventore sapiente quas commodi laudantium voluptates
          veritatis ad possimus explicabo officia suscipit, dolores rerum
          quaerat perspiciatis ab harum unde non? Repudiandae voluptates illo
          non eum. Eveniet soluta culpa reiciendis repellendus.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {packageData.map((row, i) => (
            <div key={i} className="col">
              <div className="card h-100 bg-dark p-3 border-0">
                <div className="card-body text-center  text-light">
                  <img
                    src={row.image}
                    className="package-title-image"
                    style={{ width: "150px", height: "150px" }}
                    alt="..."
                  />
                  <h5 className="card-title pt-3">{row.name}</h5>
                  <h3>
                    $ {row.price} <span className="text-muted">/year</span>
                  </h3>
                  <p className="card-text">{row.description}</p>
                  <Link
                    to={`/newOrder/${row._id}`}
                    className="btn btn-outline-light rounded-0"
                  >
                    BYU NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PackegPlan;
