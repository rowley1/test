const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird")
    .setDescription("Shows a random bird picture"),
  async execute(interaction) {
    try {
      // Fetch cat picture from Some Random API
      const response = await axios.get("https://some-random-api.ml/img/bird");
      const catPic = response.data.link;

      // Build the embed
      const embed = new EmbedBuilder()
        .setColor("8B0000")
        .setTitle("Random Bird Picture")
        .setImage(catPic)
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: "An error occurred while fetching bird picture data.",
        ephemeral: true,
      });
    }
  },
};
