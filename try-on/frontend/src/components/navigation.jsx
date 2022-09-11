import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CartBtn from "./CartBtn";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Signin from "./Signin";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ClearIcon from "@mui/icons-material/Clear";
import ListItem from "@mui/material/ListItem";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/actions/index";
import img from "../images/intro-bg.jpg";
import { clearUser } from "../redux/actions/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

export const Navigation = () => {
  const totalPrice = useRef(0);
  const { cart, user } = useSelector((state) => state.manageItems);

  useEffect(() => {});

  const dispatch = useDispatch();

  const [qty, setQty] = useState(0);

  const [sidebar, setSidebar] = useState({
    top: false,
  });

  const decrementQty = () => {
    qty > 0 && setQty(qty - 1);
  };

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const removeCart = (item) => {
    dispatch(deleteItem(item));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar({ ...sidebar, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cart.map((item, index) => (
          <ListItem key={index + 1}>
            <div style={{ width: "80px" }}>
              <img src={img} height="80px" alt="not found" />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Link
                  to={`product/${index}`}
                  onClick={toggleDrawer(anchor, false)}
                  style={{ color: "black" }}
                >
                  <h5>{item.name}</h5>
                </Link>
                <p style={{ marginTop: "8px" }}> {item.price}</p>

                <div
                  onClick={() => {
                    removeCart(item);
                  }}
                >
                  <ClearIcon style={{ cursor: "pointer" }} />
                </div>
              </div>
              <div
                style={{
                  margin: "0px 40px 5px 10px",
                }}
              >
                <Button onClick={decrementQty}>
                  <IndeterminateCheckBoxIcon />
                </Button>
                {qty}

                <Button onClick={incrementQty}>
                  <AddBoxIcon />
                </Button>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Empty Cart</h3>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h3>0</h3>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              width: 100,
              color: "black",
              mt: 2,
              borderColor: "grey.500",
            }}
          >
            <Link
              to="payment"
              style={{ textDecoration: "none" }}
              onClick={toggleDrawer(anchor, false)}
            >
              Checkout
            </Link>
          </Button>
        </div>
      )}
    </Box>
  );

  const logoutUser = () => {
    localStorage.clear();
    dispatch(clearUser());
  };

  const [signin, setSignIn] = useState(false);
  const [singup, setSignUp] = useState(false);
  const handleOpen = () => setSignIn(true);
  const handleClose = () => setSignIn(false);
  const openSign = () => setSignUp(true);
  const closeSign = () => setSignUp(false);

  return (
    <>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div>
            <SwipeableDrawer
              anchor="right"
              open={sidebar["right"]}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
            >
              {list("right")}
            </SwipeableDrawer>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <Link className="navbar-brand page-scroll" to="/">
              EyeBye
            </Link>
          </div>

          <div
            className="collapse navbar-collapse "
            id="bs-example-navbar-collapse-1"
            style={{ marginLeft: "40px" }}
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="sunglasses" className="page-scroll">
                  Sunglasses
                </Link>
              </li>
              <li>
                <Link to="eyeglasses" className="page-scroll">
                  Eyeglasses
                </Link>
              </li>

              {user ? (
                <>
                  <li>
                    <Button
                      style={{
                        marginTop: "7px",
                        color: "#555",

                        textTransform: "uppercase",

                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                      onClick={handleOpen}
                    >
                      {user.name}
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={signin}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={signin}>
                        <Box sx={style}>
                          <Signin />
                        </Box>
                      </Fade>
                    </Modal>
                  </li>
                  <li>
                    <Button
                      style={{
                        marginTop: "7px",
                        color: "#555",

                        textTransform: "uppercase",

                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                      onClick={logoutUser}
                    >
                      Logout
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={signin}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={signin}>
                        <Box sx={style}>
                          <Signin />
                        </Box>
                      </Fade>
                    </Modal>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button
                      style={{
                        marginTop: "7px",
                        color: "#555",

                        textTransform: "uppercase",

                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                      onClick={handleOpen}
                    >
                      Sign in
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={signin}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={signin}>
                        <Box sx={style}>
                          <Signin />
                        </Box>
                      </Fade>
                    </Modal>
                  </li>
                  <li>
                    <Button
                      style={{
                        marginTop: "7px",
                        color: "#555",

                        textTransform: "uppercase",

                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                      onClick={openSign}
                    >
                      Sign up
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={singup}
                      onClose={closeSign}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={singup}>
                        <Box sx={style}>
                          <Signup />
                        </Box>
                      </Fade>
                    </Modal>
                  </li>
                </>
              )}

              <div
                style={{ display: "inline" }}
                onClick={toggleDrawer("right", true)}
              >
                <CartBtn />
              </div>
            </ul>

            <form action="" className="search-form">
              <div className="form-group has-feedback">
                <label for="search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="search"
                />
                <span className="form-control-feedback">
                  <FaSearch size={20} />
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
