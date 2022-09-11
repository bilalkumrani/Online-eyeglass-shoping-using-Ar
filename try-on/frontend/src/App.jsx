import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import AppCanvas from "./components/AppCanvas";
import { Routes, Route } from "react-router-dom";
import Sunglasses from "./components/Sunglasses";
import Eyeglasses from "./components/Eyeglasses";
import Allproducts from "./components/Allproducts";
import Productdetails from "./components/Productdetails";
import Payment from "./components/Payment";
import "./App.css";
import "./index";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/tryon/:sku" element={<AppCanvas />} />
        <Route exact path="/sunglasses" element={<Sunglasses />} />
        <Route exact path="/eyeglasses" element={<Eyeglasses />} />
        <Route exact path="/all" element={<Allproducts />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/product/:id" element={<Productdetails />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
};

export default App;
