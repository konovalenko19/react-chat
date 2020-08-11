import React, { useState } from "react";

import ChatListItem from "../ChatListItem";

import "./ChatList.scss";

export default function ChatList(props) {
  const {
    chats,
  } = props;

  const [active, setActive] = useState(null);

  return (
    <div className="ChatList">
      {chats.length > 0 && chats.map(({ id, ...other}) => (
        <ChatListItem
          key={id}
          isActive={active === id}
          onClick={() => setActive(id)}
          {...other}
        />
      ))}
    </div>
  );
};
