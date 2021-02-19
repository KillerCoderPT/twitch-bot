module.exports.mods = (client) => (channel, message) => {
  if (message.toLowerCase() === "!mods") {
    client
      .mods(channel)
      .then((data) => {
          // TODO: Verify the lenght
          client.say(channel, `Current mods on chat: ${data}`);
      })
      .catch((err) => console.log(err));
  }
};
