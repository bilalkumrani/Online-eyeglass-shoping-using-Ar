import React, { useEffect, useState } from "react";
import Framescards from "./Framescards";
import { addItem, deleteItem } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const Allproducts = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => console.log(result.data));
  }, []);

  // const state = useSelector((state) => state.manageItems);

  return (
    <>
      {/* {console.log(state)} */}
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {data.map((item) => {
            return (
              <Framescards id={item._id} name={item.name} price={item.price} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Allproducts;
