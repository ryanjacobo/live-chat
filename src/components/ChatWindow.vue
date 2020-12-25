<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <!--toDate() has been removed after formattedDocuments was created. createdAt is now represented by time in formattedDocuments function-->
        <span class="name">{{doc.name}}</span>
        <span class="message">{{ doc.message}}</span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection.js";
import { formatDistanceToNow } from "date-fns";
import { computed, ref, onUpdated } from "vue";
export default {
  setup() {
    const { error, documents } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }; // all of the doc (messages properties) with createdAt property formatted to be "time"
        });
      }
    });

    // auto-scroll to bottom of messages
    const messages = ref(null);

    // life-cycle hook
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });
    return { error, documents, formattedDocuments, messages };
  }
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>