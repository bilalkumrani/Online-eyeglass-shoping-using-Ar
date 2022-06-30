import * as React from "react";
import img from "../images/intro-bg.jpg";
import imgg from "../images/glass.jpg";
import { useParams } from "react-router-dom";

export default function Productdetails() {
  const prodId = useParams();
  return (
    <div class="card-wrapper">
      <div class="card">
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
            </div>
          </div>
          <div class="img-select">
            <div class="img-item">
              <img src={img} alt="shoe image" />
            </div>
            <div class="img-item">
              <img src={imgg} alt="shoe image" />
            </div>
            <div class="img-item">
              <img src={img} alt="shoe image" />
            </div>
            <div class="img-item">
              <img src={imgg} alt="shoe image" />
            </div>
          </div>
        </div>

        <div class="product-content">
          <h2 class="product-title">nike shoes</h2>

          <div class="product-price">
            <p class="last-price">
              Old Price: <span>$257.00</span>
            </p>
            <p class="new-price">
              New Price: <span>$249.00 (5%)</span>
            </p>
          </div>

          <div class="product-detail">
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

          <div class="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" class="btn">
              Add to Cart
            </button>
            <button type="button" class="btn">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
