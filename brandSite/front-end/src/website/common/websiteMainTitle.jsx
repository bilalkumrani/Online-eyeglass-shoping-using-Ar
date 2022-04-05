import React from "react";

function WebsiteMainTitle(props) {
  const { title } = props;

  return (
    <div className="mt-2 mb-5" style={{ color: "#3D464D" }}>
      <span className="" style={{ fontSize: "2rem", fontWeight: "700" }}>
        {title}
      </span>
    </div>
  );
}

export default WebsiteMainTitle;
