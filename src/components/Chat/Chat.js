import React from "react";

import Message from "../Message";
import Divider from "../Divider";
import Button from "../Button";
import Input from "../Input";

import "./Chat.scss";

const Chat = props => {
  return (
    <div className="Chat">
      <div className="Chat__Top">
        <div className="Chat__Top__Name">Vladimir Konovalenko</div>
        <div className="Chat__Top__Buttons">
          <Button variant="text">Open profile</Button>
          <Button variant="text">Delete chat</Button>
        </div>
      </div>
      <div className="Chat__Center">

        <Divider>12 dec, mon</Divider>

        <Message time="17:45">Hi!</Message>
        <Message align="right" time="17:47">Hello!</Message>
        <Message time="17:48">How are you?</Message>
        <Message align="right" time="17:49">I'm fine! And what about u?</Message>
        <Message time="17:55">Too. Walking with my girlfriend. Do you want to buy an icecream business?</Message>
        <Message align="right" time="17:59">Ahahah whaaat?)</Message>

        <Divider>13 december 2019</Divider>

        <Message>Hi!</Message>
        <Message align="right">Hello!</Message>
        <Message>How are you?</Message>
        <Message align="right">I'm fine! And what about u?</Message>
        <Message>Too. Walking with my girlfriend. Do you want to buy an icecream business?</Message>
        <Message align="right">Ahahah whaaat?)</Message>

        <Divider>14 dec 2019</Divider>

        <Message>Hi!</Message>
        <Message align="right">Hello!</Message>
        <Message>How are you?</Message>
        <Message align="right">I'm fine! And what about u?</Message>
        <Message>Too. Walking with my girlfriend. Do you want to buy an icecream business?</Message>
        <Message align="right">Ahahah whaaat?)</Message>

        <Divider>today, 15 dec 2019</Divider>

        <Message>Hi!</Message>
        <Message align="right">Hello!</Message>
        <Message>How are you?</Message>
        <Message align="right">I'm fine! And what about u?</Message>
        <Message>Too. Walking with my girlfriend. Do you want to buy an icecream business?</Message>
        <Message align="right">Ahahah whaaat?)</Message>

      </div>
      <div className="Chat__Bottom">
        <Input
          fullWidth
          placeholder="Type your message and hit enter"
        />
      </div>
    </div>
  );
};

export default Chat;