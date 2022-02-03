require("dotenv").config

const generateImage = require("./generateImage")
const Discord = require("discord.js")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "733165385527984211"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Bienvenue sur le serveur!`,
        files: [img]
    })
})

client.login("OTM4NjQxOTU3MTUwOTI0ODMw.YftQcQ.FMmnBrVhn6lqT20N73HWpsNcuSw")
