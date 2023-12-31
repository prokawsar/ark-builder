<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12 flex flex-col justify-center items-center">
	<img class="w-[75%]" src="icon-512.png" alt="ARK Builder" />
	<div class="flex flex-col w-[85%]">
		<h1
			class="pb-6 text-2xl font-extrabold leading-9 text-center tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
		>
		Neat, efficient and privacy-focused apps for your productivity
		</h1>
		<p class="text-lg text-center font-semibold prose-xl text-gray-800 dark:text-gray-400">
			<span class="font-extrabold">ARK Builders</span> crafts contemporary software for all platforms, with <br /> the mission to elevate daily user experiences through privacy <br /> enhancements and seamless cross-device synchronization.
		</p>
	</div>
</div>

<!-- <Blogs title="Latest Posts" h2 {posts} search={false} count={3} /> -->
