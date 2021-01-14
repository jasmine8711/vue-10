<template>
  <div class="w-full">
    <h1 class="p-5">Markdown APP</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" :value="text"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100">
        <textarea class="w-full h-full" :value="text"></textarea>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "**this is markdown app**",
    };
  },
  computed: {},
};
</script>

<style>
</style>