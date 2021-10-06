import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const User = (props) => {
  const { user } = props;
  const fullName = `${user.first_name} ${user.last_name}`;
  return (
    <Item>
      <Stack direction="row">
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt={fullName}
          src={user.avatar}
        />
        <Typography variant="h5">{fullName}</Typography>
      </Stack>
      <Typography variant="caption">{user.email}</Typography>
    </Item>
  );
};

export default User;
