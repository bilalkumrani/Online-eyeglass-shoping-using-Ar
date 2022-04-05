import React from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./navigationBar";
import SideBar from "./sidebar";
import Main from "./main";
import Products from "./products/products";
import ProductDetails from "./products/productDetails";
import AddProduct from "./products/addProduct";
import Orders from "./orders/orders";
import OrderDetails from "./orders/orderDetails";
import Reports from "./reports/reports";
import Categories from "./categories/categories";
import Customers from "./customers/customers";
import CustomerProfile from "./customers/customerProfile";
import Sales from "./sales/sales";
import NotFound from "./notfound";
import { useState } from "react/cjs/react.development";
import Login from "./login/login";
import { toast } from "react-toastify";
import HorizantalBar from "./horizantalBar";
import EditProduct from "./products/editProduct";

function Dashboard(props) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("adminUser"))
      ? JSON.parse(localStorage.getItem("adminUser"))
      : {}
  );

  const removeUser = () => {
    setUser({});
    localStorage.removeItem("adminUser");
    toast.warn("Logged Out");
  };
  return (
    <Fragment>
      {Object.keys(user).length === 0 && <Login onUser={setUser} />}
      {Object.keys(user).length !== 0 && (
        <div>
          <NavigationBar activeUser={user} removeUser={removeUser} />
          <HorizantalBar />
          <div class="container-fluid">
            <div class="row flex-nowrap">
              {/* <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <SideBar />
              </div> */}
              <div
                class="col pb-5 px-sm-0  px-md-5   "
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <Routes>
                  <Route path="/admin" element={<Main />} />
                  <Route path="/admin/products" element={<Products />} />
                  <Route path="/admin/products/:id" element={<EditProduct />} />
                  <Route path="/admin/products/add" element={<AddProduct />} />
                  <Route path="/admin/orders" element={<Orders />} />
                  <Route path="/admin/orders/:id" element={<OrderDetails />} />
                  <Route path="/admin/reports" element={<Reports />} />
                  <Route path="/admin/categories" element={<Categories />} />
                  <Route path="/admin/customers" element={<Customers />} />
                  <Route
                    path="/admin/customers/:id"
                    element={<CustomerProfile />}
                  />
                  {/* <Route path="/admin/stocks" element={<Sales />} /> */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Dashboard;
