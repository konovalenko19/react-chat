import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { capitalize } from "../../utils";

import "./Message.scss";

const Message = props => {
  const {
    component: Component = "div",
    children,
    align = "left",
    time,
  } = props;

  return (
    <Component className={classnames(
      "Message",
      `Message--${capitalize(align)}`
    )}>
      <div className="Message__Text">
        {children}
      </div>
      <div className="Message__Time">
        {time}
      </div>
    </Component>
  );
};

Message.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node,
  align: PropTypes.oneOf(["left", "right"]),
  time: PropTypes.string,
};

export default Message;