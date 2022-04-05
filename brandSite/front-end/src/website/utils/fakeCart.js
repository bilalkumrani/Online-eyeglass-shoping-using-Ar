if (!JSON.parse(localStorage.getItem("cart"))) {
  localStorage.setItem("cart", JSON.stringify([]));
}

if (JSON.parse(localStorage.getItem("cart")).length < 1) {
  localStorage.setItem("cart", JSON.stringify([]));
}

export const FakeCart = () => {
  return JSON.parse(localStorage.getItem("cart"));
};

export const updateAllFakeCart = (cart) => {};

export const emptyFakeCart = () => {
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify([]));

  // FakeCart.splice(0, FakeCart.length);
};

export const deleteFakeCart = (productId) => {
  let fakeCart = JSON.parse(localStorage.getItem("cart"));

  if (productId) {
    fakeCart.map((item, index) => {
      if (item.productId === productId) {
        fakeCart.splice(index, 1);
      }
    });
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(fakeCart));
  }
};

export const addFakeCart = (product) => {
  if (product) {
    let productIndex = 0;
    let fakeCart = JSON.parse(localStorage.getItem("cart"));
    let flag = false;

    if (fakeCart.length > 0) {
      fakeCart.map((item, index) => {
        if (item.productId === product.productId) {
          productIndex = index;
          flag = true;
        }
      });

      if (flag) {
        fakeCart[productIndex].quantity++;
      } else {
        fakeCart.push(product);
      }
    } else {
      fakeCart.push(product);
    }

    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(fakeCart));
  }
};
