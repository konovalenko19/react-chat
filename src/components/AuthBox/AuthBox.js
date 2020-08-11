import React from "react";
import PropTypes from "prop-types";

import Logo from "../Logo";

import "./AuthBox.scss";

const AuthBox = props => {
  const {
    component: Component = "div",
    children,
    title,
    ...other
  } = props;

  return (
    <Component className="AuthBox" {...other}>

      <div className="AuthBox__TopBar">
        <div className="AuthBox__Logo">
          <Logo withIcon/>
        </div>
        <div className="AuthBox__Title">
          {title}
        </div>
      </div>

      {children}
    </Component>
  );
};

AuthBox.propTypes = {
  component: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
};

export default AuthBox;