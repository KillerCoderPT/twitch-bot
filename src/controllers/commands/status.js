module.exports.status = (client, axiosCall) => (channel, userstate, message) => {
  if (message.toLowerCase() === "!status") {
    axiosCall().then((response) => {
      const { data } = response;

      client.say(
        channel,
        `@${userstate.username}, ${data.display_name} started the live at ${data.started_at} with the title '${data.title}'.`
      );
    });
  }
};
