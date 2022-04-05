import React, { useState } from "react";
import DatePicker from "react-datepicker";
import OrderedProduct from "./orderedProduct";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function OrderItems(props) {
  const { order, onUpdate } = props;
  const { products } = order;
  const [goback, setBack] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  //Status for orders
  const statusList = ["pending", "canceled", "delivered"];
  var total = 0;

  const getTotal = () => {
    let val = 0.0;
    if (products) {
      if (products.length > 1) {
        products.map((item) => {
          val += item.price * item.quantity;
        });
      }
    }
    return val;
  };

  // console.log(getTotal());

  const handleSubmit = () => {
    toast.success("Status updated");
    order.deliverDate = startDate;
    onUpdate(order);
    setBack(true);
  };

  return (
    <>
      {order && (
        <div>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead style={{ backgroundColor: "pink" }}>
                  <th>#</th>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  {products &&
                    products.map((item) => <OrderedProduct data={item} />)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mb-5 d-flex justify-content-sm-center justify-content-md-end">
            <div className="col-sm-10 col-md-4 p-4 rounded  border border-dark">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-secondary fw-bold">Sub Total</span>
                <span className="fw-bold">Rs {getTotal()}</span>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-secondary fw-bold">Delivery fees</span>
                <span className="fw-bold">Rs 0</span>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-secondary fw-bold">Total</span>
                <span className="fw-bold">Rs {getTotal()}</span>
              </div>
              <div
                className="mb-1 rounded p-3"
                style={{ background: "lightgray" }}
              >
                <span className="fw-bolder">*Delivery Date</span>
                <div className="d-flex ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              <div
                className="mb-1 rounded p-3"
                style={{ background: "lightgray" }}
              >
                <span className="fw-bolder">*Status</span>
                <div className="d-flex ">
                  <Form.Group className="col-8">
                    <Form.Select
                      onChange={(e) => {
                        order.status = e.target.value + "";
                      }}
                    >
                      {statusList.map((item) =>
                        item === order.status ? (
                          <option selected value={item}>
                            {item}
                          </option>
                        ) : (
                          <option value={item}>{item}</option>
                        )
                      )}
                    </Form.Select>
                  </Form.Group>
                  <div className="col-4">
                    <button
                      className="btn-sm  btn-primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    {goback && <Navigate to="/admin/orders" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderItems;
