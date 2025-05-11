const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.User,
        Partials.Reaction
    ],
});

const token = "YOURTOKENHERE"; // Replace with your bot token

client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
    if (message.content.toLowerCase().startsWith("!pov")) {
        const args = message.content.split(" ").slice(1);
        const pov = args.join(" ");
        if (!pov){ 
            return message.reply({content:"Please provide a POV.", ephemeral: true});
        }
        message.reply("Test successful!").catch(err => console.log(err));
        
        
    }
});

client.login(token);
