<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="$emit('update:count', count - 1)"
      :disabled="count <= 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="count"
      @input="numbersOnly($event)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="classText"
      @click="$emit('update:count', count + 1)"
      :disabled="count >= maxCount"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "itemCounter",
  props: {
    count: {
      type: Number,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
    classText: {
      type: String,
      default: "",
    },
  },
  methods: {
    numbersOnly($event) {
      let parsed = parseInt($event.target.value);
      if (isNaN(parsed)) {
        $event.target.value = 0;
      } else {
        $event.target.value = parsed;
      }

      if ($event.target.value > this.maxCount) {
        $event.target.value = this.maxCount;
      }
      this.$emit("update:count", Number($event.target.value));
    },
  },
};
</script>

<style></style>
