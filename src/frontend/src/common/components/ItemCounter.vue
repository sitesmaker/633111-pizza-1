<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="count--"
      :disabled="count <= 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      v-model="count"
      @input="numbersOnly"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="count++"
      :disabled="count >= 3"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "itemCounter",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    itemPrice: {
      type: Number,
      required: true,
    },
    itemId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    numbersOnly() {
      let parsed = parseInt(this.count);
      if (isNaN(parsed)) {
        this.count = 0;
      } else {
        this.count = parsed;
      }

      if (this.count > 3) {
        this.count = 3;
      }
    },
  },
  watch: {
    count(newCount, oldCount) {
      this.$emit("getCount", {
        itemId: this.itemId,
        price: this.itemPrice,
        count: this.count,
        oldCount: oldCount,
      });
    },
  },
};
</script>

<style></style>
