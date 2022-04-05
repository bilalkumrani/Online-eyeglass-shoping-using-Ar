import { FakeProducts } from "./fakeProducts";

const productArr = FakeProducts;

export const addFakeOrder = (order) => {
  if (order) {
    FakeOrders.push(order);
  }
};

export const deleteFakeOrder = (orderId) => {
  if (orderId) {
    FakeOrders.map((item, index) => {
      if (item.orderId === orderId) {
        FakeOrders.splice(index, 1);
      }
    });
  }
};
export const updateFakeOrder = (order) => {
  let orderId = order.orderId;

  if (orderId) {
    FakeOrders.map((item, index) => {
      if (item.orderId === orderId) {
        FakeOrders[index] = order;
      }
    });
  }
};

export const FakeOrders = [
  {
    orderId: 1,
    customerId: 1,
    products: [productArr[1], productArr[2]],
    totalAmount: 2900,

    status: "pending",
  },

  {
    orderId: 2,
    customerId: 2,
    products: [productArr[1], productArr[2], productArr[7]],
    totalAmount: 3330,
    status: "delivered",
  },
  {
    orderId: 3,
    customerId: 3,
    products: [productArr[12], productArr[1], productArr[2]],
    totalAmount: 8000,
    status: "canceled",
  },
  {
    orderId: 4,
    customerId: 6,
    products: [productArr[10], productArr[11], productArr[13]],
    totalAmount: 8000,
    status: "pending",
  },
  {
    orderId: 5,
    customerId: 7,
    products: [productArr[17], productArr[16], productArr[14]],
    totalAmount: 8000,
    status: "pending",
  },
];
