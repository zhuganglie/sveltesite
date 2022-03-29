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
        goto("/login");
      }
    });
  });

  
</script>

<h1>About Me</h1>

<hr >
