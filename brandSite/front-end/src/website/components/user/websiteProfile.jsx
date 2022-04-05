import React from "react";
import WebsiteMainTitle from "./../../common/websiteMainTitle";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function WebsiteProfile(props) {
  const { user } = props;

  const [customer, setCustomer] = useState({});

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/customers");
    let res = data.find((item) => item.email === user.email);
    setCustomer(res);
  }, []);

  return (
    <React.Fragment
    // className="d-flex justify-content-center align-items-center"
    // style={{ height: "28rem" }}
    >
      {user.email !== "" && (
        <div className="row mb-5 text-center  ">
          <WebsiteMainTitle title="User Profile" />

          <div className="p-5 shadow border">
            <div className="m-2">
              <span
                className="w-100 my-2 display-2"
                style={{
                  color: "#3D464D",
                  fontWeight: "700",
                  fontSize: "2rem",
                }}
              >
                Name:
              </span>
              <span
                className=" w-100 my-2 display-2"
                style={{
                  color: "#3D464D",
                  //   fontWeight: "900",
                  fontSize: "2rem",
                }}
              >
                {"   " + customer.name}
              </span>
            </div>

            <span
              className="w-100 my-2 display-2"
              style={{
                color: "#3D464D",
                fontWeight: "700",
                fontSize: "2rem",
              }}
            >
              Email:
            </span>
            <span
              className=" w-100 my-2 display-2"
              style={{
                color: "#3D464D",
                //   fontWeight: "900",
                fontSize: "2rem",
              }}
            >
              {"   " + customer.email}
            </span>
          </div>
        </div>
      )}

      {user.email === "" && (
        <div
          className="row mb-5 text-center d-flex justify-content-center align-items-center"
          style={{ height: "28rem" }}
        >
          <WebsiteMainTitle title="Log in to see profile" />
          <NavLink to={`/login`}>
            <button
              className="btn w-50 my-2"
              style={{
                background: "#3D464D",
                color: "#FFFFFF",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              Go to login page
            </button>
          </NavLink>
        </div>
      )}
    </React.Fragment>
  );
}

export default WebsiteProfile;
