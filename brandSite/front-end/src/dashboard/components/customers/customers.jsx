import React from "react";
import Title from "./../common/title";
import Customer from "./customer";
import { useState, useEffect } from "react/cjs/react.development";
import SearchBox from "./../common/searchBox";
// import { FakeCustomers } from "./../../utils/fakeCustomers";
import axios from "axios";

function Customers(props) {
  const [searchQuery, handleSearch] = useState("");
  const [customersList, setCustomersList] = useState([]);

  useEffect(async () => {
    let { data } = await axios.get("http://localhost:8000/customers");
    setCustomersList(data);
  }, []);

  var filtered = customersList;
  const getCustomers = () => {
    if (searchQuery) {
      filtered = customersList.filter((m) =>
        m.customerId
          .toString()
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );
    }

    return { items: filtered };
  };

  const { items } = getCustomers();

  return (
    <main className="p-2">
      <Title name="Customers component" />
      <div className="container">
        <div className="row">
          <SearchBox value={searchQuery} onChange={handleSearch} />
          {items.map((item) => (
            <Customer data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Customers;
