import connectDB from '$lib/db/db';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import Credentials from "@auth/sveltekit/providers/credentials"
import { GH_AUTH_CLIENT, GH_AUTH_SECRET } from "$env/static/private"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

const handleDB: Handle = async ({ event, resolve }) => {
	await connectDB();
	return resolve(event);
}

export const { handle: handleAuth, signIn, signOut } = SvelteKitAuth({
	trustHost: true,
	providers: [
		// 	Credentials({
		// 		credentials: {
		// 			name: {
		// 				placeholder: 'Try Steve or Jane',
		// 			},
		// 		},
		// 		authorize: (info) =>
		// 			//validUsers.find((user) => user.name === info?.name) || null,
		// 	}),
		GitHub({
			clientId: GH_AUTH_CLIENT,
			clientSecret: GH_AUTH_SECRET
		})
	],
	events: {
		async signIn({ user, account, profile, isNewUser }) {
			if (isNewUser) {
				user.role = 'organizer'
			}
		},
		async createUser(user){

		}
	},
	adapter: MongoDBAdapter(connectDB()),
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log(user)
			return true
		},
		async redirect({ url, baseUrl }) {
			console.log(baseUrl)
			console.log(url)
			return baseUrl
		},
		async session({ session, user, token }) {
			console.log('sesh')
			return session
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token
		},
	},

})

export const handle = sequence(
	handleDB,
	handleAuth,
)