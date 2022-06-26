const initialState = [];

const manageItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "DELETE_ITEM":
      return (state = state.filter((product) => {
        return product.id !== action.payload.id;
      }));
    default:
      return state;
  }
};

export default manageItems;
