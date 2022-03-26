<script>
    let submitStatus;
    const submitForm = async (data) => {
      submitStatus = "submitting";
      const formData = new FormData(data.currentTarget);
  
      const res = await fetch("contact.json", {
        method: "POST",
        body: formData,
      });
  
      const { message } = await res.json();
      submitStatus = message;
    };
  </script>
  
  {#if submitStatus == "submitting"}
    <p>Submitting ...</p>
  {:else if submitStatus == "failed"}
    <p>Submission failed.</p>
  {:else if submitStatus == "success"}
    <p>Submitted</p>
  {:else}
    <form on:submit|preventDefault={submitForm} class="flex flex-col space-y-4">
      <input type="text" name="name" placeholder="Name" required class="bg-zinc-700 text-zinc-300">
      <input type="email" name="email" placeholder="Email" required class="bg-zinc-700 text-zinc-300">
  <textarea name="message" placeholder="Message" rows="10" required class="p-2 bg-zinc-700 text-zinc-300"></textarea>
      <button class="cursor-pointer bg-zinc-700 text-zinc-300">Submit</button>
    </form>
  {/if}