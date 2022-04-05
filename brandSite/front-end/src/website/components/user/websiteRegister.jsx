import React, { useState } from "react";
import WebsiteMainTitle from "./../../common/websiteMainTitle";
import { Form, Button } from "react-bootstrap";
import {
  addFakeCustomer,
  FakeCustomers,
} from "./../../../dashboard/utils/fakeCustomers";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function WebsiteRegister(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [goBack, setBack] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      let found = FakeCustomers.find((item) => item.email === email);

      if (found) {
        toast.error("Something wrong");
      } else {
        let newUser = {
          name: name,
          email: email,
          password: password,
        };

        const { data } = await axios.post(
          "http://localhost:8000/customers",
          newUser
        );
        if (data) {
          toast.success("Successfully added user");
          setBack(true);
        } else {
          toast.error("Something wrong");
        }
      }
    }
  };

  return (
    <React.Fragment>
      {!goBack && (
        <div className="row mb-5 d-flex justify-content-center">
          <WebsiteMainTitle title="Register Yourself" />

          <div className="col-sm-12 col-md-6 border border-2 p-5 rounded shadow">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

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

              <Form.Group className="mb-3" controlId="submitBtn">
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
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      )}

      {goBack && <Navigate to="/login" />}
    </React.Fragment>
  );
}

export default WebsiteRegister;
