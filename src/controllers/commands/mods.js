const { client } = require("tmi.js");

module.exports.mods = (client) => (channel, message) => {
  if (message.toLowerCase() === "!mods") {
    client.mods(channel);
  }
};
