import { useEffect, useState } from "react";
import { getAlldata } from "../redux/actions/index";
import { Contact } from "./contact";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CatAndFilters from "./CatAndFilters";
import Framescards from "./Framescards";
import Slider from "./Slider";

import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allProducts } = useSelector((state) => state.manageItems);

  useEffect(() => {
    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => {
        dispatch(getAlldata(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  return (
    <>
      <Slider />

      <div className="text-center" style={{ marginTop: "70px" }}>
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
          {allProducts.map((item, index) => {
            return (
              <Framescards
                id={item._id}
                prodIndex={index}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-muted">Let US Decide what is good for you!</h2>
          </div>
          <div className="col-md-6 text-center">
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
              onClick={() => {
                navigate("quiz");
              }}
            >
              Take Quiz
            </Button>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};
