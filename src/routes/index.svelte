<script>
	import { onMount } from "svelte";
	import { quintOut } from "svelte/easing";
	import { fly } from "svelte/transition";
    import Social from "$lib/components/social.svelte";

	let start = null;
	onMount(() => {
		start = {};
	});
</script>

<svelte:head>
	<title>Website</title>
</svelte:head>


<h1 class="text-3xl uppercase">Welcome to my website</h1>
<hr />
<div class="lg:flex items-start justify-evenly gap-8">
    <center><img src="/images/notion-avatar.svg" alt="pic" class="w-1/3 h-auto md:w-42 md:h-42"/></center>
	<div class="w-full lg:w-2/3 flex flex-col items-center justify-center">
	<p class="text-xl md:text-3xl font-bold">Hey everyone 👏</p>
	<p class="text-2xl md:text-4xl font-bold mb-12">I am Πύρρων Ρουάν</p>
{#if start}
	<p in:fly={{ delay: 1000, duration: 1000, easing: quintOut, x: -200 }} class="w-full md:w-2/3 leading-10 text-md">
		I am a learning designer & facilitator based in Singapore. I am passionate about imparting knowledge and developing people.
	</p>
{/if}
<Social />
</div>
</div>

