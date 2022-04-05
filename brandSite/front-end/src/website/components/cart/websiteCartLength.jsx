import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function WebsiteCartLength(props) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")).length
  );

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")).length);
  });

  return (
    <i
      className="badge bg-white rounded-circle text-dark position-absolute"
      style={{
        fontSize: "0.8rem",
        fontWeight: "600",
        right: "-10px",
        top: "-5px",
      }}
    >
      {JSON.parse(localStorage.getItem("cart")).length}
    </i>
  );
}

export default WebsiteCartLength;
