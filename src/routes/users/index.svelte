<script>
    export let users
    console.log(users)
</script>

<ul>
{#each users as user}
<li>{user.name}</li>
{/each}
</ul>