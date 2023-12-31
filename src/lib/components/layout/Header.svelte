<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Twitter from '$lib/icons/twitter.svelte';
	import Github from '$lib/icons/github.svelte';
	import { base } from '$app/paths';

</script>

<!-- <div class="header-bar fixed top-0"></div> -->
<header class="flex items-center justify-between py-3 sticky top-0 bg-white dark:bg-gray-900 bg-opacity-95">
	<div class="flex flex-row items-center">
		<a href="{base}/" aria-label={config.headerTitle}>
			<div class="flex items-center justify-between">
				<div class="mr-3">
					<!-- <img src="/logo.svg" alt="Logo" class="h-10 w-auto" /> -->
				</div>
				<div class="hidden text-4xl font-semibold sm:block font-title">
					{config.headerTitle}
				</div>
			</div>
		</a>

		<div class="hidden sm:block ml-5">
			{#each navLinks as link}
				<a href="{base}{link.href}" target="{link.title == 'Research' ? '_blank' : ''}" class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-2"
					>{link.title}</a
				>
			{/each}
		</div>
	</div>
	<div class="flex items-center gap-3 text-base leading-5">
		<!-- <div class="hidden sm:block">
			{#each navLinks as link}
				<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
					>{link.title}</a
				>
			{/each}
		</div> -->
		<ThemeSwitch />
		<a href="{config.twitter}" target="_blank">
			<Twitter />
		</a>
		<a href="{config.github}" target="_blank">
			<Github />
		</a>
		<MobileMenu />
	</div>
</header>

<style>
	.header-bar{
		border-top: 4px solid;
		border-image-source: linear-gradient(90deg, #5d2f86, #8ed6fb 50%, #d32e9d);
		border-image-slice: 1;
	} 
</style>