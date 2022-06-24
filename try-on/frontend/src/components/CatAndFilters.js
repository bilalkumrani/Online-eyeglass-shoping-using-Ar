import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    setFrame("none");
  };

  const openGenderDiv = () => {
    setFrame("block");
  };

  const closeGenderDiv = () => {
    setFrame("none");
    setCategory("none");
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
          <div style={{ display: "flex", margin: "5px" }}>
            <h4
              style={{
                marginTop: "5px",
                cursor: "pointer",
                color: "black",
                fontWeight: "bold",
              }}
              onMouseOver={openDiv}
              onClick={closeDiv}
            >
              Category
            </h4>

            <FaAngleDown size={20} style={{ marginTop: "5px" }} />
          </div>

          <div style={{ display: "flex", margin: "5px" }}>
            <h4
              style={{
                marginTop: "5px",
                cursor: "pointer",
                color: "black",
                fontWeight: "bold",
              }}
              onMouseOver={openGenderDiv}
              onClick={closeGenderDiv}
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
              <Link to="all" style={{ color: "black", fontWeight: "bold" }}>
                All
              </Link>
            </h4>
          </div>
        </div>
      </div>

      <Category category={category} closeDiv={closeDiv} />

      <FramesCategory frame={frame} closeGenderDiv={closeGenderDiv} />
    </>
  );
};

export default CatAndFilters;
