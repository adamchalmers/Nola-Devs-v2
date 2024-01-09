// import { redirect } from '@sveltejs/kit';
// import { SessionModel } from '$lib/db/sessions';
// import { UserModel } from '$lib/db/users';
// import { randomBytes } from 'node:crypto';
// import bcrypt from 'bcrypt';

// import type { Actions } from './$types';

// export const load = async ({ cookies }) => {
// 	const browserSes = cookies.get('session');
// 	const dbSes = await SessionModel.findOne({ id: browserSes });
// 	const user = await UserModel.findById(dbSes?.user);

// 	if (Number(dbSes?.expire) >= Date.now() + 1000 * 60 * 60 * 24 * 30) {
// 		await SessionModel.deleteOne({ id: browserSes });
// 	} else if (dbSes?.id === browserSes && dbSes && browserSes) {
// 		throw redirect(302, `/admin/${user?.role}`);
// 	} else {
// 		return { success: false }; // wrong password or email
// 	}
// };

// export const actions: Actions = {
// 	login: async ({ request, cookies }) => {
// 		const formData = await request.formData();
// 		const email = (await formData.get('email')) as string;
// 		const password = (await formData.get('password')) as string;
// 		const permission = (await formData.get('permissions')) as string;

// 		const userpw = await UserModel.findOne({ email, role: permission }).select([
// 			'password',
// 			'_id',
// 			'role'
// 		]);

// 		if (userpw?.password) {
// 			const checkpw = await bcrypt.compare(password, userpw.password);

// 			if (checkpw) {
// 				const sessionId = randomBytes(32).toString('hex');
// 				const expire = 1000 * 60 * 60 * 24 * 30; // 30 days

// 				(
// 					await SessionModel.create({
// 						id: sessionId,
// 						expire: Date.now() + expire,
// 						user: userpw._id.toString()
// 					})
// 				).save();

// 				cookies.set('session', sessionId, {
// 					path: `/admin`,
// 					maxAge: expire
// 				});
// 				throw redirect(302, `/admin/${userpw.role}`); // correct password and email
// 			}
// 		}
// 		setTimeout(() => { }, 1000); // Prolongs bruteforce attacks
// 		return { success: false }; // wrong password or email
// 	}
// };

import type { LayoutServerLoad } from "../(app)/$types";

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await event.locals.getSession()
	};
};