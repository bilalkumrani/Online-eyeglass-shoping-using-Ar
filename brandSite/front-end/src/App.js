import { Fragment, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./dashboard/components/dashboard";
import Website from "./website/components/website";
import Login from "./dashboard/components/login/login";
import { DatePicker } from "react-datepicker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function App() {
  let url = window.location.href.split("/");
  let isAdmin = url.includes("admin");

  if (isAdmin) {
    localStorage.removeItem("user");
  } else {
    localStorage.removeItem("adminUser");
  }

  return (
    <Fragment>
      <ToastContainer />
      {isAdmin && <Dashboard />}
      {!isAdmin && <Website />}
    </Fragment>
  );
}

export default App;
