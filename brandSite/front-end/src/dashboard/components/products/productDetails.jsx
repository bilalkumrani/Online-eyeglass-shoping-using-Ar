import React from "react";
import { useParams } from "react-router-dom";
import Title from "../common/title";
import ViewProduct from "./viewProduct";
import { toast } from "react-toastify";
import { useState, useEffect } from "react/cjs/react.development";
import axios from "axios";

function ProductDetails(props) {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(async () => {
    const { data } = await axios(`http://localhost:8000/products/${params.id}`);
    setSelectedProduct(data);
  }, []);

  const handleAdd = (updatedProduct) => {
    toast.success("Updated product");
    console.log(updatedProduct);
  };

  const getProduct = () => {
    return selectedProduct;
  };

  const item = getProduct();

  console.log("In products details");
  console.log(item);

  const testing = {
    productId: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Clothes",
    subCategory: "shirt",
    discountPercent: 0,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 1,
  };

  return (
    <main className="p-2 px-5">
      <Title name={`Product# ${params.id}`} />
      {<ViewProduct product={item} onAdd={handleAdd} />}
    </main>
  );
}

export default ProductDetails;
