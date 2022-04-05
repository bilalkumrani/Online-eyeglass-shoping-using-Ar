import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import axios from "axios";

function Customer(props) {
  const { data } = props;
  const [ordersList, setOrdersList] = useState([]);
  const getRounded = (numb) => {
    return Math.round((numb + Number.EPSILON) * 100) / 100;
  };
  useEffect(async () => {
    let { data } = await axios.get("http://localhost:8000/orders");
    setOrdersList(data);
  }, []);

  const getTotalOrders = () => {
    let totalOrders = 0;
    ordersList.map((item) => {
      if (item.customerId === data.customerId) {
        totalOrders++;
      }
    });
    return totalOrders;
  };

  const getTotalPurchase = () => {
    let totalPurchase = 0;
    ordersList.map((item) => {
      if (item.customerId === data.customerId) {
        totalPurchase += item.totalAmount;
      }
    });
    return totalPurchase;
  };

  return (
    <div class="col-sm-12 col-md-4 my-2 shadow border p-3 rounded">
      <h5 class="text-center">
        <strong class="text-center">{data.name}</strong>
      </h5>

      <div class="profile-card-4 text-center">
        <div class="profile-content">
          <div class="profile-name">
            <p>{data.email}</p>
          </div>
          <div class="row d-flex">
            <div class="col">
              <div class="profile-overview">
                <p>ID</p>
                <h5>{data.customerId}</h5>
              </div>
            </div>
            <div class="col">
              <div class="profile-overview">
                <p>ORDERS</p>
                <h5>{getTotalOrders()}</h5>
              </div>
            </div>
            <div class="col">
              <div class="profile-overview">
                <p>Purchased</p>
                <h5>{getRounded(getTotalPurchase())}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
