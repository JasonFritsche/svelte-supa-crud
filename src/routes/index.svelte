<script>
  import Navbar from '@components/Navbar.svelte';
  import { session } from '$app/stores';

  $: isUserAuthenticated = $session.role === 'authenticated' ?? false;
</script>

<div>
  <Navbar {isUserAuthenticated} />
  <div>
    <div>
      <h1>Categories</h1>
    </div>
    <div>stuff goes here</div>
  </div>
</div>
