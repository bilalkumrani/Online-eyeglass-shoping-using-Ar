import Image from "../all glasses-20220427T235332Z-001/all glasses/aliexpress_steampunk_brass_gold.jpg";
import { Link } from "react-router-dom";

function FeatureProduct() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            Aliexpress Steampunk Brass Gold
          </h5>
          <p className="card-text text-center text-muted">10000 Ks</p>
          <div className="d-grid gap-2">
            <Link to="/products/1" className="btn btn-outline-dark" replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
