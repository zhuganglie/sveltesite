<script lang="ts">
  import data from "$lib/data/recipes.json"
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import type { Options } from '@splidejs/splide';
  import '@splidejs/splide/dist/css/splide.min.css'; 

  const options: Options = {
    rewind : true,
    autoplay: false,
    type: 'fade',
    speed: 1000,
    perPage: 1,
    //focus: 'center',
    gap: '2rem',
    padding: '4rem',
    //direction: 'ttb',
    //width: 1000,
    cover: false,
    mediaQuery: 'max',
    breakpoints: {
      480: {
        perpage: 1,
        gap: '.7rem',
        padding: '2rem',
        arrows: true,
      },
    },
  }

    let x = data
    let xMeat = x.filter(x => x.category === 'meat')
    let xVeg = x.filter(x => x.category === 'veg')
    let sMeat = xMeat.sort(() => Math.random() - Math.random()).slice(0,1)
    let sVeg = xVeg.sort(() => Math.random()- Math.random()).slice(0,1)
    //let menu = []
    let menu = sMeat.concat(sVeg)

    export function change() {
        sVeg = xVeg.sort(() => Math.random() - Math.random()). slice(0, 1)
        sMeat = xMeat.sort(() => Math.random() - Math.random()).slice(0, 1)
        menu = sMeat.concat(sVeg)
    }

    const rts = [
    {href: 'https://www.startaster.com.cn/phone.php/restaurant/RE000564/zh-cn?', title: '蛙功夫'},
    {href: 'https://www.startaster.com.cn/phone.php/restaurant/RE000524/zh-cn?', title: '史密斯湘菜馆'},
    {href: 'https://www.startaster.com.cn/phone.php/restaurant/RE000042/zh-cn?', title: '老成都'},
    {href: 'https://www.cqgf.com.sg/cn/', title: '重庆烤鱼'},
    {href: 'https://www.startaster.com.cn/restaurant/RE000020/zh-cn', title: '蟹老宋'}
  ]
  const yts = [
    {href: 'https://www.youtube.com/channel/UCg0m_Ah8P_MQbnn77-vYnYw', title: '美食作家'},
    {href: 'https://www.youtube.com/channel/UCBJmYv3Vf_tKcQr5_qmayXg', title: '老饭骨'},
    {href: 'https://www.youtube.com/channel/UCu7NhIfuD79werXU8I52oaQ', title: '山药视频'},
    {href: 'https://www.youtube.com/channel/UCmCuW1RdJA471zImbT2MdBQ', title: '铁锅视频'}
  ]
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>

<h1 class="text-3xl">What to Have for Dinner?</h1>
<hr />
<img src="/images/crab.jpeg" width="" alt="crab" loading="lazy" class="max-w-full rounded h-auto object-fill"/>
<p>I am plagued by the above 👆 question everday. In order to solve the problem, I write 👇 a simple app, with which I do not have to bother my head about what to have for dinner.  </p>
<br>
<h2 class="text-2xl">Random Menu</h2>
<p>Just click the button and the app will randomly generate a menu with one meat and one veg.</p>

<button on:click={change} class=" px-2 py-1 mb-2 bg-zinc-700 text-yellow-500 rounded mb-6 font-bold cursor-pointer">Click</button>
<div class="md:flex md:items-center md:justify-center gap-2">
    {#each menu as item}
    <div class="mx-auto bg-zinc-700 w-3/5 w-full md:w-1/4 px-3 py-3 mb-4 rounded">
    <a href="#id" class="" ><h4 class="m-0 p-0">{item.name}</h4></a>
    <ul class="mx-auto mt-3">
    {#each item.ingridients as i}
      <li class="">{i}</li>
      {/each}
    </ul>
      <div class="capitalize flex flex-center justify-center gap-2 rounded bg-zinc-800 py-0.5 px-2 max-w-max"><div class="i-mdi-tag-outline" /><span>{item.category}</span></div>
      </div>
    {/each}
    </div>
<br>
<h2 class="text-2xl">Elective Menu</h2>
<p>If you do not like the above randomly generated menu, you can browse the available dishes one by one, and select what you like to have here.</p>
<div class="w-full md:4/5 mt-10">
<Splide options={options}>
  {#each x as i}
  <SplideSlide>
    <div class="mx-auto flex items-center justify-evenly bg-zinc-700 px-2 pt-3  pb-6 w-full md:w-3/5">
      <center>
        <img src={i.image} alt="img" class="w-24 h-24" />
      </center>
        <div class="flex flex-col gap-4 items-center justify-between">
      <a href="#id" class="m-0"><span class="text-xl font-bold">{i.name}</span></a>
        <div class="capitalize rounded flex gap-2 bg-zinc-800 py-0.5 px-2 max-w-max"><div class="i-mdi-tag-outline"/><span>{i.category}</span></div>
        </div>
        </div>
  </SplideSlide>
  {/each}
</Splide>
</div>

<br>
    <h2 class="text-2xl">Resource</h2>
    
    <div>
      <p>Here are some Youtube channels I subscribed for recipes.</p>
      <ul class="list-none flex flex-wrap m-0">
      {#each yts as yt}
      <li class=""><a href={yt.href} target="_blank" class="">{yt.title}</a></li>
      {/each}
      </ul>
    </div>
      
      <div>
        <p>Here are some local restaurants where I like to enjoy delicacy with my friends.</p>
        <ul class="flex flex-wrap list-none m-0">
        {#each rts as rt}
        <li class=""><a href={rt.href} target="_blank" class="">{rt.title}</a></li>
        {/each}
        </ul>
      </div>
  