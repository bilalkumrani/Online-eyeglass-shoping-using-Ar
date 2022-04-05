import React from "react";

import Product from "./product";

function ProductList(props) {
  const { products, onDelete } = props;
  const tableHeader = [
    "S.N",
    "Image",
    "Name",
    "Category",
    "Price",
    "Discount%",
    "Net Price",
    "Action",
  ];
  return (
    <div>
      <table className="table table-responsive table-sm table-hover ">
        <thead className="table-danger">
          <tr>
            {tableHeader.map((item) => (
              <th scope="col">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <Product product={item} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
