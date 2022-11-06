import { ClientEvents } from 'discord.js';

export interface BotEvent {
    name: string,
    once: boolean,
    event: keyof ClientEvents,
    execute: (...args: any) => void
}