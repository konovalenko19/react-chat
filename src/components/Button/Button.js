import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { capitalize } from "../../utils";

import "./Button.scss";

const Button = props => {
  const {
    component: Component = "button",
    className,
    children,

    type = "button",
    variant = "contained",
    color = "blue",
    justify = "center",
    fullWidth = false,

    iconStart,
    iconEnd,

    ...other
  } = props;

  return (
    <Component
      type={type}
      className={classnames(
        "WaterChatButton",
        `WaterChatButton--${capitalize(variant)}`,
        `WaterChatButton--${capitalize(variant) + capitalize(color)}`,
        fullWidth && "WaterChatButton--fullWidth",
      )}
      {...other}>

      <span className={classnames(
        "WaterChatButton__Inner",
        `WaterChatButton__Inner--Content${capitalize(justify)}`,
      )}>

        {iconStart &&
          <span className="WaterChatButton__Icon">
            {iconStart}
          </span>
        }

        {children &&
          <span className="WaterChatButton__Label">
            {children}
          </span>
        }

        {iconEnd &&
          <span className="WaterChatButton__Icon">
            {iconEnd}
          </span>
        }

      </span>
    </Component>
  );
};

Button.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,

  type: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf(["blue", "white"]),
  justify: PropTypes.oneOf(["center", "space-around", "space-between"]),
  fullWidth: PropTypes.bool,

  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,

  other: PropTypes.object,
};

export default Button;