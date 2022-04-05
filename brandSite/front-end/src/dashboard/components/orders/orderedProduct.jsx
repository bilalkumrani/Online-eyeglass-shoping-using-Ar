import React from "react";

function OrderedProduct(props) {
  const { data } = props;
  return (
    <tr>
      <td>{data.productId}</td>
      <td>
        <img src={data.image} height={50} width={50} alt="" />
      </td>
      <td>{data.title}</td>
      <td>Rs {data.price}</td>
      <td>{data.quantity}</td>
      <td>Rs {data.quantity * data.price}</td>
    </tr>
  );
}

export default OrderedProduct;
