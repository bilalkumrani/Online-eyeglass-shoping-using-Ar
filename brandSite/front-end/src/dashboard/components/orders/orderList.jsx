import React from "react";

import Order from "./order";

function OrderList(props) {
  const { data, onDelete } = props;

  return (
    <div className="table-responsive">
      <table className="table table-hover caption-top table-sm ">
        <thead className="table-danger">
          <tr className="">
            <th scope="col">Order ID</th>
            <th scope="col">Customer </th>
            <th scope="col">Order Date</th>
            <th scope="col">Status Updated date</th>
            <th scope="col">Total Products</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Order item={item} key={item.orderId} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
