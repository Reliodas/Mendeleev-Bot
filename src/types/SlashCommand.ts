import { Collection, CommandInteraction, Locale, SlashCommandBuilder } from 'discord.js';

export interface SlashCommand {
    command: SlashCommandBuilder,
    execute: (interaction : CommandInteraction) => void
}