import axios from "axios";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

import User from "../components/User";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://reqres.in/api/users");
      setUsers(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h2">List of users</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : users.length <= 0 ? (
        <Typography variant="body1">
          <Alert severity="error"> There are no users!</Alert>
        </Typography>
      ) : (
        <Stack direction="row" spacing={2}>
          {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <User user={user}></User>
            </Link>
          ))}
        </Stack>
      )}
    </Container>
  );
}

export default Users;
