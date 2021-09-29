import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function User() {
  const value = useSelector((state) => state.valueField.value);
  const { uuid } = useParams();

  return (
    <>
      <h1>User {uuid}</h1>
      <p>{value}</p>
    </>
  );
}

export default User;
