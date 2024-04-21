<script lang="ts">
	//import Icon from '$lib/components/icon/index.svelte';
	import { groupIconsMap } from '$lib/components/icon/icons';
	import { NavBrand, NavUl, NavLi, DarkMode } from 'flowbite-svelte';
	import Icon from './icon/index.svelte';

	export let data: { groups: { name: string; slug: string; icon: string }[] };
</script>

<aside
	class="hidden lg:flex p-2 flex-col gap-12 min-w-fit border-r border-[#EEE] dark:border-[#111827]"
>
	<NavBrand
		href="/"
		class="inline-flex items-center  font-cute text-5xl leading-10 text-gray-900 dark:text-violet-100"
	>
		N0LA<span class="text-[#6628CC]">{'[DEVS]'}</span>
	</NavBrand>

	<div class="w-full space-y-4">
		<h2 class="font-semibold leading-7 text-lg text-violet-500">Community Groups</h2>
		<ul class="list-none p-0 space-y-1.5">
			{#each data.groups as { name, slug, icon }}
				<li class="hover:bg-purple-700 rounded-lg group transition-colors">
					<a
						data-sveltekit-reload
						href="/group/{slug}"
						class="inline-flex items-center justify-start gap-3 py-2 px-4 text-base font-medium leading-[24px] group-hover:text-white text-gray-900 dark:text-white"
						aria-label="{`Group ${name}`}"
					>
						<!-- {#if groupIconsMap[slug]}
							<Icon
								name="{groupIconsMap[slug]}"
								size="{24}"
								className="text-gray-500 dark:text-violet-300 group-hover:text-white"
							/>
						{/if} -->
						<span class="text-base font-medium leading-[24px]">{icon} {name}</span>
					</a>
				</li>
			{/each}
		</ul>
		<NavUl ulClass="p-0 flex gap-6 items-center font-medium" divClass="hidden md:hidden lg:block">
			<NavLi
				href="/about"
				class="font-base leading-[24px] text-gray-400 md:hover:text-gray-600 dark:text-violet-100 md:dark:hover:text-violet-300"
				>About</NavLi
			>
			<NavLi
				href="/contact"
				class="font-base leading-[24px] text-gray-400 md:hover:text-gray-600 dark:text-violet-100 md:dark:hover:text-violet-300"
				>Contact</NavLi
			>
			<div class="h-6 bg-gray-400 w-px dark:bg-violet-100"></div>

			<DarkMode btnClass="">
				<Icon name="moonIcon" slot="darkIcon" size="{24}" />
				<Icon name="sunIcon" slot="lightIcon" size="{24}" />
			</DarkMode>
		</NavUl>
	</div>
</aside>
