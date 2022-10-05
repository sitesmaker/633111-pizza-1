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
        :value="item.id"
        v-model="isChecked"
        @change="$emit('sauceChange', { id: item.id, price: item.price })"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  data() {
    return {
      isChecked: 1,
    };
  },
  props: {
    saucesArr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
