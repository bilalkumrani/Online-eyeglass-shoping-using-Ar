import React from "react";

import ReportItem from "./reportItem";

function OrderReports(props) {
  const { data } = props;
  console.log(data);
  return (
    <main className="">
      <div className="table-responsive">
        <table className="table table-hover caption-top table-sm ">
          <thead className="table-danger">
            <tr className="">
              <th scope="col">Order ID</th>
              <th scope="col">Customer </th>
              <th scope="col">Order Date</th>
              <th scope="col">Delivery Date</th>
              <th scope="col">Products</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <ReportItem item={item} key={item.orderId} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default OrderReports;
