import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";

import img from "../images/intro-bg.jpg";

const Framescards = (product) => {
  const { cart } = useSelector((state) => state.manageItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartbtn, setCarBtn] = useState("Add");

  const addToCart = (product) => {
    if (cartbtn === "Add") {
      //dispatch(addItem(product));
      setCarBtn("Remove");
    } else {
      dispatch(deleteItem(product));
      setCarBtn("Add");
    }
  };

  const cartDetails = (id) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },

      body: JSON.stringify({ productId: id }),
    };

    fetch("http://localhost:4000/user/addcart", requestOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className="col-sm-4 cards"
        style={{
          marginTop: "50px",
          position: "sticky",
          zIndex: "0",
        }}
      >
        <Card
          sx={{
            boxShadow: 10,

            p: 2,
            borderRadius: 1,
          }}
        >
          <Link to={`/product/${product.prodIndex}`}>
            <CardMedia
              component="img"
              height="194"
              image={img}
              alt="Paella dish"
            />
          </Link>
          <div
            className="text-center"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <h5 className="text-muted">
              <Link
                to={`/product/${product.prodIndex}`}
                style={{ color: "gray" }}
              >
                {product.name}
              </Link>
            </h5>
            <h5 className="text-muted">
              <Link
                to={`/product/${product.prodIndex}`}
                style={{ color: "gray" }}
              >
                {product.price}
              </Link>
            </h5>
          </div>
          <div className="text-center">
            <Button
              variant="outlined"
              size="small"
              sx={{
                width: "150",
                height: "5%",
                color: "black",
                borderColor: "grey.500",
              }}
              onClick={() => {
                // addToCart(product);
                cartDetails(product.id);
                window.location.reload();
              }}
            >
              {cart.length === 0 ? (
                <>
                  <AiOutlineShoppingCart size={20} style={{ margin: "5px" }} />
                  Add
                </>
              ) : (
                <>
                  <AiOutlineShoppingCart size={20} style={{ margin: "5px" }} />
                  {cartbtn}
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Framescards;
