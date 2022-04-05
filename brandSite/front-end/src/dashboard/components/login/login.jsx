import React from "react";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { useState } from "react/cjs/react.development";

function Login(props) {
  const { onUser } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "danu" && password === "danu") {
      onUser({ username: username, password: password });
      localStorage.setItem(
        "adminUser",
        JSON.stringify({ username: username, password: password })
      );
      toast.success("log in");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <div
      class="container-fluid "
      style={{ height: "100vh", background: "orange" }}
    >
      <div class="row d-flex h-100 justify-content-center align-items-center">
        <div
          class="col-md-4 col-md-offset-4 shadow p-5 rounded-3 h-50"
          style={{ background: "white" }}
        >
          <div class="panel panel-default">
            <div class="panel-heading mb-4 ">
              <h3 class="panel-title display-6">Admin</h3>
            </div>
            <div class="panel-body">
              <form accept-charset="UTF-8" role="form">
                <fieldset>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <input
                    class="btn btn-lg btn-success btn-block w-100 py-1"
                    type=""
                    value="Sign In"
                    onClick={handleLogin}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
