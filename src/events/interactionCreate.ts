import { Interaction } from "discord.js";
import { BotEvent } from "../types/BotEvent";
import { ExtendedClient } from "../types/ExtendedClient";


export const interactionCreate : BotEvent = {
    name: "interactionCreate",
    once: false,
    event: "interactionCreate",
    execute: (interaction: Interaction) => {
        if (!interaction.isChatInputCommand()) return;
        let client = interaction.client as ExtendedClient
        let command = client.slashCommands.get(interaction.commandName)
        if (!command) return;
        command.execute(interaction)
    }
};