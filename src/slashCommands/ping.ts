import { SlashCommand } from "../types/SlashCommand";
import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../strings/localization.json"
import { Collection, Locale } from "discord.js";


export const ping : SlashCommand = {
    command: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Shows the bot's ping")
    .setDescriptionLocalizations(data.ping),
    execute: interaction => { interaction.reply("Pong!") }
}



