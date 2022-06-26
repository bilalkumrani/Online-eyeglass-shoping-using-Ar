import React, { useEffect, useState } from "react";
import Framescards from "./Framescards";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {products.map((item) => {
          return (
            <Framescards
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;
