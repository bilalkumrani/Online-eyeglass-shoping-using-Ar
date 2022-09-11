const initialState = {
  allProducts: [],
  cart: [],
  user: {},
  qty: 0,
};

const manageItems = (state = initialState, action) => {
  console.log("thissssssssssssssssssssss", action.payload);
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

    case "USER":
      return {
        ...state,
        user: action.payload,
      };

    case "CLEAR":
      return {
        ...state,
        user: action.payload,
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
