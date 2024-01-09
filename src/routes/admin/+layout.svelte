<script lang="ts">
	import Login from '$lib/components/login.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<nav>
	<a href="/admin"> admin </a>
	<Login />
	{#each data.groups as group}
		<a href="/admin/{group?.replace(/ /g, '-')}">
			<p>{group}</p>
		</a>
	{/each}
	<a href="/admin/admin">
		<p>Site Admin</p>
	</a>
</nav>

<slot />
