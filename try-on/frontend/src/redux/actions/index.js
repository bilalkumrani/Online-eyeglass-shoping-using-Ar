export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

export const deleteItem = (product) => {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
};
