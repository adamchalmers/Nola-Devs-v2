<script lang="ts">
	import SortingBar from '$lib/components/sorting-bar.svelte';
	import EventSubmission from '$lib/components/event-submission.svelte';

	import type { Event } from '$lib/types/event.d.ts';
	import EventGrouping from './event-grouping.svelte';
	import EventCard from './event-card.svelte';
	export let events: Event[];
</script>

<section aria-labelledby="upcoming-events-heading" class="p-3 max-h-full">
	<header class="flex flex-row justify-between">
		<h2
			class="text-2xl md:text-3xl font-semibold leading-[27px] text-[#24072F] dark:text-violet-100"
		>
			Whats going on in the city
		</h2>
		<div class="flex self-end">
			<EventSubmission />
		</div>
	</header>
	<div class="snap-both overflow-x-auto max-h-full p-2">
		{#each events as event}
			<div class="snap-start">
				<EventCard {event} />
			</div>
		{/each}
	</div>
</section>
