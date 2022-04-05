import React from "react";

function WebsiteOrderItem(props) {
  let current = new Date();
  const { item } = props;

  //Status for orders
  const statuses = {
    pending: "bg-primary",
    delivered: "bg-success",
    canceled: "bg-danger",
  };

  return (
    <tr>
      <td>{item.orderId}</td>
      <td>{item.customerId}</td>
      <td>
        {current.getDate()}/{current.getMonth() + 1}/{current.getFullYear()}
      </td>
      <td></td>
      <td>
        <tr>
          {item.products.map((product) => (
            <td>
              <img
                src={product.image}
                className="rounded "
                data-toggle="tooltip"
                data-placement="top"
                title={product.title}
                alt=""
                width={30}
                height={30}
              />
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {` X ${product.quantity}`}
              </span>
            </td>
          ))}
        </tr>
      </td>
      <td>
        <span className={`badge ${statuses[item.status]}`}>{item.status}</span>
      </td>
      <td>{`Rs ${item.totalAmount}`}</td>
    </tr>
  );
}

export default WebsiteOrderItem;
