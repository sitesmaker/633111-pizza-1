<template>
  <div class="sheet__content dough">
    <label
      class="dough__input"
      v-for="(item, index) in dough"
      :key="index"
      :class="doughClass[index]"
    >
      <input
        type="radio"
        name="dought"
        class="visually-hidden"
        :value="item.price"
        @change="
          $emit('onUpdateDough', {
            price: $event.target.value,
            id: item.id,
          })
        "
      />
      <b>
        {{ item.name }}
      </b>
      <span>{{ item.description }}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: "BuilderDoughSelector",
  props: {
    dough: {
      type: Array,
      required: true,
    },
    doughClass: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style></style>
