import { Client, ClientOptions, Collection } from 'discord.js';
import { SlashCommand } from './SlashCommand';

export class ExtendedClient extends Client {
	commands: Collection<string, SlashCommand>;

	constructor(options: ClientOptions) {
		super(options);
		this.commands = new Collection();
	}

}