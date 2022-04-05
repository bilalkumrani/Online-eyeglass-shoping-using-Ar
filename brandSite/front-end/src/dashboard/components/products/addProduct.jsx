import React from "react";
import Title from "./../common/title";
import ViewProduct from "./viewProduct";
import { toast } from "react-toastify";
import axios from "axios";

function AddProduct(props) {
  const handleAdd = async (product) => {
    toast.success("Added product");
    console.log(product);
    const { data } = await axios.post(
      "http://localhost:8000/products",
      product
    );
  };

  return (
    <main className="p-2 px-5">
      <Title name="Add a product" />
      <ViewProduct onAdd={handleAdd} />
    </main>
  );
}

export default AddProduct;
