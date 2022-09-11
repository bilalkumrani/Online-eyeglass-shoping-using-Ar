import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const paperStyle = {
  padding: 20,
  height: "100%",
  width: "100%",
  margin: "20px auto",
};

const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const Signin = () => {
  const [signinData, setSignin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignin((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  const singinDetails = () => {
    console.log(signinData);
    axios
      .post("http://localhost:4000/login", signinData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
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
          <h2>Sign In</h2>
        </Grid>
        <TextField
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
          name="email"
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
          onClick={singinDetails}
        >
          Sign in
        </Button>

        <Typography style={{ marginTop: "20px" }}>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signin;
