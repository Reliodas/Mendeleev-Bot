import dotenv from 'dotenv';
import { Events, GatewayIntentBits, SlashCommandBuilder } from 'discord.js';
import { ExtendedClient } from './ExtendedClient';

function main() {
	// To get the token from the environment variables
	dotenv.config();

	// Create a new client instance
	const client = new ExtendedClient({ intents: [GatewayIntentBits.Guilds] });

	// When the client is ready, run this code (only once)
	// We use 'c' for the event parameter to keep it separate from the already defined 'client'
	client.once(Events.ClientReady, c => {
		console.log(`Ready! Logged in as ${c.user.tag}`);
	});

	// Log in to Discord with your client's token
	client.login(process.env.BOT_TOKEN);

}


// Main call
main();