import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import img from "../images/intro-bg.jpg";

const Framescards = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <div
        className="col-md-3"
        style={{ marginTop: "20px", position: "sticky", zIndex: "0" }}
      >
        <Card
          sx={{
            boxShadow: 3,

            borderRadius: 1,
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={img}
            alt="Paella dish"
          />

          <div
            className="text-center"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <h5 className="text-muted">name</h5>
            <h5 className="text-muted">Price</h5>
          </div>
          <div className="text-center">
            <Button
              variant="outlined"
              size="large"
              sx={{
                m: 2,
                width: 200,
                height: "5%",
                color: "black",
                borderColor: "grey.500",
              }}
            >
              <AiOutlineShoppingCart size={20} style={{ margin: "5px" }} />
              Add toCart
            </Button>
            {/* {clicked ? <FaShoppingCart /> : <AiOutlineShoppingCart />} */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Framescards;
