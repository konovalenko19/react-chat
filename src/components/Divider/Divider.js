import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Divider.scss";

const Divider = props => {
  const {
    component: Component = "div",
    className,
    children,
    sticky = false,
  } = props;

  return (
    <Component className={classnames(
      "Divider",
      sticky && "Divider--Sticky",
      className && className,
    )}>
      <div className="Divider__Text">
        {children}
      </div>
    </Component>
  );
};

Divider.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  sticky: PropTypes.bool,
};

export default Divider;