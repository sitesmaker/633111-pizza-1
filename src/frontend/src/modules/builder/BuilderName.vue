<template>
  <label class="input">
    <span class="visually-hidden">Название пиццы</span>
    <input
      type="text"
      name="pizza_name"
      placeholder="Введите название пиццы"
      @input="inputChange($event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "BuilderName",
  methods: {
    inputChange(text) {
      if (text.length === 0) {
        console.log("len = 0");
      }
    },
  },
};
</script>

<style></style>
