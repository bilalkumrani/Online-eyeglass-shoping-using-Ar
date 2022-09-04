import React, { useState } from "react";
import img from "../images/intro-bg.jpg";
import imgg from "../images/glass.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/index";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Productdetails() {
  const dispatch = useDispatch();
  const [cartbtn, setCarBtn] = useState("Add");
  const { allProducts } = useSelector((state) => state.manageItems);
  const { cart } = useSelector((state) => state.manageItems);
  const { id } = useParams();
  let navigate = useNavigate();

  const payment = () => {
    navigate("/payment");
  };

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
              onClick={payment}
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
