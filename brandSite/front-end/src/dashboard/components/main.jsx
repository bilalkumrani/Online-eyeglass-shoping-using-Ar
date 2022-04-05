import React, { useEffect, useState } from "react";
import Title from "./common/title";
import Widgets from "./widgets";
import DoughnutChart from "./../utils/charts/doughnutChart";
import BarChart from "./../utils/charts/barChart";
import axios from "axios";

function Main(props) {
  const [allOrders, setOrders] = useState([]);
  const [allProducts, setProducts] = useState([]);
  const [allCategories, setCategories] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    setProducts(data);
    const ords = await axios.get("http://localhost:8000/orders");
    setOrders(ords.data);
    const cate = await axios.get("http://localhost:8000/categories");
    setCategories(cate.data);
  }, []);

  const getCategories = () => {
    let values = [];
    allCategories.map((item) => values.push(item.category));
    return values;
  };

  const getTotalProducts = (category) => {
    let count = 0;
    allProducts.map((item) => {
      if (item.category.toLowerCase() === category.toLowerCase()) {
        count++;
      }
    });
    return count;
  };

  const getDatasets = () => {
    let sets = [];
    getCategories().forEach((element) => sets.push(getTotalProducts(element)));
    return sets;
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

  const getDatasets2 = () => {
    let sets = [];
    getCategories().forEach((element) => sets.push(getNoSoldProducts(element)));
    return sets;
  };

  const doughnutData2 = {
    labels: getCategories(),
    datasets: [
      {
        data: getDatasets2(),
        backgroundColor: [
          "#52595D",
          "#838996",
          "#666362",
          "#2B547E",
          "#B4CFEC",
          "#7BCCB5",
          "#033E3E",
          "#2C3539",
          "#4B5320",
        ],
      },
    ],
  };

  const doughnutData = {
    labels: getCategories(),
    datasets: [
      {
        data: getDatasets(),
        backgroundColor: [
          "#52595D",
          "#838996",
          "#666362",
          "#2B547E",
          "#B4CFEC",
          "#7BCCB5",
          "#033E3E",
          "#2C3539",
          "#4B5320",
        ],
      },
    ],
  };

  return (
    <main className="p-2">
      <Title name="Dashboard" />
      <div className="row mb-4">
        <div className="col">
          <Widgets />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6  text-center">
          <Title name="Products Sold wrt Category" />
          <DoughnutChart data={doughnutData2} />
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <Title name="Quantity Available wrt Category" />
          <DoughnutChart data={doughnutData} />
        </div>
      </div>
    </main>
  );
}

export default Main;
