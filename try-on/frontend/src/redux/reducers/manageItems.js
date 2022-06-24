const initialState = [
  {
    id: 1,
    name: "item1",
    price: 1100,
  },
  {
    id: 2,
    name: "items2",
    price: 2200,
  },
  {
    id: 3,
    name: "items3",
    price: 3300,
  },
  {
    id: 4,
    name: "items4",
    price: 4400,
  },
  {
    id: 5,
    name: "items5",
    price: 5500,
  },
  {
    id: 6,
    name: "items6",
    price: 6600,
  },
  {
    id: 7,
    name: "items7",
    price: 700,
  },
  {
    id: 8,
    name: "items8",
    price: 8800,
  },
  {
    id: 9,
    name: "items9",
    price: 9900,
  },
  {
    id: 10,
    name: "items10",
    price: 10000,
  },
];

const manageItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
      break;
    case "DELETE_ITEM":
      return (state = state.filter((product) => {
        return product.id !== action.payload.id;
      }));
      break;
    default:
      return state;
      break;
  }
};

export default manageItems;
