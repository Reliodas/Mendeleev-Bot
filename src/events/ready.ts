import { Client, Events } from 'discord.js';
import { BotEvent } from '../types/BotEvent';


export const ready : BotEvent = {
	name: 'ready',
	once: true,
	event: Events.ClientReady,
	execute: (client : Client<true>) => {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};