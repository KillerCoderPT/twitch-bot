// Packages
require("dotenv").config();
const tmi = require("tmi.js");

// Socket.io
const { sendMessage } = require("./controllers/socket");

// Commands
const {
  status,
  statusById,
  buddies,
  mods,
  commands,
  github,
  discord,
} = require("./controllers/commands");

// Utils
const { getHowManyHoursIsLive } = require("./controllers/utils");
const buddiesList = require("./controllers/utils/buddies.json");

// Axios Calls
const {
  getStatus,
  getStatusById,
  getGithubProjects,
} = require("./controllers/axios");

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

// Socket Connection
// connect();

// When the users send a message
client.on("message", (channel, userstate, message, self) => {
  // Socket Send Object
  sendMessage({ userstate, message });

  if (self) return;

  // List all the commands
  commands(client)(channel, message);

  // My Current Status
  status(client, getStatus)(channel, userstate, message);

  // Status with ID
  statusById(client, getStatusById)(channel, userstate, message);

  // Buddies
  buddies(client, buddiesList)(channel, message);

  // Mods
  mods(client)(channel, message);

  // GitHub
  github(client, getGithubProjects)(channel, message);

  // Discord
  discord(client)(channel, message);
});
