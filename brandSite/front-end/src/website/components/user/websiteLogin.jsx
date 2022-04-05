import React, { useState, useEffect } from "react";
import WebsiteMainTitle from "./../../common/websiteMainTitle";
import { Form, Button } from "react-bootstrap";
import { FakeCustomers } from "./../../../dashboard/utils/fakeCustomers";
import { Navigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function WebsiteLogin(props) {
  const { onUser } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goBack, setBack] = useState(false);
  const [Customers, setCustomers] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/customers");
    setCustomers(data);
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      let found = Customers.find(
        (item) => item.email === email && item.password === password
      );

      if (found) {
        toast.success("Successfully logged in");
        onUser({ email: email, password: password });

        localStorage.setItem(
          "user",
          JSON.stringify({ email: email, password: password })
        );

        setBack(true);
      } else {
        toast.error("Not a valid user");
      }
    }
  };

  return (
    <React.Fragment>
      {!goBack && (
        <div className="row mb-5 d-flex justify-content-center">
          <WebsiteMainTitle title="Sign In" />

          <div className="col-sm-12 col-md-6 border border-2 p-5 rounded shadow">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 text-center" controlId="submitBtn">
                <Button
                  type="submit"
                  className="btn w-100 my-2"
                  style={{
                    background: "#FFD333",
                    color: "#3D464D",
                    fontWeight: "900",
                    fontSize: "1rem",
                  }}
                >
                  Sign In
                </Button>
                <span
                  style={{
                    color: "#3D464D",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                >
                  OR
                </span>
                <NavLink to={`/register`}>
                  <button
                    className="btn w-100 my-2"
                    style={{
                      background: "#3D464D",
                      color: "#FFFFFF",
                      fontWeight: "700",
                      fontSize: "1rem",
                    }}
                  >
                    Create New Account
                  </button>
                </NavLink>
              </Form.Group>
            </Form>
          </div>
        </div>
      )}
      {goBack && <Navigate to="/" />}
    </React.Fragment>
  );
}

export default WebsiteLogin;
