const { Events, ActivityType } = require("discord.js");
const dailyJobVacancyEvent = require("./dailyJobVacancy.event");
const discordBotConfig = require("../config/discordBot.config");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`${client.user.tag} has logged in!`);
    client.user.setActivity({
      name: "Cara Membuat CV",
      type: ActivityType.Streaming,
      url: "https://www.youtube.com/watch?v=K33W-KyGpW0",
    });
    const guild = client.guilds.cache.get(
      discordBotConfig.DISCORD_BOT_GUILD_ID
    );
    const channel = guild.channels.cache.get(
      discordBotConfig.DISCORD_BOT_CHANNEL_ID
    );

    dailyJobVacancyEvent(channel);
  },
};
