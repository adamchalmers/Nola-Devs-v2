import { connect } from 'mongoose';
import { MONGO_URL, DB_NAME, CRON_SECRET } from '$env/static/private';

import { GroupModel } from './groups';
import groups from '../../../static/data/groups.json';

export const start_db = async () => {
	return await connect(MONGO_URL + DB_NAME);
};

export const populate_db = async () => {
	await GroupModel.insertMany(groups);
};

export const load_events = async () => {
	await fetch('http://localhost:4173/api/cron', {
		headers: {
			authorization: `Bearer ${CRON_SECRET}`
		},
		method: 'GET'
	});
};
