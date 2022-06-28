import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { Contact } from "./contact";
import Button from "@mui/material/Button";
import CatAndFilters from "./CatAndFilters";
import Framescards from "./Framescards";
import Slider from "./Slider";

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
      <Slider />
      {/* <Link className="btn btn-custom btn-lg" to="tryon">
        Try on
      </Link> */}

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
              <Framescards id={item._id} name={item.name} price={item.price} />
            );
          })}
        </div>
      </div>

      <Contact />
    </>
  );
};
