<script lang="ts">
	import '/src/app.css';

	import Nav from '$lib/components/nav.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import CustomAlert, { AlertType } from '$lib/components/alert.svelte';

	import type { LayoutData } from './$types';
	import MobileMenu from '$lib/components/mobile-menu.svelte';
	export let data: LayoutData;

	// TODO: Add to cookies for alert if dismissed or done to not show again
</script>

<div class="h-vh w-vh grid grid-cols-[20%_auto] max-lg:grid-cols-[50px_auto]">
	<!-- <Sidebar {data} /> -->
	<MobileMenu {data} />
	<!-- <Nav {data} /> -->
	<main class="h-full w-full p-1 sm:px-8 3xl:px-0 max-w-5xl mx-auto">
		<!-- <div class="max-w-[85rem] mx-auto 3xl:px-10 flex flex-col gap-6 flex-1 "> -->
		<!-- TODO: 
					<CustomAlert
					type="{AlertType.Update}"
					message="We've updated our site, let us know how we're doing by filling a short survey"
					link="/survey"
					linkText="here"
					/> -->

		<slot />
	</main>
</div>
