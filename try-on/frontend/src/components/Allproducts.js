import React, { useEffect, useState } from "react";
import Framescards from "./Framescards";

import { useSelector } from "react-redux";

const Allproducts = () => {
  const state = useSelector((state) => state.manageItems);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {state.map((item) => {
          return (
            <Framescards id={item._id} name={item.name} price={item.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;
