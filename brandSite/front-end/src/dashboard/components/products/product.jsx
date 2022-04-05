import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Product(props) {
  const { product, onDelete } = props;
  return (
    <tr>
      <NavLink
        style={{ textDecoration: "none" }}
        to={`/admin/products/${product.productId}`}
        className="text-decoration-none "
      >
        <th scope="row">{product.productId}</th>
      </NavLink>

      <td>
        <img src={product.image} height={55} width={50} alt="" />
      </td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.discountPercent}</td>
      <td>{product.price}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <i className="fas fa-500px fa-edit "></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink
                to={`/admin/products/${product.productId}`}
                className="text-decoration-none "
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
            <Dropdown.Item onClick={() => onDelete(product.productId)}>
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

export default Product;
