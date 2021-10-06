import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const User = (props) => {
  const { user } = props;
  return (
    <Item>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
    </Item>
  );
};

export default User;
