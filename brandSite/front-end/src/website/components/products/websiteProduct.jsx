import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import { addFakeCart } from "../../utils/fakeCart";

import { toast } from "react-toastify";
import axios from "axios";

function WebsiteProduct(props) {
  const [border, setBorder] = useState("");
  const [cartButton, setCartButton] = useState(false);

  const styles = {
    width: "12rem",
    height: "23rem",
    border: `${border}`,
  };

  const limitTitle = (title) => {
    let newTitle = title.substring(0, 30);
    newTitle = newTitle + "...";
    return newTitle;
  };

  const { productId, title, price, image, discountPercent } = props.product;

  const { isNew, isSale } = props;

  const handleAddCart = async (productId) => {
    toast.success("Product added to cart");
    const { data } = await axios.get(
      `http://localhost:8000/products/${productId}`
    );
    addFakeCart(data);
  };

  return (
    <Card
      className="rounded-0 position-relative"
      style={styles}
      onMouseEnter={() => {
        setBorder("2px solid #FFD333");
        setCartButton(true);
      }}
      onMouseLeave={() => {
        setBorder("1px solid #EBEBEB");
        setCartButton(false);
      }}
    >
      {isNew && (
        <i
          className=" badge bg-primary position-absolute "
          style={{
            width: "3rem",
            top: "0.8rem",
            left: "0.5rem",
            fontSize: "0.7rem",
            fontWeight: "600",
            fontStyle: "normal",
          }}
        >
          NEW
        </i>
      )}

      {isSale && (
        <i
          className=" badge bg-danger position-absolute "
          style={{
            width: "3rem",
            top: "0.8rem",
            left: "0.5rem",
            fontSize: "0.7rem",
            fontWeight: "600",
            fontStyle: "normal",
          }}
        >
          SALE
        </i>
      )}

      <Card.Img
        variant="top"
        className="mb-4 rounded-0 p-4 pb-0 "
        src={image}
        width="80%"
        height="50%"
      />

      <Card.Body>
        <Card.Title>
          <span
            className=""
            style={{
              fontWeight: "350",
              fontSize: "1rem",
            }}
          >
            {limitTitle(title)}
          </span>
        </Card.Title>

        {isSale && (
          <Card.Text
            style={{ fontWeight: "800", fontSize: "1.2rem", color: "red" }}
          >
            {`$${price - price * (discountPercent / 100)}`}

            <span
              className="text-decoration-line-through"
              style={{ fontWeight: "300", fontSize: "1rem", color: "gray" }}
            >
              {" "}
              {`$ ${price}  `}
            </span>
          </Card.Text>
        )}

        {!isSale && (
          <Card.Text style={{ fontWeight: "800", fontSize: "1.2rem" }}>
            {`$ ${price}`}
          </Card.Text>
        )}

        {cartButton && (
          <Button
            className="btn-sm btn-outline-warning text-dark px-5 position-absolute bottom-25"
            style={{
              fontWeight: "500",
              fontSize: "0.8rem",
              backgroundColor: "#FFD333",
            }}
            onClick={() => {
              handleAddCart(productId);
            }}
          >
            Add Cart
            <i className="fas fa-shopping-cart"></i>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default WebsiteProduct;
