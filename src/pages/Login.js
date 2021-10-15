import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { SET_GOOGLE_USER } from "../redux/types/user";

export default function Login() {
  const dispatch = useDispatch();
  const onSuccess = (response) => {
    dispatch({ type: SET_GOOGLE_USER, payload: response.profileObj });
    // console.log(response);
  };

  const onFailure = (res) => {
    console.error(res);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "8px",
          width: "400px",
          height: "360px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <GoogleLogin
          clientId="355208557192-oatim905em0spm4lb7tu265suopd0jid.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </Paper>
    </Box>
  );
}
