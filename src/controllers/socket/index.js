const io = require("socket.io-client");
const socket = io("http://localhost:3000");

/**
 * Send the object to the socket server
 * 
 * @param obj This obj is the userstate and the message
 */
const sendMessage = (obj) => {
  // Send object to the server
  socket.emit("sendMessage", obj);
};

module.exports = {
  sendMessage,
};
