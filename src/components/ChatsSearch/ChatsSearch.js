import React from "react";

import Input from "../Input";

import "./ChatsSearch.scss";

const ChatsSearch = () => {
  return (
    <div className="ChatsSearch">
      <Input
        placeholder="Search"
        className="ChatsSearch__Input"
        fullWidth
        autoFocus
      />
    </div>
  );
};

export default ChatsSearch;