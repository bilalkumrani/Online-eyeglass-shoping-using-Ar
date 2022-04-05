import React from "react";
import { Dropdown } from "react-bootstrap";
import { FakeCart } from "./../../utils/fakeCart";

function WebsiteCartDropdownItem(props) {
  const limitTitle = (title) => {
    let newTitle = title.substring(0, 20);
    newTitle = newTitle + "...";
    return newTitle;
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <i
          className={`fas fa-shopping-cart`}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Cart"
        ></i>
        <i
          className="badge bg-white rounded-circle position-absolute text-dark"
          style={{ top: "2px" }}
        >
          {FakeCart.length}
        </i>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ width: "20rem" }}>
        {FakeCart.map((item) => (
          <Dropdown.Item>
            <div className="d-flex">
              <div>
                <img src={item.image} alt="" width="70rem" height="70rem" />
              </div>

              <div className=" d-flex flex-column justify-content-center align-items-start ps-2">
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  {limitTitle(item.title)}
                </span>

                <span
                  style={{
                    fontWeight: "300",
                    fontSize: "0.8rem",
                    paddingLeft: "0",
                  }}
                >
                  {`Category: ${item.category}`}
                </span>

                <span
                  style={{
                    fontWeight: "800",
                    fontSize: "1rem",
                  }}
                >
                  {`$ ${item.price}`}
                </span>
              </div>
            </div>
          </Dropdown.Item>
        ))}

        <Dropdown.Item>
          <button
            className="btn w-100"
            style={{
              background: "#FFD333",
              fontWeight: "500",
              fontSize: "1rem",
            }}
            onClick={() => {
              alert("go to c art");
            }}
          >
            View Cart
          </button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default WebsiteCartDropdownItem;
