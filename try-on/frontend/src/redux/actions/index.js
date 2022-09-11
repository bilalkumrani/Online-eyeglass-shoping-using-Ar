export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

export const getAlldata = (alldata) => {
  return {
    type: "AllDATA",
    payload: alldata,
  };
};

export const deleteItem = (product) => {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
};

export const addUser = (user) => {
  return {
    type: "USER",
    payload: user,
  };
};

export const clearUser = () => {
  return {
    type: "CLEAR",
    payload: null,
  };
};
