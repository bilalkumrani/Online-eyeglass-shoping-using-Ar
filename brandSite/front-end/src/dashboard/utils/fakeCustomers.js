import axios from "axios";

let url = "http://localhost:8000/customers";

const getCustomers = async () => {
  const results = await axios.get(url);
  return results.data;
  // console.log(results.data);
};

export const FakeCustomers = [
  {
    customerId: 1,
    name: "Daniyal",
    email: "daniyalshah7862018@gmail.com",
    password: "admin",
  },
  {
    customerId: 2,
    name: "Waheed",
    email: "waheed@gmail.com",
    password: "12345",
  },
  {
    customerId: 3,
    name: "Ali",
    email: "ali@gmail.com",
    password: "12345",
  },
  {
    customerId: 4,
    name: "Hassan",
    email: "hassan@gmail.com",
    password: "12345",
  },
  {
    customerId: 5,
    name: "Noman",
    email: "noman@gmail.com",
    password: "12345",
  },
  {
    customerId: 6,
    name: "Junaid",
    email: "junaid@gmail.com",
    password: "12345",
  },
  {
    customerId: 7,
    name: "Bilal",
    email: "bilal@gmail.com",
    password: "12345",
  },
];

// getCustomers();

export const addFakeCustomer = (customer) => {
  FakeCustomers.push(customer);
};
