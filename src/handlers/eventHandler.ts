import { allEvents } from '../events/allEvents';
import { ExtendedClient } from '../types/ExtendedClient';


export function eventHandler(client: ExtendedClient): void {
	for (let e = 0; e < allEvents.length; e++) {
		const current = allEvents[e];
		if (current.once) {
			client.once(current.event, current.execute);
		}
		else {
			client.on(current.event, current.execute);
		}
		console.log(`Successfully load ${current.name} event`);
	}
}