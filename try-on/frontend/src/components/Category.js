import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Category = ({ category }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: `${category}`,
          position: "absolute",

          border: "1px solid ",
          borderColor: "#9E9E9E",
          padding: "30px",
          zIndex: "1",
          background: "white",
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sunglasses" />
          <FormControlLabel control={<Checkbox />} label="Eyeglasses" />
        </FormGroup>
      </div>
    </div>
  );
};

export default Category;
