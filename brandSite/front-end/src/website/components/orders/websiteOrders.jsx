import React from "react";
import WebsiteMainTitle from "./../../common/websiteMainTitle";
import WebsiteOrderItem from "./websiteOrderItem";
import { useState, useEffect } from "react";
import axios from "axios";

function WebsiteOrders(props) {
  const { user } = props;

  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/orders");
    const res = await axios.get("http://localhost:8000/customers");
    setOrders(data);
    setCustomers(res.data);
  }, []);

  const getOrders = () => {
    let userId;
    customers.map((item) => {
      if (item.email === user.email) {
        userId = item.customerId;
      }
    });

    let final = orders.filter((item) => item.customerId === userId);
    return final;
  };

  let data = getOrders();

  return (
    <div className="d-flex justify-content-center align-items-center">
      {user.email !== "" && (
        <div className="row mb-5">
          <WebsiteMainTitle title="Your orders" />
          <main className="pb-5">
            <div className="table-responsive">
              <table className="table table-hover caption-top table-sm ">
                <thead className="">
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
                    <WebsiteOrderItem item={item} key={item.orderId} />
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      )}
      {user.email === "" && (
        <div
          className="row mb-5 p-5 text-center d-flex justify-content-center align-items-center"
          style={{ height: "28rem" }}
        >
          <WebsiteMainTitle title="No Orders Available" />
        </div>
      )}
    </div>
  );
}

export default WebsiteOrders;
