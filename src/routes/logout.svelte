<script>
import app from "$lib/firebase"
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(app);
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Bye!")
  isLoggedIn.update(() => false)
  goto("/login")
}).catch((error) => {
  console.log("An error happened.")
});
</script>