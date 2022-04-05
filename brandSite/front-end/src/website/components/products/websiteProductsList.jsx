import React, { useState, useEffect } from "react";
import WebsiteMainTitle from "./../../common/websiteMainTitle";

import WebsiteProduct from "./websiteProduct";
import { Form } from "react-bootstrap";
import WebSiteSectionTitle from "./../../common/WebsiteSectionTitle";
import axios from "axios";

function WebsiteProductsList(props) {
  const [Category, setCategory] = useState("");
  const [Subcategory, setSubcategory] = useState("");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    const res = await axios.get("http://localhost:8000/categories");
    setCategories(res.data);
    setProducts(data);
  }, []);

  const getSubCategories = () => {
    if (Category) {
      if (Category === "All") {
        return false;
      } else {
        for (let i of categories) {
          if (i.category === Category) {
            return i.subCategories;
          }
        }
      }
    }
  };

  const getFilteredProducts = () => {
    if (!Category) {
      return products;
    } else if (Category && !Subcategory) {
      let prods = products.filter((item) => item.category === Category);
      return prods;
    } else if (Category && Subcategory) {
      let prods = products.filter((item) => item.category === Category);
      prods = products.filter((item) => item.subCategory === Subcategory);

      return prods;
    } else {
      return [];
    }
  };
  let data = getFilteredProducts();

  return (
    <React.Fragment>
      <WebSiteSectionTitle title="Products" />

      <Form className="row mb-3 ">
        <Form.Group className="col-4">
          <Form.Label
            htmlFor="category_select"
            style={{
              fontSize: "1.1rem",
              fontWeight: "900",
              color: "#3D464D",
            }}
          >
            Category
          </Form.Label>
          <Form.Select
            aria-label="Select Category"
            id="category_select"
            onChange={(e) => {
              setCategory(e.target.value + "");
            }}
          >
            <option value="">All</option>
            {categories.map((item) =>
              item.category === Category ? (
                <option selected value={item.category}>
                  {item.category}
                </option>
              ) : (
                <option value={item.category}>{item.category}</option>
              )
            )}
          </Form.Select>
        </Form.Group>
        {Category && (
          <Form.Group className="col-4">
            <Form.Label
              htmlFor="subcategory_select"
              style={{
                fontSize: "1.1rem",
                fontWeight: "900",
                color: "#3D464D",
              }}
            >
              Subcategory
            </Form.Label>
            <Form.Select
              aria-label="Select SubCategory"
              id="subcategory_select"
              onChange={(e) => setSubcategory(e.target.value + "")}
            >
              <option value="">--</option>
              {getSubCategories().map((item) =>
                item === Subcategory ? (
                  <option selected value={item}>
                    {item}
                  </option>
                ) : (
                  <option value={item}>{item}</option>
                )
              )}
            </Form.Select>
          </Form.Group>
        )}
      </Form>

      <div className="row mb-3 ">
        {data.length > 0 &&
          data.map((item) => (
            <div className="col mb-2">
              <WebsiteProduct
                product={item}
                isNew={false}
                isSale={item.discountPercent > 0}
              />
            </div>
          ))}

        {data.length < 1 && (
          <div
            className="mb-5 text-center d-flex justify-content-center align-items-center"
            style={{ height: "20rem" }}
          >
            <WebsiteMainTitle title="No product found" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default WebsiteProductsList;
