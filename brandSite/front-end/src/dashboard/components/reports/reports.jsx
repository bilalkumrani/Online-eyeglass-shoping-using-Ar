import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Title from "./../common/title";
import { ComponentToPrint } from "./componentToPrint";

const Reports = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="p-2">
      <Title name="Reports" />
      <ComponentToPrint ref={componentRef} onPrint={handlePrint} />
    </div>
  );
};

export default Reports;
