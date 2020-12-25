<template>
  <div class="container">
    <Navbar />
    <!-- Navbar takes in .container style object from main.css -->
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import getUser from "../composables/getUser";

// watch the user and direct to Welcome page when null
import { watch, ref } from "vue";
import { useRouter } from "vue-router";

import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    console.log(user);

    // coding challenge answer
    // if (!user) {
    //   router.push({ name: "Welcome" });
    // }

    // if user status changes to null, direct to Welcome page
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
        console.log(user);
      }
    });
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>