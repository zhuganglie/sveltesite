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
<div class="md:flex items-end justify-center gap-8">
    <center><img src="/images/notion-avatar.svg" alt="pic" class="w-1/2 h-auto md:w-64 md:h-64"/></center>

{#if start}
	<p in:fly={{ delay: 1000, duration: 1000, easing: quintOut, x: -200 }} class="wip-text w-full md:w-1/2 leading-10 text-md">
		Hi. My name is YQGD. I am a freelance trainer and a self-taught web developer, currently based in Singapore.
	</p>
{/if}

</div>


