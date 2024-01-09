import { start_db, populate_db, load_events } from '$lib/db/db';
import { building } from '$app/environment';

if (!building) {
	// starting up up the DB
	start_db()
		.then(() => populate_db())
		.then(() => load_events())
		.then(() => console.log('DB Started'))
		.catch((e) => console.log(e));
}
