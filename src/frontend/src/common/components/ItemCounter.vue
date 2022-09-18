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
      @input="numbersOnly($event.target.value)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('update:count', count + 1)"
      :disabled="count >= 3"
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
  },
  methods: {
    numbersOnly(data) {
      let parsed = parseInt(data);
      if (isNaN(parsed)) {
        this.count = 0;
      } else {
        this.count = parsed;
      }

      if (this.count > 3) {
        this.count = 3;
      }
      this.$emit("update:count", this.count);
    },
  },
};
</script>

<style></style>
