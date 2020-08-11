import React from "react";

const ErrorIndicator = props => {
  const {
    error = {},
  } = props;

  return (
    <div>
      <h3>Упс! Что-то пошло не так...</h3>

      {Object.keys(error).length > 0 &&
      <>
        <div>{error.message}</div>
        <div>{error.stack}</div>
      </>
      }
    </div>
  );
};

export default ErrorIndicator;