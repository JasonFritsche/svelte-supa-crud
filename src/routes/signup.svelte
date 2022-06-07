<script>
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-yup';
  import * as yup from 'yup';
  import { Input, Field, Row, Col } from 'svelte-chota';
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';

  import supabase from '$lib/db';

  async function signUp(email, password) {
    const {
      user,
      session: sesh,
      error
    } = await supabase.auth.signUp({
      email,
      password
    });
    if (error) console.warn(error);
    if (user) {
      $session = user;
      goto('/');
    }
  }

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const { form, errors, touched } = createForm({
    extend: validator({ schema }),
    onSubmit: (values, context) => {
      signUp(values.email, values.password);
      console.log('values', values);
      console.log('context', context);
    },
    onSuccess: (response, context) => {
      console.log('response', response);
      console.log('context', context);
    },
    onError: (err, context) => {
      console.log('err', err);
      console.log('context', context);
    }
  });
</script>

<div class="signup-component">
  <Row class="is-marginless">
    <Col size="11" sizeMD="5">
      <div>Sign Up</div>
    </Col>
    <Col size="12" sizeMD="6">
      <form class="signup-form" use:form>
        <Field label="Email">
          <Input type="text" name="email" placeholder="your email" />
        </Field>
        <Field label="Password">
          <Input type="password" name="password" placeholder="your password" />
        </Field>
        <Field label="Verify Password">
          <Input type="password" name="passwordConfirmation" placeholder="Verify your password" />
        </Field>
        <button class="is-full-width" primary type="submit">Create Account</button>
      </form>
    </Col>
  </Row>
</div>

<pre>
    <!-- Prettify the errors and display them in HTML -->
    {JSON.stringify($errors, null, 2)}
  </pre>

<pre>
    {JSON.stringify($session, null, 2)}
  </pre>

<style>
  .signup-form {
    padding: 1em;
  }
</style>
