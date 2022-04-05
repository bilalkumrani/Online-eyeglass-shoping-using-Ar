import React, { useEffect, useState } from "react";
import Widget from "./widget";
import axios from "axios";

function Widgets() {
  const [allCustomers, setCustomers] = useState([]);
  const [allOrders, setOrders] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/orders");
    setOrders(data);
    const res = await axios.get("http://localhost:8000/customers");
    setCustomers(res.data);
  }, []);

  const getRounded = (numb) => {
    return Math.round((numb + Number.EPSILON) * 100) / 100;
  };

  const getTotalIncome = () => {
    let totalIncome = 0;
    let orders = allOrders.filter((order) => order.status === "delivered");
    orders.map((item) => (totalIncome += item.totalAmount));
    return getRounded(totalIncome);
  };
  const getCancelledOrders = () => {
    let orders = allOrders.filter((order) => order.status === "canceled");

    return orders.length;
  };
  const getTotalCustomers = () => {
    let totalCustomers = allCustomers.length;
    return totalCustomers;
  };
  const getProductsSold = () => {
    let productsSold = 0;
    let orders = allOrders.filter((order) => order.status === "delivered");
    orders.map((item) => (productsSold += item.products.length));
    return productsSold;
  };
  const getCompletedOrders = () => {
    let completedOrders = 0;
    let orders = allOrders.filter((order) => order.status === "delivered");
    completedOrders = orders.length;
    return completedOrders;
  };
  const getPendingOrders = () => {
    let pendingOrders = 0;
    let orders = allOrders.filter((order) => order.status === "pending");
    pendingOrders = orders.length;
    return pendingOrders;
  };

  const widgets = [
    {
      name: "Total Income",
      value: getTotalIncome(),
      icon: "dollar-sign",
      bg: "card text-white bg-info",
    },
    {
      name: "Total customers",
      value: getTotalCustomers(),
      icon: "user-plus",
      bg: "card text-white bg-secondary",
    },
    {
      name: "Products sold",
      value: getProductsSold(),
      icon: "box",
      bg: "card text-white bg-warning",
    },
    {
      name: "Orders completed",
      value: getCompletedOrders(),
      icon: "check-square",
      bg: "card text-white bg-success",
    },

    {
      name: "Pending orders",
      value: getPendingOrders(),
      icon: "bell",
      bg: "card text-white bg-primary",
    },
    {
      name: "Cancelled orders",
      value: getCancelledOrders(),
      icon: "bell",
      bg: "card text-white bg-danger",
    },
  ];

  return (
    <div className="row">
      {widgets.map((widget) => (
        <Widget
          key={widget.name}
          name={widget.name}
          bg={widget.bg}
          icon={widget.icon}
          value={widget.value}
        />
      ))}
    </div>
  );
}

export default Widgets;
