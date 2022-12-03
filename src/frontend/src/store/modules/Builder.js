import Vue from "vue";
import pizza from "@/static/pizza.json";
import {
  UPDATE_COUNT,
  ADD_COUNT,
  UPDATE_MULTIPLIER,
  UPDATE_DOUGH,
  UPDATE_SAUCE,
  INIT,
  CHANGE_PIZZA_NAME,
  CLEAR,
} from "@/store/mutation-types.js";

export default {
  namespaced: true,
  state: {
    pizzaName: "",
    ingredientsList: pizza.ingredients,
    doughList: pizza.dough,
    saucesList: pizza.sauces,
    sizesList: pizza.sizes,
    multiplier: pizza.sizes[0].multiplier,
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
    getFillingClass(state) {
      return state.fillingClass;
    },
    getIngredientsName(state) {
      let name = state.ingredientsList
        .filter((el) => el.count > 0)
        .map((el) => el.name);
      return name;
    },
    getSauceName(state) {
      let name = state.sauce.name;
      return name;
    },
    getDoughName(state) {
      let name = state.dough.name;
      return name;
    },
    getSizeName(state) {
      let name = state.sizesList
        .filter((el) => el.multiplier === state.multiplier)
        .map((el) => el.name);
      return name.join("");
    },
    IngredientsLength(state) {
      return state.ingredientsList.filter((el) => el.count > 0).length;
    },
  },
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
    [CHANGE_PIZZA_NAME](state, payload) {
      state.pizzaName = payload;
    },
    [CLEAR](state) {
      state.pizzaName = "";
    },
  },
};
