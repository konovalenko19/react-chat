import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const Input = props => {
  const {
    type = "text",
    contentLeft = null,
    contentLeftProps = null,
    contentRight = null,
    contentRightProps = null,
    withDivider = false,
    isErrored = false,
    isDisabled = false,
    isLoading = false,

    ...other
  } = props;

  const contentClasses = [ styles.icon ];
  withDivider && contentClasses.push(styles.iconWithDivider);

  const inputClasses = [ styles.input ];
  isDisabled && inputClasses.push(styles.inputDisabled);

  const inputWrapperClasses = [ styles.wrapper ];
  isDisabled && inputWrapperClasses.push(styles.inputDisabled);
  isErrored && inputWrapperClasses.push(styles.wrapperErrored);
  isLoading && inputWrapperClasses.push(styles.wrapperLoading);

  return (
    <div className={inputWrapperClasses.join(" ")}>

      {contentLeft &&
        <span
          className={contentClasses.join(" ")}
          {...contentLeftProps}>
          {contentLeft}
        </span>
      }

      <input
        type={type}
        className={inputClasses.join(" ")}
        disabled={isDisabled}
        {...other}
      />

      {contentRight &&
        <span
          className={ contentClasses.join(" ")}
          {...contentRightProps}>
          {contentRight}
        </span>
      }

    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  contentLeft: PropTypes.node,
  contentLeftProps: PropTypes.object,
  contentRight: PropTypes.node,
  contentRightProps: PropTypes.object,
  withDivider: PropTypes.bool,
  isErrored: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  other: PropTypes.object,
};

export default Input;