module.exports.github = (client) => (channel, message) => {
  const say = (url) => {
    client.say(channel, `Visit ${url}`);
  };

  if (message.toLowerCase() === "!github") {
    say("https://github.com/KillerCoderPT");
  }

  const msg = message.split(" ");

  if (msg.length > 1 && msg[0].toLowerCase().startsWith("!github")) {
    switch (msg[1].toLowerCase()) {
      // Get a List of projects
      case "projects":
        client.say(channel, `[Twitch-Bot], [Twitch-Backend]`);
        break;

      // Specific Projects
      case "twitch-bot":
        say("https://github.com/KillerCoderPT/twitch-bot");
        break;

      case "twitch-backend":
        say("https://github.com/KillerCoderPT/twitch-backend");
        break;

      default:
        say("https://github.com/KillerCoderPT");
        break;
    }
  }
};
