import React from "react";

function ReportItem(props) {
  let current = new Date();
  const { item } = props;

  //Status for orders
  const statuses = {
    pending: "bg-primary",
    delivered: "bg-success",
    canceled: "bg-danger",
  };
  const getDateFormat = (date) => {
    date = date.substring(0, 10).split("-");
    //Day-Month-Year
    date = date[1] + "-" + date[2] + "-" + date[0];
    return date;
  };

  return (
    <tr>
      <td>{item.orderId}</td>
      <td>{item.customerId}</td>
      <td>{item.orderDate && getDateFormat(item.orderDate)}</td>
      <td>{item.deliverDate && getDateFormat(item.deliverDate)}</td>
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
                width={40}
                height={40}
              />
              <span className=" fw-bolder">{`X ${product.quantity}  `} </span>
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

export default ReportItem;
