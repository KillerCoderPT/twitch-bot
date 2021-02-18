module.exports.commands = (client) => (channel, message) => {
    if (message.toLowerCase() === "!commands") {
        client.say(channel, `Visit https://github.com/KillerCoderPT/twitch-bot/wiki/List-all-commands to see the full list of commands.`);
    }
}