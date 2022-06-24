import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const FramesCategory = ({ frame, closeGenderDiv }) => {
  const [frameType, setFrameType] = useState({
    thin: false,
    thick: false,
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Thin") {
      setFrameType({ ...frameType, thin: e.target.checked });
    } else if (e.target.value === "Thick") {
      setFrameType({ ...frameType, thick: e.target.checked });
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: `${frame}`,
            position: "absolute",
            width: "190px",
            border: "1px solid ",
            borderColor: "#9E9E9E",
            padding: "30px",
            zIndex: "1",
            background: "white",
          }}
          onMouseLeave={closeGenderDiv}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value="Thin"
                />
              }
              label="Thin"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value="Thick"
                />
              }
              label="Thick"
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default FramesCategory;
