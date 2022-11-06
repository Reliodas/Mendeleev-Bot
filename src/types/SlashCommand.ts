import { Collection, CommandInteraction, Locale, SlashCommandBuilder } from 'discord.js';

export interface SlashCommand {
    command: SlashCommandBuilder,
    description: string,
    localizedDescription: Collection<Locale, string>,
    execute: (interaction : CommandInteraction) => void
}