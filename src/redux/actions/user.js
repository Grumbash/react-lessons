import * as types from "../types";

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

export const setDog = (dog) => {
  return {
    type: types.SET_DOG,
    payload: dog,
  };
};
