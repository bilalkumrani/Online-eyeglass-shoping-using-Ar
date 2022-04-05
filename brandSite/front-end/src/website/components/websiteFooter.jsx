import React from "react";

const WebsiteFooter = () => (
  <footer
    className="page-footer pt-4 mb-0  bottom-0 start-0 w-100 "
    style={{ backgroundColor: "#FFD333", color: "#3D464D" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About Us</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            recusandae, quasi perspiciatis quo quaerat dolores aspernatur
            dolorem? Earum magnam in voluptates? Accusamus, reprehenderit
            mollitia quis numquam enim cupiditate consectetur distinctio?
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Products</h5>
          <ul className="list-unstyled">
            <li>Clothes</li>
            <li>Watches </li>
            <li>Glasses</li>
            <li>Electronic</li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Facilities</h5>
          <ul className="list-unstyled">
            <li>Security</li>
            <li>Discount </li>
            <li>Quality</li>
            <li>On time</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:</div>
  </footer>
);

export default WebsiteFooter;
