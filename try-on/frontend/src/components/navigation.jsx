import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/">
            EyeBye
          </Link>
        </div>

        <div
          className="collapse navbar-collapse "
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="sunglasses" className="page-scroll">
                Sunglasses
              </Link>
            </li>
            <li>
              <Link to="eyeglasses" className="page-scroll">
                Eyeglasses
              </Link>
            </li>
          </ul>

          <form action="" className="search-form">
            <div className="form-group has-feedback">
              <label for="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="search"
              />
              <span className="form-control-feedback">
                <FaSearch size={20} />
              </span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
