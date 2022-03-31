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
            goto("/auth/login");
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
        <p>Here are some pieces of information about me. Please login to browse.</p>

<div class="w-full md:w-1/2 py-6 px-4 mx-auto mt-12 border-2 border-zinc-700">

        <form on:submit|preventDefault={login} class="flex flex-col items-center justify-center gap-y-4">
           <div class="w-4/5 mt-3">
           <label for="emailInput">Email</label>
            <input
              type="email"
              class="bg-zinc-700 text-zinc-100 mt-1 w-full cursor-text"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          
            
            </div>
          
            <div class="w-4/5 mt-3">
           <label for="passInput">Password</label>
            <input
              type="password"
              class="bg-zinc-700 text-zinc-100 mt-1 w-full cursor-text"
              id="passInput"
              placeholder="Password"
            />
            </div>
        
          <button type="submit" class="bg-zinc-700 text-zinc-100 cursor-pointer w-fit h-min mt-6">Submit</button>
        </form>    
  </div>
  
  {#if title == "Login"}
          <p class="text-center mt-3 ">
            Not a user? <a href="/auth/signup" class="">Sign Up</a>
          </p>
          {:else if title == "Sign Up"}
          <p class="text-center mt-3">
            Have an account? <a href="/auth/login" class="text-center">Login</a>
          </p>
        {/if}
        {#if title != "Login"}
        <div id="emailHelp" class="text-sm mt-2 text-center">
          I'll never share your email with anyone else.
        </div>
      {/if}

  