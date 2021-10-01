import axios from "axios";
import * as types from "../types";

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      dispatch(setUser(res.data.data));
    });
    // return { type: types.SET_USER, payload: user };
  };
};

export const setDog = (dog) => {
  return {
    type: types.SET_DOG,
    payload: dog,
  };
};
