import { Client, ClientOptions, Collection } from 'discord.js';
import { SlashCommand } from './SlashCommand';

export class ExtendedClient extends Client {
	slashCommands: Collection<string, SlashCommand>;

	constructor(options: ClientOptions) {
		super(options);
		this.slashCommands = new Collection();
	}

}