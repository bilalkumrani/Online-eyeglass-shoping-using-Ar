import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Category = ({ category, closeDiv }) => {
  const [glassType, setGlassType] = useState({
    sunglasses: false,
    eyeglasses: false,
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Sunglasses") {
      setGlassType({ ...glassType, sunglasses: e.target.checked });
    } else if (e.target.value === "Eyeglasses") {
      setGlassType({ ...glassType, eyeglasses: e.target.checked });
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: `${category}`,
          position: "absolute",
          width: "190px",
          border: "1px solid ",
          borderColor: "#9E9E9E",
          padding: "30px",
          zIndex: "1",
          background: "white",
        }}
        onMouseLeave={closeDiv}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  handleChange(e);
                }}
                value="Sunglasses"
              />
            }
            label="Sunglasses"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  handleChange(e);
                }}
                value="Eyeglasses"
              />
            }
            label="Eyeglasses"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Category;
