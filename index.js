require("dotenv").config()

import generateImage from "./generateImage";
import { Client } from "discord.js";
import { SetLanguage, SetLocale } from 'lol-discord';

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    SetLanguage("en");
    SetLocale("na1");
})

client.on("messageCreate", (message) => {
    if (message.content == "!ranked"){
        message.reply("Tu es Iron IV!")
    }
})

client.on("messageCreate", (message) => {
    let validateCommand = message.content.slice(0, 7)
    if (validateCommand == "!history" && message.content.length > 7){
        let playerName = message.content.slice(8);
        message.reply("Attend un peu").then(message_searching => {
            lol.Search(playerName).then(embed_message => {
                message_searching.delete();
                message.reply({embed: embed_message});
            }).catch(err => {
                message_searching.delete();
                message.reply(err);
            });
          });
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