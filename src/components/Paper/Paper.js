import React from "react";
import PropTypes from "prop-types";

import styles from "./Paper.module.scss";

const Paper = props => {
  const {
    component: Component = "div",
    children,
    className,
    ...other
  } = props;

  return (
    <Component
      className={[styles.root, className].join(" ")}
      {...other}>
      {children}
    </Component>
  );
};

Paper.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  other: PropTypes.object,
};

export default Paper;