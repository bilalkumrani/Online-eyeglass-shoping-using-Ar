const initialState = {
  allProducts: [],
  cart: [],
  qty: 0,
};

const manageItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "AllDATA":
      return {
        ...state,
        allProducts: action.payload,
      };

    case "DELETE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default manageItems;
