<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let events = data.events;

	import Banner from '$lib/components/banners/home-banner.svelte';
	import EventList from '$lib/components/event/event-list.svelte';

	// TODO: Setup Banner object with schema and pass into DB
</script>

<div class=" p-1 h-full overflow-contain">
	<Banner
		title="Developers, Designers, Lend Me Your Ears"
		description="We’re a community of developers, entrepreneurs, students, and enthusiasts who are excited about the future of technology.  Join us to share projects, attend events, and learn something new!"
		linkText="Community Slack"
		linkHref="https://join.slack.com/t/nola/shared_invite/zt-256vzyuvo-1KC88G~MLCT8KCgw4QL7zg"
		linkIcon="slackIcon"
		bannerClass="bg-homeBanner text-white"
	/>
	<EventList {events} />
</div>
