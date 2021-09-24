export const increment = (count) => {
  return {
    type: "INCREMENT",
    payload: count,
  };
};
