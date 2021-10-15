import axios from "axios";
import { setUser } from "../redux/reducers/user";

export const getUser = (id, dispatch) => {
  return axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
    dispatch(setUser(res.data.data));
  });
};
