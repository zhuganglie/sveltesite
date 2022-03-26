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
<div class="flex items-end justify-center gap-8">
    <img src="/images/notion-avatar.svg" alt="pic" class="w-64 h-64"/>

{#if start}
	<p in:fly={{ delay: 3000, duration: 1000, easing: quintOut, x: -200 }} class="wip-text w-full md:w-1/2 leading-10">
		Hi. My name is Caesar R. I am a self-taught web developer and freelance trainer, currently based in Singapore.
	</p>
{/if}

</div>


