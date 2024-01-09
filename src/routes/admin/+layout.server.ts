import { GroupModel } from '$lib/db/groups';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const groups: (string | undefined | null)[] = await GroupModel.distinct('group');
	return {
		groups,
		session: await event.locals.getSession()
	};
};


