import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

function ViewProduct(props) {
  const { onAdd } = props;
  const [allCategories, setAllCategories] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    setProductId(data.length + 1);
    const items = await axios.get("http://localhost:8000/categories");
    setAllCategories(items.data);
  }, []);

  const [productId, setProductId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);

  const [discountPercent, setDiscountPercent] = useState(0.0);

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("");

  const [subcategory, setSubcategory] = useState("");
  const [image, setImage] = useState(
    "https://www.howto-connect.com/wp-content/uploads/Fix-Windows-10-Camera-not-working.png"
  );
  const [goback, setBack] = useState(false);

  const getSubCategories = () => {
    if (category) {
      for (let i of allCategories) {
        if (i.category === category) {
          return i.subCategories;
        }
      }
    }
  };

  const getProduct = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let productObj = {
      title: title,
      price: price,
      description: description,
      category: category,
      subCategory: subcategory,
      image: image,
      quantity: quantity,
      discountPercent: discountPercent,
    };

    setBack(true);
    onAdd(productObj);
  };

  return (
    <React.Fragment>
      {!goback && (
        <div className="row">
          <Form onSubmit={getProduct}>
            <Form.Group
              className="row mb-3 d-flex justify-content-around bg-light shadow p-3"
              controlId="formBasicEmail"
            >
              <Form.Group className="col-4">
                <Form.Label htmlFor="category_select">
                  Select Category
                </Form.Label>
                <Form.Select
                  aria-label="Select Category"
                  id="category_select"
                  onChange={(e) => {
                    setCategory(e.target.value + "");
                  }}
                >
                  <option value="">None</option>
                  {allCategories.map((item) =>
                    item.category === category ? (
                      <option selected value={item.category}>
                        {item.category}
                      </option>
                    ) : (
                      <option value={item.category}>{item.category}</option>
                    )
                  )}
                </Form.Select>
              </Form.Group>

              {category && (
                <Form.Group className="col-4">
                  <Form.Label htmlFor="subcategory_select">
                    Select Sub Category
                  </Form.Label>
                  <Form.Select
                    aria-label="Select SubCategory"
                    id="subcategory_select"
                    onChange={(e) => setSubcategory(e.target.value + "")}
                  >
                    <option value="">None</option>
                    {getSubCategories().map((item) =>
                      item === subcategory ? (
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
            </Form.Group>

            {category && subcategory && (
              <Form.Group className="p-1 mt-4 bg-light shadow p-3 row d-flex justify-content-center align-items-center">
                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label htmlFor="id">Product ID</Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="ID"
                      id="id"
                      disabled
                      value={productId}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label htmlFor="name">Product Name</Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="Name"
                      aria-label="name"
                      id="name"
                      required={true}
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label htmlFor="description">Description</Form.Label>
                  <InputGroup>
                    <FormControl
                      as="textarea"
                      id="description"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label htmlFor="price">Price</Form.Label>
                  <InputGroup>
                    <FormControl
                      required
                      type="number"
                      id="price"
                      required
                      onChange={(e) => setPrice(parseFloat(e.target.value))}
                      value={price}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label htmlFor="discount">Discount %</Form.Label>
                  <InputGroup>
                    <FormControl
                      required
                      type="number"
                      id="discount"
                      maxLength={100}
                      minLength={0}
                      onChange={(e) =>
                        setDiscountPercent(parseFloat(e.target.value))
                      }
                      value={discountPercent}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label htmlFor="quantity">Quantity</Form.Label>
                  <InputGroup>
                    <FormControl
                      required
                      type="number"
                      id="quantity"
                      disabled
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      value={quantity}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="col-6 col-md-4 mb-4">
                  <Form.Label>Select Image</Form.Label>
                  <Form.Control
                    type="file"
                    // required
                    // onInput={(e) => setImage(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit">Add OR Update</Button>
              </Form.Group>
            )}
          </Form>
        </div>
      )}

      {goback && <Navigate to="/admin/products" />}
    </React.Fragment>
  );
}

export default ViewProduct;
