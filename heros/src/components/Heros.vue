<template>
  <h1>DC superheros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ hero.name }}
    </li>
  </ul>
  <form @submit.prevent="addNewHero">
    <input type="text" v-model.lazy="newHero" />
    <button :disabled="isDisabled" type="submit">add hero</button>
  </form>
  <h3>{{ newHero }}</h3>
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
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
