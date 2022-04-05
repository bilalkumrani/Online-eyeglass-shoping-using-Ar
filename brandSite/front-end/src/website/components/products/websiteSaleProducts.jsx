import React from "react";

import WebsiteProduct from "./websiteProduct";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

function WebsiteSaleProducts(props) {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    setProducts(data);
  }, []);

  let saleProducts = [];

  products.map((item) => {
    if (item.discountPercent > 0) {
      saleProducts.push(item);
    }
  });

  return (
    <React.Fragment>
      {saleProducts.map((item) => (
        <div className="col mb-3" key={item.productId}>
          <WebsiteProduct product={item} isNew={false} isSale={true} />
        </div>
      ))}
    </React.Fragment>
  );
}

export default WebsiteSaleProducts;
