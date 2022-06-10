<script>
  import { Nav } from 'svelte-chota';
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';

  export let isUserAuthenticated;
  $: userAuthText = isUserAuthenticated ? 'Sign Out' : 'Sign In';

  function handleUserAuthClick() {
    if (isUserAuthenticated) {
      $session = {};
      console.log($session);
      goto('/');
    } else {
      console.log($session);
      goto('/login');
    }
  }
</script>

<Nav class="bg-primary">
  <a slot="left" href="/" class="brand text-light"
    >Svelte <span class="text-grey">Supa</span> CRUD</a
  >
  <div class="nav-right-items" slot="right">
    {#if isUserAuthenticated}
      <div class="nav-user-container is-vertical-align is-marginless">
        <p>hello user</p>
      </div>
    {/if}
    <button class="bg-primary text-light" on:click={handleUserAuthClick}>
      {userAuthText}
    </button>
  </div>
</Nav>

<style>
  .nav-right-items {
    display: flex;
    flex-direction: row;
  }

  .nav-user-container p {
  }
</style>
