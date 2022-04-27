import React from "react";

const Browsemore = () => {
  return (
    <div className="container">
      <div className="row text-center" style={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          size="large"
          color="warning"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          Browse
        </Button>
      </div>
    </div>
  );
};

export default Browsemore;
