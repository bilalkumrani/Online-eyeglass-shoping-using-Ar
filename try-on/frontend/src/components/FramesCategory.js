import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const FramesCategory = ({ frame }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: `${frame}`,
          position: "absolute",

          borderColor: "#9E9E9E",
          padding: "30px",
          zIndex: "1",
          background: "white",
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Thin" />
          <FormControlLabel control={<Checkbox />} label="Thick" />
        </FormGroup>
      </div>
    </div>
  );
};

export default FramesCategory;
