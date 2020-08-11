import React from "react";
import classnames from "classnames";

import Avatar from "../Avatar";

import "./ChatListItem.scss";

export default function ChatListItem(props) {
  const {
    // url,
    name,
    message,
    isActive,
    ...other
  } = props;

  const avatarText = name
    .split(" ")
    .map((word, i) => {
      return i <= 1 ? word.slice(0, 1) : null;
    })
    .join("")
    .toUpperCase();

  return (
    <button
      tabIndex={0}
      className={classnames(
        "ChatListItem",
        isActive && "ChatListItem--Active",
      )}
      {...other}>
      <div className="ChatListItem__Avatar">
        <Avatar
          // src={url}
          alt={avatarText}
          isRounded={true}
          tabIndex="-1"
          size="2.5rem"
          style={{
            backgroundColor: "#fff",
            color: "#222",
          }}>
          {avatarText}
        </Avatar>
      </div>
      <div className="ChatListItem__Data">
        <div className="ChatListItem__Name">
          {name}
        </div>
        <div className="ChatListItem__Message">
          {message}
        </div>
      </div>
    </button>
  );
};