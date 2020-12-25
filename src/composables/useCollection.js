import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  // passing in a collection to useCollection allows it to be used for different types of collection
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
