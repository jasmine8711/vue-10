<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl m-5">Real Time Chat App</h1>
      <div class="border rounded-lg bg-gray-100">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            v-model="state.message"
            class="p-1 border rounder shadow"
            placeholder="Start Typing"
            @keydown.enter="addMessage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase from "../utilities/firebase";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      collection: null,
    });
    onMounted(async () => {
      const db = firebase.database();
      state.collection = db.ref("chats");
      const data = await state.collection.once("value");
      state.collection.on("value", (snapshot) => {
        state.chats = snapshot.val();
      });
      state.chats = data.val();
    });
    function addMessage() {
      const newChat = state.collection.push();
      newChat.set({
        message: state.message,
      });
      state.message = "";
    }
    return { state, addMessage };
  },
};
</script>

<style>
</style>