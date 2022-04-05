import React, { useState } from "react";
import OrderItems from "./orderItems";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import Title from "../common/title";

import axios from "axios";
import { useEffect } from "react/cjs/react.development";
import NotFound from "./../notfound";

function OrderDetails(props) {
  const params = useParams();

  const [order, setOrder] = useState({});

  useEffect(async () => {
    const { data } = await axios.get(
      `http://localhost:8000/orders/${params.id}`
    );
    console.log(params.id);
    console.log(data);
    setOrder(data);
  }, []);

  const handleUpdateOrder = async (updatedOrder) => {
    await axios.patch(`http://localhost:8000/orders/${updatedOrder.orderId}`, {
      status: updatedOrder.status,
      deliverDate: updatedOrder.deliverDate,
    });
  };

  return (
    <>
      {order && (
        <main className="p-2">
          <Title name={`Order# ${params.id}`} />
          <div className="container-fluid">
            <OrderItems order={order} onUpdate={handleUpdateOrder} />
          </div>
        </main>
      )}

      {!order && <NotFound />}
    </>
  );
}

export default OrderDetails;
