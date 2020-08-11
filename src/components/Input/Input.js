import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Input.scss";

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
    fullWidth = false,
    autoFocus = false,
    className,
    onFocus,
    onBlur = () => {},
    ...other
  } = props;

  const [isFocused, setFocus] = useState(autoFocus);

  return (
    <div className={classnames(
      "InputWrapper",
      isDisabled && "InputWrapper--Disabled",
      isErrored && "InputWrapper--Errored",
      isLoading && "InputWrapper--Loading",
      fullWidth && "InputWrapper--FullWidth",
      isFocused && "InputWrapper--Focused",
      className && className,
    )}>

      {contentLeft &&
        <span
          className={classnames(
            "InputIcon",
            withDivider && "InputIcon--WithDivider",
          )}
          {...contentLeftProps}>
          {contentLeft}
        </span>
      }

      <input
        type={type}
        className={classnames(
          "Input",
          isDisabled && "Input--Disabled",
        )}
        disabled={isDisabled}
        autoFocus={autoFocus}
        onFocus={(e) => {
          setFocus(true);
          typeof onFocus === "function" && onFocus(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur(e);
        }}
        {...other}
      />

      {contentRight &&
        <span
          className={classnames(
            "InputIcon",
            withDivider && "InputIcon--WithDivider",
          )}
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
  fullWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  other: PropTypes.object,
};

export default Input;