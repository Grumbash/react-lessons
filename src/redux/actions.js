import { INCREMENT } from "./type";

export const increment = (arg) => {
  return {
    type: INCREMENT,
    payload: arg + 1,
  };
};
