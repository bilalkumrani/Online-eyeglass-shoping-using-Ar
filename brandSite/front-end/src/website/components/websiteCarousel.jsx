import React from "react";
import { Carousel } from "react-bootstrap";

function WebsiteCarousel(props) {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item interval={1000} style={{ background: "#F5F5F5" }}>
          <div
            className="d-flex flex-column flex-md-row "
            style={{ color: "#3D464D" }}
          >
            <div className="col d-flex justify-content-center align-items-center px-5 pt-5">
              <div className="mb-5 d-flex flex-column justify-content-center align-items-center">
                <span className="display-3 " style={{ fontWeight: "bold" }}>
                  <span className="">New Arrivals</span>{" "}
                  <i className="fas fa-cubes text-primary "></i>
                  <br />
                </span>
                <div className="mb-3">
                  <span className="" style={{ fontWeight: "400" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    Blanditiis vero quasi doloribus quod sint necessitatibus
                  </span>
                </div>
                <div className="mt-2">
                  <button
                    className=" btn btn-warning px-5"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col p-5 ">
              <img
                className="d-block w-100  "
                style={{ height: "25rem", width: "20rem" }}
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal.png"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000} style={{ background: "#F5F5F5" }}>
          <div
            className="d-flex flex-column flex-md-row "
            style={{ color: "#3D464D" }}
          >
            <div className="col d-flex flex-column justify-content-center align-items-center px-5 pt-5">
              <div className="mb-5 d-flex flex-column justify-content-center align-items-center">
                <span className="display-3 " style={{ fontWeight: "bold" }}>
                  Sale upto <span className="text-danger"> 90%</span>
                  <br />
                  {/* Best Deals */}
                </span>{" "}
                <div className="mb-3">
                  <span className="" style={{ fontWeight: "400" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    Blanditiis vero quasi doloribus quod sint necessitatibus
                  </span>
                </div>
                <div className="mt-2">
                  <button
                    className=" btn btn-warning px-5"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                  >
                    {" "}
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12  p-5  col-md-6">
              <img
                className="d-block w-100"
                style={{ height: "25rem", width: "20rem" }}
                src="https://electro.madrasthemes.com/wp-content/uploads/2018/04/camera.png"
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WebsiteCarousel;
