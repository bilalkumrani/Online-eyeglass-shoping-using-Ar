import React, { useState } from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

export const Navigation = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.manageItems);
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
        {state.cart.map((item, index) => (
          <ListItem key={index + 1}>
            <div style={{ display: "flex" }}>
              <div>
                <Link
                  to="product"
                  onClick={toggleDrawer(anchor, false)}
                  style={{ color: "black" }}
                >
                  <h5>{item.name}</h5>
                  <h6 style={{ float: "right" }}>{item.price}</h6>
                </Link>

                <Button onClick={decrementQty}>
                  <IndeterminateCheckBoxIcon />
                </Button>
                {qty}

                <Button
                  sx={{
                    mr: 10,
                  }}
                  onClick={incrementQty}
                >
                  <AddBoxIcon />
                </Button>
              </div>
              <div></div>
              <div style={{ margin: "4px 0px 4px 0px" }} onClick={() => {}}>
                <ClearIcon />
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      {state.cart.length === 0 ? (
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
        <div style={{ float: "right", marginRight: "10px" }}>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              width: 100,
              color: "black",
              mt: 2,
              borderColor: "grey.500",
            }}
            style={{ alignItems: "center" }}
          >
            Checkout
          </Button>
        </div>
      )}
    </Box>
  );

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
