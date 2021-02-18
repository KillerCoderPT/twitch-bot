module.exports.buddies = (client, buddiesList) => (channel, message) => {
  // Show Killer Buddies
  if (message.toLowerCase() === "!buddies") {
    let msg = "";

    buddiesList.map((bud) => {
      msg += `@${bud.name} [${bud.url}] `;
    });

    client.say(channel, msg);
  }
};
