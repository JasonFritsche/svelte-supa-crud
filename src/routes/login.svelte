<script>
  import { Row, Col } from 'svelte-chota';
  import Login from '$lib/components/Login.svelte';

  let isLogin = true;

  function setIsLogin() {
    isLogin = !isLogin;
  }
</script>

<div class="signup-component">
  <Row class="is-marginless">
    <Col size="11" sizeMD="5">
      <div>{isLogin ? 'Log In' : 'Sign Up'}</div>
    </Col>
    <Col size="12" sizeMD="6">
      <Login {isLogin} />
      <div>
        {#if isLogin}
          <p>
            Need an account? <span on:click={() => setIsLogin(false)}>Click here to sign up</span>
          </p>
        {:else}
          <p>
            Already have an account? <span class="" on:click={setIsLogin}>Click here to log in</span
            >
          </p>
        {/if}
      </div>
    </Col>
  </Row>
</div>

<style>
  p {
    cursor: default;
    color: var(--dark-text);
  }

  span {
    cursor: pointer;
    color: var(--link-text);
  }
</style>
