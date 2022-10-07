<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button type="button" class="button" :disabled="totalPrice === 0">
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    doughPrice: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: Array,
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
  computed: {
    totalPrice() {
      let ingredientsPrice = this.ingredients.reduce((result, currentItem) => {
        result += currentItem.count * currentItem.price;
        return result;
      }, 0);

      let total =
        this.multiplier * (ingredientsPrice + this.doughPrice + this.sauce);
      return total;
    },
  },
};
</script>

<style></style>
