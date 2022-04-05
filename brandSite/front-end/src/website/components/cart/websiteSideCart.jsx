import { Button, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react/cjs/react.development";

import React from "react";
import { emptyFakeCart, FakeCart } from "../../utils/fakeCart";
import { NavLink } from "react-router-dom";
import WebsiteCartLength from "./websiteCartLength";

function WebsiteSideCart(props) {
  const { setCart } = props;
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  // useEffect(() => {
  //   if (localStorage.getItem("cart")) {
  //     setCartItems(JSON.parse(localStorage.getItem("cart")));
  //   } else {
  //     setCartItems([]);
  //   }
  // }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const limitTitle = (title) => {
    let newTitle = title.substring(0, 20);
    newTitle = newTitle + "...";
    return newTitle;
  };
  const handleEmptyCart = () => {
    setCart([]);
    emptyFakeCart();
  };

  const incQuantity = (productId) => {
    if (localStorage.getItem("cart")) {
      let items = JSON.parse(localStorage.getItem("cart"));

      items.map((product) => {
        if (product.productId === productId) {
          product.quantity++;
        }
      });
      localStorage.setItem("cart", JSON.stringify(items));

      setCartItems(items);
    }
  };
  const decQuantity = (productId) => {
    if (localStorage.getItem("cart")) {
      let items = JSON.parse(localStorage.getItem("cart"));

      items.map((product, index) => {
        if (product.productId === productId) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            items.splice(index, 1);
          }
        }
      });

      localStorage.setItem("cart", JSON.stringify(items));
      setCartItems(items);
    }
  };

  return (
    <>
      <Button
        variant="btn bg-warning"
        className="position-relative"
        onClick={handleShow}
      >
        {/* <WebsiteCartLength /> */}

        <i
          className={`fas fa-shopping-cart`}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Cart"
        ></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton style={{ backgroundColor: "#FFD333" }}>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ width: "100%" }}>
            {FakeCart().map((item) => (
              <div key={item.productId}>
                <div className="d-flex mb-2">
                  <div>
                    <img src={item.image} alt="" width="70rem" height="70rem" />
                  </div>

                  <div className=" d-flex flex-column justify-content-center align-items-start ps-2">
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "1rem",
                        paddingLeft: "0",
                      }}
                    >
                      {limitTitle(item.title)}
                    </span>

                    <span
                      style={{
                        fontWeight: "300",
                        fontSize: "0.8rem",
                        paddingLeft: "0",
                      }}
                    >
                      {`Category: ${item.category}`}
                    </span>

                    <span
                      style={{
                        fontWeight: "800",
                        fontSize: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        <div
                          class=" d-inline"
                          // role="group"
                          style={{ height: "2rem" }}
                        >
                          <button
                            class="btn-sm  btn-outline-warning rounded-pill border-0"
                            style={{ fontSize: "1.5rem" }}
                            onClick={() => decQuantity(item.productId)}
                          >
                            -
                          </button>
                          <span class="px-2">{item.quantity}</span>
                          <button
                            class="btn-sm  btn-outline-warning rounded-pill border-0"
                            style={{ fontSize: "1.5rem" }}
                            onClick={() => incQuantity(item.productId)}
                          >
                            +
                          </button>
                        </div>

                        {` X `}
                      </span>
                      {`$ ${
                        item.price - item.price * (item.discountPercent / 100)
                      }`}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="d-flex  mt-3 justify-content-center">
              <NavLink
                to={`/mycart`}
                style={{ color: "black", fontWeight: 700, fontSize: "1.2rem" }}
                className={"w-100 px-1"}
              >
                <button
                  className="btn w-100 "
                  style={{
                    background: "#FFD333",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  View Cart
                </button>
              </NavLink>
              <div
                className="w-100"
                style={{ color: "white", fontWeight: 700, fontSize: "1.2rem" }}
              >
                <button
                  className="btn w-100 px-1"
                  style={{
                    color: "white",
                    background: "#3D464D",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                  onClick={handleEmptyCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default WebsiteSideCart;
