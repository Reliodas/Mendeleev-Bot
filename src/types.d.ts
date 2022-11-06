import { Collection, Locale } from 'discord.js';

export interface SlashCommand {
    command: SlashCommandBuilder | any,
    execute: (message: Message, args: Array<string>) => void,
}