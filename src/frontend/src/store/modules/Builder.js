import Vue from "vue";
import pizza from "@/static/pizza.json";
import {
  UPDATE_COUNT,
  ADD_COUNT,
  UPDATE_MULTIPLIER,
  UPDATE_DOUGH,
  UPDATE_SAUCE,
  INIT,
} from "@/store/mutation-types.js";

export default {
  namespaced: true,
  mutations: {
    [UPDATE_COUNT](state, payload) {
      let id = payload.id,
        count = payload.count;
      state.ingredientsList.forEach((item, index) => {
        if (item.id === id) {
          item.count = count;
          Vue.set(state.ingredientsList, index, item);
        }
      });
    },
    [ADD_COUNT](state, payload) {
      state.ingredientsList.forEach((item, index) => {
        if (item.id === payload.id) {
          Vue.set(state.ingredientsList, index, payload);
        }
      });
    },
    [UPDATE_MULTIPLIER](state, payload) {
      state.multiplier = payload;
    },
    [UPDATE_DOUGH](state, payload) {
      state.foundationDought.forEach((el) => {
        if (payload.id === el.id) {
          el.class = payload.class;
        }
      });
      state.dough = payload;
    },
    [UPDATE_SAUCE](state, payload) {
      state.sauce = payload;
    },
    [INIT](state) {
      // Тесто
      state.doughList.forEach((el) => {
        // Классы для инпутов
        state.doughClass.forEach((item) => {
          if (el.id === item.id) {
            Vue.set(el, "class", item.class);
          }
        });
        // Классы для результата
        state.foundationDought.forEach((item) => {
          if (el.id === item.id) {
            Vue.set(el, "doughtClassResult", item.class);
          }
        });
        console.log(el);
      });
      // Соус
      state.saucesList.forEach((el) => {
        state.sauceArrClass.forEach((item) => {
          if (el.id === item.id) {
            Vue.set(el, "class", item.class);
          }
        });
      });
    },
  },
  state: {
    ingredientsList: pizza.ingredients,
    doughList: pizza.dough,
    saucesList: pizza.sauces,
    sizesList: pizza.sizes,
    multiplier: 1,
    sauce: pizza.sauces[0],
    dough: pizza.dough[0],
    sizesClass: [
      {
        id: 1,
        class: "diameter__input--small",
      },
      {
        id: 2,
        class: "diameter__input--normal",
      },
      {
        id: 3,
        class: "diameter__input--big",
      },
    ],
    doughClass: [
      {
        id: 1,
        class: "dough__input--light",
      },
      {
        id: 2,
        class: "dough__input--large",
      },
    ],
    foundationDought: [
      {
        id: 1,
        class: "pizza--foundation--small",
      },
      {
        id: 2,
        class: "pizza--foundation--big",
      },
    ],
    sauceArrClass: [
      {
        id: 1,
        class: "tomato",
      },
      {
        id: 2,
        class: "creamy",
      },
    ],
    fillingClass: [
      {
        id: 1,
        class: "filling--mushrooms",
      },
      {
        id: 2,
        class: "filling--cheddar",
      },
      {
        id: 3,
        class: "filling--salami",
      },
      {
        id: 4,
        class: "filling--ham",
      },
      {
        id: 5,
        class: "filling--ananas",
      },
      {
        id: 6,
        class: "filling--bacon",
      },
      {
        id: 7,
        class: "filling--onion",
      },
      {
        id: 8,
        class: "filling--chile",
      },
      {
        id: 9,
        class: "filling--jalapeno",
      },
      {
        id: 10,
        class: "filling--olives",
      },
      {
        id: 11,
        class: "filling--tomatoes",
      },
      {
        id: 12,
        class: "filling--salmon",
      },
      {
        id: 13,
        class: "filling--mozzarella",
      },
      {
        id: 14,
        class: "filling--parmesan",
      },
      {
        id: 15,
        class: "filling--blue_cheese",
      },
    ],
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
    getMultiplier(state) {
      return state.multiplier;
    },
    getFirstMultiplier(state) {
      return state.sizesList[0].multiplier;
    },
    getFirstPriceDough(state) {
      return state.doughList[0].price;
    },
    getFirstPriceSause(state) {
      return state.saucesList[0].price;
    },
    getFillingClass(state) {
      return state.fillingClass;
    },
  },
};
