import pizza from "@/static/pizza.json";
import { UPDATE_COUNT } from "@/store/mutation-types.js";

export default {
  namespaced: true,
  mutation: {
    [UPDATE_COUNT](state, payload) {
      let id = payload.id,
        count = payload.count;
      state.IngredientsAll.forEach((item, index) => {
        if (item.id === id) {
          item.count = count;
          this.$set(this.IngredientsAll, index, item);
        }
      });
    },
  },
  state: {
    ingredientsList: pizza.ingredients,
    doughList: pizza.dough,
    saucesList: pizza.sauces,
    sizesList: pizza.sizes,
  },
  getters: {
    IngredientsAll(state) {
      return state.ingredientsList;
    },
    doughAll(state) {
      return state.doughList;
    },
    saucesAll(state) {
      return state.saucesList;
    },
    sizesAll(state) {
      return state.sizesList;
    },
  },
};
