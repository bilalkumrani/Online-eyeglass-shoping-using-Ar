import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import AppCanvas from "./components/AppCanvas";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="tryon" element={<AppCanvas />} />
      </Routes>
    </>
  );
};

export default App;
