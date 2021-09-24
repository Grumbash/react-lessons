import { useParams } from "react-router-dom";
import store from "../redux/store";

function User() {
  store.getState();
  const { uuid } = useParams();

  return <h1>User {uuid}</h1>;
}

export default User;
