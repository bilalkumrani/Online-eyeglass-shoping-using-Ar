import React, { useEffect } from "react";
import Framescards from "./Framescards";
import axios from "axios";

const Allproducts = () => {
  useEffect(() => {
    axios
      .get("https://localhost:4000/product/all", {
        header: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => console.log(res.json()));
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <h2>All Products Here</h2>
      </div>
    </div>
  );
};

export default Allproducts;
