<script>
	import { onMount } from "svelte";
	import { quintOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	let start = null;
	onMount(() => {
		start = {};
	});
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>


<h1 class="text-3xl uppercase">Welcome to my website</h1>
<hr />
<div class="md:flex items-start justify-center gap-8">
    <center><img src="/images/notion-avatar.svg" alt="pic" class="w-1/3 h-auto md:w-48 md:h-48"/></center>
	<div>
	<p class="md:text-4xl font-bold">Hey everyone &#129306;</p>
	<p class="md:text-5xl font-bold">I am Caesar Ruan</p>
{#if start}
	<p in:fly={{ delay: 1000, duration: 1000, easing: quintOut, x: -200 }} class="w-full md:w-2/3 leading-10 text-md">
		I am a learning designer & facilitator based in Singapore. I am passionate about imparting knowledge and developing people.
	</p>
{/if}
<div class="flex items-center justify-center gap-3 text-2xl"><div class="i-tabler-brand-github" /><div class="i-tabler-brand-twitter" /><div class="i-tabler-mail" /></div>
</div>
</div>

