import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { Contact } from "./contact";
import Button from "@mui/material/Button";
import CatAndFilters from "./CatAndFilters";
import Framescards from "./Framescards";

export const Header = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {JsonData.Header ? JsonData.Header.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{JsonData.About ? JsonData.About.paragraph : "Loading"}</p>
                  <Link className="btn btn-custom btn-lg" to="tryon">
                    Try on
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="text-center">
        <h1>Reframing the Eyewear Game – Buy Glasses Online</h1>
        <p className="description">
          We make it easy to find quality{" "}
          <Link className="primary" to="eyeglasses">
            eyeglasses
          </Link>{" "}
          and{" "}
          <Link className="primary" to="sunglasses">
            prescription sunglasses
          </Link>{" "}
          online.
          <br />
          With thousands of glasses,{" "}
          <Link className="primary" to="virtual-try-on">
            Virtual Try-On
          </Link>
          , 2-Day Delivery , and frames for every budget —
          <br />
          think of us as the one-stop shop for all your eyewear needs.{" "}
        </p>
      </div>

      <div className="text-center" style={{ marginTop: "30px" }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          SHOP EYEGLASSES
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          SHOP SUNGLASSES
        </Button>
      </div>

      <CatAndFilters />

      <div className="container">
        <div className="row">
          {products.map((item, index) => {
            return (
              <Framescards
                products={products}
                key={item._id}
                id={index + 1}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>

      <Contact />
    </>
  );
};
