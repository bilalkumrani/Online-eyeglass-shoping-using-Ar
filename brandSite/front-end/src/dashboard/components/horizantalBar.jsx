import React from "react";
import { NavLink } from "react-router-dom";

function HorizantalBar(props) {
  const options = [
    { name: "Dashboard", path: "", icon: "home" },
    { name: "Orders", path: "orders", icon: "file" },
    { name: "Products", path: "products", icon: "shopping-cart" },
    { name: "Categories", path: "categories", icon: "list" },
    { name: "Customers", path: "customers", icon: "users" },
    { name: "Reports", path: "reports", icon: "chart-area" },
  ];

  return (
    <div class="w-100 py-2 bg-secondary">
      <div class="d-flex flex-row  px-3">
        {options.map((item) => (
          <div class="col px-2" key={item.name}>
            <NavLink
              to={`/admin/${item.path}`}
              style={{ color: "", fontWeight: 700, fontSize: "1.2rem" }}
              className={(isActive) => "text-dark "}
            >
              <span className="">
                <i className={`fas fa-${item.icon}`}></i>
              </span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizantalBar;
