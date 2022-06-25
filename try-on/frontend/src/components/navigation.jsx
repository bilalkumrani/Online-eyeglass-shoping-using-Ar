import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CartBtn from "./CartBtn";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
export const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
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

            <div
              style={{ display: "inline" }}
              onClick={() => {
                console.log("this");
              }}
            >
              <CartBtn />
            </div>
            <li>
              <Button
                style={{ marginTop: "10px", color: "gray" }}
                onClick={handleOpen}
              >
                Sign in
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </li>
            <li>
              <Button
                style={{ marginTop: "10px", color: "gray" }}
                onClick={handleClose}
              >
                Sign up
              </Button>
            </li>
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
  );
};
