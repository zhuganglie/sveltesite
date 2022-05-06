<script context="module">
    // export const prerender = true
    export async function load({ fetch, params }) {
      const { slug } = params
      const res = await fetch(`/notes/${slug}.json`)
      if (res.ok) {
        const { note } = await res.json()
        return {
          props: { note },
        }
      }
    }
  </script>
  
  <script lang='ts'>
    import {formatDate} from '$lib/date';
    
    export let note
    
    let { html, date, title, book, publisher, year, authors, categories } = note
    let dateDisplay = formatDate(date);
  </script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
  
  <article class="flex flex-col flex-grow">
    <h1 class="text-3xl">{title}</h1>
    <div class="">
        <div class="flex flax-wrap pl-4 justify-start items-center space-x-1"> <div class="i-mdi-calendar" /><span>{dateDisplay}</span></div>
      <hr />
      <ul>
          <li>Title：{book}</li>
          <li><div class="md:flex md:flex-wrap space-x-2"><div class="my-1">Authors：</div>{#each authors as author}<div class="rounded w-max my-1 px-2.5 py-0.5 bg-zinc-700">{author}</div>{/each}</div></li>
          <li>Publisher：{publisher}</li>
          <li>Year：{year}</li>
          <li>Categories：{#each categories as category}<a href="/notes/categories/{category}" class="rounded w-max px-2.5 py-0.5 m-1 bg-zinc-700">{category}</a>{/each}</li>
          </ul>
      <hr />
      <article>
        {@html html}
      </article>
      <hr />
      <footer>
	<a href="/notes/" class="bg-zinc-700 text-yellow-500 hover:text-zinc-100 rounded mb-4 px-2.5 py-0.5">&larr; Back</a>
      </footer>
    </div>
  </article>