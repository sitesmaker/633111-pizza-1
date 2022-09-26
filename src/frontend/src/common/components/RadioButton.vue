<template>
  <div>
    <label
      class="radio ingredients__input"
      v-for="(item, index) in saucesArr"
      :key="index"
    >
      <input
        type="radio"
        name="sauce"
        value="tomato"
        @change="$emit('sauceChange', { id: item.id, price: item.price })"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    saucesArr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
