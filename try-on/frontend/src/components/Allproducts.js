import React, { useEffect, useState } from "react";
import Framescards from "./Framescards";
import Framecards from "./Framescards";

const Allproducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get("http://localhost:4000/product/all", (res, err) => {
    //   console.log(res);
    // });
    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {data.map((item) => {
          return (
            <Framescards id={item._id} name={item.name} price={item.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;
