import React, { useEffect } from "react";
import Framescards from "./Framescards";
import axios from "axios";

const Allproducts = () => {
  useEffect(() => {
    axios.get("https://localhost:4000");
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <Framescards />
        <Framescards />
        <Framescards />
        <Framescards />
        <Framescards />
        <Framescards />
        <Framescards />
        <Framescards />
      </div>
    </div>
  );
};

export default Allproducts;
