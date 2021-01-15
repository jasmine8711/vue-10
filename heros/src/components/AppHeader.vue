<template>
  <nav class="w-full bg-blue-900 text-white px-4 py-2">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2 hidden md:inline-block"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button class="mx-2" @click="$emit('open-login-modal')">LOGIN</button>
  </nav>
</template>
<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Dc Heros", to: "/heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/resuseable-modal" },
        { title: "Chat", to: "/chat" },
        { title: "User Crud", to: "/user-crud" },
        { title: "Tensorflow", to: "/tensorflow" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      // .then((res) => {})
      // .catch((e) => {});
    },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
};
</script>