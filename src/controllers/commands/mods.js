module.exports.mods = (client) => (channel, message) => {
  if (message.toLowerCase() === "!mods") {
    client.mods(channel);
  }
};
