import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav, Dropdown, Button } from "react-bootstrap";
import { FakeCategories } from "./../../dashboard/utils/fakeCategories";
import { NavLink } from "react-router-dom";

import WebsiteSideCart from "./../components/cart/websiteSideCart";
import { FakeCustomers } from "./../../dashboard/utils/fakeCustomers";
import { useState, useEffect } from "react/cjs/react.development";
import { toast } from "react-toastify";
import axios from "axios";

function WebsiteNavBar(props) {
  const { user, handleRemoveUser, addUser, setCart } = props;
  const [allCategories, handleCategories] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/categories");
    handleCategories(data);
  }, []);

  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : {}
  );

  const getUser = () => {
    let obj = JSON.parse(localStorage.getItem("user"));

    if (obj) {
      if (obj.email && !user.email) {
        addUser(obj);

        return activeUser.email;
      }
      if (obj.email && user.email && obj.email === user.email) {
        return obj.email;
      }
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    setActiveUser({});
    handleRemoveUser();
    toast.warn("logged out");
    localStorage.removeItem("user");
  };

  const getUserName = (email) => {
    let customer = FakeCustomers.filter((item) => item.email === email);
    return customer.name;
  };

  const getCategories = (item) => {
    if (item.subCategories.length > 0) {
      return (
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <span style={{ fontWeight: 400 }}>
              {item.category.toUpperCase()}
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {item.subCategories.map((subItem) => (
              <Dropdown.Item>
                <NavLink
                  to={`/products`}
                  className="text-decoration-none d-block"
                  style={{ color: "#3D464D" }}
                >
                  <span className=""> </span>
                  {subItem.toUpperCase()}
                </NavLink>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <Nav.Link>
          <NavLink
            to={`/products`}
            className="text-decoration-none"
            style={{ color: "#3D464D" }}
          >
            <span style={{ fontWeight: 400 }}>
              {item.category.toUpperCase()}
            </span>
          </NavLink>
        </Nav.Link>
      );
    }
  };

  return (
    <nav className="">
      <Navbar
        // fixed="top"
        collapseOnSelect
        expand="lg"
        // className="py-3"
        style={{
          background: "#FFD333",
          color: "#3D464D",
          fontWeight: 400,
          // height: "3rem",
        }}
      >
        <Container>
          <Navbar.Brand>
            <NavLink to={`/`}>
              <button
                className="btn"
                style={{
                  color: "#3D464D",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                }}
              >
                Ecommerce
              </button>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" justify-content-between"
          >
            <Nav className="">
              {allCategories.map((item) => (
                <div className="mt-1">{getCategories(item)} </div>
              ))}

              <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <span style={{ fontSize: "0.8rem" }}>
                      {getUserName(user.email)}
                    </span>
                    <i
                      className={`fas fa-user`}
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Profile"
                    ></i>
                    <i
                      className="badge rounded-circle position-absolute"
                      style={{
                        top: "2px",
                        backgroundColor: "#FFD333",
                        color: "#FFD333",
                      }}
                    >
                      .
                    </i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <NavLink
                        to={`/profile`}
                        className="text-decoration-none d-block"
                        style={{ color: "#3D464D" }}
                      >
                        Profile
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        to={`/orders`}
                        className="text-decoration-none d-block"
                        style={{ color: "#3D464D" }}
                      >
                        Orders
                      </NavLink>
                    </Dropdown.Item>
                    {!user.email && (
                      <Dropdown.Item>
                        <NavLink
                          to={`/login`}
                          className="text-decoration-none d-block"
                          style={{ color: "#3D464D" }}
                        >
                          Login
                        </NavLink>
                      </Dropdown.Item>
                    )}

                    <Dropdown.Item>
                      <NavLink
                        to={`/register`}
                        className="text-decoration-none d-block"
                        style={{ color: "#3D464D" }}
                      >
                        Register
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>

            <Nav>
              {getUser() && (
                <Nav.Link>
                  <span className="">{getUser()}</span>
                </Nav.Link>
              )}

              {getUser() && (
                <Nav.Link>
                  <Button className="btn-sm btn-danger" onClick={handleLogout}>
                    Sign Out
                  </Button>
                </Nav.Link>
              )}

              <Nav.Link>
                <WebsiteSideCart
                  setCart={setCart}
                  name={getUserName(user.email)}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default WebsiteNavBar;
