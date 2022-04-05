import React from "react";

function WebSiteSectionTitle(props) {
  const { title } = props;
  return (
    <div
      className="w-100 d-flex align-items-center my-4"
      style={{ color: "#3D464D" }}
    >
      <span
        className="display-6 d-block"
        style={{ fontSize: "1.5rem", fontWeight: "700", width: "20%" }}
      >
        {title}
      </span>
      <span
        className="d-block "
        style={{
          background: "#EBEBEB",
          width: "80%",
          height: "4px",
        }}
      ></span>
    </div>
  );
}

export default WebSiteSectionTitle;
