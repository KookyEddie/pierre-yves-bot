const Discord = require("discord.js")
require("dotenv").config()

//const generateImage = require("./generateImage")


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners: ["298577557668757525",   // hugo
             "269286432961462272"],  // xavier    
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

/* client.on("ready", () => {
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
}) */

client.login(process.env.TOKEN)
