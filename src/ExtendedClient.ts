import { Client, ClientOptions, Collection, SlashCommandSubcommandBuilder } from 'discord.js';
import { SlashCommand } from './types';

export class ExtendedClient extends Client {
	commands: Collection<string, SlashCommand>;

	constructor(options: ClientOptions) {
		super(options);
		this.commands = new Collection();
	}

}