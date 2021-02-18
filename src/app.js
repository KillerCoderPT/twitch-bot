// Packages
require("dotenv").config();
const tmi = require("tmi.js");

// Commands
const { status, statusById, buddies, mods } = require("./controllers/commands");

// Utils
const { getHowManyHoursIsLive } = require("./controllers/utils");
const buddiesList = require("./controllers/utils/buddies.json");

// Axios Calls
const { getStatus, getStatusById } = require("./controllers/axios");

// TMI Client Options
const client = new tmi.client({
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: "Bot-KC",
    password: process.env.TWITCH_CHAT_OAUTH_PASSWORD,
  },
  channels: [process.env.TWITCH_USERNAME],
});

// Connect the Bot to the Chat
client.connect();

// When the users send a message
client.on("message", (channel, tags, message, self) => {
  if (self) return;

  // My Current Status
  status(client, getStatus)(channel, tags, message);

  // Status with ID
  statusById(client, getStatusById)(channel, tags, message);

  // Buddies
  buddies(client, buddiesList)(channel, message);

  // Mods
  mods(client)(channel, message);
});
