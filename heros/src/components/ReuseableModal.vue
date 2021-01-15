<template>
  <section class="w-full">
    <div class="m-auto"><h1 class="text-2xl my-5">resuseable modal</h1></div>
    <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
      <template v-slot:title>red modal</template>
      <template v-slot:body>red modal body from v-slot</template>
    </Modal>
    <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false"> </Modal>
    <button @click="isRedModalOpen = true" class="text-red-500 border-black">
      open red modal
    </button>
    <br />
    <button @click="isBlueModalOpen = true" class="text-blue-500 border-black">
      open blue modal
    </button>
  </section>
</template>

<script>
import Modal from "../components/Login/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);
    return { isRedModalOpen, isBlueModalOpen };
  },
};
</script>

<style>
</style>