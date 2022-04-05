import React from "react";
import WebsiteProduct from "./websiteProduct";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

function WebsiteFeaturedProducts(props) {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    setProducts(data);
  }, []);

  let arr = products.slice(0, 5);
  return (
    <React.Fragment>
      {arr.map((item) => (
        <div className="col mb-3" key={item.productId}>
          <WebsiteProduct product={item} isNew={true} isSale={false} />
        </div>
      ))}
    </React.Fragment>
  );
}

export default WebsiteFeaturedProducts;
