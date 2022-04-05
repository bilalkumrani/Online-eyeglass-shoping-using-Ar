import React from "react";
import { useParams } from "react-router-dom";
import Title from "./../common/title";
import Customer from "./customer";
import NotFound from "./../notfound";
import { useEffect, useState } from "react/cjs/react.development";

function CustomerProfile(props) {
  const params = useParams();

  const [selectedCustomer, setSelectedCustomer] = useState({});

  useEffect(async () => {
    fetch(`http://localhost:8000/customers/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSelectedCustomer(res[0]);
      });
  }, []);

  return (
    <>
      {selectedCustomer && (
        <main className="p-2">
          <Title name={`Customer #${selectedCustomer.customerId} `} />
          <div className="container">
            <div className="row">
              <Customer data={selectedCustomer} />
            </div>
          </div>
        </main>
      )}
      {!selectedCustomer && <NotFound />}
    </>
  );
}

export default CustomerProfile;
