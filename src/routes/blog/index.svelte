<script context="module">
    // export const prerender = true
    export async function load({ fetch }) {
      const res = await fetch(`/blog.json`)
      if (res.ok) {
        const { posts } = await res.json()
        return {
          props: { posts },
        }
      }
    }
  </script>
  
  <script lang=''>
    export let posts;
    import {formatDate} from '$lib/date';
    import { paginate, DarkPaginationNav } from 'svelte-paginate'

  let items = posts
  let currentPage = 1
  let pageSize = 2
  $: paginatedItems = paginate({ items, pageSize, currentPage })
  </script>

<svelte:head>
  <title>Posts</title>
</svelte:head>
  
    <h1 class="text-3xl">Blog</h1>
    <hr />
    
    {#each paginatedItems as item}
    {#if !item.draft}
    <div class="mb-4 p-4 bg-zinc-700/50 w-full md:w-max shadow-lg">
    <span class="text-sm border-b border-zinc-300 px-2 py-0.5 mb-3 min-w-max">{formatDate(item.date)}</span>
    <br > <br>
    <a href="/blog/{item.slug}" class="text-md text-yellow-500 hover:text-yellow-300 text-left font-semibold mb-2">{item.title}</a>
    <br> <br>
    <div class="flex flex-wrap justify-start">
      {#each item.tags as tag}
        <a sveltekit:prefetch class="flex items-center justify-center py-0.5 px-2.5 mr-1.5 my-1 text-sm bg-zinc-700 rounded bg-zinc-800 text-zinc-300 hover:text-zinc-100" href="/blog/tags/{tag}"
          ><div class="i-mdi-tag-outline mr-1 " /> {tag}</a>
      {/each}
      </div>
      </div>
  <hr />
    {/if}
    {/each}
    
    <div class="pagination mt-6">
    <DarkPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
    />
    </div>


<style>
.pagination :global(.pagination-nav) {
  background-color: #27272a;
  }
.pagination :global(.option):hover{
  background-color: #18181b;
}
.pagination :global(.option.active){
  color: rgb(234 179 8); 
}
</style>