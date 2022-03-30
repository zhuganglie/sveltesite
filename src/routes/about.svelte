  <script>
  import { isLoggedIn } from "../stores/authStore";
  import app from "$lib/firebase";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { goto } from "$app/navigation";


  onMount(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Welcome to YQGD");
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
        goto("/login");
      }
    });
  });


  
</script>

<h1>About Me</h1>

<hr >

<p>Actually, I do not know how to write About Me.</p>

<a href="/logout" class="bg-zinc-700 p-2 text-zinc-100 focus:text-zinc-50 cursor-pointer">Logout</a>
