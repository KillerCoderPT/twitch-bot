module.exports.github = (client, axiosCall) => (channel, message) => {
  // msg is now !github and message is the rest of the array
  const msg = message.toLowerCase().split(" ");

  if (msg[0] === "!github") {
    
    switch (msg[1]) {
      // Show Profile
      case undefined:
        client.say(channel, `Visit https://github.com/KillerCoderPT`);
        break;

      // Show Projects
      case "projects":
        axiosCall().then((response) => {
          const { data } = response;
          const msgResp = data
            .map((item) => {
              return ` [${item.name}]`;
            })
            .join();

          client.say(
            channel,
            `${msgResp}, you can check more doing !github PROJECTNAME`
          );
        });
        break;

      // Show projects by ID
      default:
        axiosCall(msg[1]).then((response) => {
          const { data } = response;
          
          client.say(channel, `${data.name}, ${data.html_url} ${data.description}`)
        });
        break;
    }
  }
};
