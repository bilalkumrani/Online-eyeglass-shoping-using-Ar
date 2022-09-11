import React, { useState } from "react";
import img from "../images/intro-bg.jpg";
import imgg from "../images/glass.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/index";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Productdetails() {
  const dispatch = useDispatch();
  const [cartbtn, setCarBtn] = useState("Add");
  const { allProducts } = useSelector((state) => state.manageItems);
  const { cart } = useSelector((state) => state.manageItems);
  const { id } = useParams();
  let navigate = useNavigate();

  // razor
  // const payment = () => {
  //   navigate("/payment");
  // };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:4000/payment/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_TcGg5jnbUxtHCK", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Bilal Khan.",
      description: "Test Transaction",
      Image: "",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5000/payment/success",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Bilal",
        email: "Bilal@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "FrameBuy office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <img src={img} alt="shoe image" />
            </div>
            <div className="img-item">
              <img src={imgg} alt="shoe image" />
            </div>
            <div className="img-item">
              <img src={img} alt="shoe image" />
            </div>
            <div className="img-item">
              <img src={imgg} alt="shoe image" />
            </div>
          </div>
        </div>

        <div className="product-content">
          <h2 className="product-title">{allProducts[id].name}</h2>

          <div className="product-price">
            <p className="new-price">
              <span> {allProducts[id].price}(5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <Button
              variant="outlined"
              size="large"
              sx={{
                mr: 2,
                width: 150,
                height: "8%",
                color: "black",
                borderColor: "grey.500",
              }}
              onClick={displayRazorpay}
            >
              Buy
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                width: 150,
                height: "8%",
                color: "black",
                borderColor: "grey.500",
              }}
              onClick={() => {
                navigate("/tryon");
              }}
            >
              Try-me on
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
