import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.module.scss";

const Avatar = props => {
  const {
    component: Component = "div",
    classes,
    className,
    children,
    isRounded = false,
    sizes = "2rem",
    alt,
    src,
    imgProps,
    style,
    ...other
  } = props;

  const allClasses = [styles.root];
  isRounded && allClasses.push(styles.rounded);

  return (
    <Component
      className={allClasses.join(" ")}
      tabIndex={0}
      style={{
        ...style,
        width: sizes,
        height: sizes,
      }}
      {...other}>

      {src &&
        <img
          alt={alt}
          src={src}
          className={styles.image}
          {...imgProps}
        />
      }

      {children}

    </Component>
  );
};

Avatar.propTypes = {
  component: PropTypes.string,
  classes: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,

  isRounded: PropTypes.bool,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  imgProps: PropTypes.object,
  style: PropTypes.object,

  other: PropTypes.object,
};

export default Avatar;