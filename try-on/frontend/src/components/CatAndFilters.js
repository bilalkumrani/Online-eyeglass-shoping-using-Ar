import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

import Category from "./Category";
import FramesCategory from "./FramesCategory";

const CatAndFilters = () => {
  const [category, setCategory] = useState("none");
  const [frame, setFrame] = useState("none");
  const openDiv = () => {
    setCategory("block");
  };

  const closeDiv = () => {
    setCategory("none");
  };

  const openGenderDiv = () => {
    setFrame("block");
  };

  const closeGenderDiv = () => {
    setFrame("none");
  };

  return (
    <>
      <div
        style={{
          marginTop: "20px",

          padding: "10px",
          border: "1px solid",
          borderColor: "#9E9E9E",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", margin: "5px" }} onMouseOver={openDiv}>
            <h4
              style={{
                marginTop: "5px",
                cursor: "pointer",
              }}
              onMouseOver={openDiv}
              onClick={closeDiv}
            >
              Category
            </h4>

            <FaAngleDown size={20} style={{ marginTop: "5px" }} />
          </div>

          <div
            style={{ display: "flex", margin: "5px" }}
            onMouseOver={openDiv}
            onClick={closeDiv}
          >
            <h4
              style={{
                marginTop: "5px",
                cursor: "pointer",
              }}
              onMouseOver={openGenderDiv}
              onClick={closeDiv}
            >
              Frames
            </h4>
            <FaAngleDown size={20} style={{ marginTop: "5px" }} />
          </div>
          <div
            style={{ display: "flex", margin: "5px" }}
            onMouseOver={openDiv}
            onClick={closeDiv}
          >
            <h4
              style={{
                marginTop: "5px",
                cursor: "pointer",
              }}
              onMouseOver={openGenderDiv}
              onClick={closeDiv}
            >
              Frames
            </h4>
            <FaAngleDown size={20} style={{ marginTop: "5px" }} />
          </div>

          <div style={{ display: "flex", margin: "5px" }}>
            <h4
              style={{
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              All
            </h4>
          </div>
        </div>
      </div>
      <Category category={category} />

      <FramesCategory frame={frame} />
    </>
  );
};

export default CatAndFilters;
