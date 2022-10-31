<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button type="button" class="button" :disabled="totalPrice === 0">
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "BuilderPriceCounter",
  computed: {
    ...mapGetters("Builder", ["getMultiplier", "IngredientsAll"]),
    ...mapState("Builder", ["dough", "sauce"]),
    totalPrice() {
      let ingredientsPrice = this.IngredientsAll.reduce(
        (result, currentItem) => {
          result += currentItem.count * currentItem.price;
          return result;
        },
        0
      );

      let total =
        this.getMultiplier *
        (ingredientsPrice + this.dough.price + this.sauce.price);

      return total;
    },
  },
};
</script>

<style></style>
