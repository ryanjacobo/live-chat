<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <!--"login" emitted from LoginForm.vue-->
      <p>
        Not yet registered?
        <span @click="showLogin = false">Signup</span> instead.
      </p>
    </div>
    <div v-else>
      <!-- <SignupForm @login="enterChat" /> -->
      <SignupForm @signedUp="newLogin" />

      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> instead.
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    const newLogin = () => {
      // console.log(showLogin);
      showLogin.value = true; // added feature. changes showLogin.value to true to direct user to login
    };

    return { showLogin, enterChat, newLogin };
  }
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
} /*buttons from SignupForm and LoginForm components */
</style>