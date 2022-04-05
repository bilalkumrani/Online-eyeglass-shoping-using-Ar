import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FakeCategories } from "./../fakeCategories";
import { FakeOrders } from "./../fakeOrders";
import axios from "axios";

export default function BarChart() {
  const [allOrders, setOrders] = useState([]);
  const [allCategories, setCategories] = useState([]);

  useEffect(async () => {
    const cate = await axios.get("http://localhost:8000/categories");
    setCategories(cate.data);
    const ords = await axios.get("http://localhost:8000/orders");
    setOrders(ords.data);
  }, []);

  const options = {
    tooltips: {
      mode: "index",
      callbacks: {
        label: function (toolTipItem) {
          return "Sale: $" + toolTipItem.value;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "gray",
          },
          scaleLabel: {
            labelString: "Categories",
            display: true,
            fontColor: "Black",
            fontSize: 20,
          },
          ticks: {
            fontColor: "black",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "gray",
          },
          scaleLabel: {
            labelString: "Sale",
            display: true,
            fontColor: "black",
            fontSize: 20,
          },
          ticks: {
            beginAtZero: true,
            fontColor: "black",
          },
        },
      ],
    },
  };

  let getCategories = () => {
    let values = [];
    allCategories.map((item) => values.push(item.category));
    return values;
  };

  const getCompletedOrders = () => {
    let orders = allOrders.filter((order) => order.status === "delivered");
    return orders;
  };

  const getNoSoldProducts = (category) => {
    let orders = getCompletedOrders();
    let sold = 0;

    for (let order of orders) {
      for (let product of order.products) {
        if (product.category.toLowerCase() === category.toLowerCase()) {
          sold++;
        }
      }
    }

    return sold;
  };

  let getDatasets = () => {
    let items = [];
    let cates = getCategories();

    for (let cat of cates) {
      items.push({
        label: cat,
        data: [getNoSoldProducts(cat), 20, 30],
        backgroundColor: "gray",
        barThickness: 20,
      });
    }
    return [
      {
        label: "Clothes",
        data: [getNoSoldProducts("Clothes")],
        backgroundColor: "gray",
        barThickness: 20,
      },
      {
        label: "Shoes",
        data: [getNoSoldProducts("Shoes")],
        backgroundColor: "black",
        barThickness: 20,
      },
    ];
    // return items;
  };

  const data = {
    labels: getCategories(),
    datasets: getDatasets(),
  };
  return <Bar data={data} options={options}></Bar>;
}
