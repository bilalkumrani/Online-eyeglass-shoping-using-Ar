import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function User(props) {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);

  const { activeUser, removeUser } = props;

  return (
    <Dropdown className="mx-md-4">
      <span className="text-white ">{activeUser.username}</span>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <img
          class="avatar-img rounded-pill"
          src="https://picsum.photos/id/255/40/40"
          alt="user@email.com"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={removeUser}>
          <i className=" fas fa-sign-out me-2"></i>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default User;
