import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Order(props) {
  const { item, onDelete } = props;

  //Status for orders
  const statuses = {
    pending: "bg-primary",
    delivered: "bg-success",
    canceled: "bg-danger",
  };

  const getDateFormat = (date) => {
    date = date.substring(0, 10).split("-");
    date = date[1] + "-" + date[2] + "-" + date[0];
    return date;
  };

  return (
    <tr>
      <td>
        <NavLink
          to={`/admin/orders/${item.orderId}`}
          style={{ textDecoration: "none" }}
        >
          {item.orderId}
        </NavLink>
      </td>
      <td>
        <NavLink
          to={`/admin/customers/${item.customerId}`}
          style={{ textDecoration: "none" }}
        >
          {item.customerId}
        </NavLink>
      </td>
      <td>{item.orderDate && getDateFormat(item.orderDate)}</td>
      <td>{item.deliverDate && getDateFormat(item.deliverDate)}</td>
      <td>{item.products.length}</td>
      <td>
        <span className={`badge ${statuses[item.status]}`}>{item.status}</span>
      </td>
      <td>{`Rs ${item.totalAmount}`}</td>
      <td>
        <Dropdown drop="start">
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <i className="fas fa-500px fa-edit "></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink
                to={`/admin/orders/${item.orderId}`}
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                <div>
                  <i
                    className="fas fa-100px fa-check me-1 "
                    style={{ color: "blue" }}
                  ></i>
                  Edit
                </div>
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onDelete(item.orderId)}>
              <i
                className="fas fa-100px fa-trash me-1"
                style={{ color: "red" }}
              ></i>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}

export default Order;
