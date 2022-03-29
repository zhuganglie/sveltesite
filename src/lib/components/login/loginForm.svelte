<script>
    import { goto } from "$app/navigation";
    import app from "$lib/firebase"
    import {
      getAuth,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
    } from "firebase/auth";
  
    export let title;
  
    const auth = getAuth(app);
  
    function login() {
      let email = document.getElementById("emailInput").value;
      let password = document.getElementById("passInput").value;
      if (title == "Login") {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("uid", user.uid);
            localStorage.setItem("isLoggedIn", true);
            goto("/about");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            goto("/login");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }

  </script>
  
        <h1 class="">{title}</h1>
        <hr >
<div class="text-center block mt-24">
        <form on:submit|preventDefault={login}>
          <div class="mb-6">
            <label for="emailInput" >Email</label>
            <br>
            <input
              type="email"
              class="bg-zinc-700 text-zinc-100 mt-1 w-full md:w-1/2"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
            {#if title != "Login"}
              <div id="emailHelp" class="text-sm mt-2">
                I'll never share your email with anyone else.
              </div>
            {/if}
          </div>
          <div class="mb-8">
            <label for="passInput">Password</label>
            <br>
            <input
              type="password"
              class="bg-zinc-700 text-zinc-100 mt-1 w-full md:w-1/2"
              id="passInput"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="bg-zinc-700 text-zinc-100 w-full md:w-1/2">Submit</button>
        </form>
        {#if title == "Login"}
          <p class="float-end mt-3">
            Not a user? <a href="/signup" class="">Sign Up</a>
          </p>
          {:else if title == "Sign Up"}
          <p class="float-end mt-3">
            Have an account? <a href="/login" class="">Login</a>
          </p>
        {/if}
  </div>
  
  