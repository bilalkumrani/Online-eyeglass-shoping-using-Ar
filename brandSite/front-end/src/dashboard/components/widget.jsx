import React from "react";
import FeatherIcon from "feather-icons-react";
function Widget(props) {
  return (
    <div className="col-sm-12 col-md-2 my-1">
      <div className={props.bg}>
        <div className="card-body">
          <div className="text-medium-emphasis-inverse text-end mb-4">
            <i>
              <FeatherIcon icon={props.icon} />
            </i>
          </div>
          <div className="fs-4 fw-semibold">{props.value}</div>
          <small className="text-medium-emphasis-inverse text-uppercase fw-semibold">
            {props.name}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Widget;
