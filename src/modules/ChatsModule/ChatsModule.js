import React from "react";

import ChatList from "../../components/ChatList";
import ChatsSearch from "../../components/ChatsSearch";
import ChooseChat from "../../components/ChooseChat";
import Chat from "../../components/Chat";

import "./ChatsModule.scss";

let chats = [
  {
    id: 1,
    url: "https://images11.cosmopolitan.ru/upload/img_cache/e3e/e3e8f4d7ac8bcce755d9fa4996aab4a6_ce_916x607x0x0_fitted_740x0.jpg",
    name: "Vladimir Konovalenko Dmitrievich",
    message: "Hi, how are u?",
  },
  {
    id: 2,
    url: "https://images11.cosmopolitan.ru/upload/img_cache/e3e/e3e8f4d7ac8bcce755d9fa4996aab4a6_ce_916x607x0x0_fitted_740x0.jpg",
    name: "Alex B Y Y U I",
    message: "I bought it two days ago",
  },
  {
    id: 3,
    url: "",
    name: "Viktoria",
    message: "I will see him next week. Can you help me with my homework?",
  },
];

class ChatsModule extends React.Component {
  render() {
    return (
      <div className="ChatsModule">
        <div className="ChatsModule__LeftSide">
          <div className="ChatsModule__LeftSide__Top">
            <div className="ChatsModule__LeftSide__Title">Chats</div>
            <ChatsSearch/>
          </div>
          <div className="ChatsModule__LeftSide__List">

            <ChatList
              chats={chats}
            />

          </div>
        </div>
        <div className="ChatsModule__RightSide">

          <ChooseChat/>

          <Chat/>

        </div>
      </div>
    );
  }
};

export default ChatsModule;