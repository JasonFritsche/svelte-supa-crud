<script>
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-yup';
  import * as yup from 'yup';
  import { Input, Field } from 'svelte-chota';
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';

  import supabase from '$lib/db';

  export let isLogin;

  async function signUp(email, password) {
    const { user, _, error } = await supabase.auth.signUp({
      email,
      password
    });
    if (error) console.warn(error);
    if (user) {
      $session = user;
      goto('/');
    }
  }

  async function signIn(email, password) {
    const { user, _, error } = await supabase.auth.signIn({
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
    password: yup.string().required('Password is required')
  });

  const { form, errors, touched } = createForm({
    extend: validator({ schema }),
    onSubmit: (values, context) => {
      const { email, password } = values;
      if (isLogin) {
        signIn(email, password)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        signUp(email, password)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }

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

<form class="signup-form" use:form>
  <Field label="Email">
    <Input type="text" name="email" placeholder="your email" />
  </Field>
  <Field label="Password">
    <Input type="password" name="password" placeholder="your password" />
  </Field>
  <button class="is-full-width" primary type="submit"
    >{isLogin ? 'Log in' : 'Create Account'}</button
  >
</form>

<style>
  .signup-form {
    padding: 1em;
  }
</style>
