require("dotenv").config()

import generateImage from "./generateImage";
import { Client } from "discord.js";
import MatchHistory from "./league";
const matchHistory = new MatchHistory();

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    matchHistory.setSettings();
})

client.on("messageCreate", (message) => {
    if (message.content == "!ranked"){
        message.reply("Tu es Iron IV!")
    }
    if (matchHistory.validateMessage(message)) {
        matchHistory.getMatchHistory(message);
    }
})

const welcomeChannelId = "733165385527984211"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Bienvenue sur le serveur!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)