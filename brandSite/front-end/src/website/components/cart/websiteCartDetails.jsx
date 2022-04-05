import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import WebsiteMainTitle from "./../../common/websiteMainTitle";
import Divider from "./../../common/divider";
import { NavLink } from "react-router-dom";

function WebsiteCartDetails(props) {
  const { user } = props;

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  let shippingFee = 0;
  const getDiscountedPrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  const getRounded = (numb) => {
    return Math.round((numb + Number.EPSILON) * 100) / 100;
  };

  const handleRemove = (productId) => {
    if (localStorage.getItem("cart")) {
      let items = JSON.parse(localStorage.getItem("cart"));

      items.map((product, index) => {
        if (product.productId === productId) {
          items.splice(index, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(items));
      setCartItems(items);
    }
  };

  const getSubTotal = () => {
    let amount = 0;

    cartItems.map(
      (item) =>
        (amount +=
          item.quantity * getDiscountedPrice(item.price, item.discountPercent))
    );

    return amount;
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
    <React.Fragment>
      {cartItems.length > 0 && (
        <div className="row mb-2">
          <WebsiteMainTitle title="Shopping Cart" />

          <div className="">
            <Table hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 &&
                  cartItems.map((product) => (
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={product.image}
                          alt=""
                          width={70}
                          height={70}
                        />
                      </td>
                      <td>{product.title}</td>
                      <td>
                        {" "}
                        {`$ ${getRounded(
                          getDiscountedPrice(
                            product.price,
                            product.discountPercent
                          )
                        )}`}
                      </td>
                      <td>
                        <div
                          class=" d-inline"
                          // role="group"
                          style={{ height: "2rem" }}
                        >
                          <button
                            class="btn-sm  btn-outline-warning rounded-pill border-0"
                            style={{ fontSize: "1.5rem" }}
                            onClick={() => decQuantity(product.productId)}
                          >
                            -
                          </button>
                          <span class="px-2">{product.quantity}</span>
                          <button
                            class="btn-sm  btn-outline-warning rounded-pill border-0"
                            style={{ fontSize: "1.5rem" }}
                            onClick={() => incQuantity(product.productId)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        {getRounded(
                          getDiscountedPrice(
                            product.price,
                            product.discountPercent
                          ) * product.quantity
                        )}
                      </td>
                      <td>
                        <button className="btn ">
                          <i
                            className="fas fa-times text-danger"
                            onClick={() => handleRemove(product.productId)}
                          ></i>
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>

          <div
            className="row d-flex justify-content-end"
            // style={{ height: "20rem" }}
          >
            <div
              className="col-sm-12 col-md-4 col-lg-4 border border-2 p-4 pt-2 my-5"
              style={{ color: "#3D464D" }}
            >
              <WebsiteMainTitle title="Cart Totals" />

              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "450" }}
              >
                <span>Sub Total</span>{" "}
                <span>{`$ ${getRounded(getSubTotal())}`}</span>{" "}
              </div>
              <Divider />

              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "450" }}
              >
                <span>Shipping Fee</span> <span>{`$ ${shippingFee}`}</span>{" "}
              </div>

              <Divider />
              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "800", fontSize: "1.2rem" }}
              >
                <span>Total</span>{" "}
                <span>{`$ ${shippingFee + getRounded(getSubTotal())}`}</span>{" "}
              </div>

              {user.email !== "" && (
                <NavLink
                  to={`/checkout`}
                  className={(isActive) => "nav-link align-middle px-0 mb-3 "}
                >
                  <button
                    className="btn w-100 my-2"
                    style={{
                      background: "#FFD333",
                      color: "#3D464D",
                      fontWeight: "900",
                      fontSize: "1rem",
                    }}
                  >
                    Checkout
                  </button>
                </NavLink>
              )}

              {user.email === "" && (
                <NavLink
                  to={`/login`}
                  className={(isActive) => "nav-link align-middle px-0 mb-3 "}
                >
                  <button
                    className="btn w-100 my-2"
                    style={{
                      background: "#FFD333",
                      color: "#3D464D",
                      fontWeight: "900",
                      fontSize: "1rem",
                    }}
                  >
                    Login then Checkout
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}

      {cartItems.length < 1 && (
        <div
          className="row mb-2 text-center d-flex justify-content-center align-items-center"
          style={{ height: "28rem" }}
        >
          <WebsiteMainTitle title="Cart is empty" />
        </div>
      )}
    </React.Fragment>
  );
}

export default WebsiteCartDetails;
