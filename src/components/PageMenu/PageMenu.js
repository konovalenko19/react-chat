import React from "react";
import { Link } from "react-router-dom";

import "./PageMenu.scss";

const PageMenu = props => {
  return (
    <ul className="PageMenu">
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
    </ul>
  );
};

export default PageMenu;