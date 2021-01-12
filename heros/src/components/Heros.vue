<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-center font-bold w-full">
        DC superheros {{ herosCount }}
      </h1>

      <ul>
        <li v-for="(hero, index) in dcHeros" :key="index">
          <p>
            {{ hero.name }}
            <button class="bg-green-500 p-1" @click="deleteHero(index)">
              X
            </button>
          </p>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addNewHero">
        <input
          class="placeholder-gray-500 border rounded-lg"
          placeholder="hero name"
          type="text"
          v-model.lazy="newHero"
        />
        <button :disabled="isDisabled" type="submit">add hero</button>
      </form>
      <h3>{{ newHero }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heros",
  data() {
    return {
      isDisabled: false,
      newHero: "",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
      ],
    };
  },
  methods: {
    addNewHero() {
      if (this.newHero !== "") {
        this.dcHeros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    deleteHero(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
