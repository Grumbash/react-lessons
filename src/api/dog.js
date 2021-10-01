const dog = {
  paws: 4,
  tail: 1,
  name: "Borky",
  id: Number((Math.random() * 1000).toFixed(0)),
};

const getDog = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ ...dog });
  }, 500);
});

export const getDogById = (id) => {
  return getDog;
};
