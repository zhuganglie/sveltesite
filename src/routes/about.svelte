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


<button class="mt-4 bg-zinc-700 rounded">
<a href="/auth/logout" class="text-zinc-100 focus:text-zinc-50 cursor-pointer">Logout</a>
</button>


