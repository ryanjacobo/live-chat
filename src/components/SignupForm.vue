<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign-up</h1>
    <input type="text" required placeholder="display name" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log("user signed up");

      //   context.emit('login')
      context.emit("signedUp"); //emits "signedUp" instead of 'login' to indicate a new user signup
    };

    return { displayName, email, password, handleSubmit, error };
  }
};
</script>

<style>
</style>