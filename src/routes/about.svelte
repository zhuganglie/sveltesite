  <script>
  import { isLoggedIn } from "../stores/authStore";
  import app from "$lib/firebase";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";


  onMount(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Welcome to YQGD");
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
        goto("/auth/login");
      }
    });
  });
</script>

<h1>About Me</h1>

<hr >

<p>Actually, I do not know how to write About Me.</p>

<p align="center">
<iframe class="w-full aspect-[16/10]" title="slide"  src="https://docs.google.com/presentation/d/e/2PACX-1vRSfk1OZ5w1CLXJRclvSnntV8s-oR0ICiKVQ4vLVWxuAtNFovZcKksYvGe3FitRGUmID8WecMJA3B1w/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

</p>

<button class="mt-4 bg-zinc-700 rounded">
<a href="/auth/logout" class="text-zinc-100 focus:text-zinc-50 cursor-pointer">Logout</a>
</button>


