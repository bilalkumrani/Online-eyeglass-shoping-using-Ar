import React from "react";
import { ListGroup, Button, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react/cjs/react.development";
import Title from "./../common/title";
import { addFakeCategory, FakeCategories } from "./../../utils/fakeCategories";
import axios from "axios";

function Categories(props) {
  const [allCategories, handleCategories] = useState([]);
  const [activeCategory, handleActiveCategory] = useState("");
  const [newCategory, handleNewCategory] = useState("");
  const [newSubCategory, handleNewSubCategory] = useState("");

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:8000/categories");
    handleCategories(data);
  }, []);

  const addCategory = async () => {
    if (newCategory) {
      const updatedCategories = [
        ...allCategories,
        {
          category: newCategory,
          subCategories: [],
        },
      ];
      handleCategories(updatedCategories);
      await axios.post("http://localhost:8000/categories", {
        category: newCategory,
        subCategories: [],
      });
    }
  };

  const addSubCategory = async () => {
    if (newSubCategory) {
      const updatedCategories = [...allCategories];
      var catIndex = 0;

      updatedCategories.map((item, index) => {
        if (item.category === activeCategory) {
          catIndex = index;
          item.subCategories.push(newSubCategory + "");
        }
      });

      await axios.delete(`http://localhost:8000/categories/${activeCategory}`);

      await axios.post(`http://localhost:8000/categories`, {
        category: activeCategory,
        subCategories: allCategories[catIndex].subCategories,
      });

      handleCategories(updatedCategories);
    }
  };

  const handleDeleteCateory = async (category) => {
    if (category) {
      const updatedCategories = allCategories.filter(
        (item) => item.category !== category
      );

      await axios.delete(`http://localhost:8000/categories/${category}`);
      handleCategories(updatedCategories);
    }
  };

  const handleDeleteSubCategory = async (subcategory) => {
    if (subcategory) {
      const updatedCategories = [...allCategories];

      let indexCat = 0;
      let indexSubCat = 0;

      for (let i of updatedCategories) {
        if (i.category === activeCategory) {
          for (let j of i.subCategories) {
            if (j === subcategory) {
              break;
            }
            indexSubCat++;
          }
          break;
        }
        indexCat++;
      }

      updatedCategories[indexCat].subCategories.splice(indexSubCat, 1);

      await axios.delete(`http://localhost:8000/categories/${activeCategory}`);

      await axios.post(`http://localhost:8000/categories`, {
        category: activeCategory,
        subCategories: updatedCategories[indexCat].subCategories,
      });

      handleCategories(updatedCategories);
    }
  };

  return (
    <main className="p-2">
      <Title name="Category Component" />
      <div className="row">
        <div className="col-6 bg-light p-3 rounded">
          <h5 className="display-5" style={{ fontSize: "2rem" }}>
            Add Category
          </h5>
          <div className="d-flex mb-4">
            <FormControl
              required
              type="text"
              id="new_category"
              onChange={(e) => handleNewCategory(e.target.value)}
            />
            <Button className="btn btn-primary " onClick={() => addCategory()}>
              Add
            </Button>
          </div>

          <ListGroup as="ol" numbered>
            {allCategories.map((item) => (
              <ListGroup.Item
                className="d-flex justify-content-between"
                as="li"
                active={item.category === activeCategory}
                onClick={() => handleActiveCategory(item.category)}
              >
                <strong>{item.category}</strong>

                <i
                  className="fas fa-100px fa-trash me-1"
                  style={{ color: "red" }}
                  onClick={() => handleDeleteCateory(item.category)}
                ></i>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="col-6 bg-light p-3 rounded">
          <h5 className="display-5" style={{ fontSize: "2rem" }}>
            Add SubCategory
          </h5>
          <div className="d-flex mb-4">
            <FormControl
              required
              type="text"
              id="new_subcategory"
              onChange={(e) => handleNewSubCategory(e.target.value)}
            />
            <Button
              className="btn btn-primary"
              onClick={() => addSubCategory()}
            >
              Add
            </Button>
          </div>

          <ListGroup as="ol" numbered>
            {allCategories.map(
              (item) =>
                item.category === activeCategory &&
                item.subCategories.map((sub) => (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between"
                  >
                    <strong>{sub}</strong>
                    <i
                      className="fas fa-100px fa-trash me-1"
                      style={{ color: "red" }}
                      onClick={() => handleDeleteSubCategory(sub)}
                    ></i>
                  </ListGroup.Item>
                ))
            )}
          </ListGroup>
        </div>
      </div>
    </main>
  );
}

export default Categories;
