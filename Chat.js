import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  var socket = io();
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket = io("http://127.0.0.1:3000");
    socket.on("chat message", (msg) => {
      setChat((prevMessages) => {
        return [...prevMessages, msg];
      });
    });
  }, []);

  return (
    <View>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" />
        <button>Send</button>
      </form>
    </View>
  );
};

export default Chat;
