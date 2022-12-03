<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="!totalPrice || !pizzaName || !IngredientsLength"
      @click="addInCart"
    >
      Готовьте!
    </button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { PIZZA_ADD_CART, CLEAR } from "@/store/mutation-types.js";

export default {
  name: "BuilderPriceCounter",
  methods: {
    ...mapMutations("Cart", [PIZZA_ADD_CART]),
    ...mapMutations("Builder", [CLEAR]),
    addInCart() {
      this.PIZZA_ADD_CART({
        name: this.pizzaName,
        ingredients: this.getIngredientsName,
        sauce: this.getSauceName,
        dough: this.getDoughName,
        size: this.getSizeName,
        price: this.totalPrice,
        count: 1,
        totalPrice: this.totalPrice,
      });
      this.$router.push("Cart");
      this.CLEAR();
    },
  },
  computed: {
    ...mapGetters("Builder", [
      "IngredientsAll",
      "getIngredientsName",
      "getSauceName",
      "getDoughName",
      "getSizeName",
      "IngredientsLength",
    ]),
    ...mapState("Builder", ["dough", "sauce", "multiplier", "pizzaName"]),
    totalPrice() {
      let ingredientsPrice = this.IngredientsAll.reduce(
        (result, currentItem) => {
          result += currentItem.count * currentItem.price;
          return result;
        },
        0
      );

      let total =
        this.multiplier *
        (ingredientsPrice + this.dough.price + this.sauce.price);

      return total;
    },
  },
};
</script>

<style></style>
