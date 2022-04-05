import React, { useState } from "react";
import WebsiteMainTitle from "./../../common/websiteMainTitle";
import { Form, Button } from "react-bootstrap";
import Divider from "./../../common/divider";
import { emptyFakeCart, FakeCart } from "./../../utils/fakeCart";
import { NavLink, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function WebsiteCheckout(props) {
  let shippingFee = 0;

  const { user } = props;

  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPossible, setOrderPossibilty] = useState(false);
  const [terms, setTerms] = useState(false);

  const getRounded = (numb) => {
    return Math.round((numb + Number.EPSILON) * 100) / 100;
  };
  const getDiscountedPrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  const limitTitle = (title) => {
    let newTitle = title.substring(0, 30);
    newTitle = newTitle + "...";
    return newTitle;
  };
  const getSubTotal = () => {
    let amount = 0;
    FakeCart().map(
      (item) =>
        (amount +=
          item.quantity * getDiscountedPrice(item.price, item.discountPercent))
    );

    return amount;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setOrderPossibilty(true);

      toast.success("Now you can order");
    } else {
      event.preventDefault();
      event.stopPropagation();
      toast.error("Something wrong");
      console.log(form);
    }
  };

  const placeOrder = async () => {
    const { data } = await axios.get("http://localhost:8000/customers");

    let cust = data.filter((item) => item.email === user.email);

    let order = {
      customerId: cust[0].customerId,
      products: [...FakeCart()],
      deliverDate: null,
      orderDate: new Date(),
      totalAmount: getRounded(getSubTotal() + shippingFee),
      status: "pending",
    };

    toast.success("Order placed");
    console.log(order);
    const res = await axios.post("http://localhost:8000/orders", order);
    console.log(res);

    emptyFakeCart();
  };

  return (
    <React.Fragment>
      {FakeCart().length > 0 && user.email !== "" && (
        <div className="row mb-5">
          <WebsiteMainTitle title="Checkout Order" />

          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 px-5 border border-2">
              <WebsiteMainTitle title="Billing Address" />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    size="sm"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    size="sm"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="country">
                  <Form.Label htmlFor="subcategory_select">
                    Select Country
                  </Form.Label>
                  <Form.Select
                    required
                    size="sm"
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">--</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="China">China</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    size="sm"
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>Town / City</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder=""
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postcode">
                  <Form.Label>Postcode / Zipcode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    size="sm"
                    required
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    size="sm"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <div key={"checkbox"} className="my-5">
                  <Form.Check type={"checkbox"}>
                    <Form.Check.Input
                      type={"checkbox"}
                      required
                      onChange={(e) => setTerms(e.target.checked)}
                    />
                    <Form.Check.Label>
                      I have read and agree to the website terms and conditions*
                    </Form.Check.Label>
                  </Form.Check>
                </div>

                <Form.Group className="mb-3" controlId="submitBtn">
                  <Button
                    type="submit"
                    className="btn w-100 my-2"
                    style={{
                      background: "#FFD333",
                      color: "#3D464D",
                      fontWeight: "900",
                      fontSize: "1rem",
                    }}
                  >
                    Save
                  </Button>
                </Form.Group>
              </Form>
            </div>
            <div className="col-sm-12 col-md-5 px-5 border border-2 ">
              <WebsiteMainTitle title="Your Order" />

              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "750" }}
              >
                <span>Product</span> <span>Total</span>
              </div>
              <Divider />

              {FakeCart().map((product) => (
                <React.Fragment>
                  <div
                    className="d-flex justify-content-lg-between"
                    style={{ fontWeight: "450" }}
                  >
                    <span>
                      {limitTitle(product.title)} <br />
                      {`X ${product.quantity}`}
                    </span>{" "}
                    <span>{`$ ${
                      product.quantity *
                      getDiscountedPrice(product.price, product.discountPercent)
                    }`}</span>{" "}
                  </div>
                  {/* <Divider /> */}
                </React.Fragment>
              ))}

              <Divider />
              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "450" }}
              >
                <span style={{ fontWeight: "700" }}>Sub Total</span>{" "}
                <span>{`$ ${getRounded(getSubTotal())}`}</span>{" "}
              </div>

              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "450" }}
              >
                <span style={{ fontWeight: "700" }}>Shipping Fee</span>{" "}
                <span>{`$ ${shippingFee}`}</span>{" "}
              </div>

              <Divider />
              <div
                className="d-flex justify-content-lg-between"
                style={{ fontWeight: "800", fontSize: "1.2rem" }}
              >
                <span>Total</span>{" "}
                <span>{`$ ${getRounded(shippingFee + getSubTotal())}`}</span>{" "}
              </div>

              <NavLink to={`/`}>
                <button
                  className="btn w-100 my-2 mb-4"
                  disabled={!orderPossible}
                  onClick={placeOrder}
                  style={{
                    background: "#FFD333",
                    color: "#3D464D",
                    fontWeight: "900",
                    fontSize: "1.5rem",
                  }}
                >
                  Order
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {!user.email && <Navigate to="/" />}

      {FakeCart().length < 1 && (
        <div className="row mb-2 text-center">
          <WebsiteMainTitle title="Cart is Empty" />
        </div>
      )}
    </React.Fragment>
  );
}

export default WebsiteCheckout;
