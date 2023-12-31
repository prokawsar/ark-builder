<script>
	import { base } from '$app/paths';
	import { slug } from 'github-slugger';

	export let text = '';
	export let size = 'text-sm';
	export let url = slug(text);
</script>

<a
	href="{base}{`/tags/${url}`}"
	class="mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 {size}"
>
	{text}
</a>
