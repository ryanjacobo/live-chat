<template>
  <form @submit.prevent="handleSubmit">
    <h1>Login</h1>
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
        context.emit("login"); // "emit" to LoginForm
      }
    };
    return { email, password, handleSubmit, error };
  }
};
</script>

<style>
</style>