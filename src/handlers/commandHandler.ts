import { allSlashCommands } from "../slashCommands/allSlashComands";
import { ExtendedClient } from "../types/ExtendedClient";
import dotenv from 'dotenv'
import { Routes, REST, SlashCommandBuilder } from "discord.js";


export function commandHandler(client: ExtendedClient): void {
    dotenv.config()

    for (let i=0; i < allSlashCommands.length; i++) {
        let slashCommand = allSlashCommands[i]
        client.slashCommands.set(slashCommand.command.name, slashCommand)
    }

    const rest = new REST({version: "10"}).setToken(process.env.BOT_TOKEN as string);
    rest.put(Routes.applicationCommands(process.env.BOT_CLIENT_ID as string), {
        body: allSlashCommands.map(command => command.command.toJSON())
    })
    .then((data : any) => {
        console.log(`Successfully loaded ${data.length} slash command(s)`)
    }).catch(e => {
        console.log(e)
    })
}