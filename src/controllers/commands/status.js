module.exports.status = (client, axiosCall) => (channel, tags, message) => {
  if (message.toLowerCase() === "!status") {
    axiosCall().then((response) => {
      const { data } = response;

      client.say(
        channel,
        `@${tags.username}, ${data.display_name} started the live at ${data.started_at} with the title '${data.title}'.`
      );
    });
  }
};
