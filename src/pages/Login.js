import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GoogleLogin } from "react-google-login";

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
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
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </Paper>
    </Box>
  );
}
