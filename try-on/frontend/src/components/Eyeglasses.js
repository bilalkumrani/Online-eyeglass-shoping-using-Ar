import React from "react";
import Framescards from "./Framescards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Eyeglasses = () => {
  const { allProducts } = useSelector((state) => state.manageItems);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "100px" }}>
        Eyeglasses here
      </h1>

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
    </>
  );
};

export default Eyeglasses;
