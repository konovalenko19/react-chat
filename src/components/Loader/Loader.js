import React from "react";
import PropTypes from "prop-types";

import { hexToRgba } from '../../utils';

import styles from './Loader.module.scss';

const Loader = props => {
  const {
    children = null,
    color = "#6c5fc7",
    size = "2rem",
    inline = false,
  } = props;

  return (
    <div className={inline ? styles.rootInline : styles.root}>
      <div
        className={styles.loader}
        style={{
          minWidth: size,
          minHeight: size,
          borderColor: hexToRgba(color, 0.2),
          borderTopColor: color,
        }}
      />

      {children &&
        <div
          className={inline ? styles.messageInline : styles.message}
          style={{ color: hexToRgba(color, 0.9) }}>
          {children}
        </div>
      }
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  inline: PropTypes.bool,
};

export default Loader;