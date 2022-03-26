<script context="module">
    // export const prerender = true
    export async function load({ fetch }) {
      const res = await fetch(`/notes.json`)
      if (res.ok) {
        const { notes } = await res.json()
        return {
          props: { notes },
        }
      }
    }
  </script>
  
  <script lang='ts'>
    export let notes = []
    let textSearch = ''
    let filteredNotes = [];
    $: {
    filteredNotes = notes.filter((note) => {
      return (note.title.toLowerCase().includes(textSearch.toLowerCase()));
    });
  }
  </script>

<svelte:head>
  <title>Notes</title>
</svelte:head>
  
  
    <h1 class="text-3xl">Notes</h1>
    <hr />

    <input
        id="text-search"
        bind:value="{textSearch}"
        class="w-full text-gray-100 bg-zinc-700 rounded mb-6"
        type="text"
        placeholder="Search"
      />

     {#if filteredNotes.length}
    <div class="grid place-items-center place-content-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2">
    {#each filteredNotes as note}
      {#if !note.draft}
    <div class="h-48 bg-zinc-700/60 gap-2 p-4 rounded shadow-lg w-full flex flex-col justify-between">
        <a sveltekit:prefetch href={`/notes/${note.slug}`} class="text-md text-yellow-500 hover:text-yellow-300 text-left font-semibold mb-2">{note.title}</a>
        <div class="flex flex-wrap flex-wrap justify-start ml-4">
          {#each note.categories as category}
            <a sveltekit:prefetch class="flex items-center justify-center py-0.5 px-2.5 mr-1.5 my-1 text-sm bg-zinc-800 rounded text-zinc-300 hover:text-zinc-100" href="/notes/categories/{category}"
              > {category}</a>
          {/each}
          </div>
       </div>
      {/if}
    {/each}
    </div>
    {:else}
    <div>Can not find {textSearch}, please try again.</div>
    {/if}
  