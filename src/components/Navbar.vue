<template>
  <div>
    <nav v-if="user">
      <div>
        <p>Hey there, {{user.displayName}}!</p>
        <p class="email">Currently logged in as {{user.email}}.</p>
      </div>
      <button @click="handleClick">Logout</button>
    </nav>
    <!--added feature-->
    <!-- has been replaced by const requiredAuth in index.js -->
    <div class="return" v-else>
      <p>No one is logged in.</p>
      <!-- <button @click="exit">Return</button> -->
      <button>Return</button>
    </div>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import Welcome from "../views/Welcome";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
      // router.push({ name: "Welcome" }); // added feature. directs user to Welcome page after logout
    };

    // has been replaced by const requiredAuth in index.js
    const exit = () => {
      router.push({ name: "Welcome" });
    };
    return { handleClick, user, exit };
  }
};
</script>

<style>
/*added feature*/
.return {
  text-align: center;

  padding: 10px;
}
.return p {
  margin: 10px;
}
</style>