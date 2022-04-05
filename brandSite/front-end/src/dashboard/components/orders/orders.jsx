import React from "react";
import Title from "../common/title";
import OrderList from "./orderList";
import { useState, useEffect } from "react/cjs/react.development";
import { paginate } from "./../../utils/paginate";
import SearchBox from "./../common/searchBox";
import Pagination from "./../pagination";
import { Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function Orders(props) {
  const [orders, handleOrders] = useState([]);
  const [currentPage, handlePageChange] = useState(1);
  const [searchQuery, handleSearch] = useState("");
  const [currentOption, handleOption] = useState("orderId");
  const pageSize = 3;

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/orders");

    handleOrders(data);
  }, []);

  const searchOptions = [
    { value: "orderId", label: "Order ID" },
    { value: "customerId", label: "Customer ID" },
    { value: "status", label: "Status" },
    { value: "totalAmount", label: "Total Price" },
  ];

  const getOrders = () => {
    let filtered = [];
    if (searchQuery) {
      filtered = orders.filter((m) =>
        m[currentOption]
          .toString()
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = orders;
    }

    const data = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, items: data };
  };

  const handleDeleteOrder = async (id) => {
    const updatedOrders = orders.filter((item) => item.orderId !== id);
    handleOrders(updatedOrders);
    await axios.delete(`http://localhost:8000/orders/${id}`);
    toast.error("Order Deleted");
  };

  const handleUpdateOrder = (id) => {
    alert(id + " order");
  };
  const { totalCount, items } = getOrders();

  return (
    <main className="p-2">
      <Title name="Orders Component" />
      <div className="shadow p-4">
        <div className="row mb-3">
          <div className="col-sm-6 col-md-3">
            <Form.Control
              as="select"
              custom
              onChange={(e) => {
                handleOption(e.target.value + "");
              }}
              className="form-control "
            >
              {searchOptions.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </Form.Control>
          </div>
          <div className="col">
            <SearchBox value={searchQuery} onChange={handleSearch} />
          </div>
        </div>

        <OrderList data={items} onDelete={handleDeleteOrder} />
        <div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
}

export default Orders;
