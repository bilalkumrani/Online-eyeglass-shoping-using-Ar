import { useEffect, useState } from "react";
import { getAlldata } from "../redux/actions/index";
import { Contact } from "./contact";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CatAndFilters from "./CatAndFilters";
import Framescards from "./Framescards";
import Slider from "./Slider";

import { useDispatch, useSelector } from "react-redux";
import { addUser, setCart } from "../redux/actions/index";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allProducts } = useSelector((state) => state.manageItems);

  useEffect(() => {
    // axios
    //   .post("http://localhost:4000/getuser", {
    //     token: localStorage.getItem("token"),
    //   })
    //   .then((res) => {
    //     console.log("halling ", res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    if (localStorage.getItem("token")) {
      fetch("http://localhost:4000/user/getuser", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: {},
      })
        .then((result) => result.json())
        .then((res) => {
          if (!res.error) {
            dispatch(addUser(res));
            dispatch(setCart(res.cart));
          } else {
            dispatch(addUser(null));
          }
        });
    } else {
      dispatch(addUser(null));
      dispatch(setCart([]));
    }

    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => {
        dispatch(getAlldata(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Slider />

      <div className="text-center" style={{ marginTop: "70px" }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          SHOP EYEGLASSES
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          SHOP SUNGLASSES
        </Button>
      </div>

      <CatAndFilters />

      <div className="container">
        <div className="row">
          {allProducts.map((item, index) => {
            return (
              <Framescards
                id={item._id}
                prodIndex={index}
                name={item.name}
                price={item.price}
                pic={item.pic}
              />
            );
          })}
        </div>
      </div>

      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-muted">Let US Decide what is good for you!</h2>
          </div>
          <div className="col-md-6 ">
            <Button
              variant="outlined"
              size="large"
              sx={{
                m: 2,
                width: 300,
                height: "5%",
                color: "black",
                borderColor: "grey.500",
              }}
              onClick={() => {
                navigate("quiz");
              }}
              style={{ float: "right" }}
            >
              Take Quiz
            </Button>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};
