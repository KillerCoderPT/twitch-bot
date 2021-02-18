module.exports.statusById = (client, axiosCall) => (channel, tags, message) => {
  const msg = message.split(" ");
  if (msg.length > 1 && msg[0].toLocaleLowerCase().startsWith("!status")) {
    axiosCall(msg[1]).then((response) => {
      const { data } = response;

      // Verify if the user is on Live
      if (data.is_live) {
        client.say(
          channel,
          `@${tags.username}, ${data.display_name} started the live at ${date.started_at} with the title '${data.title}'.`
        );
      } else {
        client.say(
          channel,
          `@${data.display_name} is offline, the title of the last live was '${data.title}'.`
        );
      }
    });
  }
};
