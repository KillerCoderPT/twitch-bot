module.exports.discord = (client) => (channel, message) => {
    if(message.toLowerCase() === "!discord") {
        client.say(channel, `VERY SOON!!!`)
    }
}