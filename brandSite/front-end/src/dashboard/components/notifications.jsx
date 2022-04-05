import React from "react";
import { Nav } from "react-bootstrap";

function Notifications(props) {
  return (
    <React.Fragment>
      <Nav.Link>
        <a class="text-decoration-none text-white position-relative">
          <i
            className="badge bg-danger rounded-circle position-absolute "
            style={({ top: 0 }, { right: -25 })}
          >
            new
          </i>
          <i className=" fas fa-bell fa-2x"></i>
        </a>
      </Nav.Link>
    </React.Fragment>
  );
}

export default Notifications;
