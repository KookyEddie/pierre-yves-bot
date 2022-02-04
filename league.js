import { SetLanguage, SetLocale } from 'lol-discord';

export default class MatchHistory {
    setSettings() {
        SetLanguage("en");
        SetLocale("na1");
    }

    validateMessage(message) {
        let validateCommand = message.content.slice(0, 7)
        if (validateCommand == "!history" && message.content.length > 7){
            return true;
        }
        return false;
    }

    getMatchHistory(message) {
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
}