import React from "react";
import { FakeCart, updateAllFakeCart } from "./../../utils/fakeCart";

function WebsiteCartItem(props) {
  let { product } = props;

  let cart = [...FakeCart];

  const getDiscountedPrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  const handleRemove = (productId) => {
    if (productId) {
      cart.map((item, index) => {
        if (item.productId === productId) {
          cart.splice(index, 1);
        }
      });
    }
    alert("handle remove");
    updateAllFakeCart(cart);
  };

  return null;
}

export default WebsiteCartItem;
