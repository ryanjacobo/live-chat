import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser); // currentUser is a property that outputs the currently logged in user

projectAuth.onAuthStateChanged((loggedUser) => {
  user.value = loggedUser;
  console.log("User state change. Current user is:", loggedUser);
});

const getUser = () => {
  return { user };
};

export default getUser;
