import dotenv from 'dotenv';
import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from './types/ExtendedClient';
import { allHandlers } from './handlers/allHandlers';

function startAllHandlers(client: ExtendedClient): void {
	for (let i = 0; i < allHandlers.length; i++) {
		allHandlers[i](client);
	}
}

function main(): void {
	// To get the token from the environment variables
	dotenv.config();

	// Create a new client instance
	const client = new ExtendedClient({ intents: [GatewayIntentBits.Guilds] });

	// Starting all handlers (commands, events...)
	startAllHandlers(client);

	// Log in to Discord with your client's token
	client.login(process.env.BOT_TOKEN);

}

// Main call
main();