<script lang="ts">
	import {
		Drawer,
		CloseButton,
		NavBrand,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		DarkMode,
		NavHamburger,
		Navbar
	} from 'flowbite-svelte';

	import { sineIn } from 'svelte/easing';

	import { groupIconsMap } from './icon/icons';
	import Icon from './icon/index.svelte';
	export let hidden: boolean = true;
	export let data: { groups: { name: string; slug: string; icon: string }[] };

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	const getGroupPath = (slug: string) => `/group/${slug}`;
	let y: number;
	$: y > 1024 ? (hidden = false) : (hidden = true);
</script>

<svelte:window bind:innerWidth="{y}" />
<Navbar class="w-full flex justify-between !bg-transparent px-0 pt-0">
	<NavHamburger onClick="{() => (hidden = !hidden)}" class="md:block lg:hidden" />
	<NavBrand href="/" class="!flex end-0 font-cute text-5xl text-gray-900 dark:text-violet-100">
		N0LA<span class="text-[#6628CC]">{'[DEVS]'}</span>
	</NavBrand>

	<Drawer
		transitionType="fly"
		{transitionParams}
		backdrop="{false}"
		bind:hidden
		id="sidebar2"
		bgColor="{'bg-[#24072F]'}"
		bgOpacity="{'bg-opacity-70'}"
		divClass="bg-white dark:bg-primary-dark z-50 p-4 h-full max-w-fit overscroll-auto"
	>
		<CloseButton on:click="{() => (hidden = true)}" class="dark:text-white lg:hidden" />

		<Sidebar asideClass="flex flex-col justify-between ">
			<SidebarGroup class="items-start">
				<h2 class="font-semibold text-lg text-violet-500">Community Groups</h2>
				{#each data.groups as { name, slug, icon }}
					<SidebarItem
						data-sveltekit-reload
						on:click="{() => (hidden = true)}"
						href="{getGroupPath(slug)}"
						label="{`${icon}  ${name}`}"
						class="group dark:hover:text-white hover:text-white hover:bg-purple-700 font-medium dark:hover:bg-purple-700"
					></SidebarItem>
				{/each}
				<SidebarGroup class="items-start">
					<h2 class="font-semibold leading-7 text-lg text-violet-500 my-4">Organization Info</h2>
					<SidebarItem
						href="/about"
						label="About"
						class="group dark:hover:text-white hover:text-white hover:bg-purple-700 font-medium dark:hover:bg-purple-700"
						spanClass=""
					></SidebarItem>
					<SidebarItem
						href="/contact"
						label="Contact"
						class="group dark:hover:text-white hover:text-white hover:bg-purple-700 font-medium dark:hover:bg-purple-700"
						spanClass=""
					></SidebarItem>
					<DarkMode btnClass="ml-5">
						<Icon name="moonIcon" slot="darkIcon" size="{24}" />
						<Icon name="sunIcon" slot="lightIcon" size="{24}" />
					</DarkMode>
				</SidebarGroup>
			</SidebarGroup>
		</Sidebar>
	</Drawer>
</Navbar>
