/* MODULES */
const Discord = require("discord.js");
const client = new Discord.Client();
const Fs = require("fs");
const token = "Insert token, please!"
const success = "**SUCCESS**"

const prefix = "!";

client.on("ready", () => {
    console.log("Bot is now on");
});

// Message Handler
client.on("message", async (message) => {
    if (message.content.startsWith(prefix)) {
        // Command
        var args = message.content.substr(prefix.length)
            .toLowerCase()
            .split(" ");
            if (args[0] == "buy") {
                let SuccessEmbed = new Discord.MessageEmbed();
                SuccessEmbed.setTitle(success);
                SuccessEmbed.setDescription(`${message.author}, I have sent you a PM!`);
                SuccessEmbed.setColor('GREEN');
                message.channel.send(SuccessEmbed);
                
                let DmEmbed = new Discord.MessageEmbed();
                DmEmbed.setTitle("**Help on Buying**");
                DmEmbed.setDescription("Bitcoin:bc1qm8mnez5ffl9y4rjh25fskd4xe74q22hddsx646 XMR:48CgcxFLT5i9WFKx1JTQHg241PCWTMN7HVkVWu5rU6G3fty9pZ7CwvgDs5Koid21kLiELsaubTTg6fvKZYmnvmtGV6tEWJU Contact the mods for other crypto currencies.");
                DmEmbed.setColor('GREEN');
                message.author.send(DmEmbed)
                return;
            }
            if (args[0] == "breadhelp") {
        let SuccessEmbed = new Discord.MessageEmbed();
        SuccessEmbed.setTitle(success);
        SuccessEmbed.setDescription(`${message.author}, I have sent you a PM!`);
        SuccessEmbed.setColor('GREEN');
        message.channel.send(SuccessEmbed);

        let DmEmbed = new Discord.MessageEmbed();
        DmEmbed.setTitle("**Help**");
        DmEmbed.setDescription("Commands: !help");
        DmEmbed.setColor('GREEN');
        message.author.send(DmEmbed)
        return;
      }
    }
})

client.login(token);
