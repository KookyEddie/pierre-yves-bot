require("dotenv").config

const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!ranked"){
        message.reply("Tu es Iron IV!")
    }
})

client.login(process.env.TOKEN )
