require("dotenv").config();
const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

// Web server (biar Replit ga rewel)
const app = express();
app.get("/", (req, res) => {
  res.send("Bot is running!");
});
app.listen(3000, () => {
  console.log("Web server running");
});

// Discord bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong 🏓");
  }
});

client.login(process.env.BOT_TOKEN);
