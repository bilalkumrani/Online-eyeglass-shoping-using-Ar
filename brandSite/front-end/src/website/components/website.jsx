import React, { useState } from "react";
import WebsiteNavBar from "./../common/websiteNavBar";
import WebsiteCarousel from "./websiteCarousel";
import WebsiteFooter from "./websiteFooter";
import WebsiteBlocks from "./websiteBlocks";
import WebsiteProduct from "./products/websiteProduct";
import WebsiteFeaturedProducts from "./products/websiteFeaturedProducts";
import WebsiteSaleProducts from "./products/websiteSaleProducts";
import WebsiteHome from "./websiteHome";
import { Routes, Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import WebsiteCartDetails from "./cart/websiteCartDetails";
import WebsiteCheckout from "./cart/websiteCheckout";
import WebsiteLogin from "./user/websiteLogin";
import WebsiteRegister from "./user/websiteRegister";
import WebsiteProfile from "./user/websiteProfile";
import WebsiteOrders from "./orders/websiteOrders";
import WebsiteProductsList from "./products/websiteProductsList";

function Website(props) {
  const [activeUser, setUser] = useState({ email: "", password: "" });
  const [cart, setCart] = useState();
  const [cartLength, setCartLength] = useState(
    JSON.parse(localStorage.getItem("cart")).length
  );

  const handleUser = (user) => {
    setUser(user);
  };
  const addUser = (obj) => {
    setUser(obj);
  };
  const handleRemoveUser = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <div className="container-fluid">
      <div className="row header">
        <WebsiteNavBar
          setCart={setCart}
          handleRemoveUser={handleRemoveUser}
          addUser={addUser}
          user={activeUser.email !== "" ? activeUser : {}}
          cartLength={cartLength}
        />
      </div>

      <div className="body-website px-sm-0 px-md-5 px-lg-5 ">
        <Routes>
          <Route path="/" element={<WebsiteHome />} />
          <Route
            path="/mycart"
            element={<WebsiteCartDetails user={activeUser} />}
          />

          <Route path="/:category" element={<WebsiteProductsList />} />
          <Route
            path="/:category/:subcategory"
            element={<WebsiteProductsList />}
          />
          <Route
            path="/checkout"
            element={<WebsiteCheckout user={activeUser} />}
          />
          <Route path="/orders" element={<WebsiteOrders user={activeUser} />} />
          <Route path="/login" element={<WebsiteLogin onUser={handleUser} />} />
          <Route
            path="/profile"
            element={<WebsiteProfile user={activeUser} />}
          />
          <Route path="/register" element={<WebsiteRegister />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>

      <div className="row ">
        <WebsiteFooter />
      </div>
    </div>
  );
}

export default Website;
