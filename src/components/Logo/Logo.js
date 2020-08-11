import React from "react";

import "./Logo.scss";

const Logo = props => {
  const {
    withIcon = false,
  } = props;

  return (
    <div className="Logo">

      {withIcon &&
        <div className="Logo__Icon">
          <svg viewBox="0 0 30 42">
            <path
              d="M15 3 Q16.5 6.8 25 18 A12.8 12.8 0 1 1 5 18 Q13.5 6.8 15 3z"
            />
          </svg>
        </div>
      }

      <div className="Logo__Text">waterChat</div>
    </div>
  );
};

export default Logo;