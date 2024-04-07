<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';

	import { Input, Select, Label, Button, Card, Toggle } from 'flowbite-svelte';

	let roles = [
		{ value: 'organizer', name: 'Organizer' },
		{ value: 'admin', name: 'Admin' }
	];
	//////// attr for form
	// action="?/login"
	// method="post"
	// id="loginForm"
</script>

<div class="h-screen w-full p-auto">
	<Card class="m-auto ">
		<form autocomplete="on" class="items-center flex flex-col gap-3">
			<div class="w-full">
				<Label for="email"
					>Email

					<Input
						autocomplete="email"
						type="email"
						name="email"
						value=""
						placeholder="organizer@noladevs.org"
						required
					/>
				</Label>
			</div>
			<div class="w-full">
				<Label for="password"
					>Password
					<Input
						autocomplete="current-password"
						type="password"
						placeholder="password"
						name="password"
						value="•••••"
						required
					/>
				</Label>
			</div>
			<!--This will return admin on the form in the backend formdata otherwise it will be null-->
			<Toggle name="isAdmin" value="admin">Admin</Toggle>

			<!-- <div class="w-full">
				<Label for="role">Role</Label>
				<Select name="role" items="{roles}" required />
			</div> -->
			<!-- <Button class="w-fit self-end" type="submit" value="LogIn">Log In</Button> -->
			<Button class="w-fit self-end" on:click="{() => signIn('credentials')}">Log In</Button>
		</form>
		<div class="flex flex-col gap-3 p-3">
			<Button class="text-red-100" on:click="{() => signIn('github')}">Sign In with GitHub</Button>
			<Button class="text-red-100" on:click="{() => signIn('google')}">Sign In with Google</Button>
			<Button class="text-red-100" on:click="{() => signIn('github')}">Sign In with GitHub</Button>
		</div>
	</Card>
</div>
