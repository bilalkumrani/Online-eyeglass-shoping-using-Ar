import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink, Link } from "react-router-dom";

function SideBar(props) {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);

  const options = [
    { name: "Dashboard", path: "", icon: "home" },
    { name: "Orders", path: "orders", icon: "file" },
    { name: "Products", path: "products", icon: "shopping-cart" },
    { name: "Categories", path: "categories", icon: "list" },
    { name: "Customers", path: "customers", icon: "users" },
    { name: "Reports", path: "reports", icon: "chart-area" },
    // { name: "Stocks", path: "stocks", icon: "chart-bar" },
  ];

  return (
    <div class=" d-sm-none d-md-block d-lg-block px-2 shadow text-white">
      <ul class="nav nav-pills">
        {options.map((item) => (
          <li
            class="nav-item p-md-2  mb-2   text-center rounded"
            // style={{ width: "10rem" }}
            key={item.name}
          >
            <NavLink
              to={`/admin/${item.path}`}
              style={{ color: "black", fontWeight: 700, fontSize: "1.2rem" }}
              className={(isActive) => "nav-link align-middle px-0 mb-3 "}
            >
              <span className="me-3">
                <i className={`fas fa-${item.icon}`}></i>
              </span>

              <span className="ms-1 d-none d-sm-inline ">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
