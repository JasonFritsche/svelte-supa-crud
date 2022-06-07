<script>
  import { Nav } from 'svelte-chota';
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';

  export let isUserAuthenticated;
  console.log(isUserAuthenticated);
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

<Nav class="bg-light">
  <a slot="left" href="/" class="brand">Svelte <span class="text-primary">Supa</span> CRUD</a>
  <button slot="right" on:click={handleUserAuthClick}>{userAuthText}</button>
</Nav>
