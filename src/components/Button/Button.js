import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = props => {
  const {
    component: Component = "button",
    classes,
    className,
    children,
    type = "button",
    iconStart,
    iconEnd,
    ...other
  } = props;

  return (
    <Component
      type={type}
      className={styles.root}
      {...other}>

      <span className={styles.wrapper}>

        {iconStart &&
          <span className={styles.icon}>
            {iconStart}
          </span>
        }

        {children &&
          <span className={styles.text}>
            {children}
          </span>
        }

        {iconEnd &&
          <span className={styles.icon}>
            {iconEnd}
          </span>
        }

      </span>
    </Component>
  );
};

Button.propTypes = {
  component: PropTypes.string,
  classes: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,

  type: PropTypes.string,
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,

  other: PropTypes.object,
};

export default Button;