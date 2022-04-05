import React, { useState } from "react";
import Pagination from "../pagination";
import Title from "./../common/title";
import ProductList from "./productList";

import SearchBox from "./../common/searchBox";
import { paginate } from "./../../utils/paginate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect } from "react/cjs/react.development";
import axios from "axios";

function Products(props) {
  const [products, handleProducts] = useState([]);
  const [currentPage, handlePageChange] = useState(1);
  const [searchQuery, handleSearch] = useState("");
  const pageSize = 4;
  let navigate = useNavigate();

  useEffect(async () => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((res) => {
        handleProducts(res);
      });
  }, []);

  const getProducts = () => {
    let filtered = products;
    if (searchQuery) {
      filtered = products.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    const data = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, items: data };
  };
  // Delete Product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((item) => item.productId !== id);
    console.log(updatedProducts);

    deleteProduct(id);

    handleProducts(updatedProducts);
    toast.error("Product deleted");
  };

  const deleteProduct = async (id) => {
    const { data } = await axios.delete(`http://localhost:8000/products/${id}`);

    if (data) {
      console.log("deleted pro");
      console.log(data);
    }
  };

  const { totalCount, items } = getProducts();
  return (
    <main className="p-2">
      <Title name="Products" />
      <div className="row my-2 p-4 rounded shadow">
        <div className="row mb-3">
          <div className="col-10">
            <SearchBox value={searchQuery} onChange={handleSearch} />
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary w-100 p-2"
              onClick={() => {
                navigate("/admin/products/add");
              }}
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="col">
          <ProductList products={items} onDelete={handleDeleteProduct} />

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

export default Products;
