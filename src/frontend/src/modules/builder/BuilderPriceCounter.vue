<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice() }} ₽</p>
    <button type="button" class="button" :disabled="total === 0">
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  data() {
    return {
      total: 0,
    };
  },
  props: {
    doughPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    multiplier: {
      type: Number,
      required: true,
    },
    sauce: {
      type: Number,
      required: true,
    },
  },
  methods: {
    totalPrice() {
      this.total =
        this.multiplier * (this.price + this.doughPrice + this.sauce);
      return this.total;
    },
  },
};
</script>

<style></style>
