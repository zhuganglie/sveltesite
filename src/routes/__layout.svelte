<script context="module">
    import { page } from '$app/stores';
    export const prerender = true;
    
    export const load = ({ url }) => {
        const currentRoute = url.pathname
        return {
          props: {
            currentRoute
          }
        }
      }
    </script>

<script lang="ts">
import '../global.css'
import 'uno.css'
//import '@unocss/reset/tailwind.css'
import { fly } from 'svelte/transition'
import ClickOutside from "svelte-click-outside"
import Contact from '$lib/components/contact.svelte'
import Taiji from '$lib/components/taiji.svelte'

export let currentRoute: any
    
    let open = false;
    const toggleHeader = () => {
    open = !open;}

    const routes = [
    {name: "Home", href: "/", icon : "i-mdi-home-outline"},
    {name: "Blog", href: "/blog", icon: "i-mdi-post-outline"},
    {name: "Notes", href:"/notes", icon: "i-mdi-book-outline"},
    {name: "Recipes", href:"/recipes", icon: "i-mdi-food-outline"},
    {name: "About", href:"/about", icon:"i-mdi-information-outline"},
]
</script>

<div class="flex h-screen">
    <div class="hidden md:w-1/5 px-4 py-20 md:flex flex-col justify-evenly items-center min-w-max" class:flex={open}>
        <header>
          <!--- <center> <img src="/images/notion-avatar.svg" alt="avatar" class="w-22 h-22 m-0"/></center>-->
          <center class="mb-6">
           <Taiji />
          </center>
        <h1 class="text-center text-2xl mb-1.5">Πύρρων</h1>
        <p class="font-serif italic text-sm m-0">I do not apprehend</p>
        </header>
        
        <nav class="m-auto ">
            {#each routes as route}
            <p><a sveltekit:prefetch href={route.href} class=" text-zinc-300 hover:text-zinc-100 flex items-center space-x-4 "><div class="{route.icon}"/><span class:text-yellow-500={$page.url.pathname.includes(route.href + "/" ) || $page.url.pathname === route.href}>{route.name}</span></a></p>
            {/each}
        </nav>
        
        <footer class="text-center mx-auto text-sm">&copy; {new Date().getFullYear()} | Powered by <a href="https://kit.svelte.dev">Sveltekit</a>
        </footer>
        </div>

{#key currentRoute}
<main class="w-full md:w-3/5 px-4 md:px-8 py-10 border-l-2 border-zinc-700 overflow-auto" in:fly={{ y:150, duration: 250, delay: 250 }} out:fly={{ y:150, duration: 250 }}>
    <ClickOutside on:clickoutside="{() => (open = false)}">
        <button class:open on:click={toggleHeader} class="bg-zinc-700 text-yellow-500 px-2.5 py-0.5 mb-6 md:hidden shadow rounded  flex items-center space-x-1"><div class="i-mdi-sort-variant icon" /><span class="text-lg font-bold">Caesar</span></button>
    </ClickOutside>
    <slot />
</main>
{/key}

<aside class="md:flex md:flex-col md:items-center md:justify-center text-center mx-auto px-6 hidden md:w-1/5">
    <div class="mb-4 font-bold text-xl">Contact Me</div>
    <Contact />
</aside>
</div>


<style>
    .open .icon {
     transform: rotate(-180deg);
    }
</style>