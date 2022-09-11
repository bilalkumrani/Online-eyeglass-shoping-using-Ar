import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";

const Signin = () => {
  const paperStyle = {
    padding: 20,
    height: "100%",
    width: "100%",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [signupData, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignup((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  const singupDetails = () => {
    axios
      .post("http://localhost:4000/signup", signupData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign up</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <TextField
          label="email"
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
          name="email"
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          name="password"
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          variant="outlined"
          fullWidth
          size="large"
          sx={{
            color: "black",
            borderColor: "grey.500",
          }}
          onClick={singupDetails}
        >
          Sign UP
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signin;
