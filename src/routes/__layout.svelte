<script>
  import Navbar from '@components/Navbar.svelte';
  import { session } from '$app/stores';
  $: isUserAuthenticated = $session.role === 'authenticated' ?? false;
  import 'chota';
</script>

<div>
  <Navbar {isUserAuthenticated} />
  <slot />
</div>

<style>
  :global(:root) {
    --color-primary: #1e2624;
    --color-lightGrey: #b2a6a8;
    --color-grey: #98a5a3;
    --color-darkGrey: #4e5458;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 2rem;
    --font-size: 1.6rem;
    --font-family: 'Helvetica Neue', sans-serif;

    /* use with white, lightGrey and grey bg */
    --dark-text: #1e2624;

    /* use on white bg only */
    --medium-text: #4e5458;

    /* use with black and primary bg */
    --bright-text: #98a5a3;

    /* use with black and primary bg */
    --light-text: #b2a6a8;

    /* use on white bg only */
    --link-text: #0e0f5e;
  }
</style>
